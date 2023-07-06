import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';






    export default function Home() {
      const [message, setMessage] = useState('');

      const handleSendMessage = async () => {
        try {
          const response = await fetch('https://www.hackercoop.dev/api/boop', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
          });

          if (response.ok) {
            console.log('Message sent successfully!');
          } else {
            console.log('Failed to send message!');
          }
        } catch (error) {
          console.error('An error occurred while sending the message:', error);
        }
      };

      const handleChangeMessage = (event) => {
        setMessage(event.target.value);
      };

      return (
        <div>
          <h1>Discord Message Sender</h1>
          <input type="text" value={message} onChange={handleChangeMessage} />
          <button onClick={handleSendMessage}>Send Message</button>
        </div>
      );
    }



