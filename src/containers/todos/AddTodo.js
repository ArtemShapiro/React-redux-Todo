import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Button, Icon } from 'semantic-ui-react'

const AddTodo = ({onAddTodoClick}) =>
  <div className='button-container fluid'>
    <Button animated='fade' onClick={onAddTodoClick}>
      <Button.Content hidden>Add Todo</Button.Content>
      <Button.Content visible><Icon name='add' /></Button.Content>
    </Button>
  </div>

const mapDispatchToProps = (dispatch) => ({
  onAddTodoClick: () =>
    dispatch(push('/todos/new'))
})

export default connect(null, mapDispatchToProps)(AddTodo)
