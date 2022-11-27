import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

import { ShoppingCart, MapPin } from 'phosphor-react'
import { HeaderContainer } from './styles'


export function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} alt=""></img>
            <nav>
                <span>
                    <MapPin weight='fill' size={22} />
                    Mogi das Cruzes, SP
                </span>
                <NavLink to="" title='Carrinho'>
                    <ShoppingCart weight='fill' size={22}/>
                </NavLink>
            </nav>

        </HeaderContainer>
    )
}