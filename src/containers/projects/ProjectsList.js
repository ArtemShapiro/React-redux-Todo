import { connect } from 'react-redux'

import { destroyProject } from '../../actions/projects'
import ProjectsList from '../../components/projects/ProjectsList'

const mapStateToProps = (state) => ({
  projects: state.projects
})

const mapDispatchToProps = (dispatch) => ({
  onDeleteClick: (id) => {
    dispatch(destroyProject(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList)
