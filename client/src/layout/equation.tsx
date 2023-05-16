import type { AppProps } from "next/app";
import Link from "next/link";
import Home from "./home";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { ILoadPyodide, initalizePyodide } from "@/utils/pyodideLoader";
import { Equation } from "@/graphql/models/Equation";
import { EQUATION_BY_ID } from "@/graphql/Queries";
import { useQuery } from "@apollo/client";

const inter = Inter({ subsets: ["latin"] });

const EquationContext = createContext<Equation | null>(null);

export function useEquation() {
    const equation = useContext(EquationContext);
    if (equation === null) {
        throw new Error("useEquation must be used within EquationLayout");
    }
    return equation;
}

const PyodideContext = createContext<ReturnType<any> | null>(null);

export function usePyodide() {
    const pyodide = useContext(PyodideContext);
    if (pyodide === null) {
        throw new Error("usePyodide must be used within EquationLayout");
    }
    return pyodide;
}

export function EquationLayout({ children }: { children: React.ReactNode }) {
    const { query } = useRouter();
    const equationID = query.id as string;
    const [equation, setEquation] = useState<Equation>();
    const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

    const { data, loading } = useQuery(EQUATION_BY_ID, {
        variables: {
            id: equationID,
        },
    });

    useEffect(() => {
        if (data) {
            setEquation(data.equationById);
            setStatus("success");
        }
    }, [data]);




    const [pyodide, setPyodide] = useState<any>();
    const [pyodideReady, setPyodideReady] = useState(false);

    useEffect(() => {
        if (!pyodideReady) {
            initalizePyodide({ setPyodide, setPyodideReady });
        }
    }, [pyodideReady, pyodide]);

    return (
        <Home>
            <PyodideContext.Provider value={{ pyodide, pyodideReady }}>
                    {/* check if loading */}
                    {status === "loading" && <p>Loading...</p>}
                    {status === "error" && <p>Error</p>}

                {status === "success" && equation && (
                    <EquationContext.Provider value={equation}>
                        {children}
                    </EquationContext.Provider>
                )}

            </PyodideContext.Provider>
        </Home>
    );
}
