import { useQuery, gql } from "@apollo/client";
//query graphql
function Consulta() {
  const { loading, error, data } = useQuery(gql`
    {
      locations {
        results {
          id
          name
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.locations.results.map(({ id, name }) => (
    <div key={id}>
      <p>{name}</p>
    </div>
  ));
}

export default function PlacesQuery() {
  return (
    <>
      <h1>Places</h1>
      <Consulta />
    </>
  );
}
