import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import Card from '../../components/Card'
import { alterarTermo } from '../../store/reducers/filter'
import {
  Container,
  SearchInput,
  SearchBar,
  ContactList
} from '../../components/Card/styles'
import CreateContactButton from '../../components/CreateContactButton'

const Home = () => {
  const dispatch = useDispatch()

  const { itens } = useSelector((state: RootReducer) => state.contact)
  const { termo } = useSelector((state: RootReducer) => state.filter)

  const filtraTarefas = () => {
    let tarefasFiltradas = itens

    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.name.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltagem = (quantidade: number) => {
    let mensagem = ''

    if (termo !== undefined && termo.length > 0) {
      if (quantidade === 1) {
        mensagem = `(${quantidade}) Contato encontrado: "${termo}"`
      }

      if (quantidade > 1) {
        mensagem = `(${quantidade}) Contatos encontrados: "${termo}"`
      }
    } else if (quantidade > 0) {
      mensagem = `(${quantidade}) Contatos`
    } else {
      mensagem = 'Nenhum contato encontrado'
    }

    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltagem(tarefas.length)

  return (
    <Container>
      <h1>{mensagem}</h1>
      <SearchBar>
        <SearchInput
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
        <CreateContactButton />
      </SearchBar>
      <ContactList>
        {tarefas.map((contact) => (
          <li key={contact.name}>
            <Card
              phone={contact.phone}
              email={contact.email}
              id={contact.id}
              name={contact.name}
            />
          </li>
        ))}
      </ContactList>
    </Container>
  )
}

export default Home
