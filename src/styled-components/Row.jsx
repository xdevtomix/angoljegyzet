import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({last}) => last ? '1rem' : '0.5rem'};

    span {
        width: ${({solo}) => solo ? '100%' : '50%'}
    }
`;