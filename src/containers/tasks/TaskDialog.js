import { connect } from 'react-redux'

import { closeModal } from '../../actions/modal'
import TaskDialogRedux from '../../components/tasks/TaskDialog'

const mapStateToProps = (state) => ({
  open: state.modal.open,
  ...state.modal.modalProps.task
})

const mapDispatchToProps = {
  closeModal
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskDialogRedux)
