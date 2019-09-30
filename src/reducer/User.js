export function makeActionCreator(type, ...argNames) {
    return function(...args) {
      const action = { type }
      argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index]
      })
      return action
    }
 }
 
 const INITIAL_STATE = {
    data: [],
    username: "ilham",
 }
 
 

 function handleAddItem(state, payload){
    return {
       ...state,
       data: payload.item
    }
 }

 function handleAddUsername(state, payload){
     return {
         ...state,
         username: payload.user
     }
 }

 function handleLogOut(state){
     return {
         ...state,
         username: ""
     }
 }
 
 function handleDeleteAllItem(state){
    return {
       ...state,
       pokemon: []
    }
 }
 
 
 const ACTION = {
    'AUCTION/ADD_ITEM': handleAddItem,
    'AUCTION/DELETE_ITEM': handleDeleteAllItem,
    'AUCTION/ADD_USERNAME': handleAddUsername,
    'AUCTION/LOG_OUT': handleLogOut
 }
 
 export const addItem = makeActionCreator('AUCTION/ADD_ITEM', 'item')
 export const deleteAllItem = makeActionCreator('POKEMON/DELETE_ITEM')
 export const addUserName = makeActionCreator('AUCTION/ADD_USERNAME', 'user')
 export const logOut = makeActionCreator('AUCTION/LOG_OUT')
 
 export default function users(state = INITIAL_STATE, action) {
    const handler = ACTION[action.type];
    state = action.type === ACTION.RESET_STATE ? INITIAL_STATE : state;
    return handler ? handler(state, action) : state;
 }