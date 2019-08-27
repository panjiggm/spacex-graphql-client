import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import Launches from './components/Launches'
import Launch from './components/Launch'

const client = new ApolloClient({
  uri: 'http://localhost:9000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src="/images/spacex.png" alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto' }} />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
