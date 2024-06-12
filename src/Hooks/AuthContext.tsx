import { Dispatch, SetStateAction, createContext } from "react";
import { IUser } from "./AuthProvider";


export interface AuthContextProp{
    state:IUser,
    setState:Dispatch<SetStateAction<IUser>>
    setTrigger:React.Dispatch<React.SetStateAction<{
        dispatch:boolean,
        action:string
    }>>,
    trigger:{dispatch:boolean,
        action:string}
}

export const authContext = createContext<AuthContextProp>({} as AuthContextProp )