import React from 'react'
import {connect} from 'react-redux'
import CounterControl from '../components/CounterControl/CounterControl'
import CounterOutput from '../components/CounterOutput/CounterOutput'

class Counter extends React.Component {

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrement}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrement}
        />
        <CounterControl
          label="Increment2"
          clicked={this.props.onIncrement2}
        />
        <CounterControl
          label="Decrement2"
          clicked={this.props.onDecrement2}
        />
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
return {
  ctr:state.counter
}
}

const mapDispatchToProps=(dispatch)=>{
return {
  onIncrement:()=> dispatch({type:'INCREMENT'}),
  onDecrement:()=> dispatch({type:'DECREMENT'}),
  onIncrement2:()=> dispatch({type:'INCREMENT2' , value:2}),
  onDecrement2:()=> dispatch({type:'DECREMENT2' , value:2})
}
}

export default connect(mapStateToProps , mapDispatchToProps)(Counter)
