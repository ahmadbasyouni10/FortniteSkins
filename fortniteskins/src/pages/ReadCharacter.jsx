import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';

const ReadCharacters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const {data} = await supabase
                .from('Skins')
                .select()
                .order("created_at", {ascending: true})
            setCharacters(data);
            
        }
        fetchCharacters();
    }, []);
    
    return (
        <div className="ReadCharacters">
            {
                characters && characters.length > 0 ?
                characters.map((character,index) => 
                   <Card key={index} id={character.id} title={character.title} health={character.health} description={character.description}/>
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadCharacters;