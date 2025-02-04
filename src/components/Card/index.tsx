import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remove, edit } from '../../store/reducers/contact'
import Class from '../../models/Contato'
import {
  Card,
  ActionBar,
  Phone,
  Email,
  SaveButton,
  EditButton,
  DeleteButton,
  CancelButton
} from './styles'

import { Pencil, Trash2, Save, X } from 'lucide-react'

type Props = Class

const Contato = ({
  email: emailDefault,
  id,
  name,
  phone: phoneDefault
}: Props) => {
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)

  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (phoneDefault.length > 0) {
      setPhone(phoneDefault)
    }

    if (emailDefault.length > 0) {
      setEmail(emailDefault)
    }
  }, [phoneDefault, emailDefault])

  function cancelarEdicao() {
    setIsEditing(false), setPhone(phoneDefault), setEmail(emailDefault)
  }

  return (
    <Card>
      <h3>
        {isEditing && <em>Editando: </em>}
        {name}
      </h3>
      <Phone
        disabled={!isEditing}
        onChange={(e) => setPhone(e.target.value)}
        rows={1}
        value={phone}
      />
      <Email
        disabled={!isEditing}
        onChange={(e) => setEmail(e.target.value)}
        rows={1}
        value={email}
      />
      <ActionBar>
        {isEditing ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(
                  edit({
                    email,
                    id,
                    name,
                    phone
                  })
                )
                setIsEditing(false)
              }}
            >
              <Save size={20} />
              Salvar
            </SaveButton>
            <CancelButton onClick={cancelarEdicao}>
              <X size={20} />
              Cancelar
            </CancelButton>
          </>
        ) : (
          <>
            <EditButton onClick={() => setIsEditing(true)}>
              <Pencil size={20} />
              Editar
            </EditButton>
            <DeleteButton onClick={() => dispatch(remove(id))}>
              <Trash2 size={20} />
              Excluir
            </DeleteButton>
          </>
        )}
      </ActionBar>
    </Card>
  )
}

export default Contato
