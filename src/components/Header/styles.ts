import styled from "styled-components";

export const HeaderContainer = styled.nav`

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 2rem 10rem;

position: fixed;
top:0;

width: 100%;
max-width: 90rem;
height: 104px;

background: ${(props)=> props.theme["background"]};

img {
    width: 84.95px;
    height: 40px; 
}

nav {
    display: flex;
    gap: 0.25rem;

    span {
        display:flex;
        justify-content: center;
        align-items: center;
        gap: 2px;
        background: ${(props)=> props.theme["purple-light"]};
        color: ${(props)=> props.theme["purple"]};

        border-radius: 6px;

        padding: 0.5rem;

        font-family: 'Roboto';
        font-style: normal;
        line-height: 130%;
        font-size: 0.875rem;

    }

    a {
        padding: 0.5rem;
        width:38px;
        height: 38px;
        background: ${(props)=> props.theme["yellow-light"]};
        color: ${(props)=> props.theme["yellow-dark"]};
        border-radius: 6px;
    }
}

`

