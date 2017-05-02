import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { destroyProject } from '../../actions/projects'
import Project from '../../components/projects/Project'

const mapStateToProps = (state, ownProps) => ({
  editable: (`${ownProps.id}` === ownProps.routeParams.id) && !ownProps.routeParams.todo_id
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteClick: () => {
    dispatch(destroyProject(ownProps.id))
  },
  onAddTodoClick: () => {
    dispatch(push(`/projects/${ownProps.id}/todo/new`))
  },
  onUpdateProjectClick: () => {
    dispatch(push(`/projects/${ownProps.id}`))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Project)
