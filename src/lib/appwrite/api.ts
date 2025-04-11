import { INewUser } from "@/types";
import {account , ID} from './config';
export async function createUserAccount(user: INewUser){
try {
    const newAccount = await account.create(ID.unique() , user.email , user.password , user.name );
    return newAccount;
} catch (error) {
    console.log('Error while creating the user ' , error);
    return error;
}
}