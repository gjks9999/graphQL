import admin from "firebase-admin";
import fs from "fs";
import { User, Post, Comment } from "../types/index";
import { config } from "../config/firebase";

let firebaseApp: admin.app.App;
try {
  const saPath = config.serviceAccountPath;
  if (fs.existsSync(saPath)) {
    const serviceAccount = require(saPath);
    process.env.FIREBASE_PROJECT_ID =
      process.env.FIREBASE_PROJECT_ID || serviceAccount.project_id;
    process.env.GOOGLE_CLOUD_PROJECT =
      process.env.GOOGLE_CLOUD_PROJECT || serviceAccount.project_id;
    process.env.GOOGLE_APPLICATION_CREDENTIALS =
      process.env.GOOGLE_APPLICATION_CREDENTIALS || saPath;

    firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: serviceAccount.project_id || process.env.FIREBASE_PROJECT_ID,
    });
  } else {
    firebaseApp = admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      projectId: process.env.FIREBASE_PROJECT_ID,
    });
  }
} catch (err) {
  firebaseApp = admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: process.env.FIREBASE_PROJECT_ID,
  });
}

export const db = admin.firestore();

// User operations
export async function createUser(name: string, email: string): Promise<User> {
  const userId = db.collection("users").doc().id;
  const now = new Date().toISOString();

  const user: User = {
    id: userId,
    name,
    email,
    createdAt: now,
    updatedAt: now,
  };

  await db.collection("users").doc(userId).set(user);
  return user;
}

export async function getUser(userId: string): Promise<User | null> {
  const doc = await db.collection("users").doc(userId).get();
  if (!doc.exists) return null;
  const data = doc.data() as User;
  return { ...data, id: doc.id };
}

export async function getAllUsers(): Promise<User[]> {
  const snapshot = await db.collection("users").get();
  return snapshot.docs.map((doc) => {
    const data = doc.data() as User;
    return { ...data, id: doc.id };
  });
}

export async function updateUser(
  userId: string,
  updates: Partial<User>,
): Promise<User> {
  const now = new Date().toISOString();
  const updateData = {
    ...updates,
    updatedAt: now,
  };

  await db.collection("users").doc(userId).update(updateData);
  const updated = await getUser(userId);
  return updated!;
}

export async function deleteUser(userId: string): Promise<boolean> {
  await db.collection("users").doc(userId).delete();
  return true;
}

// Post operations
export async function createPost(
  userId: string,
  title: string,
  content: string,
): Promise<Post> {
  const postId = db.collection("posts").doc().id;
  const now = new Date().toISOString();

  const post: Post = {
    id: postId,
    title,
    content,
    authorId: userId,
    createdAt: now,
    updatedAt: now,
  };

  await db.collection("posts").doc(postId).set(post);
  return post;
}

export async function getPost(postId: string): Promise<Post | null> {
  const doc = await db.collection("posts").doc(postId).get();
  if (!doc.exists) return null;
  const data = doc.data() as Post;
  return { ...data, id: doc.id };
}

export async function getAllPosts(): Promise<Post[]> {
  const snapshot = await db.collection("posts").get();
  return snapshot.docs.map((doc) => {
    const data = doc.data() as Post;
    return { ...data, id: doc.id };
  });
}

export async function getPostsByUserId(userId: string): Promise<Post[]> {
  const snapshot = await db
    .collection("posts")
    .where("authorId", "==", userId)
    .get();
  return snapshot.docs.map((doc) => {
    const data = doc.data() as Post;
    return { ...data, id: doc.id };
  });
}

export async function updatePost(
  postId: string,
  updates: Partial<Post>,
): Promise<Post> {
  const now = new Date().toISOString();
  const updateData = {
    ...updates,
    updatedAt: now,
  };

  await db.collection("posts").doc(postId).update(updateData);
  const updated = await getPost(postId);
  return updated!;
}

export async function deletePost(postId: string): Promise<boolean> {
  await db.collection("posts").doc(postId).delete();
  return true;
}

// Comment operations
export async function createComment(
  postId: string,
  userId: string,
  content: string,
): Promise<Comment> {
  const commentId = db.collection("comments").doc().id;
  const now = new Date().toISOString();

  const comment: Comment = {
    id: commentId,
    content,
    postId,
    userId,
    createdAt: now,
    updatedAt: now,
  };

  await db.collection("comments").doc(commentId).set(comment);
  return comment;
}

export async function getComment(commentId: string): Promise<Comment | null> {
  const doc = await db.collection("comments").doc(commentId).get();
  if (!doc.exists) return null;
  const data = doc.data() as Comment;
  return { ...data, id: doc.id };
}

export async function getCommentsByPostId(postId: string): Promise<Comment[]> {
  const snapshot = await db
    .collection("comments")
    .where("postId", "==", postId)
    .get();
  return snapshot.docs.map((doc) => {
    const data = doc.data() as Comment;
    return { ...data, id: doc.id };
  });
}

export async function deleteComment(commentId: string): Promise<boolean> {
  await db.collection("comments").doc(commentId).delete();
  return true;
}
