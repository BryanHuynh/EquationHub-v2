import { useRouter } from "next/router";
import { EquationLayout, useEquation, usePyodide } from "@/layout/equation";
import {
    PencilSquareIcon,
    ArrowUturnLeftIcon,
    ShareIcon,
    DocumentDuplicateIcon,
    TrashIcon,
} from "@heroicons/react/20/solid";
import { inputEquationsForm } from "@/components/InputEquationsForm";
import { useEffect, useState } from "react";
import { parseVariables } from "@/graphql/models/Equation";
import Link from "next/link";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
const nerdamer = require("nerdamer/all.min")

export default function Index() {
    const { pyodide, pyodideReady } = usePyodide();
    const equation = useEquation();
    
    const calculate = (variables: {[key: string]: string}, solveFor: string) => {
      var e = nerdamer.convertFromLaTeX(equation.equation);
      var evalf = nerdamer(e);
      var sol = nerdamer(evalf).solveFor(solveFor)
      // delete the variable we are solving for from the variables object
      delete variables[solveFor]
      console.log(nerdamer(sol.toString()).evaluate(variables).toString());
    }

    



    return (
        <div className="h-full w-full flex flex-col">
            <div className="pl-5 pr-10 py-5 w-full grid grid-cols-2 gap-4 bg-blue-100 rounded-t-lg">
                <span className="flex flex-row gap-2">
                    <Link href="/home/dashboard">
                        <ArrowUturnLeftIcon className="h-5 w-5" />
                    </Link>
                </span>
                <div className="flex flex-row gap-10 justify-end">
                    <span className="flex flex-row gap-2">
                        <PencilSquareIcon className="h-5 w-5" />
                        Edit
                    </span>
                    <span className="flex flex-row gap-2">
                        <ShareIcon className="h-5 w-5" />
                        Share
                    </span>
                    <span className="flex flex-row gap-2">
                        <DocumentDuplicateIcon className="h-5 w-5" />
                        Duplicate
                    </span>
                    <span className="flex flex-row gap-2">
                        <TrashIcon className="h-5 w-5" />
                        Delete
                    </span>
                </div>
            </div>
            <div className="w-full h-max pl-5 pt-2">
                <span className="text-6xl">{equation?.name}</span>
            </div>
            <div className="w-full h-full p-5">
                <div className="w-full max-w-xs">
                    <form
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        // on submit print out all the fields
                        onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(
                                e.target as HTMLFormElement
                            );
                            let fields: { [key: string]: any } = {};
                            for (const [key, value] of formData.entries()) {
                                fields[key] = value;
                            }
                            console.log(fields);
                            // calculate(fields, 'c');
                        }}
                    >
                        {/* Equation Title */}
                        <div className="mb-4 grid place-items-center">
                            <label
                                className="block text-gray-700 text-lg font-bold width-max"
                                htmlFor="equationTitle"
                            >
                                <BlockMath math={equation.equation} />
                            </label>
                        </div>


                        {parseVariables(equation?.variables).map((variable, i) => {
                            return (
                                <div key={variable}>
                                    {inputEquationsForm(variable)}
                                </div>
                            )
                        })}
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Calculate
                            </button>
                            <button
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="reset"
                            >
                                Clear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    );
}

Index.PageLayout = EquationLayout;
