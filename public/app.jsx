var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is a message from a component.'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name
    };
  },
  onButtonClick: function(e) {
    e.preventDefault();
    var name = this.refs.name.value;
    this.refs.name.value = '';
    this.setState({
      name: name
    });
  },
  render: function() {
    var name = this.state.name;
    var message = this.props.message;
    return(
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type='text' ref='name' />
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var firstName = 'Rick';
var newMessage = 'This is not the default message from the component.';
ReactDOM.render(
  <Greeter name={firstName} message={newMessage}/>,
  document.getElementById('app')
);
