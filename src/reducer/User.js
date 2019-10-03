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
   username: "",
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
 
 
const ACTION = {
   'AUCTION/ADD_USERNAME': handleAddUsername,
   'AUCTION/LOG_OUT': handleLogOut
}
 

export const addUserName = makeActionCreator('AUCTION/ADD_USERNAME', 'user')
export const logOut = makeActionCreator('AUCTION/LOG_OUT')
 
export default function users(state = INITIAL_STATE, action) {
   const handler = ACTION[action.type];
   state = action.type === ACTION.RESET_STATE ? INITIAL_STATE : state;
   return handler ? handler(state, action) : state;
}