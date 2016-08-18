// src/providers/counter.js

// import thunk from 'redux-thunk';  // for async actions
// as of v6.0, thunk middleware is no longer required
// since all providers are given their own custom thunk middleware
// which includes the provider API as a 3rd argument

const INCREMENT = 'INCREMENT';

const actions = {
  increment (by = 1) {
    return { type: INCREMENT, by }
  },

  incrementAsync (by = 1, delay = 1000) {
    return dispatch => setTimeout(
      () => dispatch(actions.increment(by)),
      delay
    )
  }
}

const reducers = {
  count (state = 0, action) {
    switch (action.type) {
      case INCREMENT:
        return state + action.by

      default:
        return state
    }
  }
}

const key = ({ props }) => props.ident
  ? `ident=${props.ident}`
  : null

export default { actions, reducers, key };
