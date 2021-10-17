import { useQuery, gql } from "@apollo/client";
//query graphql
function Consulta() {
  const { loading, error, data } = useQuery(gql`
    {
      episodes {
        results {
          id
          episode
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.episodes.results.map(({ id, episode }) => (
    <div key={id}>
      <p>{episode}</p>
    </div>
  ));
}

export default function EpisodesQuery() {
  return (
    <>
      <h1>Episodes</h1>
      <Consulta />
    </>
  );
}
