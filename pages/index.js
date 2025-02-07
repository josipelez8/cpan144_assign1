import React from 'react';
import Home from '../components/Home';
import NavigationBar from '../components/NavigationBar';

import styles from '../styles/Home.module.css'

const App = () => {
    return (
        <div className={styles.container}>
            <Home />
            <NavigationBar />
        </div>
    );
};

export default App;