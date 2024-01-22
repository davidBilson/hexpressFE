import React from 'react'
import useStore from './useStore'

const Testzustand = () => {
    // access states and actions from store
    // const { userName, setUserName } = useStore() //you can also access a variable or function from the store through object destructuring
    const userName = useStore((initialState) => initialState.userName);
    const setUserName = useStore((initialState) => initialState.setUserName);

    const newUser = "Joseph";

    const updateUser = () => {
        setUserName(newUser);
        // alert(userName)
    }

  return (
    <div>
        <h1>Welcome {userName}</h1>
        <button onClick={updateUser} >Update user</button>
    </div>
  )
}

export default Testzustand