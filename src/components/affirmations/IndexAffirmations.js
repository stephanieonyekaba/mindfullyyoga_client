import React, {useState, useEffect, useRef } from 'react'
import {getAllAffirmations} from "../../api/affirmations_api"
import {Link} from "react-router-dom"
import { Container, Card } from 'react-bootstrap'
//This is the function that handles showing the afffirmation object
import { StyledHeader } from '../styles/Header.styled'
import { AffirmationBox } from '../styles/AffirmationBox.styled'
import { AffirmationBg } from '../styles/AffirmationBg.styled'

const IndexAffirmations = (props) => {
    //this sets the original state for affirmations
    const [affirmations, setAffirmations] = useState(null)
    useEffect(() => {
        //this is the axios call function made to our mindufl_api that
        //allows us to use the get allAffirmation function 
        getAllAffirmations()
        //this is the promise chain that sets the state of the object returned from the axios call
        //(remember the setState function above?) or it will return an error if no object is found (.catch)
                .then(res => {
                    console.log('this is the object returned from affirmation ', res.data.affirmations)
                    setAffirmations(res.data.affirmations)
                })
                .catch(console.error)
            }, [])
            //here we are saying if there is no affirmation that shows show a loading text
            if (!affirmations) {
                return <p> LOADING...</p>
            }
            //here we are saying if we dont have any affirmations in the array show no affirmations
            else if (affirmations.length == 0 ) {
                return <p>No Affirmations today</p>
            }
            //here we are saying if there are affirmations in the object, map each on to a key and display it 

            const randomNumber = Math.floor((Math.random() * 10) + 1)
            if (affirmations.length > 0) {
                affirmations.Jsx = affirmations.map(affirmations => (
                    <Card key={affirmations.id} style={{width: '100%' }} className='m-2'>
                    <Card.Body>
                     {affirmations.mantra} 
                    
                    </Card.Body>
                </Card>
                ))
                console.log('this is the AFF returned n ', affirmations.Jsx)

            } 
        
            return (
            <>
            <AffirmationBg> 
            <div className="container"> 
                   <StyledHeader><h1>Affirmation of The Day</h1></StyledHeader>

            <AffirmationBox> 
                    
                    {affirmations.Jsx [randomNumber]}
                
                </AffirmationBox>
                </div>

                </AffirmationBg>
            </>
        )    
    
    }

    export default IndexAffirmations
