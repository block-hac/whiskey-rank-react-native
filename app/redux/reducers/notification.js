import {AUTH, LOGOUT} from '../../constants/actions';

const INITIAL_STATE = {
  fetching: false,
  authenticated: true,
  firstVisited: false,
  errorMessage: null,
};

const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH.REQUEST:
      return {
        ...state,
        fetching: true,
        errorMessage: null,
      };
    case AUTH.FAILURE:
      return {
        ...state,
        fetching: false,
        errorMessage: action.payload,
      };
    case AUTH.SUCCESS:
      return {
        ...state,
        fetching: false,
        authenticated: true,
        errorMessage: null,
      };
    case LOGOUT:
      return {
        ...state,
        fetching: false,
        authenticated: false,
      };
    default:
      return state;
  }
};

export default notificationReducer;
