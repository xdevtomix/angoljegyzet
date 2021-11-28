import { Container } from "../styled-components/Container";
import { Paragraph } from "../styled-components/Paragraph";
import { Row } from "../styled-components/Row";
import { SubTitle } from "../styled-components/SubTitle";
import { Title } from "../styled-components/Title";
import TheEnd from "../misc-components/TheEnd";

export default function Passive() {
    return (
        <Container data-component="passive">
            <Title>4. A szenvedő szerkezet</Title>

            <Row last>
                <span>Szenvedjünk...!</span>
            </Row>

            <Paragraph>
                A szenvedő szerkezetet (passzív - így is hívjuk) akkor használja az angol nyelv, amikor nem akarjuk,
                vagy nem tudjuk megmondani, hogy ki végzi a cselekvést.
            </Paragraph>
            <Paragraph>
                <b>Mottója: létige + az ige harmadik alakja.</b>
                <br />
                Ez legyen mindig a fejedben. Már, ha a szenvedőről van szó épp.:)
            </Paragraph>

            <Row bg last>
                <span>Last night a DJ saved my life.</span>
                <span>Tegnap éjjel egy DJ megmentette az életem.</span>
            </Row>

            <Paragraph>
                Ez egy cselekvő (aktívnak is hívjuk) mondat. Van benne alany (DJ), állítmány (saved) és tárgy (my life).
                Ha ebből a mondatból szenvedő mondatot akarunk csinálni, akkor a mondat tárgyát előrevisszük alanynak, és felépítjük rá a szenvedő szerkezetet:
            </Paragraph>
            <Row bg last>
                <span>My life was saved last night.</span>
                <span>Az életemet megmentették tegnap éjjel.</span>
            </Row>

            <Paragraph>
                Láthatod, hogy a magyar úgy ragozza a mondatot, mintha az alany az "ők" lenne - "(ők) megmentették".
                Mi nem mondunk olyat, hogy "az életem megmentődött", mivel ez magyartalan.
                Na, az angol meg pont így mondja: "Az életem megmentődött tegnap éjjel".
            </Paragraph>

            <Paragraph>
                Hová tűnt a mondatból a DJ? Nem raktam bele, hisz a szenvedőnek pont az a lényege, hogy vagy nem tudom megmondani, ki volt a cselekvő,
                vagy pedig nem akarom megmondani, mert mondjuk nem érdekes, vagy épp el akarom hallgatni.
                Persze van ám lehetőség arra, hogy a szegény DJ a szenvedő mondatban is benne legyen. Méghozzá így:
            </Paragraph>
            <Row bg last>
                <span>My life was saved by a DJ last night.</span>
                <span>Az életem megmentődött egy DJ által tegnap éjjel.</span>
            </Row>

            <Paragraph>
                Egyébiránt ilyen - cselekvőből szenvedőbe történő - átalakítás nincs nagyon a való életben, sőt még vizsgákon sem,
                ellenben minden angoltanár előszeretettel gyakoroltatja így a szenvedő szerkezetet.
                Miért? A kérdés jó...:) Általában az van inkább, hogy egyből vagy cselekvőben vagy egyből szenvedőben gondolkozunk és nem nagyon pakolgatunk ide-oda.
            </Paragraph>

            <Row>
                <span>
                    <b>
                        A cselekvő és a szenvedő szerkezet összehasonlítása a 12 igeidőben:
                    </b>
                </span>
            </Row>
            <Row>
                <span>Cselekvő</span>
                <span>Szenvedő</span>
            </Row>

            <Row>
                <span>Egyszerű:</span>
            </Row>
            <Row bg>
                <span>I drink milk</span>
                <span>Milk is drunk<br />(by me)</span>
            </Row>
            <Row bg>
                <span>I drank milk</span>
                <span>Milk was drunk<br />(by me)</span>
            </Row>
            <Row bg last>
                <span>I will drink milk</span>
                <span>Milk will be drunk<br />(by me)</span>
            </Row>

            <Row>
                <span>Folyamatos:</span>
            </Row>
            <Row bg>
                <span>I'm drinking milk</span>
                <span>Milk is being drunk<br />(by me)</span>
            </Row>
            <Row bg>
                <span>I was drinking milk</span>
                <span>Milk was being drunk<br />(by me)</span>
            </Row>
            <Row bg last>
                <span>I will be drinking milk</span>
                <span>Milk will be being drunk<br />(by me)</span>
            </Row>

            <Row>
                <span>Befejezett:</span>
            </Row>
            <Row bg>
                <span>I have drunk milk</span>
                <span>Milk has been drunk<br />(by me)</span>
            </Row>
            <Row bg>
                <span>I had drunk milk</span>
                <span>Milk had been drunk<br />(by me)</span>
            </Row>
            <Row bg last>
                <span>I will have drunk milk</span>
                <span>Milk will have been drunk<br />(by me)</span>
            </Row>

            <Row>
                <span>Folyamatos befejezett:</span>
            </Row>
            <Row bg>
                <span>I have been drinking milk</span>
                <span>Milk has been being drunk<br />(by me)</span>
            </Row>
            <Row bg>
                <span>I had been drinking milk</span>
                <span>Milk had been being drunk<br />(by me)</span>
            </Row>
            <Row bg last>
                <span>I will have been drinking milk</span>
                <span>Milk will have been being drunk<br />(by me)</span>
            </Row>

            <TheEnd />
        </Container>
    )
}