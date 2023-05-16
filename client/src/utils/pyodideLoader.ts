import { SetStateAction } from "react";



interface ILoadPyodide {
    setPyodide: (pyodide: any) => void;
    setPyodideReady: (value: SetStateAction<boolean>) => void;
}

function loadScript(src: string) {
    return new Promise<void>((resolve) => {
      var script = document.createElement("script");
      script.onload = function () {
        resolve();
      };
      script.src = src;
  
      document.head.appendChild(script);
    });
  }

async function initalizePyodide({setPyodide, setPyodideReady }:ILoadPyodide) {
    await loadScript("https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js");
    // @ts-ignore
    const pyodide = await loadPyodide();
    await pyodide.loadPackage(["sympy", "matplotlib"]);
    setPyodide(pyodide);
    setPyodideReady(true);


}

export { initalizePyodide };

export type { ILoadPyodide };
 