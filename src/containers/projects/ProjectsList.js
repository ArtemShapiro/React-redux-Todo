import { connect } from 'react-redux'

import ProjectsList from '../../components/projects/ProjectsList'

const mapStateToProps = (state) => ({
  projects: state.projects
})

export default connect(mapStateToProps)(ProjectsList)
