import axios from "axios";
import { FormValues } from "../types/userTypes";

const API = axios.create({
  baseURL: "https://expensetracker-be.herokuapp.com",
});

export default API;
