import React from 'react';
import './CreateCharacter.css'
import { useState } from 'react';
import { supabase } from '../client';

const CreateCharacter = () => {

    const [character, setCharacter] = useState({title: "", health: "", description: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCharacter( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createCharacter = async (event) => {
        event.preventDefault()
        await supabase
            .from('Skins')
            .insert({title: character.title, health: character.health, description: character.description})
            .select();
        window.location = '/explore';
    }

    return (
        <div>
            <form>
                <label for="title">Name</label> <br />
                <input type="text" id="title" name="title" onChange={handleChange} /><br />
                <br/>

                <label for="health">Health</label><br />
                <input type="number" id="health" name="health" onChange={handleChange} /><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea name="description" rows="5" cols="50" id="description" onChange={handleChange}>
                </textarea>
                <br/>
                <input onClick={createCharacter} type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreateCharacter