import styled from "styled-components";

export default function TheEnd() {
    return (
        <Container>
            <div></div>
            <h2>Vége</h2>
            <div></div>
        </Container>
    );
}

const Container = styled.div`   
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        width: 25%;
        border: 0.5px solid var(--light-night);
    }

    h2 {
        color: var(--light-night);
        width: max-content;
        padding: 0.5rem 1rem;
    }
`;