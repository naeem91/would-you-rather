
export function filterQuestions(user, questions){
  // return questions divided into answerd & unanswered
  let answered = []
  let unanswered = []

  for (const [, question] of Object.entries(questions)) {
    if(question.voters.indexOf(user) !== -1){
      answered.push(question)
    }
    else{
      unanswered.push(question)
    }
  }

  answered = answered.sort(function(a, b){return b.timestamp - a.timestamp})
  unanswered = unanswered.sort(function(a, b){return b.timestamp - a.timestamp})

  return {answered, unanswered}
}
