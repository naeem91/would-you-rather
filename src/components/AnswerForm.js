import React from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/questions'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class AnswerForm extends React.Component {
  state = {
    selection: ''
  }
  onSelection = (event) => {
    event.preventDefault()
    this.setState({selection: event.target.value})
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch(handleSaveQuestion(
      this.props.question.id,
      this.state.selection,
      this.props.authUser
    ))
  }
  render () {
    const { question } = this.props

    return (
      <FormControl>
        <RadioGroup onChange={this.onSelection}>
          <FormControlLabel value="optionOne" control={<Radio />} label={question.optionOne.text} />
          <FormControlLabel value="optionTwo" control={<Radio />} label={question.optionTwo.text} />
        </RadioGroup>
        <Button
            disabled={this.state.selection === ''}
            onClick={this.onSubmit}
            type="submit" variant="outlined"
            color="primary">
          Submit
        </Button>
      </FormControl>
    )
  }
}

function mapStateToProps({authUser, questions}, {id}){
  return {
    question: questions[id],
    authUser,
  }
}

export default connect(mapStateToProps)(AnswerForm)
