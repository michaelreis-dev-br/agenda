import * as enums from '../utils/enums/Tarefa'

class Tarefa {
  descricao: string
  id: number
  prioridade: enums.Prioridade
  status: enums.Status
  titulo: string

  constructor(
    descricao: string,
    id: number,
    prioridade: enums.Prioridade,
    status: enums.Status,
    titulo: string
  ) {
    this.descricao = descricao
    this.id = id
    this.prioridade = prioridade
    this.status = status
    this.titulo = titulo
  }
}

export default Tarefa
