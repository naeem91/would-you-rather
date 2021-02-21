import React from 'react'
import { connect } from 'react-redux'
import { authUserSet } from '../actions/users'
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';


class SignInPage extends React.Component {
  state = {
    selection: ''
  }
  handleChange = (event) => {
    this.setState({selection: event.target.value})
  }
  signIn = (event) => {
      event.preventDefault()
      this.props.dispatch(authUserSet(this.state.selection))
  }
  render() {
    const { userIDs, users } = this.props

    return(
        <Grid className="with-margin" container justify="center" alignItems="center">
            <FormControl>
              <InputLabel>Select an account to login </InputLabel>
              <Select
                  style={{width: "500px"}}
                  value={this.state.selection}
                  onChange={this.handleChange}>
                  {
                    userIDs.map(
                    userID => <MenuItem
                                key={userID}
                                value={userID}>
                                {users[userID].name}
                              </MenuItem>)
                  }
              </Select>
              <Button
                className="with-margin"
                disabled={ this.state.selection === '' }
                onClick={this.signIn}
                 size="medium" variant="contained" color="primary">
                LogIn
              </Button>
            </FormControl>
        </Grid>
    )
  }
}

function mapStateToProps({ users }){
  return {
    userIDs: Object.keys(users),
    users
  }
}

export default connect(mapStateToProps)(SignInPage)
