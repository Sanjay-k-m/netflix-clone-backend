import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";
export const fetchFromTMDB = async (url) => {
  const requestHeaders = {
    accept: "application/json",
    Authorization: `Bearer ${ENV_VARS.TMDB_API_KEY}`,
  };

  try {
    const response = await axios.get(url, { headers: requestHeaders });

    if (response.status !== 200) {
      throw new Error(`Could not fetch data from TMDB: ${response.statusText}`);
    }

    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data from TMDB: ${error.message}`);
  }
};
