import React, { useState, useEffect } from 'react'
import { getAllJournals } from '../../api/journals_api'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {indexJournalsSuccess, indexJournalsFailure} from '../shared/AutoDismissAlert/messages'
import Moment from 'react-moment';
import 'moment-timezone';
import Accordion from 'react-bootstrap/Accordion';
import { MdOutlineOpenInNew }  from 'react-icons/md'
import { IconContext } from "react-icons";
import './journal.css'

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
            <Accordion key={journal.id} style={{ width: '100%' }}  defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">

              <Accordion.Header> 
        <div className='accordion_header_container'>
                    <p className='journal_header'> {journal.title} </p>
             <small>
                <Moment format="MM/DD/YYYY">
                  {journal.date} 
                </Moment>
             </small> 
        </div>
                </Accordion.Header>
              <Accordion.Body>
                  <p>{journal.entry}</p>
              <p>
                  <Link to={`/my_journal/${journal._id}`}>
                          <a href="#" button type="button" class="btn btn-outline-secondary btn-sm"> View  </a>
                          </Link>
              </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))





    }

    return (
        <>
<body> 
    <div className='journal'>
<div className='journal_title'>
        <h1>Journal Entries</h1>
        <div className='new_journal'>
        <Link to="/add_journal"> 
    <IconContext.Provider value={{ color: 'white', size: '50px' }}>
        <div>
            <MdOutlineOpenInNew />

        </div>
    </IconContext.Provider>
    </Link> 
</div>
</div>

<div className='entry_container'>

    <div className='journal_entries'>
            {journalCards}
    </div>

</div>
</div>
</body>
</>
    )
}


export default IndexJournals



