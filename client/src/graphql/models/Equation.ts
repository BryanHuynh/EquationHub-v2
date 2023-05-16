export type Equation = {
    id: string,
    name: string,
    description: string,
    equation: string,
    variables: string
}

export const parseVariables = (variables: string): string[] => {
    // remove first and last characters (brackets)
    variables = variables.substring(1, variables.length - 1);
    return variables.split(',');
}