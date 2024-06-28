import styled from "styled-components";
import {useEffect, useState} from "react";
import { TCountry} from "../../types/country.ts";
import {getCountries} from "../../api/countries.ts";
import CountryItem from "../CountryItem/CountryItem.tsx";

const CountryItemList = () => {
    const [countries, setCountries] = useState<TCountry[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<TCountry[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
              const data: TCountry[] = await getCountries();
              setCountries(data)
            } catch (error) {
                console.log('@@ error', error)
            }
        }
        fetchCountries()
    }, []);
    
    console.log('@@ countries', countries)
    const handleSelectedCountry = (country: TCountry):void => {
        if (selectedCountry.includes(country)) {
            setSelectedCountry(selectedCountry.filter((c) => c !== country))
            return
        } else {
            setSelectedCountry([...selectedCountry, country])
        }
    }

    return (
        <>
            <ItemListTitle>Favourite Countries</ItemListTitle>
            <Container>
                {selectedCountry.map((country: TCountry) => <CountryItem key={country.name.common} country={country} handleSelectedCountry={handleSelectedCountry} />)}
            </Container>
            <ItemListTitle>Countries</ItemListTitle>
            <Container>
                {countries.map((country: TCountry) => <CountryItem key={country.name.common} country={country} handleSelectedCountry={handleSelectedCountry}/>)}
            </Container>
        </>

    )
}

const ItemListTitle = styled.h1`
    font-size: 38px;
    font-weight: bold;
    margin-bottom: 60px;
`
const Container = styled.ul`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
`;


export default CountryItemList