import React from 'react'
import { Header, Card } from 'semantic-ui-react'
import AddTodo from '../../containers/todos/AddTodo'

const Todos = () => {
  return (
    <div>
      <Header as='h2' className='aligned center'>Todos</Header>

      <Card fluid>
        <Card.Content>
          <Card.Header>
          Name
        </Card.Header>
        </Card.Content>
        <Card.Content>
        Task 1
      </Card.Content>
        <Card.Content>
        Task 2
      </Card.Content>
      </Card>

      <AddTodo />
    </div>
  )
}

export default Todos
