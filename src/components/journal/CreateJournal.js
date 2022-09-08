import React, { useState } from 'react'
// import { Form, Container, Button } from 'react-bootstrap'
import { createJournal } from '../../api/journals_api'
import {createJournalSuccess, createJournalFailure} from '../shared/AutoDismissAlert/messages'
import { useNavigate } from 'react-router-dom'
import JournalForm from '../shared/JournalForm'
import {Modal, Container, Form, Button} from 'react-bootstrap'

// create journal renders a form and calls createJournal function
// maybe redirect(navigate) to the new journal show page
// props we'll need are user, msgAlert
const CreateJournal = (props) => {
    const {user, msgAlert} = props
    console.log('user in create', user)
    const navigate = useNavigate()
    // we'll need two states
    const [journal, setJournal] = useState({entry: '', date: '' })
    console.log('journal in create', journal)
    //  an empty journal object
    // and a createdId (used to navigate)
    // we'll need handleChange and handleSubmit funcs
    const handleChange = (e) => {
        // e === event
        e.persist(
        )
        setJournal( {...journal, [ e.target.name]: e.target.value})


        // setJournal(prevJournal => {
        //     const entry = e.target.entry
        //     const date = e.target.date

        //     let value = e.target.value
        //     console.log('etarget type', e.target.type)


            // if (e.target.type === 'number') {
            //     value = parseInt(e.target.value)
            // }
            // if (e.target.type === 'string') {
            //     value = e.target.value
            // }
            // if (e.target.name == 'date') {
            //     value = e.target.value
            //     const updatedDate = {date: value}
            // }

            // const updatedValue = { entry: value }

            // console.log('prevJournal', prevJournal)
            // console.log('updatedValue', updatedValue)

            // return {updatedValue}
        // })
        



        // setJournal(prevJournal => {
        //     const date = e.target.date
        //     let value = e.target.value
        //     console.log('etarget type', e.target.type)


        //     if (e.target.type === 'number') {
        //         value = parseInt(e.target.value)
        //     }
        //     if (e.target.type == 'date') {
        //         value = e.target.value
        //     }

        //     const updatedDate = { date: value }

        //     return {...prevJournal}
        // })







    }









    

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        createJournal(user, journal)
            // if create is successful, we should navigate to the show page
            .then(res => {navigate("/my_journal")})
            // then we send a success message
            .then(() =>
                msgAlert({
                    heading: 'New Journal Added! Success!',
                    message: createJournalSuccess,
                    variant: 'success',
                }))
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'All Fields Required',
                    message: createJournalFailure,
                    variant: 'danger',
                }))
        // console.log('this is the journal', journal)
    }

    return (
        //NO LONGER USING FORM COMPONENT TO MATCH CRISTOS EDITJOURNAL
        // <JournalForm 
        //     journal={journal}
        //     handleChange={handleChange}
        //     handleSubmit={handleSubmit}
        //     heading="Add new Journal!"
        // />



<div className="newjournal">
        <div className='newjournal_wraper'> 
            <h3>New Entry</h3>
        <div className='newjournal_container'> 
        <Form.Label>Title</Form.Label>
        <Form.Control as="textarea" rows={1}
                    placeholder="Title"
                    value={journal.title}
                    name='title'
                    onChange={handleChange}
                    />
                    <br></br>
        <Form.Label>Date</Form.Label>
                <Form.Control 
                    placeholder="MM/DD/YYYY"
                    value={journal.date}
                    name='date'
                    type="date"
                    onChange={handleChange}
                />
            <br></br>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Entry</Form.Label>
                <Form.Control as="textarea" rows={3}
                    placeholder="My journal entry"
                    value={journal.entry}
                    name='entry'
                    onChange={handleChange}
                    />
                
        <div className='createjournal_button'> 
                <button type="submit" class="btn btn-outline-secondary">Submit</button>
            </div>
            </Form>
        </div>
        </div>
    </div>











        
        
    )
}

export default CreateJournal