import { useState } from "react";
import { useQuery } from '@tanstack/react-query'

import { useParams, useNavigate, json } from "react-router-dom";
import Carousel from './../components/Carousel';
import Loader from './../components/Loader';
import usePet from "../../hooks/usePet";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const petQuery = usePet(id);
  let pet = petQuery?.data?.pets[0];
  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
  return (
    <div className="details">
        {petQuery.isLoading && (
      <div className="loader-container">
        <Loader />
      </div>
    )}
      {petQuery.isError && <span>{petQuery.error.message}</span>}
      {petQuery.data && (
 
        <div>
          <Carousel images={pet.images} />
          <h1>{pet.name}</h1>
          <h2>{`${pet.animal} - ${pet.breed} -${pet.city} -${pet.state}`}</h2>
          <button>
            {`Adopt ${pet.name}`}
          </button>
          <p>{pet.description}</p>
          {/* <img src={pet.images?pet.images[0]:hero} alt={pet.name}  /> */}
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Details;
