import { connect } from 'react-redux'

import { loadProjects } from '../actions/projects'
import App from '../components/App'

const mapStateToProps = (state) => ({
  projects: state.projects,
  headers: state.headers
})

const mapDispatchToProps = {
  loadProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
