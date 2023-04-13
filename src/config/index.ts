import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 8000;
const BASE_URL_USERS = process.env.BASE_URL_USERS;
const BASE_URL_MOVIES = process.env.BASE_URL_MOVIES;

export const config = {
  port,
  BASE_URL_USERS,
  BASE_URL_MOVIES,
};
