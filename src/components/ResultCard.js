import React from 'react'
import ResultCardItem from './ResultCardItem'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


function ResultCard(props) {
  const classes = useStyles();
  const { question, user} = props
  const totalVotes = question.voters.length

  const getResult = (optionID) => {
    const option = question[optionID]
    return {
      text: option.text,
      voteCount: option.votes.length,
      totalVotes,
      percentage: ((100 / totalVotes) * option.votes.length),
      userVote: option.votes.indexOf(user.id) !== -1
    }
  }

  return (
    <div className={classes.root}>
      <Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Results
          </Typography>
          <div className={classes.demo}>
            <ResultCardItem {...getResult('optionOne')} />
            <ResultCardItem {...getResult('optionTwo')} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ResultCard
