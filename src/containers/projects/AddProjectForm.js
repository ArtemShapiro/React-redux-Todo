import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { replace } from 'react-router-redux'

import AddProjectForm from '../../components/projects/AddProjectForm'
import { createProject } from '../../actions/projects'

const onSubmit = (values, dispatch) => (
  dispatch(createProject(values))
)

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => ({
  onCancel: () =>
    dispatch(replace('/'))
})

let addProjectForm = reduxForm({ form: 'addProject', onSubmit })(AddProjectForm)

export default connect(mapStateToProps, mapDispatchToProps)(addProjectForm)
