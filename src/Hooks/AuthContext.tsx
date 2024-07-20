import { Dispatch, SetStateAction, createContext } from "react";
import { IAuth, IUser } from "./AuthProvider";


export interface AuthContextProp {
    state: IUser,
    authInfo: IAuth,
    setState: Dispatch<SetStateAction<IUser>>
    setTrigger: React.Dispatch<React.SetStateAction<{
        dispatch: boolean,
        action: string
    }>>,
    trigger: {
        dispatch: boolean,
        action: string
    },
    logout:()=> void
}

export const authContext = createContext<AuthContextProp>({} as AuthContextProp)