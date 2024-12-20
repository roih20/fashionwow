import { sql } from "../db";
import { Post, User } from "./types";

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
    if (error instanceof Error) console.log(error.message);
  }
}

export async function insertPost(
  title: string,
  url: string,
  filePath: string,
  userId: number
) {
  try {
    await sql(
      "INSERT INTO posts (post_title, wowhead_url, file_path, user_id) VALUES ($1, $2, $3, $4)",
      [title, url, filePath, userId]
    );
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

export async function findUserByEmail(email: string) {
  try {
    const response = await sql("SELECT * FROM users WHERE email = $1", [email]);
    return response.length === 0 ? false : true;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

export async function findUserByUsername(username: string) {
  try {
    const response = await sql("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    return response?.length === 0 ? false : true;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

export async function findUserById(id: string) {
  try {
    const response = await sql("SELECT * FROM users WHERE id = $1", [id]);
    return response.length === 0 ? false : true;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

export async function getUserByEmail(email: string) {
  try {
    const user = await sql(
      "SELECT id, username, email, password FROM users WHERE email = $1",
      [email]
    );
    return user[0];
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

export async function getUserIdByUsername(username: string) {
  try {
    const user = await sql("SELECT id FROM users WHERE username = $1", [
      username,
    ]);
    return user[0].id;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

export async function getUserPosts(userId: number) {
  try {
    const posts = await sql(
      `SELECT p.post_id, p.user_id, p.post_title, p.posting_date, p.wowhead_url, p.file_path, u.username 
       FROM posts p INNER JOIN users u ON u.id = p.user_id 
       WHERE p.user_id = $1 ORDER BY p.posting_date DESC`,
      [userId]
    );
    return posts;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

export async function getUserId() {}

export async function getUserComments(userId: number) {
  try {
    const comments = await sql(
      `SELECT c.comment_id, c.user_id, c.comment_text, c.comment_date, p.post_id, p.post_title 
       FROM post_comments c INNER join posts p ON p.post_id = c.post_id 
       WHERE c.user_id = $1 ORDER BY c.comment_date DESC`,
      [userId]
    );
    return comments;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

export async function getUsersByUsername(term: string) {
  try {
    if (!term) return [];

    const users = await sql(
      `SELECT username FROM users WHERE username LIKE $1`,
      [`${term}%`]
    );
    return users;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

export async function getAllPosts() {
  try {
    const posts = await sql(
      `SELECT p.post_id, p.user_id, p.post_title, p.posting_date, p.wowhead_url, p.file_path, u.username 
       FROM posts p INNER JOIN users u ON u.id = p.user_id ORDER BY p.posting_date DESC`
    );
    return posts;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

export async function getPostById(postId: number) {
  try {
    const post = await sql(
      `SELECT p.post_id, p.user_id, p.post_title, p.posting_date, p.wowhead_url, p.file_path, u.username 
       FROM posts p INNER JOIN users u ON u.id = p.user_id WHERE p.post_id = $1`,
      [postId]
    );
    return post[0];
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

export async function deletePostById(postId: number) {
  try {
    await sql(`DELETE FROM posts WHERE post_id = $1`, [postId]);
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

export async function getPostComments(postId: number) {
  try {
    const comments = await sql(
      `SELECT c.comment_id, c.user_id, c.comment_text, c.comment_date, u.username
       FROM post_comments c INNER JOIN users u ON u.id = c.user_id 
       WHERE c.post_id = $1 ORDER BY c.comment_date DESC`,
      [postId]
    );
    return comments;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

export async function getNumberOfCommentsByPost(postId: number) {
  try {
    const totalComments = await sql(
      `SELECT COUNT(*) AS total_comments FROM post_comments WHERE post_id = $1`,
      [postId]
    );
    return totalComments[0].total_comments;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

export async function insertComment(
  commentText: string,
  userId: number,
  postId: number
) {
  try {
    await sql(
      "INSERT INTO post_comments (comment_text, user_id, post_id) VALUES ($1, $2, $3)",
      [commentText, userId, postId]
    );
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

export async function deletePostCommentById(commentId: number) {
  try {
    await sql("DELETE FROM post_comments WHERE comment_id = $1", [commentId]);
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

export async function updatePostCommentById(
  comment: string,
  commentId: number
) {
  try {
    await sql(
      `UPDATE post_comments SET comment_text = $1 WHERE comment_id = $2`,
      [comment, commentId]
    );
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
