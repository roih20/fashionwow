"use server";

import {
  findUserByEmail,
  findUserByUsername,
  getUserByEmail,
  getUserIdByUsername,
  insertComment,
  insertPost,
  insertUser,
} from "@app/utils/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import fs from "node:fs/promises";
import { use } from "react";

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

export async function createPost(prev: any, formData: FormData) {
  try {

    const session = cookies().get("user")

    const user = session && JSON.parse(session.value)

    const userId = await getUserIdByUsername(user.username)

    const title = formData.get('title') as string
    const transmogUrl = formData.get('transmogUrl') as string
    const filePath = formData.get('filePath') as string


    await insertPost(title, transmogUrl, filePath, userId)

    console.log('Post uploaded successfully', {
      title,
      transmogUrl,
      filePath,
      userId
    })

  } catch (error) {
    if (error instanceof Error)
      return {
        message: error.message,
      };
  }

  revalidatePath('/')
}

export async function createComment(postId: number, formData:  FormData) {
  // Create comment logic
  try {
    const session = cookies().get("user")
    
    if (session) {
      const user = JSON.parse(session.value)
      const commentText = formData.get("comment") as string
      await insertComment(commentText, user.id , postId)
    }


  } catch (error) {
    if (error instanceof Error) { console.log(error.message) }
  }

  revalidatePath("/")
}


export async function logOut() {
  cookies().delete("user");
  revalidatePath("/");
  redirect("/");
}

