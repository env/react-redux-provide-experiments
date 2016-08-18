import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'react-redux-provide/lib/install';

// ========================================================
// Developer Tools Setup
// ========================================================
// if (__DEBUG__) {
//   if (window.devToolsExtension) {
//     window.devToolsExtension.open()
//   }
// }

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

import defaultProps from 'defaultProps';

let render = () => {
  ReactDOM.render(
    <App
      {...defaultProps}
    />,
    MOUNT_NODE
  )
}

// This code is excluded from production bundle
// if (__DEV__) {
//   if (module.hot) {
//     // Development render functions
//     const renderApp = render
//     const renderError = (error) => {
//       const RedBox = require('redbox-react').default

//       ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
//     }

//     // Wrap render in try/catch
//     render = () => {
//       try {
//         renderApp()
//       } catch (error) {
//         renderError(error)
//       }
//     }

//     // Setup hot module replacement
//     // module.hot.accept('./routes/index', () => {
//     //   setTimeout(() => {
//     //     ReactDOM.unmountComponentAtNode(MOUNT_NODE)
//     //     render()
//     //   })
//     // })
//   }
// }

// ========================================================
// Go!
// ========================================================
render()
