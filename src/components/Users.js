import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    let users = this.props.users.map((user, idx) => (<li key={idx}>{user.username}</li>));
    return (
      <div>
        <ul>
          Users!
          {users}
          {this.props.length}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    length: state.users.length,
  };
};

export default connect(mapStateToProps)(Users);
