import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const JournalForm = (props) => {
    
    const {journal, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Entry</Form.Label>
                <Form.Control 
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
    )
}

export default JournalForm