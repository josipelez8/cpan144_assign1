import { useState } from 'react';
import BasicHTML from './BasicHTML';
import Filter from './Filter';
import Hover from './Hover';

const NavigationBar = () => {
  const [selectedPage, setSelectedPage] = useState('other');
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const renderPage = () => {
    switch (selectedPage) {
      case 'basichtml':
        return <BasicHTML green={isFlipped}/>;
      case 'filter':
        return <Filter green={isFlipped}/>;
      case 'hover':
        return <Hover green={isFlipped}/>;
      default:
        return <div>Select a component!</div>;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setSelectedPage('basichtml')}>BasicHTML</button>
        <button onClick={() => setSelectedPage('filter')}>Filter</button>
        <button onClick={() => setSelectedPage('hover')}>Hover</button>
        <h1>Green Mode is: {isFlipped ? "On" : "Off"}</h1>
        <button onClick={toggleFlip}>Toggle Green Mode</button>
        <h3>-----------</h3>
      </nav>
      
      <br></br>

      <div>{renderPage()}</div>
    </div>
  );
};

export default NavigationBar;