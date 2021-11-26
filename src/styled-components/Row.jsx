import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({last}) => last ? '1rem' : '0.5rem'};
    font-weight: ${({bold}) => bold ? '700' : '400'};

    span {

        :nth-child(1) {
            text-align: start;
        }

        :nth-child(2) {
            text-align: end;
        }
    }
`;