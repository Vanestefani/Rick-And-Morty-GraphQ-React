import { useQuery, gql } from "@apollo/client";
//query graphql
function Consulta() {
  const { loading, error, data } = useQuery(gql`
    {
      characters {
        results {
          id
          name
          image
          status
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.characters.results.map(({ id, name, image, status }) => (
    <div key={id} className="card" class="col-4 col-md-3">
      <img src={image} className="card-img-top" alt="imagen de personaje" />
      <div class="card-body">
        <h6 class="card-title text-center">
          {name} {"  "}
          <span
            className={
              status == "Alive"
                ? "badge rounded-pill bg-success"
                : "badge rounded-pill bg-danger"
            }
          >
            {status}
          </span>
        </h6>
      </div>
    </div>
  ));
}

export default function CharactersQuery() {
  return (
    <>
      <center>
        <h1>Characters</h1>
      </center>
      <div class="row">
        <Consulta />
      </div>
    </>
  );
}
