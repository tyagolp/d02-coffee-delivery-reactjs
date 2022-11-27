import styled from "styled-components";

export const CardContainer = styled.div`
    margin-top: 1rem;
    border-radius: 6px 36px;
    background: ${(props) => props.theme['base-card']};
    width: 256px;
    height: 310px;

    padding: 0 1rem;

    text-align:center;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
        width: 120px;
        height: 120px;
        margin-top: -1.25rem;
    }
`

export const TagContent = styled.div`
    margin: 1rem 0;
    font-family: 'Roboto';
    font-weight: bold;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    
    span{
        background: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};
        border-radius: 0.5rem;
        padding: 0.25rem 0.5rem;
        font-size: 0.6rem;
        line-height: 130%;
        text-transform: uppercase;
    }
`

export const Title = styled.div`
    display:flex;
    flex-direction: column;
    font-style: normal;

    span {
        font-family: 'Baloo 2';
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-subtitle']};
        margin-bottom: 0.5rem;
    }

    label {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-label']};
    }
`
export const SubTitle = styled.span`

`