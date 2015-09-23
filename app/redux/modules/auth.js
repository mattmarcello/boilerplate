const LOAD = "LOAD";

const initialState = {
  loaded: false
}

export default function auth(state = initialState, action ) {
  switch(action.type) {
    case LOAD:
       return {
         ...state,
         loading: true
       }
    default:
      return state;
  }
}

