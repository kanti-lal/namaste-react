import UserClass from './UserClass';
import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log('Parent Constructor');
  }

  componentDidMount() {
    // console.log('Parent ComponentDidMount');
  }

  render() {
    // console.log('Parent render');
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web series</h2>
        {/**
       <User
         name={'Kranti Jangid (Function)'}
         location={'Ahmedabad (function)'}
       />
      */}
        <UserClass
          name={'First'}
          location={'Ahmedabad (class)'}
          avatar_url=''
        />
      </div>
    );
  }
}

{
  // How render method works (** Important )
  /**
- Parent Constructor
- Parent render

    - First child constructor
    - First child render

    - Second child constructor
    - Second child render
    
  <DOM IS UPDATED - IN SINGLE BATCH>

    - First child component didMount
    - Second child componet didMount

- Parent component didMount

*/
}

export default About;
