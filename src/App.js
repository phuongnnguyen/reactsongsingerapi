import React from 'react';
import Songs from './components/Songs';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import './w3.css';
import './App.css';
const client = new ApolloClient({
	uri: "https://songsingerapi.herokuapp.com/graphql/"
});

function App() {
  return (
	<ApolloProvider client={client}>
    	<div className="App w3-teal">
	  		<h2 className="w3-center">Song & Singer API</h2>
	  		<Songs/>
    	</div>
	</ApolloProvider>
  );
}

export default App;
