import HomeSVG from '../../assets/home.svg'
import { HomeContainer, Intro, IntroTitle, IntroItems, IntroItem, CoffeeContainer, CoffeeContainerList } from './styles'

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react';
import { CardItem } from './components/CardItem';

export function Home() {
    return (
        <HomeContainer>
            <Intro>
                <div>
                    <IntroTitle>
                        <h1>Encontre o café perfeito</h1>
                        <h1>para qualquer hora do dia</h1>
                        <h5>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h5>
                    </IntroTitle>
                    <IntroItems>
                        <IntroItem backgroundColor='yellowDark'>
                            <div>
                                <ShoppingCart weight='fill' />
                            </div>
                            Compra simples e segura
                        </IntroItem>
                        <IntroItem backgroundColor='dark'>
                            <div>
                                <Package weight='fill' />
                            </div>
                            Embalagem mantém o café intacto
                        </IntroItem>
                        <IntroItem backgroundColor='yellow'>
                            <div>
                                <Timer weight='fill' />
                            </div>
                            Entrega rápida e rastreada
                        </IntroItem>
                        <IntroItem backgroundColor='purple'>
                            <div>
                                <Coffee weight='fill' />
                            </div>
                            O café chega fresquinho até você
                        </IntroItem>
                    </IntroItems>
                </div>
                <img src={HomeSVG} alt="" />
            </Intro>

            <CoffeeContainer>
                <h2>Nossos cafés</h2>
                <CoffeeContainerList>
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                </CoffeeContainerList>
            </CoffeeContainer>
        </HomeContainer>)
}