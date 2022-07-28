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
          _id: null,
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
    case 'GET_COURSES_BEGIN':
      return {
        ...state,
        isLoading: true,
        showAlert: false,
      }
    case 'GET_COURSES_SUCCESS':
      return {
        ...state,
        isLoading: false,
        courses: action.payload.courses,
        totalCourses: action.payload.totalCourses,
        numOfPages: action.payload.numOfPages,
      }
    case 'SET_EDIT_COURSE':
      return {
        ...state,
        isEditing: true,
        course: {
          ...action.payload.course,
        },
      }
    case 'DELETE_COURSE_BEGIN':
      return {
        ...state,
        isLoading: true,
      }
    case 'UPDATE_COURSE_BEGIN':
      return {
        ...state,
        isLoading: true,
      }
    case 'UPDATE_COURSE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'Course Updated!',
      }
    case 'UPDATE_COURSE_ERROR':
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      }
    case 'GET_STATS_BEGIN':
      return {
        ...state,
        isLoading: true,
        showAlert: false,
      }
    case 'GET_STATS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        stats: action.payload.stats,
      }
    case 'GET_STATS_ERROR':
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      }
    case 'CLEAR_FILTERS':
      return {
        ...state,
        filters: {
          title: '',
          platform: '',
          topic: 'all',
          status: 'all',
          sort: 'latest',
        },
      }
    case 'HANDLE_CHANGE_FILTERS':
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      }
    case 'CHANGE_PAGE':
      return { ...state, page: action.payload.page }
    default:
      return state
  }
}

export default CourseReducer
