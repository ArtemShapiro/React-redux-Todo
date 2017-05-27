import { connect } from 'react-redux'

import { loadProjects } from '../../actions/projects'
import ProjectsList from '../../components/projects/ProjectsList'

const mapStateToProps = (state) => ({
  projects: state.projects.data,
  loading: state.projects.loading
})

const mapDispatchToProps = {
  loadProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList)
