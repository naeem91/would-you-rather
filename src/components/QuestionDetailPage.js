import React from 'react'
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'
import ResultCard from './ResultCard'
import PageNotFound from './PageNotFound'
import Divider from '@material-ui/core/Divider'


function QuestionDetailPage (props){
  if(props.notFound === true)
    return (<PageNotFound />)

  const { question, user, author } = props
  const answered = question.voters.indexOf(user.id) !== -1

  return (
    <div>
      <QuestionCard user={author} question={question} asnwerable={!answered} />
      {
        answered ?
        <div>
          <Divider />
          <ResultCard user={user} question={question} />
        </div>
        :
        ''
      }
    </div>
  )
}

function mapStateToProps({authUser, questions, users}, props){
  const { question_id } = props.match.params

  if(questions[question_id] === undefined)
    return{
      notFound: true
    }

  const authorID = questions[question_id].author
  return {
    question: questions[question_id],
    user: users[authUser],
    author: users[authorID]
  }
}

export default connect(mapStateToProps)(QuestionDetailPage)
