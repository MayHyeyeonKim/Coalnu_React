import { useState } from 'react';
import './App.css';
import Box from "./component/Box/Box"

const choice = {
  rock: {
    name: "rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBQaCl9jOVTU9904_ebcPgxLBBhoPGyuLFw&s"
  },
  scissors: {
    name: "scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8stDZ0SArawe5RI4rFlPFFmfVPwt3UL1ueg&s"
  },
  paper: {
    name: "paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVafgv2Y832tDGqIpYmZkkznAXqODsTQavtpThElPtjUHlfGc8HpBPpjouonKXnMoYFyY&usqp=CAU"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null)

  const play = (userChoice) => {
    console.log("User choice: ", userChoice)
    setUserSelect(choice[userChoice])
  }

  return (
<div>
<div className='main'>
      <Box title="You" item={userSelect}/>
      {/* <Box title="Computer" /> */}
    </div>
    <div className='choice-button'>
      <button onClick={()=>play("rock")}>rock</button>
      <button onClick={()=>play("scissors")}>scissors</button>
      <button onClick={()=>play("paper")}>paper</button>

    </div>
</div>
  );
}

export default App;
