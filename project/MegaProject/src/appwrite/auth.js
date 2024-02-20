import config from "../../config/config.js";
import { Client, Account, ID } from 'appwrite'

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.projectId)

        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                // Call Another Method To Loging Account Direct
                return this.login({ email, password })
            } else {
                return userAccount
            }
        } catch (error) {
            console.log(`Create account :: Error ${error}`);
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password)

        } catch (error) {
            console.log(`Login :: Error ${error}`);
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log(`Logout :: Error ${error}`);
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log(`getCurrentUser :: Error ${error}`);
        }
    }
}
const authService = new AuthService();
export default authService;
