const redux=require('redux')

const createStore=redux.createStore

const initialState= {
    counter: 0
}
const rootReducer = (state = initialState ,action)=>{
if(action.type==='INCREMENT')
return{
    ...state ,
    counter:state.counter + 1
}
else if (action.type==='ADD')
{
    return{
    ...state ,
    counter:state.counter + action.value}
}
return state

}
const store=createStore(rootReducer)

//console.log(store.getState());

store.dispatch({
    type: 'INCREMENT' 


})

store.dispatch({
    type: 'ADD' , value:2


})

console.log(store.getState())