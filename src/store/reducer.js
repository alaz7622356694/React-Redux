const initialState={
    counter:0,
    result:[]
}


const reducer =(state=initialState , action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return { 
                ...state,counter: state.counter + 1 }

          case 'DECREMENT':
            return { ...state,counter: state.counter - 1 }

          case 'INCREMENT2':
            return { ...state,counter: state.counter + action.value }
        
          case 'DECREMENT2':
            return { ...state,counter: state.counter - action.value }

            case 'RESULT':
            return {
                ...state,
                result: state.result.concat(state.counter) 
            
            }
     
default : return state
      }
    

}


export default reducer