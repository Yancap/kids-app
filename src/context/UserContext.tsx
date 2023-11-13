import { Children, createContext, ReactNode, useState } from "react";

interface User {
    type: string;
    name: string;
    password: string;
}

interface UserContextValues {
    user: User;
    setUser:  React.Dispatch<React.SetStateAction<User>>;
}

export const UserContext = createContext<UserContextValues>({} as UserContextValues)

export const UserProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<User>({} as User);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}