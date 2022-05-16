import React, {useState, useEffect, useRef } from 'react'
import {getAllYogas} from "../../api/yoga_api"
import {Link} from "react-router-dom"
import { Card } from 'react-bootstrap'
import { StyledHeader } from '../styles/Header.styled'
import { YogaIndexLayout } from '../styles/YogaIndexLayout.styled'


//This is the function that handles showing the yoga object
const IndexYogas = (props) => {
    console.log(' PROP', props.user)
    //this sets the original state for yoga poses
    const [yogas, setYogas] = useState(null)
    useEffect(() => {
        //this is the axios call function made to our mindufl_api that
        //allows us to use the get getAllYogas function 
        getAllYogas()
        //this is the promise chain that sets the state of the object returned from the axios call
        //(remember the setState function above?) or it will return an error if no object is found (.catch)
                .then(res => {
                    console.log('this is the object returned from yogas ', res.data.yogas)
                    setYogas(res.data.yogas)
                })
                .catch(console.error)
            }, [])
            //here we are saying if there is no yoga poses that shows show a loading text
            if (!yogas) {
                return <p> LOADING...</p>
            }
            //here we are saying if we dont have any yogas in the array show no yoga poses
            else if (yogas.length == 0 ) {
                return <p>No Yoga Poses to Display </p>
            }
            //here we are saying if there are yoga poses in the object, map each on to a key and display it 
            if (yogas.length > 0) {
                yogas.Jsx = yogas.map(yogas => (
                    <Card key={yogas.id} style={{width: '30%' }} className="m-2 text-gray">
                    <Link to={`./${yogas._id}`} style={{ color: 'gray' }}> <img class="card-img" src={yogas.img_url} alt="Card image"></img>
                    <div class="card-img-overlay">
                    <p class="card-text">{yogas.english_name}</p>
                    </div> 
                </Link>
                </Card>
               
                ))

            } 
              
        
            return (
            <>           
            <div className="container"> 
           <StyledHeader>  <h1>Yoga Poses</h1> </StyledHeader>
{/* 

        <YogaIndexLayout>  */}

        <div className="row">
            {yogas.Jsx}
      

        </div>






    
</div>






            </>
        )    
        
    }
    
    {/* <ul>
        <li className="card" > {yogas.Jsx}</li>
    </ul> */}
    export default IndexYogas
