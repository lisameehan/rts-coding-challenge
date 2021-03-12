import React from 'react'
import './App.css';
import { Provider } from 'react-redux'

import Posts from './components/Posts'
import Postform from './components/Postform'
import SearchHistory from './components/SearchHistory'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header><h1>Search Hacker News</h1></header>
        <Postform />
        <section class="searchMain">
        <Posts />
        <SearchHistory />
        </section>
      </div>
    </Provider>
  );
}

export default App;
