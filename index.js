const redux= require('redux')
const reduxlogger = require('redux-logger')

const createStore = redux.createStore
const  combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxlogger.createLogger()

const BUY_CAKE = 'BUY_CAKE' //type of action
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake(){  //action returner is function that returns an action
 return {
        type: BUY_CAKE,  //defining action: action is a object  that has a type property
        info: 'First redux action'   //another property
 }
}

function buyIcream(){
    return {
        type: BUY_ICECREAM
    }
}
// reducers tell how the apps state changes in response to actions sent to the store. Its a function that
// accepts prevstate/state and action as arguments, and returns the next state of the application

{/*const initialState = {  // state is going to be an object that has a prop
  numOfCakes: 10,    //numOfCakes is property
  numOfIceCreams: 20
}  */}

const initialCakeState ={
    numOfCakes: 10, 
}
const initialIcecreamState = {
    numOfIceCreams:20
}



{/* const reducer = (state = initialState, action) =>  {          // (prevState, action => newState)     
    switch(action.type) {    //switch happens onthe basis of action
        case BUY_CAKE: return{   //action type is buycake we return
            ...state,
       numOfCakes: state.numOfCakes - 1
       }
        case BUY_ICECREAM: return{   //action type is buy icecream we return
            ...state,
       numOfIceCreams: state.numOfIceCreams - 1
       }

       default: return state     // we are not mutating state object we return new object
    }
}  */} 

const cakeReducer = (state = initialCakeState, action) =>  {          // (prevState, action => newState)     
    switch(action.type) {    //switch happens onthe basis of action
        case BUY_CAKE: return{   //action type is buycake we return
            ...state,
       numOfCakes: state.numOfCakes - 1
       }
       default: return state     // we are not mutating state object we return new object
    }
} 
const IceCreamreducer = (state = initialIcecreamState, action) =>  {          // (prevState, action => newState)     
    switch(action.type) {    //switch happens onthe basis of action
        case BUY_ICECREAM: return{   //action type is icecream we return
            ...state,
       numOfIceCreams: state.numOfIceCreams - 1
       }
       default: return state     // we are not mutating state object we return new object
    }
} 

const rootReducer = combineReducers({
 cake: cakeReducer,
 IceCream: IceCreamreducer
})

const store = createStore(rootReducer,applyMiddleware(logger))                //accepts parameter reducer function
console.log('Initial state', store.getState())     //getstate should give intial state of app
const unsubscribe = store.subscribe( ( ) => {} )
 
 //accepts an action as parameter but we have action creator so as param we invoke action creator

store.dispatch(buyCake() ) 
store.dispatch(buyCake() ) 
store.dispatch(buyCake() )
store.dispatch(buyIcream()) 
store.dispatch(buyIcream()) 
unsubscribe()