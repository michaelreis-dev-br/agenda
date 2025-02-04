import styled from 'styled-components'
import { Button } from '../../globals'

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Card = styled.div`
  background-color: #f3f4f6;
  border-radius: 1.5rem;
  border: 1px solid #dce0e9;
  font-size: 1rem;
  padding: 1rem;
`

export const TextArea = styled.textarea`
  background-color: transparent;
  border: none;
  color: #8b8b8b;
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  line-height: 1.5rem;
  width: 100%;
`

export const Phone = styled(TextArea)`
  margin-top: 1rem;
`
export const Email = styled(TextArea)`
  margin-bottom: 1rem;
`
export const Name = styled(TextArea)``

export const Container = styled.main`
  max-width: 1440px;
  padding: 3rem 2rem 2rem;
  width: 100%;
`

export const ContactList = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
`

export const SearchInput = styled.input`
  background-color: rgb(243, 244, 246);
  border-radius: 14px;
  border: 1px solid #dce0e9;
  flex-grow: 1;
  font-size: 1rem;
  padding: 10px;
`

export const SearchBar = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`

export const SaveButton = styled(Button)`
  background-color: rgb(41, 151, 100, 0.1);
  color: #299764;

  &:hover {
    background-color: rgb(41, 151, 100, 0.2);
  }
`

export const EditButton = styled(Button)`
  background-color: rgb(58, 92, 204, 0.1);
  color: #3a5ccc;

  &:hover {
    background-color: rgb(58, 92, 204, 0.2);
  }
`

export const CancelButton = styled(Button)`
  background-color: rgb(245, 101, 101, 0.1);
  color: #f56565;

  &:hover {
    background-color: rgb(245, 101, 101, 0.2);
  }
`

export const DeleteButton = styled(Button)`
  background-color: rgb(245, 101, 101, 0.1);
  color: #f56565;

  &:hover {
    background-color: rgb(245, 101, 101, 0.2);
  }
`
