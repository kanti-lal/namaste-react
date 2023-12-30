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

  async componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log('Namaste React OP');
    // }, 1000);
    console.log(this.props.name + ' Child componentDidMount');
    // const data = await fetch(Github_API_User + Github_UserName);

    // const json = await data.json();

    // this.setState({
    //   userInfo: json,
    // });

    // console.log('🚀json:', json);
  }

  componentDidUpdate() {
    // console.log(this.props.name + ' Childcomponent didUpdate');
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    // console.log('child component will unmount');
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
