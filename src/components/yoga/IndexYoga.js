import React, {useState, useEffect, useRef } from 'react'
import {getAllYogas} from "../../api/yoga_api"

import './yoga.css'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
//This is the function that handles showing the yoga object
const IndexYogas = (props) => {
    //this sets the original state for yoga poses
    const [yogas, setYogas] = useState(null)
    const [searchPose, setSearchPose] = useState('')




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

                let yogaCard = yogas.filter((yoga) => {
                        if (searchPose === "") {
                            return <p>Nothing Found</p>
                        }
                        else if (
                            yoga.english_name.toLowerCase().includes(searchPose.toLocaleLowerCase())) {
                                return yoga
                            }

                    }).map((yoga) => (
                   <div key={yoga.id} style={{width: '20%' }} className="card"  
                    >
                <Link to={`./${yoga._id}`}> 
                    <img className='yogaphoto' src={yoga.img_url}/>
                </Link>
                    <div className="card-body">
                      <h2>{yoga.english_name}</h2>

                    </div>
                  </div>
                    ))
            
                

              
        
    return (
            <>           
<div className="yoga"> 
    <div className='yogasearch'>
           <h1>Yoga Poses</h1> 
    <div className='input_container'>
          
           <input type="text" class="input"  placeholder="Search by pose" onChange={event => {setSearchPose(event.target.value)}}/>
        <div className='search_icon'>
            <BsSearch />
        </div>
    </div>
    </div>

        <div className="row">
             {yogaCard}
        </div>



    
</div>

            </>
        )    

    }
        
    

    export default IndexYogas