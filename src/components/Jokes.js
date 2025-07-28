import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Joke = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      // For Docker, 'host.docker.internal' is a special DNS name
      // that resolves to the internal IP address of the host machine.
      const apiUrl = 'http://typeface-be:8080/joke';

      try {
        const response = await axios.get(apiUrl);
        setJoke(response.data);
      } catch (error) {
        console.error('Error fetching the joke:', error);
        setJoke('Could not fetch a joke. Is the backend running?');
      }
    };

    fetchJoke();
  }, []);

  return (
    <div>
      <h1>Here's a joke for you:</h1>
      <p>{joke}</p>
    </div>
  );
};

export default Joke;
