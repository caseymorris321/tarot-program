import React, { useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  useEffect(() => {
    // Make the HTTP request
    axios.get('https://api.example.com/data')
      .then(response => {
        // Handle the response data
        console.log(response.data);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  }, []);

  return <div>My Component</div>;
}

export default MyComponent;
