import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import './App.css'

import Launches from './components/Launches'

const client = new ApolloClient({
  uri: 'http://localhost:9000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img src="/images/spacex.png" alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto' }} />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
