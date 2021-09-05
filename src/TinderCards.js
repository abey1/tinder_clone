import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
function TinderCards() {

    const [people] = useState([
        {
            name: "Elon Musk",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
        },
        {
            name: "Abey Bruck",
            imgUrl: "data:image/jpeg;base64,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"
        },
        {
            name: "Jeff Bezos",
            imgUrl: "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
        }
    ])

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
