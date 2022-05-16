import React, {useState, useEffect} from 'react'
import { getOneYoga} from '../../api/yoga_api.js'
import { useParams } from 'react-router-dom'
import { Image, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {favoriteYogas} from '../../api/yoga_api.js'

const ShowYogas = (props) => {

    const navigate = useNavigate()
    const [yoga, setYoga] = useState(null)
    const { id } = useParams()
    // console.log('id in showYogas', id)
    // empty dependency array in useEffect to act like component did mount
    
    useEffect(() => {            
        getOneYoga(id)
            .then(res => setYoga(res.data.yoga))
            .catch(console.error)
        }, [id])

    const handleClick = () => {
    
        // console.log("THIS Is The yoga id", id)
        // console.log("THIS Is The PROPP", props)
        favoriteYogas( props.user, id)
            // .then(res => console.log(res))
            .catch(console.log("NOTHING"))
    }

    if (!yoga) {
        return (
            <h1>Loading....</h1>
        )
    }
    
    if(yoga) {

        yoga.Jsx = (
        <p key={yoga.id}>
        <strong>{yoga.img_url}</strong></p>
    )}

    console.log('this is showyogas', yoga.sanskrit_name)
    return (

        <>
            <Container className="m-5">
                <h1> <p className="pic-title">{yoga.english_name}</p></h1>
                <h6>  
                {yoga.sanskrit_name} </h6> 
                <Image src={yoga.img_url} className="img-fluid shadow-4" style={{width: '50%' }} /><br/>
                
                <h3>Benefits</h3><br></br>
                {yoga.pose_benefits}
                <h1></h1>
                <br></br>
                <Button variant="outline-primary" onClick={handleClick}>Add to Favorites</Button>{' '}


               
            </Container>

        
        </>
    )
}

export default ShowYogas 