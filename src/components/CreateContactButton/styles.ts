import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Btn = styled(Link)`
  align-items: center;
  background-color: #ebebef;
  border-radius: 14px;
  color: #3c3c43;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  gap: 0.25rem;
  height: 3rem;
  padding: 0.25rem 0.75rem;
  transition: background-color 300ms ease;

  &:hover {
    background-color: #e4e4e9;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`
