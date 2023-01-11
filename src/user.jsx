import React, { useState, useContext, createContext } from 'react';

export function User(){
  
  const UserContext = createContext();

  function Component1() {
    const [user, setUser] = useState('Jesse Hall');
  
  
    return (
      <UserContext.Provider value={user}>
        <p>{`Hello, user: ${user}`}</p>
        <Component2 />
      </UserContext.Provider>
    );
  }

  function Component2(){
    return (
      <>
        <p>Component 2</p>
        <Component3 />
      </>
    )
  }

  function Component3(){
    return (
      <>
        <p>Component 3</p>
        <Component4 />
      </>
    )
  }

  function Component4(){
    return (
      <>
        <p>Component 4</p>
        <Component5 />
      </>
    )
  }

  function Component5(){
    const user = useContext(UserContext);
    
    return (  
      <>
        <p>Component 3</p>
        <p>{`Hello ${user} again!`}</p>
      </>
    )
  }

  return (
    <Component1 />
  );
}