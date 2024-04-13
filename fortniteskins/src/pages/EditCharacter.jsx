import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditCharacter.css'
import { supabase } from '../client';

const EditCharacter = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({id: null, title: "", health: "", description: ""});

    useEffect(() => {
        const fetchCharacter = async () => {
            const { data } = await supabase
                .from('Skins')
                .select()
                .eq('id', id)
                .single();

            if (data) {
                setCharacter(data);
            }
        };

        fetchCharacter();
    }, [id]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCharacter( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updateCharacter = async (event) => {
        event.preventDefault()
        await supabase
            .from('Skins')
            .update({title: character.title, health: character.health, description: character.description})
            .eq('id', id)
            .select();
            
        window.location = '/explore';
    }

    const deleteCharacter = async (event) => {
        event.preventDefault()
        await supabase
            .from('Skins')
            .delete()
            .eq('id', id)
            
        window.location = '/explore';
    }

    return (
        <div>
            <form>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" value={character.title} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="health">Health</label><br />
                <input type="text" id="health" name="health" value={character.health} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" name="description" value={character.description} onChange={handleChange} >
                </textarea>
                <br/>
                <input onClick={updateCharacter} type="submit" value="Submit" />
                <button onClick={deleteCharacter} className="deleteButton">Delete</button>
            </form>
        </div>
    )
}

export default EditCharacter;