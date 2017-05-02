import { connect } from 'react-redux'

import { loadProjects } from '../../actions/projects'
import App from '../../components/projects/App'

const mapDispatchToProps = {
  loadProjects
}

export default connect(null, mapDispatchToProps)(App)
