import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import './Comics/Comics.css';

export default function Comics() {

        useEffect(() => {
            fetchItems();
        }, []);

    const [characters, setCharacters] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'http://gateway.marvel.com/v1/public/characters?ts=1621881645&apikey=ebdeb55d53ecc6709426269c1331c663&hash=ef7a9359ab0278556690718d66cf527c'
        );
        const items = await data.json();
        console.log(items.data.results);
        setCharacters(items.data.results);
    }
    return (
        <div className="backgroundMarvel">
            <Navbar />
            <ul className="gridContainer">
                {characters.map(item => (
                    <li className="gridItem">
                            <div className="imgContainer">
                                <img key="img" src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt=""/>
                            </div>
                            <h4 key={item.name}>{item.name}</h4>
                    </li>
                ))}
            </ul>
        </div>

    )}
