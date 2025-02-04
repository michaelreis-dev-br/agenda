import styled from 'styled-components'
import { TextArea } from '../../components/Card/styles'

export const Form = styled.form`
  margin: 0 auto;
  max-width: 768px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    width: min-content;
  }
`

export const Name = styled(TextArea)`
  background-color: #f3f4f6;
  border-radius: 14px;
  border: 1px solid #dce0e9;
  font-size: 1rem;
  padding: 8px;
`
export const Phone = styled(TextArea)`
  background-color: #f3f4f6;
  border-radius: 14px;
  border: 1px solid #dce0e9;
  font-size: 1rem;
  padding: 8px;
`
export const Email = styled(TextArea)`
  background-color: #f3f4f6;
  border-radius: 14px;
  border: 1px solid #dce0e9;
  font-size: 1rem;
  padding: 8px;
`
