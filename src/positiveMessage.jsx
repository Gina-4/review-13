import { useState, useEffect } from "react";


function PositiveMessage({goal, totalFruits}) {
  const [message, setMessage] = useState('');

useEffect(() => {
if (totalFruits >= goal) {
  setMessage("Congratulations! You have reached your goal")
} else if (totalFruits === 0) {
  setMessage ("Lets start getting healthy")
}
else if (totalFruits < goal) {
  setMessage (`Keep going! ${goal - totalFruits} to go!`) 
} else {
  setMessage("Let's start getting healthy")
}

}, [goal, totalFruits])
return (
      <>
      <h2>Daily Goal: {goal}</h2>
      <p>Progress: {totalFruits}</p> 
      <p><strong>{message}</strong></p>
      </>
    
);

}
export default PositiveMessage;
