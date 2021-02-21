import React from 'react'
import AnswerForm from './AnswerForm'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 80,
    height: 120,
  },
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

function QuestionCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={props.user.avatarURL}
        title={`${props.user.name} avatar`}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            { `${props.user.name} asks` }:
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            Would you rather:
          </Typography>
          {
            props.asnwerable
            ? <AnswerForm id={props.question.id} />
            : <div>
                <Typography variant="body2" color="textSecondary" component="p">
                  { props.question.optionOne.text }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  { props.question.optionTwo.text }
                </Typography>
              </div>
          }
        </CardContent>
      </div>
    </Card>
  );
}

export default QuestionCard
