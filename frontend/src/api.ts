import axios from "axios";
import { ItineraryData } from "./types";

const BASE_URL = `${process.env.REACT_APP_API_URL}`

export const generateItinerary = async (itineraryData: ItineraryData[]) => {
  const response = await axios.post(BASE_URL, { itineraryData });

  return response?.data;
}