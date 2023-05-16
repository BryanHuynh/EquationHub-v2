import { ReactElement, JSXElementConstructor, ReactFragment } from "react";

export const inputEquationsForm = (variableName: string) => {
  return (
    <div key={variableName} className="mb-4 flex flex-row align-middle justify-center items-center">
      <label
        className="block text-gray-700 pr-5 text-sm font-bold"
        htmlFor={variableName}
      >
        {variableName}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        key={variableName}
        autoComplete="off"
        id={variableName}
        name={variableName}
        type="text"
      ></input>
    </div>
  );
};
