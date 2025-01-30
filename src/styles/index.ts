import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100dvh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin: 40px 0;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  background-color: #fff;
  border-color: #666;
  border-radius: 8px;
  color: #666;
  font-weight: bold;
  padding: 8px;
  width: 100%;
`
export const Botao = styled.button`
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  margin-right: 8px;
  padding: 8px 12px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default GlobalStyle
