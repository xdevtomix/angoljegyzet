import { Container } from "../styled-components/Container";
import { Paragraph } from "../styled-components/Paragraph";
import { Row } from "../styled-components/Row";
import { SubTitle } from "../styled-components/SubTitle";
import { Title } from "../styled-components/Title";

export default function TagQuestions() {
    return (
        <Container data-component="tag-questions">
            <Title>3. Az "ugye" szerkezet</Title>

            <Paragraph>
                Az "ugye" az angolban nem egy szó csak úgy egyszerűen, mint a magyarban, hanem egy egész szerkezet.
                Fontos, hogy jól tudd képezni? Az életben annyira nem, meglennél nélküle simán, viszont a vizsgákon szívesen beteszik a tesztekbe, fordításokba,
                mert nem annyira könnyű, mint amennyire elsőre látszik.
                Nem is nehéz persze, csak sok apró részlete van.
            </Paragraph>

            <SubTitle>A lényeg:</SubTitle>

            <Row>
                <span>You are Hungarian, aren’t you?</span>
                <span>Te magyar vagy, ugye?</span>
            </Row>
            <Row last>
                <span>The boys can't beat us, can they?</span>
                <span>A fiúk nem tudnak megverni minket, ugye?</span>
            </Row>

            <Paragraph>
                Az "ugye"-s mondat alapjának a szórendje mindig egyenes, nem pedig kérdő.
                Maga az "ugye" egy kis kérdőficak a mondat végén, mely két részből áll:
                egy segédigéből és egy személyes névmásból. Ahhoz az alanyhoz és állítmányhoz igazodnak, amelyre vonatkoznak.
                Állító mondat esetében az "ugye" segédigéje tagadó, tagadó mondatnál pedig állító lesz. Általában és kultúrálisan.
            </Paragraph>

            <SubTitle>Megjegyzések:</SubTitle>
            <Row solo>
                <span>1. "I’m" -es kezdés esetén állító mondatban:</span>
            </Row>
            <Row>
                <span>I’m good, aren’t I? (NEM "amn’t I"!)</span>
                <span>Jó vagyok, ugye?</span>
            </Row>
            <Row solo>
                <span>De:</span>
            </Row>
            <Row last>
                <span>I'm not good, am I?	</span>
                <span>Nem vagyok jó, ugye?</span>
            </Row>
        </Container>
    );
}