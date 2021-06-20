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
            return { counter: state.counter + 2 }
          break

          case 'DECREMENT2':
            return { counter: state.counter - 2 }
          break
  
      }
    //  if(action.type ==='INCREMENT'){
//      return { counter:state.counter+1}
//  }



    return state

}


export default reducer