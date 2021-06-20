import * as actionTypes from './Actions'

const initialState={
    counter:0,
    result:[]
}


const reducer =(state=initialState , action)=>{
    switch (action.type) {
        case actionTypes.INCREMENT:
            return { 
                ...state,counter: state.counter + 1 }

          case actionTypes.DECREMENT:
            return { ...state,counter: state.counter - 1 }

          case actionTypes.INCREMENT2:
            return { ...state,counter: state.counter + action.value }
        
          case actionTypes.DECREMENT2:
            return { ...state,counter: state.counter - action.value }

            case actionTypes.RESULT:
            return {
                ...state,
                result: state.result.concat(state.counter) 
            
            }
     
default : return state
      }
    

}


export default reducer