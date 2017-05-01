import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { destroyProject } from '../../actions/projects'
import Project from '../../components/projects/Project'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteClick: () => {
    dispatch(destroyProject(ownProps.id))
  },
  onAddTodoClick: () => {
    dispatch(push(`/projects/${ownProps.id}/todos/new`))
  }
})

export default connect(null, mapDispatchToProps)(Project)
