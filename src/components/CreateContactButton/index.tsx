import { Btn } from './styles'
import { Plus } from 'lucide-react'

const CreateContactButton = () => (
  <Btn to="/criar-contato">
    <Plus size={20} />
    Criar Contato
  </Btn>
)

export default CreateContactButton
