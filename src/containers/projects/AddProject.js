import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
// import { Button, Icon } from 'semantic-ui-react'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'

const AddProject = ({onAddProjectClick}) =>
  <div className='button-add-project-container'>
    <Button fab primary onClick={onAddProjectClick}>
      <AddIcon />
    </Button>
  </div>

const mapDispatchToProps = (dispatch) => ({
  onAddProjectClick: () =>
    dispatch(push('/projects/new'))
})

export default connect(null, mapDispatchToProps)(AddProject)
