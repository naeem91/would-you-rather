import { USERS_RECEIVE } from '../actions/users'
import { QUESTION_ANSWERED, QUESTION_ADDED } from '../actions/questions'

const updateUserAnswers = (user, questionID, selectedOption) => {
  return Object.assign({}, user, {
    answers: {...user.answers, [questionID]: selectedOption}
  })
}

const updateUserQuestions = (user, questionID) => {
  return Object.assign({}, user, {
    questions: user.questions.concat([questionID])
  })
}

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case USERS_RECEIVE:
      return action.users
    case QUESTION_ANSWERED:
      const user = state[action.authedUser]
      const updatedUser = updateUserAnswers(user, action.qid, action.answer)
      return {
        ...state,
        [user.id]: updatedUser
      }
    case QUESTION_ADDED:
      const author = state[action.question.author]
      return {
        ...state,
        [author.id]: updateUserQuestions(author, action.question.id)
      }
    default:
      return state
  }
}
