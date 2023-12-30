import { useEffect, useState } from 'react';
import { Github_API_User, Github_UserName } from '../utils/constants';

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(2);

  useEffect(() => {}, []);

  useEffect(() => {}, [count]);
  return (
    <div className='user-card'>
      <h1>Count : {count}</h1>
      <button
        className='button'
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: @erkranti</h4>
    </div>
  );
};

export default User;
