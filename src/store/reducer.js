const initialState={
    counter:0
}


const reducer =(state=initialState , action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1 }
          break
          case 'DECREMENT':
            return { counter: state.counter - 1 }
          break

          case 'INCREMENT2':
            return { counter: state.counter + action.value }
          break

          case 'DECREMENT2':
            return { counter: state.counter - action.value }
          break
  
      }
    return state

}


export default reducer