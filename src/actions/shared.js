import { showLoading, hideLoading } from 'react-redux-loading'

import { getInitialData } from '../utils/api'
import { usersReceive } from './users'
import { questionsReceive } from './questions'

export default function retrieveInitialData(){
    return (dispatch) => {
      dispatch(showLoading())
      return getInitialData()
        .then(({ users, questions }) => {
          dispatch(usersReceive(users))
          dispatch(questionsReceive(questions))
          dispatch(hideLoading())
        })
    }
}
