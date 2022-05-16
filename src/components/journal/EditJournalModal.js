import React, { useState, useEffect } from 'react'
import {Modal, Container, Form, Button} from 'react-bootstrap'
import JournalForm from '../shared/JournalForm'
import { getOneJournal, updateJournal, removeJournal } from '../../api/journals_api'

const EditJournalModal = (props) => {
    const { user, show, handleClose, journal, msgAlert, triggerRefresh } = props
    const [journalEdit, setJournalEdit] = useState(null)


   
    
    const handleChange = (e) => {
        // e === event
        // e.persist()
        console.log("THIS IS PROPS.JOURNAL", journal)
        const updatedJournal = journal
        updatedJournal.entry = e.target.value
        console.log("THIS IS NEW JOURNAL.ENTRY", updatedJournal.entry  )
        setJournalEdit(e.target.value)
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        console.log('the journal to submit', journal)
        updateJournal(user, journal._id, journalEdit)
        // updateJournal(journal)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            // then we send a success message
            .then(() =>
                msgAlert({
                    heading: 'Journal Updated! Success!',
                    message: 'u did it',
                    variant: 'success',
                }))
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: 'that aint it',
                    variant: 'danger',
                }))
        console.log('this is the journal', journal)
    }


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                

        
            <Container className="justify-content-center">
            <h3>Edit This Post</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Entry</Form.Label>
  
                <Form.Control as="textarea" rows={3}
                    placeholder="My journal entry"
                    value={journal.entry}
                    name='entry'
                    onChange={handleChange}
                    />
                {/* <Form.Label>Date</Form.Label>
                <Form.Control 
                    placeholder="MM/DD/YYYY"
                    value={journal.date}
                    name='date'
                    onChange={handleChange}
                /> */}
                
                
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>








            </Modal.Body>
        </Modal>
        )

}

    
export default EditJournalModal