import React from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import QuestionCard from './QuestionCard'

function QuestionListItem(props) {
  return (
    <Link to={`/questions/${props.question.id}`} style={{textDecoration: "none"}}>
      <QuestionCard
        user={props.user}
        question={props.question}
      />
    </Link>
  );
}

function mapStateToProps({users, questions}, {id}){
  const question = questions[id]
  const user = users[question.author]

  return {
    question,
    user
  }
}

export default withRouter(connect(mapStateToProps)(QuestionListItem))
