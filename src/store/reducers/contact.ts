import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contato'

type ContactState = {
  itens: Contact[]
}

const initialState: ContactState = {
  itens: [
    {
      id: 1,
      name: 'Luan Mendes',
      phone: '(11) 98765-4321',
      email: 'luan.mendes@gmail.com'
    },
    {
      id: 2,
      name: 'Carolina Vilela',
      phone: '(21) 99876-5432',
      email: 'carolina.vilela@gmail.com'
    },
    {
      id: 3,
      name: 'Rafael Torquato',
      phone: '(31) 91234-5678',
      email: 'rafael.torquato@gmail.com'
    },
    {
      id: 4,
      name: 'Isabela Rocha',
      phone: '(41) 93333-4455',
      email: 'isabela.rocha@gmail.com'
    },
    {
      id: 5,
      name: 'Gustavo Ferraz',
      phone: '(51) 99988-7766',
      email: 'gustavo.ferraz@gmail.com'
    },
    {
      id: 6,
      name: 'Marina Lopes',
      phone: '(61) 96123-7890',
      email: 'marina.lopes@gmail.com'
    }
  ]
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const exists = state.itens.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )
      if (exists) {
        alert('Já existe um contato com esse nome.')
      } else {
        const lastContact = state.itens[state.itens.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.itens.push(newContact)
      }
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const index = state.itens.findIndex(
        (contact) => contact.id === action.payload.id
      )

      if (index >= 0) {
        state.itens[index] = action.payload
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contact) => contact.id !== action.payload)
      ]
    }
  }
})

export const { register, edit, remove } = contactSlice.actions
export default contactSlice.reducer
