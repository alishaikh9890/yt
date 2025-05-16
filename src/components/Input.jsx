import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import db from '../firebase';
import { v4 as uuidv4 } from 'uuid';

const Input = () => {

    const [input, setInput] = useState({email:"", password:""})

    function handleInput(e){
        
        const {name,value} = e.target;
        setInput({...input, [name]:value})
    }

   async function handleSubmit(){

    try {
        const res = await setDoc(doc(db, "User", uuidv4()),input)
        // console.log(input)
        const data = await res.data();
        console.log(data)

    } catch (error) {
        console.log(error.code)
        console.log(error.message)
    }
    }

    useEffect(()=>{
        getDocs(collection(db, "User"))
        .then((res) => res.docs.map(doc=>doc.data()))
        .then((res)=>console.log(res))
    },[input])

  return (
    <div>
    <div>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={(e)=>handleInput(e)} />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>handleInput(e)} />
    </div>
    <button type="submit"  onClick={handleSubmit} className="btn btn-primary">Submit</button>
  </div>
    </div>
  )
}

export default Input