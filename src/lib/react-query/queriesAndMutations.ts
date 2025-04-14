import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";

import { INewPost, INewUser } from "@/types";
import {
  createPost,
  createUserAccount,
  signInAccount,
  signOutAccount,
} from "@/lib/appwrite/api";


// Initalize a new mutation function so that React query knows when we are creating a user

export const useCreateAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};

export const useSignOutAccount = () => {
  return useMutation({ mutationFn: signOutAccount });
};


export const useCreatePost = () => {
 

  return  useMutation({
    mutationFn: (post: INewPost) => createPost(post),
    
  });
}