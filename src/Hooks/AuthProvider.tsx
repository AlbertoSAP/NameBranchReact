import { useEffect, useState } from "react";
import { authContext } from "./AuthContext";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
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

interface AuthProviderProps {
  children: React.JSX.Element | React.JSX.Element[];
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
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
      const { user } = await signInWithEmailAndPassword(
        auth,
        state.email,
        state.password
      );

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


  useEffect(() => {
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
  }, [trigger]);

  return (
    <authContext.Provider value={{ state, setState, setTrigger, trigger }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
