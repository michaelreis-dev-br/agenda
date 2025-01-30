import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Tarefa'
import { Botao } from '../../styles'

type TagProps = {
  parametro: 'status' | 'prioridade'
  prioridade?: enums.Prioridade
  status?: enums.Status
}

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const Card = styled.div`
  background-color: #fcfcfc;
  border-radius: 16px;
  box-shadow: 0px, 4px, 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 32px;
  padding: 16px;

  label {
    display: flex;
    margin-bottom: 16px;
  }
`

export const Descricao = styled.textarea`
  background-color: transparent;
  border: none;
  color: #8b8b8b;
  display: block;
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  line-height: 24px;
  margin: 16px 0;
  resize: none;
  width: 100%;
`

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.amarelo2
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  }
  return '#ccc'
}

export const Tag = styled.span<TagProps>`
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  color: #fff;
  display: inline-block;
  font-size: 10px;
  font-weight: bold;
  margin-right: 16px;
  padding: 4px 8px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`
