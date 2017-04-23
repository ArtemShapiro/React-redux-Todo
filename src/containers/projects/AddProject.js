import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
// import { Button, Icon } from 'semantic-ui-react'
import Button from 'material-ui/Button'

const AddProject = ({onAddProjectClick}) =>
  <div className='button-container'>
    <Button raised onClick={onAddProjectClick}>Add Project</Button>
  </div>

const mapDispatchToProps = (dispatch) => ({
  onAddProjectClick: () =>
    dispatch(push('/projects/new'))
})

export default connect(null, mapDispatchToProps)(AddProject)
