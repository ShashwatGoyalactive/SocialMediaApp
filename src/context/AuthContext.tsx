import React, {useContext , useState , useEffect , createContext} from 'react'
import { IUser} from '@/types';
import { getCurrentUser } from '@/lib/appwrite/api';
import { useNavigate } from 'react-router-dom';

export const INITIAL_USER = {
    id: '',
    name: '',
    username: '',
    email: '',
    imageUrl: '',
    bio: '',
}

const INITIAL_STATE = {
    user : INITIAL_USER,
    isLoading : true,
    isAuthenticated : false,
    setUser  : ()=> {},
    setIsAuthenticated : ()=>{},
    checkAuthUser :async () => false as boolean,
}


type IContextType = {
    user : IUser,
    isLoading: boolean,
    setUser : React.Dispatch<React.SetStateAction<IUser>>,
    isAuthenticated : boolean,
    setIsAuthenticated : React.Dispatch<React.SetStateAction<boolean>>,
    checkAuthUser : () => Promise<boolean>,
}

const AuthContext = createContext<IContextType>(INITIAL_STATE);    


 function  AuthProvider  ({children} : {children : React.ReactElement }) {
    const [user , setUser] = useState<IUser>(INITIAL_USER);
    const [isLoading , setIsLoading] = useState<boolean>(false);
    const [isAuthenticated , setIsAuthenticated] = useState<boolean>(false);

    const navigate = useNavigate();
    const checkAuthUser = async() => {
        try {
            const currentUser = await getCurrentUser();
            if(currentUser){
               setUser({
                id : currentUser.$id,
                name : currentUser.name,
                username : currentUser.username,
                email : currentUser.email,
                imageUrl : currentUser.imageUrl,
                bio : currentUser.bio,
            });   
            }
          
            setIsAuthenticated(true);
            return true;
        } catch (error) {
            console.log(error);
            return false; // false means user is not authenticated
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        const cookieFallback = localStorage.getItem('cookieFallback');
        if (
          cookieFallback === "[]" ||
          cookieFallback === null ||
          cookieFallback === undefined
        ) {
          navigate("/sign-in");
        } 
            checkAuthUser();
    },[]);

    const value = {
        user,
        setUser,
        isLoading,
        setIsLoading,
        isAuthenticated,
        setIsAuthenticated,
        checkAuthUser,
    }

  return (
   <AuthContext.Provider value = {value}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider;
export const useUserContext = () => useContext(AuthContext);