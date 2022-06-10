import sanityClient from '../client';
import { useState, useEffect } from 'react';

const Pets = () => {
    const [pets, setPets] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type=="pet"]{
                    name
                }`
            )
            .then(data => {
                setPets(data);
                console.log(data);
            })
            .catch(console.error);
    }, []);

    return (
        <>
            <h3>Pets</h3>
            <ul>{pets && pets.map(pet => <li>{pet.name}</li>)}</ul>
        </>
    );
};

export default Pets;
