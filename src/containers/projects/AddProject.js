import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Button, Icon } from 'semantic-ui-react'

const AddProject = ({onAddProjectClick}) =>
  <div className='button-container fluid'>
    <Button animated='fade' onClick={onAddProjectClick}>
      <Button.Content hidden>Add Project</Button.Content>
      <Button.Content visible><Icon name='add' /></Button.Content>
    </Button>
  </div>

const mapDispatchToProps = (dispatch) => ({
  onAddProjectClick: () =>
    dispatch(push('/projects/new'))
})

export default connect(null, mapDispatchToProps)(AddProject)