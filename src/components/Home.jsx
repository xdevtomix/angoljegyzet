import { Container } from "../styled-components/Container";
import { Title } from "../styled-components/Title";
import TheEnd from "../misc-components/TheEnd";

export default function Home() {
    return (
        <Container data-component="home">
            <Title>Főoldal</Title>
            <TheEnd />
        </Container>
    );
}