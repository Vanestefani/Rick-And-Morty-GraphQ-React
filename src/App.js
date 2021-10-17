import "./styles.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import CharactersQuery from "./CharactersQuery";
import EpisodesQuery from "./EpisodesQuery";
import PlacesQuery from "./PlacesQuery";
import Menu from "./Menu";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//cliente
const client = new ApolloClient({
  //url de api
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <>
      <Router>
        <ApolloProvider client={client}>
          <Menu />
          <div class="container">
            <Switch>
              <Route path="/" exact>
                <CharactersQuery />
              </Route>
              <Route path="/episodes">
                <EpisodesQuery />
              </Route>
              <Route path="/places" exact>
                <PlacesQuery />
              </Route>
            </Switch>
          </div>
          <Footer />
        </ApolloProvider>
      </Router>
    </>
  );
}
