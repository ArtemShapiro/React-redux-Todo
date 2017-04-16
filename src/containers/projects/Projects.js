import { connect } from 'react-redux'
import axios from 'axios'
import * as Cookies from 'js-cookie'

import { setHeaders, addProjects } from '../../actions'
import Projects from '../../components/projects/Projects'

const loadProjects = (headers, dispatch) => {
  axios.get('http://127.0.0.1:4000/api/v1/projects', { headers: {...headers} }).then(responce => {
    console.log(responce)
    dispatch(addProjects(responce.data))
    if (responce.headers.uid) {
      dispatch(setHeaders(responce.headers))
      Cookies.set('token', responce.headers)
    }
    return responce
  }).catch(error => {
    console.log(error.responce)
  })
}

const mapStateToProps = (state) => ({
  projects: state.projects,
  headers: state.headers,
  loadProjects
})

export default connect(mapStateToProps)(Projects)
