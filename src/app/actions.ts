"use server";

import {
  deletePostById,
  deletePostCommentById,
  findUserByEmail,
  findUserByUsername,
  getUserByEmail,
  getUserIdByUsername,
  getUsersByUsername,
  insertComment,
  insertPost,
  insertUser,
  updatePostCommentById,
} from "@app/utils/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { userData } from "@utils/session";
import { InvalidEmailAddress, InvalidPassword, UsernameNotAvailable, EmailNotAvailable } from "@utils/errors";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})


export async function singUp(prevState: any, formData: FormData) {
  try {
    const username = formData.get("username") as string;
    const usernameFound = await findUserByUsername(username);

    if (usernameFound) throw new UsernameNotAvailable();

    const email = formData.get("email") as string;
    const emailFound = await findUserByEmail(email);

    if (emailFound) throw new EmailNotAvailable();

    const password = formData.get("password") as string;

    await insertUser(username, email, password);

  } catch (error) {
    if (error instanceof UsernameNotAvailable) {
      return {
        message: error.message
      }
    } else if (error instanceof EmailNotAvailable) {
      return {
        message: error.message
      }
    }
  }

  revalidatePath("/");
  redirect("/signIn");
}

export async function signIn(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const emailFound = await findUserByEmail(email);

    if (!emailFound) throw new InvalidEmailAddress();
 
    const user = await getUserByEmail(email);

    const password = formData.get("password") as string;

    const matchPassword = user?.password === password ? true : false;

    if (!matchPassword) throw new InvalidPassword();

    cookies().set("user", JSON.stringify({
      id: user?.id,
      username: user?.username,
      email: user?.email
    }));

  } catch (error) {
    if (error instanceof InvalidEmailAddress) {
      return {
        email: error.message,
        password: ''
      }
    }
    if (error instanceof InvalidPassword){
      return {
        email: '',
        password: error.message
      }
    }
  }

  revalidatePath("/");
  redirect("/");
}

export async function createPost(formData: FormData) {
  try {
    const user = userData()

    if (!user) throw new Error('You have to sign in before posting')

    const userId = await getUserIdByUsername(user.username)

    const title = formData.get('title') as string
    const transmogUrl = formData.get('transmogUrl') as string
    const image = formData.get('image') as File
    const arrayBuffer = await image.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)
    let imageUrl = ''
    await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({
        tags: ['fashion-wow']
      }, function (error, result) {
        if (error) {
          reject(error)
          return
        }
        resolve(result)
      }).end(buffer)
    }).then((result: any) => {
       imageUrl = cloudinary.url(result.public_id, {
        transformation: [
          {
            quality: 'auto',
            fetch_format: 'auto'
          },
        ]
      })
    })

    await insertPost(title, transmogUrl, imageUrl, userId)


  } catch (error) {
    if (error instanceof Error)
      console.log(error.message)
  }

  revalidatePath('/')
  redirect("/")
}

export async function createComment(postId: number, formData:  FormData) {
  // Create comment logic
  try {
   
    const user = userData()

    if (!user) throw new Error('You have to sign in before comment')

    const comment = formData.get("comment") as string

    await insertComment(comment, user.id, postId)


  } catch (error) {
    if (error instanceof Error) { console.log(error.message) }
  }

  revalidatePath(`/post/${postId}`)
}

export async function deletePost(postId: number) {
  try {
    await deletePostById(postId)
    console.log('Post deleted correctly')
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
  
  revalidatePath('/')
}

export async function updateComment(commentId: number, formData: FormData) {
  try {
    const comment = formData.get('comment') as string
    await updatePostCommentById(comment, commentId)
    console.log('Comment updated correctly')
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
  }

  revalidatePath('/')
}

export async function deleteComment(commentId: number) {
  try {
    await deletePostCommentById(commentId)
    console.log('Comment deleted correctly')
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
  }

  revalidatePath('/')
}


export async function logOut() {
  cookies().delete("user");
  revalidatePath("/");
  redirect("/");
}


export async function getSearchResult(username: string) {
  try {
    const users = await getUsersByUsername(username)
    return users
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
  }
}
