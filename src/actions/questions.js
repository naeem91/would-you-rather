import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const QUESTIONS_RECEIVE = 'QUESTIONS_RECEIVE'
export const QUESTION_ANSWERED = 'QUESTION_ANSWERED'
export const QUESTION_ADDED = 'QUESTION_ADDED'

export function questionsReceive(questions) {
  return {
    type: QUESTIONS_RECEIVE,
    questions
  }
}

function questionAnswered(answer){
  return {
    type: QUESTION_ANSWERED,
    ...answer
  }
}

function questionAdded(question){
  return {
    type: QUESTION_ADDED,
    question
  }
}

export function hangleQuestionAdd(author, optionOneText, optionTwoText, cb){
  const qData = {
    author,
    optionOneText,
    optionTwoText
  }
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestion(qData)
      .then((question) => {
        dispatch(hideLoading())
        dispatch(questionAdded(question))
        cb()
      })
  }
}

export function handleSaveQuestion(id, option, voter){
  const answerData = {
    authedUser: voter,
    qid: id,
    answer: option,
  }

  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestionAnswer(answerData)
      .then(() => {
        dispatch(hideLoading())
        dispatch(questionAnswered(answerData))
      })
  }
}
