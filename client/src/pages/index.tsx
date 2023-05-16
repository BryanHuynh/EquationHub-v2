import Image from "next/image";
import { Inter } from "next/font/google";
import Script from "next/script";
import { useEffect, useState } from "react";
import { ILoadPyodide, initalizePyodide } from "@/utils/pyodideLoader";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [pyodide, setPyodide] = useState<any>();
  const [pyodideLoading, setPyodideLoading] = useState(true);
  const [pyodideReady, setPyodideReady] = useState(false);

  useEffect(() => {
    if (!pyodideReady) {
      initalizePyodide({ setPyodide, setPyodideReady });
    }
    if (pyodideReady) {
      solve();
    }
  }, [pyodideReady, pyodide]);

  const solve = async () => {
    if(!pyodideReady) return;
    await pyodide.runPythonAsync(
      `
from sympy import *
x, y = symbols('x y')
gfg_exp = x - 6
intr = solve(gfg_exp, x)
result = intr[0]
result

      `
    ).then((output: any) => {
      console.log(output);

    })
    
  }


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    ></main>
  );
}
