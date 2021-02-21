import React from 'react'
import { connect } from 'react-redux'
import { filterQuestions } from '../utils/helpers'
import QuestionListItem from './QuestionListItem'
import TabPanel from './ui_elements/TabPanel'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DoneIcon from '@material-ui/icons/Done';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  grid: {
    width: "600px",
    margin: "0 auto",
  }
});


function HomePage (props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const { answered, unanswered } = filterQuestions(
      props.authUser, props.questions
    )

    return(
      <Grid className={classes.grid}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          centered>
          <Tab icon={<QuestionAnswerIcon />} label="Unanswered" />
          <Tab icon={<DoneIcon />} label="Answered" />
        </Tabs>
        <TabPanel value={value} index={0}>
          {
            unanswered.map(question => <QuestionListItem
                                          key={question.id}
                                          id={question.id} />)
          }
        </TabPanel>
        <TabPanel value={value} index={1}>
          {
            answered.map(question => <QuestionListItem
                                        key={question.id}
                                        id={question.id} />)
          }
        </TabPanel>
      </Grid>
    )
}

function mapStateToProps({ authUser, questions }){
  return {
    authUser,
    questions
  }
}

export default connect(mapStateToProps)(HomePage)
