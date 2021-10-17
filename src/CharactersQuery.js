import { useQuery, gql } from "@apollo/client";
//query graphql
function Consulta() {
  const { loading, error, data } = useQuery(gql`
    {
      characters {
        results {
          id
          name
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.characters.results.map(({ id, name }) => (
    <div key={id}>
      <p>{name}</p>
    </div>
  ));
}

export default function CharactersQuery() {
  return (
    <>
      <h1>Personajes de Rick And Morty</h1>
      <Consulta />
    </>
  );
}
