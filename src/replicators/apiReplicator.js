const getInitialState = ({ key, reducerKey }, setState) => {
  console.log('getInitialState', { key, reducerKey })
  setState(2)
}

const onReady = (key, store) => {
  console.log('onReady', key, store)
}
const onStateChange = ({ key, reducerKey, queryable }, state, nextState, action, store) => {
  console.log('onStateChange', { key, reducerKey, queryable }, state, nextState, action, store)
}
const postReduction = (key, state, nextState, action, store) => {
  console.log('postReduction', key, state, nextState, action, store)
}
const handleQuery = (query, setResult) => {
  console.log('handleQuery', query, setResult)
}

export default {
  getInitialState,
  onReady,
  onStateChange,
  postReduction,
  handleQuery
}
