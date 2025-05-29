import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [userInfor, setUserInfor] = useState([]);
  useEffect(()=>{
    const getData = async () =>{
      const query = await fetch('http://13.61.190.228:3001/api/v1/user/health');
      const response = await query.json();
      setUserInfor(response.status);
      console.log(response.status);
    }
    getData();
  },[])

  console.log(userInfor)
 
  return (
    <div className="App">
      <header className="App-header">
        O Day Ne HAHA <br />
        {
         userInfor
        }

      </header>
    </div>
  );
}

export default App;
