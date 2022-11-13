import { useState, useEffect } from "react";
import useBreedList from "../../hooks/useBreedList";
import Pet from "../components/Pet";
import Results from "../components/Results";
import ErrorBoundary from './../components/ErrorBoundery';
import usePetsSearch from './../../hooks/usePetsSearch';

const SearchParams = () => {
  const Animals = ["dog", "cat", "mouse", "egale"];

  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  // const [pets, setPets] = useState([]);

  const breedsQuary = useBreedList(animal);

  const breeds=breedsQuary?.data?.breeds ?? []
   
  const petsQuery=usePetsSearch({animal,location,breed});
  const pets=petsQuery?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetshPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            placeholder={"location"}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            {Animals.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            disabled={!breeds.length}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">submit</button>
      </form>
      <ErrorBoundary>
          <Results pets={pets} />
        </ErrorBoundary>
    </div>
  );
};
export default SearchParams;
