import { gql } from '@apollo/client';

export const EQUATIONS_BY_USER_ID = gql`
    query equationsByUserId($id: ID!) {
        equationsByUserId(id: $id) {
            id,
            name,
            equation
        }
    }
`;

export const EQUATION_BY_ID = gql`
    query equationById($id: ID!) {
        equationById(id: $id) {
            id,
            name,
            description,
            equation,
            variables
        }
    }
`;