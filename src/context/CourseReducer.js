const CourseReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return {
        ...state,
        showAlert: true,
        alertType: 'danger',
        alertText: 'Please provide all values!',
      }
    case 'CLEAR_ALERT':
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: '',
      }
    case 'SETUP_USER_BEGIN':
      return {
        ...state,
        isLoading: true,
      }
    case 'SETUP_USER_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: action.payload.alertText,
      }
    case 'SETUP_USER_ERROR':
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      }
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        showSidebar: !state.showSidebar,
      }
    case 'LOGOUT_USER':
      return {
        isLoading: '',
        showAlert: false,
        alertText: '',
        alertType: '',
        user: null,
        token: null,
        showSidebar: false,
      }
    default:
      return state
  }
}

export default CourseReducer
