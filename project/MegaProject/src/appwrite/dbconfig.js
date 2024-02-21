import config from "../../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class DBService {
    client = new Client();
    database;
    storage;

    constructor() {
        this.client.setEndpoint(config.appWriteUrl).setProject(config.projectId);
        this.database = new Databases(this.client);
        this.storage = new Storage(this.client);
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

            await this.database.deleteDocument(slug){
                config.databaseId,
                    config.collectionId,
                    slug
            }
            return true;

        } catch (error) {
            console.log(`Delete Post :: Error ${error}`);
            return false
        }
    }






}

const dbservice = new DBService();

export default dbservice;
