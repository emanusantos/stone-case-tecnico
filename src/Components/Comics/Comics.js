import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Comics.css';
import Input from '../Input/Input';

export default function Comics() {

        useEffect(() => {
            fetchItems();
        }, []);

    const [comics, setComics] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchItems = async () => {
        const data = await fetch(
            'http://gateway.marvel.com/v1/public/comics?ts=1621881645&apikey=ebdeb55d53ecc6709426269c1331c663&hash=ef7a9359ab0278556690718d66cf527c'
        );
        const items = await data.json();
        console.log(items.data.results);
        setComics(items.data.results);
    }
    return (
        <div>
            <Navbar />
            <Input placeholder="Pesquise pelo título da comic" onChange={event => {setSearchTerm(event.target.value)}} />
            <ul className="gridContainer">
                {comics.filter((val) => {
                    if (searchTerm == '') {
                        return val
                    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map(item => (
                    <li className="gridItem">
                            <div className="imgContainer">
                                <img key="img" src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt=""/>
                            </div>
                            <h4 key="title">{item.title}</h4>
                    </li>
                ))}
            </ul>
        </div>

    )}
