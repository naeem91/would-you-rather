import React from 'react'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'


function LeaderboardItem(props){
  const { user } = props
  const countQuestions = user.questions.length
  const countAnswers = Object.keys(user.answers).length

  return(
    <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={user.avatarURL} />
          </ListItemAvatar>
          <ListItemText
            primary={user.name}
            secondary={
              <span>
              <Chip label={`Asked: ${countQuestions}`} variant="outlined" />
              <Chip label={`Answered: ${countAnswers}`} variant="outlined" />
              </span>
            }
          />
          <ListItemSecondaryAction>
            <Chip
                label={`Score: ${countQuestions + countAnswers}`}
                color="primary"
              />
          </ListItemSecondaryAction>
        </ListItem>
    </List>
  )
}

function Leaderboard(props){
  return (
    <Container maxWidth="sm">
    {
      props.users.map(([,user]) => <LeaderboardItem key={user.id} user={user} />)
    }
    </Container>
  )
}

function mapStateToProps({users}){
  return {
    // sort by score (sum of questions & answers)
    users: Object.entries(users).sort(([,a],[,b]) => {
        return (b.questions.length + Object.keys(b.answers).length) -
        (a.questions.length + Object.keys(a.answers).length)
    })
  }
}


export default connect(mapStateToProps)(Leaderboard)
