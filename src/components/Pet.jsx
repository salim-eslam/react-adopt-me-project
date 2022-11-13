  import { Link } from "react-router-dom";
  const Pet = (props)=>{
    const {id,name,location,images,animal,breed}=props

    let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
    if (images.length) {
      hero = images[0];
    }
    return(
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
        <img src={hero} alt={animal}/>
        </div>
        <div className="info">
        <h1>{props.name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        </div>
  

      </Link>
    );
  };
  export default Pet;