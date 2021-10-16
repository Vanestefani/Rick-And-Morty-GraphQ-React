import "./styles.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  Query,
  gql
} from "@apollo/client";
import CharactersQuery from "./CharactersQuery";
//cliente
const client = new ApolloClient({
  //url de api
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <h1>Probando GraphQl</h1>
        <CharactersQuery />
      </ApolloProvider>
    </>
  );
}
