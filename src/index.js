import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function handleAction(event){
//   console.log('Child did', event);
// }
//
// function Parent(){
//   return <Child onAction={handleAction}/>
// }

class ChildReset extends Component{
  render(){
    return (
      <div>
        <button onClick={this.props.onAction}>Click Me!</button>
        <button onClick={this.props.onChange}>Reset!</button>
      </div>
    );
  }
}

// function Child({onAction, onChange}){
//   return (
//     <div>
//     <button onClick={onAction}>Click Me!</button>
//     <button onClick={onChange}>Reset!</button>
//   </div>
//   );
// }

class CountingParent extends Component{
  // constructor(pros){
  //   super(props);
  //   //Set the state here
  //   this.state = {
  //     actionCount: 0
  //   };
  // }

  // property initializer
  state = {
    actionCount: 0
  }
  handleAction = action => {
    // actionCount is incremented, and
    // the new count replaces the existing one
    this.setState({
      actionCount: this.state.actionCount + 1
    });
  };
  handleReset = action => {
    this.setState({
      actionCount: 0
    });
  };

  render(){
    return(
      <div>
      <ChildReset onAction={this.handleAction} onChange={this.handleReset}/>
      <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  };
}

const Page = () =>(
  <div>
    <CountingParent/>
    <CountingParent/>
    <CountingParent/>
  </div>
);

ReactDOM.render(<Page />, document.getElementById('root'));
