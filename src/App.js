
import './App.css';
import FacebookLogin from 'react-facebook-login';
import { useState } from 'react';

function App() {
  const [UserData, GetUserData] = useState({
    Name: '',
    EmailAdress: ''
  })
  const [ShowData, GetShowData] = useState(false)
  const responseFacebook = (response) => {
    if (response == null) {

    }
    else {
      GetShowData(true);
      //GetUserData.Name(response.name.value)
      const Name = response.Name;
      GetUserData.Name = Name;
      GetUserData.EmailAdress = response.mail;

      console.log(response.Name);
    }
  };
 


return (
  <div className="App">
    <br /><br />
    <FacebookLogin
      appId=""
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      //onClick={componentClicked}
      icon="fa-facebook" />
    <br /><br />
    {
      ShowData === true ? <p>Your name is: {UserData.Name}</p> : null
    }
    
  </div>


);
}

export default App;
