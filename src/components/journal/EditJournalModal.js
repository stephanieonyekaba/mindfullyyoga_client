import React, { useState, useEffect } from 'react'
import {Modal, Container, Form, Button} from 'react-bootstrap'
import JournalForm from '../shared/JournalForm'
import { getOneJournal, updateJournal, removeJournal } from '../../api/journals_api'
import { Link } from 'react-router-dom'
const EditJournalModal = (props) => {
    const { user, show, handleClose, journal, msgAlert, triggerRefresh } = props
    const [journalEdit, setJournalEdit] = useState(null)


   
    
    const handleChange = (e) => {
        // e === event
        // e.persist()
        const updatedJournal = journal
        updatedJournal.entry = e.target.entry
        // updatedJournal.date = e.target.date.value
        // updatedJournal.title = e.target.title.value

        setJournalEdit(e.target.value)
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        updateJournal(user, journal._id, journalEdit)
        // updateJournal(journal)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            // then we send a success message
            .then(() =>
                msgAlert({
                    heading: 'Journal Updated! Success!',
                    variant: 'success',
                }))
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Error',
                    variant: 'danger',
                }))
    }


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                

        
            <Container className="justify-content-center">
            <h3>Edit This Post</h3>
            <Form onSubmit={handleSubmit}>

            <Form.Label>Title</Form.Label>
                <Form.Control as="textarea" rows={1}
                    placeholder="title"
                    value={journal.title}
                    name='title'
                    onChange={handleChange}
                    />

            <Form.Label>Date</Form.Label>
                <Form.Control 
                    placeholder="MM/DD/YYYY"
                    value={journal.date}
                    name='date'
                    onChange={handleChange}
                />

                <Form.Label>Entry</Form.Label>
                <Form.Control as="textarea" rows={3}
                    placeholder="My journal entry"
                    value={journal.entry}
                    name='entry'
                    onChange={handleChange}
                    />
 
                
 <Link to={`/my_journal`}>
                <Button type='submit'>Submit</Button>
</Link>
            </Form>
        </Container>








            </Modal.Body>
        </Modal>
        )

}

    
export default EditJournalModal