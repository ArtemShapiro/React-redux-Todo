import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const AddProject = ({onAddProjectClick}) =>
  <div className='button-add-project-container'>
    <FloatingActionButton onTouchTap={onAddProjectClick}>
      <ContentAdd />
    </FloatingActionButton>
  </div>

const mapDispatchToProps = (dispatch) => ({
  onAddProjectClick: () =>
    dispatch(push('/projects/new'))
})

export default connect(null, mapDispatchToProps)(AddProject)
