import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({last}) => last ? '1rem' : '0.5rem'};
    background-color: ${({bg}) => bg ? 'var(--light-day)' : 'var(--day)'};
    padding: ${({decor}) => decor ? '0.5rem' : '0'};
    border-radius: 0.25rem;

    span {

        :nth-child(1) {
            text-align: start;
        }

        :nth-child(2) {
            text-align: end;
        }
    }
`;