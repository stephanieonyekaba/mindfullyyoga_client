
   
import React, {useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import { Container } from 'react-bootstrap'
//This is the function that handles showing the afffirmation object
import { StyledHeader } from '../styles/Header.styled'
import {getAllFavoriteYogas} from '../../api/yoga_api.js'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'



const IndexFavorites = (props) => {
    //this sets the original state for yoga poses
    const [favoriteYogas, setFavoriteYogas] = useState(null)
    useEffect(() => {
        //this is the axios call function made to our mindufl_api that
        //allows us to use the get getAllYogas function 
        getAllFavoriteYogas(props.user._id)
        //this is the promise chain that sets the state of the object returned from the axios call
        //(remember the setState function above?) or it will return an error if no object is found (.catch)
                .then(res => {
                    console.log('THIS IS THE OBJECT RETURNED FROM USER MODEL', res.data.favoriteYogas)
                    setFavoriteYogas(res.data.favoriteYogas)
                })
                .catch(console.error)
            }, [])
            //here we are saying if there is no yoga poses that shows show a loading text
            if (!favoriteYogas) {
                return <p> LOADING...</p>
            }
            //here we are saying if we dont have any yogas in the array show no yoga poses
            else if (favoriteYogas.length == 0 ) {
                return <p>No Yoga Poses to Display </p>
            }
            //here we are saying if there are yoga poses in the object, map each on to a key and display it 
            if (favoriteYogas.length > 0) {

				console.log("THESE ARE THE FAV YOGAS",favoriteYogas)

                // favoriteYogas.Jsx = favoriteYogas.map(favoriteYogas => (
                //     <Card key={favoriteYogas.id} style={{width: '50%' }} className='m-2' >
                //     <Card.Body>
                    
                //      <span> {favoriteYogas}</span>
                //     </Card.Body>
                // </Card>
                // ))

            } 
        
            return (
            <>           
            <div className="container"> 
                {/* { favoriteYogas } */}
                <p>favorites go here</p>
            </div>
    

            </>
        )    
    
    }






export default IndexFavorites
