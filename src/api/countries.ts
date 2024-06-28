import axios from "axios";
import {TCountry} from "../types/country.ts";

export const getCountries = async () :Promise<TCountry[]> => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
}
