import { connect } from 'react-redux'

import App from '../../components/projects/App'
import { setRouteParams } from '../../actions/routeParams'

const mapDispatchToProps = {
  setRouteParams
}

export default connect(null, mapDispatchToProps)(App)
