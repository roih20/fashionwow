"use server";

import {
  findUserByEmail,
  findUserByUsername,
  getUserByEmail,
  insertUser,
} from "@app/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function singUp(prevState: any, formData: FormData) {
  try {
    const username = formData.get("username") as string;
    const usernameFound = await findUserByUsername(username);

    if (usernameFound) throw new Error("Username already exists");

    const email = formData.get("email") as string;
    const emailFound = await findUserByEmail(email);

    if (emailFound) throw new Error("Email already exists");

    const password = formData.get("password") as string;

    await insertUser(username, email, password);
  } catch (error) {
    if (error instanceof Error)
      return {
        message: error.message,
      };
  }

  revalidatePath("/");
  redirect("/");
}

export async function signIn(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const emailFound = await findUserByEmail(email);

    if (!emailFound) throw new Error("Incorrect Email");

    const user = await getUserByEmail(email);

    const password = formData.get("password") as string;

    const matchPassword = user?.password === password ? true : false;

    if (!matchPassword) throw new Error("Incorrect password");

    cookies().set("user", JSON.stringify(user));
  } catch (error) {
    if (error instanceof Error)
      return {
        message: error.message,
      };
  }

  revalidatePath("/");
  redirect("/");
}

export async function insertPost(prev: any, formData: FormData) {
  try {
    const session = cookies().get("user");
    const userSession = session ? JSON.parse(session.value) : undefined;
    const { email } = userSession;

    const user = await getUserByEmail(email);

    const title = formData.get("title") as string;
    const wowheadUrl = formData.get("url") as string;
    const fileImage = formData.get("fileImage");

    
    // Upload image logic
  } catch (error) {
    if (error instanceof Error)
      return {
        message: error.message,
      };
  }
}

export async function createComment(prev: any, formData: FormData) {
  // Create comment logic
}


export async function logOut() {
  cookies().delete("user");
  revalidatePath("/");
  redirect("/");
}
