import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/default'

type CoffeTag = 'Tradicional' | 'Com Leite' | 'Gelado' | 'Especial' | 'Alcoólico'

interface Coffe {
  id: string
  imagePath: string
  tags: CoffeTag[]
  title: string
  description: string
  price: number
}

const listCoffees: Coffe[] = [{
  id: new Date().toISOString(),
  description: 'O tradicional café feito com água quente e grãos moídos',
  imagePath: '',
  price: 9.9,
  tags: ['Tradicional'],
  title: 'Expresso Tradicional'
}]

localStorage.setItem('@coffee-delivery-coffees', JSON.stringify(listCoffees))
console.log('load aplication', new Date().toISOString())

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

