import React from 'react'
import { hangleQuestionAdd } from '../actions/questions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class NewQuestionPage extends React.Component {
  state = {
    valid: false,
    optionOne: '',
    optionTwo: '',
    redirect: false
  }
  handleSubmit = (event) => {
    event.preventDefault()

    this.props.dispatch(hangleQuestionAdd(
      this.props.authUser,
      this.state.optionOne,
      this.state.optionTwo,
      ()=> this.setState({redirect: true})
    ))
  }
  handleChange = (event) => {
    event.preventDefault()
    this.setState({[event.target.id]: event.target.value}, () => {
      this.setState({valid: this.isValidInput()})
    })
  }
  isValidInput = () => {
    return this.state.optionOne !== '' && this.state.optionTwo !== ''
  }

  render(){
    if(this.state.redirect === true){
      return <Redirect to='/' />
    }
    return (
      <Grid container justify="center" alignItems="center">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <FormControl component="fieldset">
          <FormLabel component="p" variant="h1">Would You Rather</FormLabel>
          <TextField
            id="optionOne"
            value={this.state.optionOne}
            label="Option One"
            style={{ margin: 8, width: "500px" }}
            placeholder="Enter Option One Text Here"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            id="optionTwo"
            label="Option Two"
            value={this.state.optionTwo}
            style={{ margin: 8, width: "500px"  }}
            placeholder="Enter Option Two Text Here"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            />
            <Button disabled={ !this.state.valid } type="submit" size="medium" variant="contained"  color="primary" >
              Submit
            </Button>
          </FormControl>
        </form>
      </Grid>
    )
  }
}

function mapStateToProps({ authUser }){
  return {
    authUser
  }
}

export default connect(mapStateToProps)(NewQuestionPage)
