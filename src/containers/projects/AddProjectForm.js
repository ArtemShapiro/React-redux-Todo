import { reduxForm } from 'redux-form'

import AddProjectForm from '../../components/projects/AddProjectForm'
import { createProject } from '../../actions/projects'

const onSubmit = (values, dispatch) => (
  dispatch(createProject(values))
)

export default reduxForm({ form: 'addProject', onSubmit })(AddProjectForm)
