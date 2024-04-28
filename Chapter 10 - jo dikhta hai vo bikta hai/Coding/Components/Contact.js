import { useContext, useEffect } from "react";
import {data, data1} from '../App'

const Contact = () => {
  const name = useContext(data)
  const gender = useContext(data1)
  useEffect(()=> {
    console.log('without dependency')
  },[])

  return (
    <div>
      <h1>Contact us</h1>
      <h1>My name is {name} and My gender is {gender}</h1>
    </div>
  );
};

export default Contact;
