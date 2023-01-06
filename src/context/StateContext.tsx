import { type } from '@testing-library/user-event/dist/type';
import React, { createContext, useContext, useState } from 'react';
import { Context } from 'vm';



type UserContextProviderProps={
  children:React.ReactNode
}

type UserContextType={
  query:string
  setQuery:React.Dispatch<React.SetStateAction<string>>;
  showSideBar:boolean
  setShowSideBar:React.Dispatch<React.SetStateAction<boolean>>
  active:string
  setActive:React.Dispatch<React.SetStateAction<string>>;
  index:string
  setIndex:React.Dispatch<React.SetStateAction<string>>;
  user:string
  setUser:React.Dispatch<React.SetStateAction<string>>;
  
}

export const MyContext = createContext<UserContextType|null>( null);

export const StateContext = ({ children }:UserContextProviderProps) => {
  const [query, setQuery] = useState<string>('');
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [active, setActive] = useState<string>('General Details');
  const [index, setIndex] = useState<string>('Users');
  const [user, setUser] = useState<string>('');

  return (
    <MyContext.Provider
      value={{
        query,
        setQuery,
        active,
        setActive,
        setIndex,
        index,
        user,
        setUser,
        showSideBar,
        setShowSideBar,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useStateContext = () => useContext(MyContext);
