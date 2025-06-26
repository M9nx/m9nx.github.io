import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "/src/util/user";

const UserContext = createContext<[User | undefined, Dispatch<SetStateAction<User | undefined>>]>([
  undefined,
  () => undefined,
]);

export interface UserProviderProps {
  readonly initialUser?: User;
}

export function UserProvider({ initialUser, children }: PropsWithChildren<UserProviderProps>) {
  // TODO(cvu): Handle responsibility of re-fetching person data into UserContext
  // Tech debt ticket: https://jira.sqprod.co/browse/SQCARD-2840
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (initialUser) {
      if (user) {
        throw new Error("User already set. Please use `setUser` from context to update User");
      }
      setUser(initialUser);
    }
  }, [initialUser]);

  return <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext);
