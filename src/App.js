import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import count_action from './action/count-action'


let App = props => {
  console.log(props)

  return (
    <div>
      <button
        onClick={()=>{
          props.increaseCount()
        }}
      >Press Me</button>
      <div>{props.countcount}</div>
      <div
        style={{
          width:"200px",
          height: "200px",
        }}
      ></div>
    </div>
  );
}

let mapStateToProps = state => {
  return {
    countcount: state.count
  }
}

let mapDispatchToProps = dispatch => bindActionCreators({
  increaseCount: count_action
}, dispatch)

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
