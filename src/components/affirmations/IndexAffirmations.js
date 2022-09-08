import React, {useState, useEffect, useRef } from 'react'
import {getAllAffirmations} from "../../api/affirmations_api"
import { Container, Card } from 'react-bootstrap'
import './affirmations.css'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'





const IndexAffirmations = (props) => {
    //this sets the original state for affirmations
    const [affirmations, setAffirmations] = useState(0);
    const [index, setIndex] = useState(0); 
    
    
    
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

  



            if (affirmations.length > 0) {
                affirmations.Jsx = affirmations.map(affirmations => (
                    <div className='mantra'>
                  
                     {affirmations.mantra} 
                
                     </div>
                ))
                console.log('this is the AFF returned n ', affirmations.Jsx)

            } 


            const checkNum = (num) => {
                if (num > affirmations.length - 1) {
                  return 0;
                }
                else if (num < 0) {
                  return affirmations.length - 1;
                }
                return num;
              };

            const randomAffirmation = () => {
                    let randomNum = Math.floor((Math.random() * affirmations.length) + 1);
                    if (randomNum === index) {
                        randomNum = index + 1;
                    }
                    setIndex(checkNum(randomNum));
                }

            
        
            return (
            <>

            <p id="affirmationsText">
            <div className='quote_left'>
                <ImQuotesLeft />
            </div>
                {affirmations.Jsx [index]}
            <div className='quote_right'>
                <ImQuotesRight />
            </div>
                </p>

            <div className='affirmations'>
                <button type="button" class="btn btn-outline-dark btn-lg" onClick={randomAffirmation}>Random</button>
            </div>

            </>
        )    
    
    }

    export default IndexAffirmations
