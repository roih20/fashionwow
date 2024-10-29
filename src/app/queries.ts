import { sql } from "./db";

export async function insertUser(
  username: string,
  email: string,
  password: string
) {
  try {
    await sql(
      "INSERT INTO  users (username, email, password) VALUES ($1, $2, $3) ",
      [username, email, password]
    );
  } catch (error) {
    if(error instanceof Error)
      console.log(error.message)
  }
}

export async function findUserByEmail(email: string) {
  try {
    const response = await sql("SELECT * FROM users WHERE email = $1", [email]);
    return response.length === 0 ? false : true;
  } catch (error) {
    if(error instanceof Error)
      console.log(error.message)
  }
}

export async function findUserByUsername(username: string) {
  try {
    const response = await sql("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    return response.length === 0 ? false : true;
  } catch (error) {
     if(error instanceof Error)
      console.log(error.message)
  }
}

export async function findUserById(id: string) {
  try {
    const response = await sql("SELECT * FROM users WHERE id = $1", [id]);
    return response.length === 0 ? false : true;
  } catch (error) {
    if (error instanceof Error)
      console.log(error.message)
  }
}

export async function getUserByEmail(email: string) {
  try {
    const user = await sql("SELECT * FROM users WHERE email = $1", [email]);
    return user[0];
  } catch (error) {
    if (error instanceof Error)
      console.log(error.message)
  }
}
