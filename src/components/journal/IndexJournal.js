import React, { useState, useEffect } from 'react'
import { getAllJournals } from '../../api/journals_api'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {indexJournalsSuccess, indexJournalsFailure} from '../shared/AutoDismissAlert/messages'
import Moment from 'react-moment';
import 'moment-timezone';
import { StyledHeader } from '../styles/Header.styled'

// I'm going to declare a style object
// this will be used to corral my cards
// we can use basic CSS, but we have to use JS syntax
const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const IndexJournals = (props) => {
    const [journals, setJournals] = useState(null)

    const {user, msgAlert} = props

    useEffect(() => {
        getAllJournals()
            .then(res => {
                setJournals(res.data.journals)
            })
            .then(() => {
                // msgAlert({
                //     heading: 'Found some journals!',
                //     message: indexJournalsSuccess,
                //     variant: 'success',
                // })
            })
            .catch(() => {
                msgAlert({
                    heading: 'No journals?!!',
                    message: indexJournalsFailure,
                    variant: 'danger',
                })
            })
    }, [])

    if (!journals) {
        return <p>loading...</p>
    } else if (journals.length === 0) {
        return <p>no journal entries yet, please add some</p>
    }

    let journalCards

    if (journals.length > 0) {
        // journalsJsx = journals.map(journal => (
        //     <li key={journals.id}>
        //         {journal.fullTitle}
        //     </li>
        // ))
        journalCards = journals.map(journal => (
            // one method of styling, usually reserved for a single style
            // we can use inline, just like in html
            <Card key={journal.id} style={{ width: '30%' }} className="m-2">
                <Card.Header><Moment format="MM/DD/YYYY">{journal.date}</Moment></Card.Header>
                <Card.Body>
                    <p>{journal.entry}</p>
                    <Card.Text>
                    <Link to={`/my_journal/${journal._id}`}>
                    <a href="#" button type="button" class="btn btn-outline-secondary btn-sm"> View Entry </a>
                    </Link>


                        
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    }

    return (
        <>
           <StyledHeader><h1>My Journal Entries</h1> </StyledHeader> 

        <Link to="/add_journal">
	    <button type="button" class="btn btn-outline-primary">Add Entry </button>
	    </Link>

          
            <div style={cardContainerLayout}>
                {journalCards}
            </div>
        </>
    )
}


export default IndexJournals



