import 'babel-polyfill'
// import localforage from 'redux-replicate-localforage';
import { counter, counterList } from 'providers/index'

// const hasLocalStorage = typeof localStorage !== 'undefined'; // so tests pass

export default {
  providers: {
    counter,
    counterList
  }
};
