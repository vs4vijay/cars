var User = React.createClass({
  propTypes: {
    username: React.PropTypes.string,
    email: React.PropTypes.string,
    active: React.PropTypes.bool
  },

  render: function() {
    return (
      <div>
        <div>Username: {this.props.username}</div>
        <div>Email: {this.props.email}</div>
        <div>Active: {this.props.active}</div>
      </div>
    );
  }
});
