import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Form, Phone, Email, Name } from './styles'
import { Container, SaveButton } from '../../components/Card/styles'
import { register } from '../../store/reducers/contact'

const CriarCadastro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const cadastrarTarefa = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(
      register({
        phone,
        name,
        email
      })
    )
    navigate('/')
  }

  return (
    <Container>
      <Form onSubmit={cadastrarTarefa}>
        <h1>Novo Contato</h1>
        <Name
          rows={1}
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder="Nome"
        />
        <Phone
          rows={1}
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          placeholder="Telefone"
        />
        <Email
          rows={1}
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="E-mail"
        />
        <SaveButton type="submit">Salvar</SaveButton>
      </Form>
    </Container>
  )
}

export default CriarCadastro
