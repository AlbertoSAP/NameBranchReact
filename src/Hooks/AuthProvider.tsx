import { useEffect, useState } from "react";
import { authContext } from "./AuthContext";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../FBConfig/firebasecc";
import { useNavigate } from "react-router-dom";

export interface IUser {
  name?: string;
  lastName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface IAuth {
  nickName: string,
  fullName: string,
  loginStatus: boolean,
}

interface AuthProviderProps {
  children: React.JSX.Element | React.JSX.Element[];
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {


  const [authInfo, setAuthInfo] = useState<IAuth>({
    nickName: '',
    fullName: '',
    loginStatus: false
  })

  // state User
  const [state, setState] = useState<IUser>({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [trigger, setTrigger] = useState({
    dispatch: false,
    action: "",
  });

  const navigate = useNavigate();

  const updateUserInfo = async () => {

    try {
      await updateProfile(auth.currentUser ?? ({} as User), {
        displayName: `${state.name} ${state.lastName}`,
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const login = async () => {
    try {
      const loginInfo = await signInWithEmailAndPassword(
        auth,
        state.email,
        state.password
      );
       setPersistence(auth, browserSessionPersistence).then(()=>{
        return loginInfo
       }).catch((err)=>{
        console.log(err);
        
       })

       const {user} = loginInfo

      const [name, lastName] = user.displayName?.split(" ") ?? [];
      const firstCharacterOfTheLastName = (name ?? "").charAt(0).toLowerCase();
      const nickname = `${firstCharacterOfTheLastName}${(
        lastName ?? ""
      ).toLowerCase()}`;

      localStorage.setItem(
        "session",
        JSON.stringify({
          email: user.email,
          nickname: nickname,
          name: `${name} ${lastName}`,
        })
      );
      navigate("app/create-branch");
      setTrigger({
        action: "",
        dispatch: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const registrantUser = async () => {
    try {
      const infoUser = await createUserWithEmailAndPassword(
        auth,
        state.email,
        state.password
      );

      const stateUpdate = await updateUserInfo();
      const firstCharacterOfTheLastName = (state.name ?? "")
        .charAt(0)
        .toLowerCase();
      const nickname = `${firstCharacterOfTheLastName}${(
        state.lastName ?? ""
      ).toLowerCase()}`;
      if (stateUpdate) {
        localStorage.setItem(
          "session",
          JSON.stringify({
            email: infoUser.user.email,
            nickname: nickname,
            name: `${state.name} ${state.lastName}`,
          })
        );
      }
      navigate("app/create-branch");
      setTrigger({
        action: "",
        dispatch: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getUserInfo = () => {
    console.log(auth.currentUser, 'get');

    const localInfo = localStorage.getItem('session')

    if (!!localInfo) {
      const { name, nickName } = JSON.parse(localInfo) as { name: string, email: string, nickName: string }
      setAuthInfo({
        nickName,
        fullName: name,
        loginStatus: true
      })
    } else {
      setAuthInfo({
        nickName: '',
        fullName: '',
        loginStatus: false
      })
    }
  }

  const logout = async () => {
    await signOut(auth)
    localStorage.clear()
    setAuthInfo({
      nickName: '',
      fullName: '',
      loginStatus: false
    })
  }

  useEffect(() => {
    getUserInfo()
    if (!!trigger.dispatch) {
      switch (trigger.action) {
        case "login":
          login();
          break;

        default:
          registrantUser();
          break;
      }
    }
  }, [trigger]); // mejora este carga de dependencias

  return (
    <authContext.Provider value={{ state, authInfo, setState, setTrigger, trigger, logout }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
