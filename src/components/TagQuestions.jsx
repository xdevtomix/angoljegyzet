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

            <Row bg>
                <span>You are Hungarian, aren’t you?</span>
                <span>Te magyar vagy, ugye?</span>
            </Row>
            <Row bg last>
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
            <Row>
                <span>1. "I’m" -es kezdés esetén állító mondatban:</span>
            </Row>
            <Row bg>
                <span>I’m good, aren’t I? <br /> (NEM "amn’t I"!)</span>
                <span>Jó vagyok, ugye?</span>
            </Row>
            <Row>
                <span>De:</span>
            </Row>
            <Row bg last>
                <span>I'm not good, am I?</span>
                <span>Nem vagyok jó, ugye?</span>
            </Row>

            <Row>
                <span>2. Saját magunk felszólítása esetén:</span>
            </Row>
            <Row bg last>
                <span>Let’s (not) go there, shall we?</span>
                <span>(Ne) menjünk oda, oké?</span>
            </Row>

            <Row>
                <span>3. Mások felszólítása esetén:</span>
            </Row>
            <Row bg>
                <span>Stop it, will you / (won’t you)?</span>
                <span>Hagyd abba, oké?</span>
            </Row>
            <Row bg last>
                <span>Don't stop it, will you?</span>
                <span>Ne hagyd abba, oké?</span>
            </Row>

            <Row>
                <span>4. Nobody/ Everybody/ Somebody/ Anybody/ No one/ Everyone/ Someone/ Anyone (*):</span>
            </Row>
            <Row bg last>
                <span>Everybody likes him, don’t they?</span>
                <span>Mindenki szereti őt, ugye?</span>
            </Row>
            <Paragraph>
                (*) E 8 szó után az ige egyes szám harmadik személyben van, de ha visszautalunk rájuk (pl. az "ugye" szerkezetben),
                akkor azt "they"-el tesszük. Az "ugye" segédigéje ilyenkor már a "they"-hez igazodik.
            </Paragraph>

            <Row>
                <span>5. Nothing/ Everything/ Something/ Anything (*):</span>
            </Row>
            <Row bg last>
                <span>Everything is black, isn’t it?</span>
                <span>Minden fekete, ugye?</span>
            </Row>
            <Paragraph>
                (*) E 4 szó után az ige egyes szám harmadik személyben van,
                de ha visszautalunk rájuk (pl. az "ugye" szerkezetben), akkor azt "it"-el tesszük.
            </Paragraph>

            <Row>
                <span>6. Tagadónak minősül a mondat, ha van benne:</span>
            </Row>
            <Row>
                <span>- pl. "nobody" vagy "never":</span>
            </Row>
            <Row bg>
                <span>Nobody can help me, can they?</span>
                <span>Senki nem tud nekem segíteni, ugye?</span>
            </Row>
            <Row bg>
                <span>Joe never sleeps, does he?</span>
                <span>Joe sose alszik, ugye?</span>
            </Row>
            <Row>
                <span>- esetleg "hardly”, "barely” vagy "scarcely” (jelentésük: "alig"):</span>
            </Row>
            <Row bg>
                <span>He can hardly speak, can he?</span>
                <span>Alig tud beszélni, ugye?</span>
            </Row>
            <Row last>
                <span>Ilyenkor a mondatunk látszólag állító, de igazából tagadó, ezért az "ugye" rész állító lesz.</span>
            </Row>

            <Row>
                <span>
                    7. Összetett mondat esetén az a problémánk,
                    hogy egynél több alany és állítmány van, tehát el kell döntenünk, hogy az "ugye" melyikre vonatkozik:
                </span>
            </Row>
            <Row bg>
                <span>I don’t think Peter is rich, do I?</span>
                <span>Nem hiszem, hogy Péter gazdag, ugye?<br />(... vagy hiszem?)</span>
            </Row>
            <Row bg last>
                <span>I don't think Peter is rich, is he?</span>
                <span>Nem hiszem, hogy Péter gazdag, ugye?<br />(... vagy gazdag?)</span>
            </Row>

            <Row>
                <span>
                    8. Ha a segédigét és a "not”-ot összevonjuk az "ugye" részben,
                    akkor azok az alany elé kerülnek, ha nem vonjuk össze, akkor a "not" az alany mögé kerül:
                </span>
            </Row>
            <Row bg>
                <span>I should go, shouldn’t I?</span>
                <span>Mennem kéne, nem?</span>
            </Row>
            <Row bg>
                <span>=</span>
            </Row>
            <Row bg last>
                <span>I should go, should I not?</span>
                <span>Mennem kéne, nem?</span>
            </Row>

            <Row>
                <span>
                    9. Egyszerű jelenben és múltban állító mondatokban alapból nincs segédige. Ilyenkor az "ugye" így működik:
                </span>
            </Row>
            <Row bg>
                <span>She hates me, doesn't she?</span>
                <span>Utál engem, ugye?</span>
            </Row>
            <Row bg last>
                <span>My brother broke that dude's leg, didn't he?</span>
                <span>A bátyám eltörte annak a fickónak a lábát, ugye?</span>
            </Row>

            <Row>
                <span>
                    10. "there be"-s mondatok:
                </span>
            </Row>
            <Row bg last>
                <span>There is a cat under the table, isn’t there?</span>
                <span>Van egy macska az asztal alatt, ugye?</span>
            </Row>
            <Paragraph>
                Ez az egy mondattípus az, amikor az "ugye" alanya nem személyes névmás, hanem a "there" szó.
            </Paragraph>
        </Container>
    );
}