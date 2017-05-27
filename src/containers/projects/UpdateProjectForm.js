import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { replace } from 'react-router-redux'

import UpdateProjectForm from '../../components/projects/UpdateProjectForm'
import { updateProject } from '../../actions/projects'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCancel: () => {
    dispatch(replace('/'))
  },
  onSubmit: (values) => {
    dispatch(updateProject({...values, id: ownProps.id}))
  }
})

let updateProjectForm = reduxForm({ form: 'updateProject' })(UpdateProjectForm)
export default connect(null, mapDispatchToProps)(updateProjectForm)
