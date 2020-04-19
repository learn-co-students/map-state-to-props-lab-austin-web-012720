import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
    {this.props.users.map((user, idx) => <li key={idx}> {user.username} from {user.hometown}</li>)}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
        Total Users: {this.props.count}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    count: state.users.length
  }
}

export default connect(
  mapStateToProps
)(Users);
