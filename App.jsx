import React from 'react';
import { useState } from 'react';

const App=()=>{
    let newTime=new Date().toLocaleTimeString();  //this statement gets the time...
    const[ctime,setCtime]=useState(newTime);

    //this function updates time on click...
    const  UpdateTime=()=>{
        let newCTime=new Date().toLocaleTimeString();
        setCtime(newCTime);
    }

    //This will show the updated time...
    setInterval(UpdateTime,1000);

    return(
        <>
        <h1>{ctime}</h1>
        </>
    );
}

export default App;

