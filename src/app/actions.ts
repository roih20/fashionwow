"use server";

import { sql } from '@/app/db'

export async function singUp(formData: FormData) {
  await sql`CREATE TABLE IF NOT EXISTS users (
  id varchar(255) primary key,
  username varchar(255) unique not null,
  email varchar(255) unique not null,
  password varchar(255) not null
  )`;
  const id = "asdasd-adadd-2dsa";
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  await sql(
    "INSERT INTO  users (id, username, email, password) VALUES ($1, $2, $3, $4) ",
    [id, username, email, password]
  );
}
