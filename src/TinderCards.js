import axios from './axios'
import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
//import axios from './axios'

function TinderCards() {

    const [people, setPeople] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards')
            setPeople(req.data)
        }

        fetchData();        
    }, [])

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }
      
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }  

    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
                {people.map(person => 
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => onSwipe(dir, person.name)} 
                        onCardLeftScreen={() => onCardLeftScreen(person.name)} 
                    >
                        <div
                            style={{backgroundImage: `url(${person.imgUrl})`}}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                )}
            </div>
        </div>
    )
}

export default TinderCards
