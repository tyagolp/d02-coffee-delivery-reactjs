import styled from "styled-components";

export const HomeContainer = styled.div`

padding: 2rem 10rem;
`

export const Intro = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

`

export const IntroTitle = styled.div`
    h1 {
        font-family: 'Baloo 2';
        color : ${(props) => props.theme["base-title"]};
        font-size: 3rem;
        margin:0;   
        padding:0;
        line-height: 1.3;
        font-weight:800;
    }
    h5 {
        font-family: 'Roboto';
        color : ${(props) => props.theme["base-subtitle"]};
        font-size: 1.25rem;
        margin:0;   
        padding:0;
        font-weight:400;
        padding-top: 1rem;
        
    }    
`

export const IntroItems = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;    
    margin-top: 4rem;
`
const ITEM_BACKGROUND_COLORS = {
    yellowDark: 'yellow-dark',
    yellow: 'yellow',
    dark: 'base-text',
    purple: 'purple',
} as const

interface IntroItemProps {
    backgroundColor: keyof typeof ITEM_BACKGROUND_COLORS
}
export const IntroItem = styled.div<IntroItemProps>`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 12px;   
        
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 1;
            background: ${(props) => props.theme[ITEM_BACKGROUND_COLORS[props.backgroundColor]]};
            border-radius: 50%;
            color: ${(props) => props.theme["white"]};
            padding: 0.5rem;

            font-size:1rem;
        }
`


export const CoffeeContainer = styled.div`
    padding: 5rem 0;

    > h2 {
        font-family: 'Baloo 2', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;

        color: ${(props) => props.theme['base-subtitle']};
    }
`

export const CoffeeContainerList = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap:2rem;
`