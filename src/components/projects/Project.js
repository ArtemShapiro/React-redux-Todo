import React from 'react'
import { Card } from 'semantic-ui-react'

const Project = (props) => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          {props.name}
        </Card.Header>
      </Card.Content>

      <Card.Content>
        Task
      </Card.Content>
    </Card>
  )
}

export default Project
