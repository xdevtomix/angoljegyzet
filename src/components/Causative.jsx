import { Container } from "../styled-components/Container";
import { Paragraph } from "../styled-components/Paragraph";
import { Row } from "../styled-components/Row";
import { SubTitle } from "../styled-components/SubTitle";
import { Title } from "../styled-components/Title";
import TheEnd from "../misc-components/TheEnd";

export default function Causative() {
    return (
        <Container data-component="causative">
            <Title>6. A műveltetés</Title>

            <Paragraph>
                A műveltetés lényege az, hogy a piszkos munkát mással végeztetjük el.
                Nem mi cselekszünk tehát, hanem valamilyen úton-módon ráveszünk, rábírunk vagy kényszerítünk valakit arra,
                hogy megcsináljon valamit.
            </Paragraph>

            <Row>
                <span>
                    Az angolban elég sok műveltető szerkezet van, ám ezeket feloszthatjuk két nagy csoportra:
                </span>
            </Row>
            <Row>
                <span>
                    1. A "cselekvő" műveltetők: ezekben a mondatokban valakit / valamit cselekvésre bírunk.
                </span>
            </Row>
            <Row last>
                <span>
                    2. A "szenvedő" műveltetők: ezekben a mondatokban valakit / valamit szenvedésre bírunk.
                </span>
            </Row>
            <Row last>
                <span>
                    Hogyan? Így:
                </span>
            </Row>

            <SubTitle>
                1. A "cselekvő" műveltetés:
            </SubTitle>
            <Row>
                <span>
                    1.1. have + tárgyeset + az ige első alakja
                </span>
            </Row>
            <Row>
                <span>
                    1.2. get + tárgyeset + to + az ige első alakja
                </span>
            </Row>
            <Row last>
                <span>
                    1.3. make + tárgyeset + az ige első alakja
                </span>
            </Row>
            <Row bg>
                <span>He had the rookie carry the bags.</span>
                <span>Az újonccal cipeltette a táskákat.</span>
            </Row>
            <Row bg>
                <span>I got her to clean her room.</span>
                <span>Rávettem, hogy takarítsa ki a szobáját.</span>
            </Row>
            <Row bg>
                <span>I'll make him pay for what he has done.</span>
                <span>Megfizet azért, amit tett.</span>
            </Row>
            <Row bg>
                <span>You can't make me do that kind of thing.</span>
                <span>Nem tudsz rávenni, hogy olyasmit csináljak.</span>
            </Row>
            <Row bg>
                <span>She should get her boyfriend to train more.</span>
                <span>Rá kéne vennie a barátját, hogy többet edzen.</span>
            </Row>
            <Row bg last>
                <span>I'm having her type a letter.</span>
                <span>Egy levelet gépeltetek vele épp.</span>
            </Row>

            <Paragraph>
                Azt a valakit (ritkábban valamit), akit (amit) cselekvésre bírunk, tárgyesetbe tesszük.
                Ez a főneveknél nem probléma, hiszen egy főnév esetében az alany- és a tárgyeset ugyanaz (pl. the child - the child).
                A személyes névmásoknál azonban figyelni kell erre a műveltetőben (pl. I - me).
            </Paragraph>

            <Paragraph>
                Az 1.1.- nél "erősebb" az 1.2. és annál meg az 1.3. Ez azt jelenti, hogy a "have"-el csak úgy simán megcsináltatunk valamit,
                a "get"-el ráveszünk, rábeszélünk, a "make"-el pedig jó erősen késztetünk, akár kényszerítünk is... így vagy úgy.
            </Paragraph>

            <SubTitle>
                2. A "szenvedő" műveltetés:
            </SubTitle>
            <Row>
                <span>
                    2.1. have + tárgyeset + az ige harmadik alakja
                </span>
            </Row>
            <Row last>
                <span>
                    2.2. get + tárgyeset + az ige harmadik alakja
                </span>
            </Row>
            <Row bg>
                <span>You should have your car repaired.</span>
                <span>Meg kéne szereltetned az autód.</span>
            </Row>
            <Row bg>
                <span>Does the teacher really want to have the classroom painted?</span>
                <span>A tanár tényleg ki akarja festetni a termet?</span>
            </Row>
            <Row bg>
                <span>Why don't you get your teeth fixed?</span>
                <span>Miért nem csináltatod meg a fogaid?</span>
            </Row>
            <Row bg last>
                <span>I wish you had got that punk beaten.</span>
                <span>Bárcsak megveretted volna azt a köcsögöt!</span>
            </Row>

            <Paragraph>
                Természetesen nem a szentlélek fog intézkedni helyettünk, csak ezekben a mondatokban ritkán adjuk meg az "elkövető"-t,
                mivel vagy nem tudjuk, vagy nem fontos az, hogy ki ő.
                Ha meg valamiért mégis megadnánk, azt így tesszük:
            </Paragraph>
            <Row bg last>
                <span>I used to have the flowers watered by him.</span>
                <span>Régen vele locsoltattam meg a virágokat.</span>
            </Row>
            <Paragraph>
                A "szenvedő" műveltetésben tehát - ahol amúgy a "have" és a "get" egyenrangú - nem a cselekvő személye a lényeg,
                hanem az elvégzett cselekvés maga.
            </Paragraph>

            <TheEnd />
        </Container>
    );
}