import { CardContainer, TagContent, Title } from "./styles";

import { ShoppingCart } from 'phosphor-react';

export function CardItem() {
    return (
        <CardContainer>
            <div>
                <img src={'src/assets/coffee/americano.svg'} alt="" />
                <TagContent>
                    <span>Tradicional</span>
                    <span>GELADO</span>
                </TagContent>
                <Title>
                    <span>Expresso Tradicional</span>
                    <label>O tradicional café feito com água quente e grãos moídos</label>
                </Title>
            </div>
            <div>
                <span>R$ <strong>9,90</strong></span>
                <input type="number" name="" id="" />
                <div>
                    <ShoppingCart size={22} weight='fill' />
                </div>
            </div>
        </CardContainer>)
}