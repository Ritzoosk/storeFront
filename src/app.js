import { Provider } from "react-redux";
import React from 'react';
import Header from './components/header.js';
import store from './store';
import Footer from './components/footer.js';

function App() {
  return (
    <Provider store={store}>
      <Header/>

      <Footer/>
    </Provider>
  )
}
export default App;