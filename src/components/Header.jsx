import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Header() {
    const mediaQuery = window.matchMedia('(max-width: 1023px)');

    const [isSmallScreen, setIsSmallScreen] = useState(mediaQuery.matches);
    const [isVerticalMenuVisible, setIsVerticalMenuVisible] = useState(false);
    const [isShadowVisible, setIsShadowVisible] = useState(false);

    useEffect(() => {
        function onWindowScroll() {
            setIsShadowVisible(window.scrollY >= 64);
        }

        window.addEventListener('scroll', onWindowScroll)

        return () => {
            window.removeEventListener('scroll', onWindowScroll);
        };
    }, []);

    useEffect(() => {
        const onMediaChange = (e) => {
            setIsSmallScreen(e.matches);
        };

        mediaQuery.addEventListener('change', onMediaChange);

        return () => {
            mediaQuery.removeEventListener('change', onMediaChange);
        };
    }, []);

    const Links = () => (
        <>
            <Link href="#home">Főoldal</Link>
            <Link href="#tag-questions">Ugye</Link>
            <Link href="#passive">Szenvedő</Link>
            <Link href="#causative">A műveltetés</Link>
        </>
    );

    return (
        <Container data-component="header" isShadowVisible={isShadowVisible}>
            <Logo href="#home">
                <span>Angol</span>jegyzet
            </Logo>

            {isSmallScreen && <VerticalMenu isVerticalMenuVisible={isVerticalMenuVisible} onClick={() => setIsVerticalMenuVisible(false)}>
                <Links />
            </VerticalMenu>}

            {isSmallScreen && <ion-icon name="menu" onClick={() => setIsVerticalMenuVisible(!isVerticalMenuVisible)}></ion-icon>}

            {!isSmallScreen && <HorizontalMenu>
                <Links />
            </HorizontalMenu>}
        </Container>
    );
}

const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 4rem;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--day);
    box-shadow: ${({isShadowVisible}) => isShadowVisible ? '0 0 1rem var(--light-night)' : ''};
    padding: 0 2rem;

    @media(min-width: 1024px) {
        padding: 0 4rem;
    }

    ion-icon {
        color: var(--night);
        font-size: 2.5rem;
        cursor: pointer;
    }
`;

const Logo = styled.a`
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--night);
    text-decoration: none;
    letter-spacing: 0.1rem;

    span {
        color: var(--decor);
    }
`;

const VerticalMenu = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: var(--day);
    box-shadow: 0 0 0.125rem var(--light-night);
    padding: 2rem 0 0 2rem;
    display: flex;
    flex-direction: column;
    transition: 250ms;
    transform: translate3d(${({ isVerticalMenuVisible }) => isVerticalMenuVisible ? '0' : '-100%'}, 0, 0);
`;

const HorizontalMenu = styled.nav`

`;

const Link = styled.a`
    color: var(--night);
    margin-bottom: 1rem;
    margin-right: 1rem;
    font-size: 1.5rem;
    text-decoration: none;

    :hover {
        color: var(--decor);
    }
`;
