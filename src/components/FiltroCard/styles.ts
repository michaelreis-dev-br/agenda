import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  padding: 8px;
  cursor: pointer;
`
export const Contador = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
`
export const Label = styled.div`
  font-size: 14px;
`
