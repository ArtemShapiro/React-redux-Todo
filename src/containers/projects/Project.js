import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { destroyProject } from '../../actions/projects'
import Project from '../../components/projects/Project'

const mapStateToProps = (state, ownProps) => ({
  editable: (`${ownProps.id}` === ownProps.routeParams.id) && !ownProps.routeParams.task_id
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteClick: () => {
    dispatch(destroyProject(ownProps.id))
  },
  onAddTaskClick: () => {
    dispatch(push(`/projects/${ownProps.id}/task/new`))
  },
  onUpdateProjectClick: () => {
    dispatch(push(`/projects/${ownProps.id}`))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Project)
