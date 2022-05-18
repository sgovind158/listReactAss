import React from 'react';
import styles from './simpleList.module.css'

function SimpleList(){
    return (
        <>
        <h2>Mobile Operating System</h2>
        <ul className = {styles.list}  >
            <li>Android</li>
            <li>Blackberry</li>
            <li>iPhone</li>
            <li>Windows Phone</li>
        </ul>

        <h2>Mobile Manufatring</h2>
        <ul className = {styles.list}  >
            <li>Samsung</li>
            <li>HTC</li>
            <li>Micromax </li>
            <li className={styles.circle}>Apple</li>
        </ul>
        </>
    );
}

export default SimpleList