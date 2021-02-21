import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CircularProgress from './ui_elements/CircularProgressWithLabel'

function ResultCardItem(props) {
  return (
    <List title={props.userVote ? "Your Vote" : ""}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CircularProgress value={props.percentage} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.text}
          secondary={`${props.voteCount} out of ${props.totalVotes} votes`}
        />
        <ListItemSecondaryAction>
          {
            props.userVote
            ? <CheckCircleIcon />
            : ''
          }
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  )
}

export default ResultCardItem
