import config from "../../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class DBService {
    client = new Client();
    database;
    bucket;

    constructor() {
        this.client.setEndpoint(config.appWriteUrl).setProject(config.projectId);
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.database.createDocument(
                config.databaseId,
                config.collectionId,
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
            console.log(`Create Post :: Error ${error}`);
        }
    }


    async updatePost(slug, { title, content, featuredImage, status }) {

        try {

            return await this.database.updateDocument(
                config.databaseId,
                config.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )

        } catch (error) {
            console.log(`Update Post :: Error ${error}`);

        }

    }

    async deletePost(slug) {
        try {

            await this.database.deleteDocument(
                config.databaseId,
                config.collectionId,
                slug
            )
            return true

        } catch (error) {
            console.log(`Delete Post :: Error ${error}`);
            return false
        }
    }

    async getPost(slug) {
        try {

            return await this.database.getDocument(
                config.databaseId,
                config.collectionId,
                slug
            )
        } catch (error) {
            console.log(`Get Post :: Error ${error}`);
            return false
        }
    }


    async getPosts() {
        try {
            return await this.database.listDocuments(
                config.databaseId,
                config.collectionId,
                [Query.equal("status", "active")]
            )
        } catch (error) {
            console.log(`Get Posts :: Error ${error}`);
            return false
        }
    }


    // File Upload Service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.buketId,
                ID.unique(),
                file
            )

            return true
        } catch (error) {
            console.log(`Upload File :: Error ${error}`);
            return false
        }
    }


    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.buketId,
                fileId
            )
            return true
        } catch (error) {
            console.log(`Delete File :: Error ${error}`);
            return false
        }
    }

    async getFilePreview(fileId) {
        try {

            return this.bucket.getFilePreview(
                config.buketId,
                fileId
            )

        } catch (error) {

            console.log(`Get File Preview :: Error ${error}`);
            return false
        }
    }




}

const dbservice = new DBService();

export default dbservice;
