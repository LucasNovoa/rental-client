import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { extendedApiSlice } from './redux/services/apiServices'

import { store } from './redux/store/store'

import { App } from './routes/App'

store.dispatch(extendedApiSlice.endpoints.getHotels.initiate())
store.dispatch(extendedApiSlice.endpoints.getCities.initiate())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
