
export const USERS_RECEIVE = 'USERS_RECEIVE'
export const AUTH_USER_SET = 'AUTH_USER_SET'
export const AUTH_USER_UNSET = 'AUTH_USER_UNSET'

export function usersReceive(users) {
  return {
    type: USERS_RECEIVE,
    users
  }
}

export function authUserSet(id){
  return {
    type: AUTH_USER_SET,
    id
  }
}

export function authUserUnSet(user) {
  return {
    type: AUTH_USER_UNSET,
  }
}
