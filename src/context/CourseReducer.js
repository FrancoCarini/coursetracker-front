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
    case 'UPDATE_USER_BEGIN':
      return {
        ...state,
        isLoading: true,
      }
    case 'UPDATE_USER_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'User profile updated!',
      }
    case 'UPDATE_USER_ERROR':
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      }
    case 'SET_USER_TOKEN':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      }
    case 'HANDLE_CHANGE':
      return {
        ...state,
        course: {
          ...state.course,
          [action.payload.name]: action.payload.value,
        },
      }
    case 'CLEAR_VALUES':
      return {
        ...state,
        course: {
          title: '',
          platform: '',
          url: '',
          topic: 'Backend Programming',
          status: 'Not started',
        },
      }
    case 'CREATE_COURSE_BEGIN':
      return {
        ...state,
        isLoading: true,
      }
    case 'CREATE_COURSE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'New Course Created!',
      }
    case 'CREATE_COURSE_ERROR':
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      }
    default:
      return state
  }
}

export default CourseReducer
