import { INewUser } from "@/types";
import {account, appwriteConfig, avatars, databases , ID} from './config';

// ----------------------------------------- create a user account 
export async function createUserAccount(user: INewUser){
try {
    const newAccount = await account.create(ID.unique() , user.email , user.password , user.name );
    if(!newAccount)throw Error;

    const avatarUrl =  avatars.getInitials(user.name);
    const newUser = await saveUserToDB({
        accountId : newAccount.$id,
        email : newAccount.email,
        name : newAccount.name,
        username : user.username,
        imageUrl : avatarUrl,
        });
    return newUser;
} catch (error) {
    console.log('Error while creating the user ' , error);
    return error;
}
}

// ------------------------------------------- save User to DB
export async function   saveUserToDB(user: {
    accountId: string,
    email : string,
    name: string,
    imageUrl : URL,
    username?: string,
}){

    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user,
        )
        if(!newUser)throw Error;

        return newUser;
    } catch (error) {
        console.log(error);
    }
}

