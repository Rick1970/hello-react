var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return(
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if(name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);

    }else if(message.length > 0) {
      this.refs.message.value = '';
      this.props.onNewMessage(message);
    }
  },
  render: function() {
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" placeholder="Enter your name."/>
        <br />
        <br />
        <textarea type="text" ref="message" placeholder="Enter your message."/>
        <br />
        <br />
        <button>Set Values</button>
      </form>
    );
  }
});


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
  getInitialState: function() {
    return {
      message: this.props.message
    };
  },
  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },
  handleNewMessage: function(message) {
    this.setState({
      message: message
    });
  },
  render: function() {
    var name = this.state.name;
    var message = this.state.message;
    return(
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>
      </div>
    );
  }
});

var firstName = 'Rick';
var testMessage = 'This is not the default message from the component.';
ReactDOM.render(
  <Greeter name={firstName} message={testMessage}/>,
  document.getElementById('app')
);
