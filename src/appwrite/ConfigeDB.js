import confige from "../confige/confige";
import { Client, Databases, Query, Storage, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(confige.appwriteUrl)
      .setProject(confige.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        confige.appwriteDatabaseId,
        confige.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return this.databases.updateDocument(
        confige.appwriteDatabaseId,
        confige.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        confige.appwriteDatabaseId,
        confige.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        confige.appwriteDatabaseId,
        confige.appwriteCollectionId,
        slug
      );
    } catch (error) {
      throw error;
    }
  }

  async getposts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        confige.appwriteDatabaseId,
        confige.appwriteCollectionId,
        queries
      );
    } catch (error) {
      throw error;
    }
  }

  async uploadfost(file) {
    try {
      return await this.bucket.createFile(
        confige.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      throw error;
      return false;
    }
  }

  async deletefile(fileId){
    try {
        return await this.bucket.deleteFile(
            confige.appwriteBucketId,
            fileId
        )
    } catch (error) {
        throw error;
        return false
    }
  }

  getFilePreview(fileId){
    return this.bucket.getFilePreview(
        confige.appwriteBucketId,
        fileId
    )
  }
}

export default Service;
