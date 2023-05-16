declare global {
    interface Window {
        pyodide: any;
        loadPyodide: any;
    }
}

export {};