import React from 'react';
import { Github_API_User, Github_UserName } from '../utils/constants';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'Default',
        avatar_url:
          'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg',
      },
    };
    // console.log(this.props.name + ' Child constructor');
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log(this.props.name + ' Child render');
    return (
      <div className='user-card'>
        <img className='profile' src={avatar_url} alt='profile image' />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @erkranti</h4>
      </div>
    );
  }
}

export default UserClass;
