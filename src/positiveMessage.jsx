import { useState, useEffect } from "react";
const [goal, setGoal] = useState('');
const [totalFruits, setTotalFruits] = useState('');
const [message, setMessage] = useState('');

function positiveMessage(props) {
return (

        <div style={{ marginTop: '20px' }}>
          <h2>Daily Goal: {goal.props}</h2>
          <p>Progress: {totalFruits.props}</p>
          <p><strong>{message.props}</strong></p>
        </div>
    );
}
export default positiveMessage;