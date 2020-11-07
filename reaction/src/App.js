import logo from './logo.svg';
import './App.css';
import React from 'react';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { start_time: 0, ran_once: false, counting: false, true_duration: 0, reaction_time: 0, color: 'green'};
    this.process_click = this.process_click.bind(this);
  }
  handle_color = (c) => {
    // TODO: Your code here!
  }
  start_count() {
    //set start_time to how long since the window's been opened
    this.setState({start_time: performance.now()}); 
    
    //set duration to a random number between 2 & 7

    this.setState({true_duration: 2000 + Math.random() * (7000 - 2000)},
    () => {
      setTimeout(
        function() {
            this.setState({ color: 'green' });
        }
        .bind(this),
        this.state.true_duration
    );
    }); 
    
    // set counting to true
    this.setState({counting:true});

    //set color to dark red
    this.setState({color:'darkred'});
    
    
  }

  end_count() {
    if (window.performance.now() - this.state.start_time > this.state.true_duration)
    {
       this.setState({ran_once : true});
       this.setState({counting : false});
       this.setState({reaction_time : window.performance.now() - this.state.start_time - this.state.true_duration},
       () => {
        console.log(this.state.reaction_time);
       }
       );
       
    }
  }
  process_click() {
    if (this.state.counting) {
      this.end_count();
    } else {
      this.start_count();
      //console.log("clicked");
    }
  }
  render() {
    let msg = "Hello World!";
    // TODO: Your code here!
    if (this.state.counting && this.state.color == 'darkred'){
      msg = "Wait for Green";
    }
    else if (this.state.counting && this.state.color == 'green')
    {
      msg = "Click!";
    }
    else if ((!this.state.counting) && this.state.ran_once)
    {
        msg = "Your reaction time is " + this.state.reaction_time +  "ms";
    }
    else{
      msg = "Click me to begin!";
    }
    return (
      <div className = "PanelContainer" onClick = {this.process_click} style={ { background: this.state.color} }>
        <div className = "Panel">{msg}</div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className =  "Header">How Fast is your Reaction Time?</h1>
        <Panel />
        <p>Click as soon as the red box turns green. Click anywhere in the box to start.</p>
      </header>
    </div>
  );
}

export default App;
