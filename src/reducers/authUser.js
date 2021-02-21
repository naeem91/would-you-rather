import { AUTH_USER_UNSET, AUTH_USER_SET } from '../actions/users'

export default function authUserReducer(state = null, action){
  switch (action.type) {
    case AUTH_USER_SET:
      return action.id
    case AUTH_USER_UNSET:
      return null
    default:
      return state
  }
}
