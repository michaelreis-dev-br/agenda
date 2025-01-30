import { Provider } from 'react-redux'
import store from './store'
import GlobalStyle, { Container } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </Provider>
  )
}

export default App
