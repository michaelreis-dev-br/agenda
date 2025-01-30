import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enmuns from '../../utils/enums/Tarefa'
import * as S from './styles'

export type Props = {
  criterio: 'prioridade' | 'status' | 'todas'
  legenda: string
  valor?: enmuns.Prioridade | enmuns.Status
}

const FiltroCard = ({ criterio, legenda, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade')
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    if (criterio === 'status')
      return tarefas.itens.filter((item) => item.status === valor).length
  }

  const filtrar = () => {
    dispatch(alterarFiltro({ criterio, valor }))
  }

  const contador = contarTarefas()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}
export default FiltroCard
