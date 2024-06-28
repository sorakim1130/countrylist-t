import styled from "styled-components";
import {TCountry} from "../../types/country.ts";

interface CountryITemProps {
    country: TCountry;
    handleSelectedCountry: ( country: TCountry) => void;
}
const CountryItem = ({country, handleSelectedCountry}:CountryITemProps) => {

  return (
    <Container onClick={() => handleSelectedCountry(country)}>
        <img src={country.flags.svg} alt={country.flags.alt}/>
        <h1>{country.name.official}</h1>
        <h2>{country.capital}</h2>
    </Container>
  )
}

const Container = styled.li`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-radius: 8px;   
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    cursor: pointer;
  
    img {
      width: 120px;
      height: 120px;
    }
`;


export default CountryItem