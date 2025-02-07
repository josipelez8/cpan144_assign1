import React, { useState } from 'react';

const BasicHTML = ({ green }) => {
  // text vis
  const [isVisible, setIsVisible] = useState(false);

  const textColor = green ? 'green' : 'black';  // Conditional color

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  // form submission
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // handle 'submitting' data
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') {
      setMessage('Input cannot be empty.');
    } else {
      setMessage('Form submitted successfully!');
    }
  };

  // renders the button, input and text with a color modifier
  return (
    <div style={{ color: textColor }}>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <div>This is the toggled content!</div>}
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something"
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
      <br></br>
      <br></br>

    </div>
  );
};

export default BasicHTML;