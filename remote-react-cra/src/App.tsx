import { Container } from '@mui/material'
import React from 'react'
import { Main } from './container'

const App: React.FC = () => {
  const stackList = [
    'React 18',
    'Material UI',
    'Husky',
    'Webpack 5',
    'React Testing Library',
    'StoryBooks'
  ]
  return (
    <Container>
      <h1>Remote Components Template</h1>
      <Main list={stackList} />
    </Container>
  )
}

export default App
