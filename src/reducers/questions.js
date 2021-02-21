import {
  QUESTIONS_RECEIVE,
  QUESTION_ANSWERED,
  QUESTION_ADDED,
} from '../actions/questions'

const addVoter = (question, optionID, voter) => {
  // Add new voter to question record
  const option = question[optionID]
  return Object.assign({}, question, {
    voters: question.voters.concat([voter]),
    [optionID]: {...option, votes: option.votes.concat([voter])}
  })
}

export default function questionReducer(state = {}, action) {
  switch (action.type) {
    case QUESTIONS_RECEIVE:
      return action.questions
    case QUESTION_ANSWERED:
      const updatedQuestion = addVoter(
        state[action.qid],
        action.answer,
        action.authedUser
      )
      return {
        ...state,
        [action.qid]: updatedQuestion
      }
    case QUESTION_ADDED:
      return {
        ...state,
        [action.question.id]: action.question,
      }
    default:
      return state
  }
}
