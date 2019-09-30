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
    Data: []
}


function handleAddItem(state, payload){
    return {
       ...state,
       data: payload.item
    }
}

function handleDeleteAllItem(state){
    return {
       ...state,
       data: []
    }
}

const ACTION = {
    'AUCTION/ADD_ITEM': handleAddItem,
    'AUCTION/DELETE_ITEM': handleDeleteAllItem
}

export const addItem = makeActionCreator('AUCTION/ADD_ITEM', 'item')
export const deleteAllItem = makeActionCreator('AUCTION/DELETE_ITEM')

export default function users(state = INITIAL_STATE, action) {
    const handler = ACTION[action.type];
    state = action.type === ACTION.RESET_STATE ? INITIAL_STATE : state;
    return handler ? handler(state, action) : state;
}