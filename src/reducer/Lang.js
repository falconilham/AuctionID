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
    language: "english"
}


function handleLanguage(state, payload){
    return {
       ...state,
       language: payload.item
    }
}


const ACTION = {
    'AUCTION/LANGUAGE': handleLanguage
}

export const bahasa = makeActionCreator('AUCTION/LANGUAGE', 'item')

export default function users(state = INITIAL_STATE, action) {
    const handler = ACTION[action.type];
    state = action.type === ACTION.RESET_STATE ? INITIAL_STATE : state;
    return handler ? handler(state, action) : state;
}