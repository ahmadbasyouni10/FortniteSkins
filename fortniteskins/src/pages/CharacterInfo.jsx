import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../client';
import './CharacterInfo.css';
import bandage from '../assets/bandage.webp';
import dead from '../assets/dead.png';
import powerful from '../assets/LLAMA.png';
import ok from '../assets/healthy.webp';

const CharacterInfo = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({id: null, title: "", health: "", description: ""});

    useEffect(() => {
        const fetchCharacter = async () => {
            const { data } = await supabase
                .from('Skins')
                .select()
                .eq('id', id)
                .single();
            setCharacter(data);
        }
        fetchCharacter();
    }, [id]);

    let healthMessage = '';
    let image = '';
    if (character.health > 100) {
        healthMessage = 'Wow, this is a powerful character!';
        image = powerful;
    } else if (character.health < 50) {
        healthMessage = 'Phew, looks like you need some bandages.';
        image = bandage;
    } else if (character.health <= 0) {
        healthMessage = '💀';
        image = dead;
    } else {
        healthMessage = 'Health is okay.';
        image = ok;
    }

    return (
        <div className='info'>
            <h1 className='title1'>{character.title}</h1>
            <h2 className='health1'>{character.health}</h2>
            <Link to={`/explore/edit/${character.id}`}>
                <button className='editt'>Want to edit this Skin?</button>
            </Link>
            <p className='p1'>{character.description}</p>
            <p className="health1">{healthMessage}</p>
            <img className="image2" src={image} alt="character" />
        </div>
    );
};

export default CharacterInfo;