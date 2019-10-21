import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import client from './apolloClient';

class App extends Component{
  render() {
    return (
      <ApolloPrivider client={client}>
        <div className="App"/>
      </ApolloPrivider>
    )
  }
}

export default App;