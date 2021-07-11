import TodoList from "./Page/TodoList";
import GlobalStyle from "./Page/GlobalStyle/GlobalStyle";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <GlobalStyle />
        <TodoList />
      </div>
    </ApolloProvider>
  );
}

export default App;
