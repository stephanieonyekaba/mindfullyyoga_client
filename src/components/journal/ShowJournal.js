import React, {useState, useEffect} from 'react'
import { getOneJournal, updateJournal, removeJournal } from '../../api/journals_api'
import { useParams, useNavigate } from 'react-router-dom'
import { Spinner, Container, Card, Button } from 'react-bootstrap'
import {showJournalSuccess, showJournalFailure} from '../shared/AutoDismissAlert/messages'
import EditJournalModal from './EditJournalModal'
import Moment from 'react-moment';
import 'moment-timezone';



const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const ShowJournal = (props) => {
    const [journal, setJournal] = useState({})
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {user, msgAlert} = props
    const { id } = useParams()
    const navigate = useNavigate()
    console.log('id in showJournal', id)
    // empty dependency array in useEffect to act like component did mount
    useEffect(() => {
        getOneJournal(id)
            .then(res => setJournal(res.data.journal))
            .then(() => {
                // msgAlert({
                //     heading: 'Here is the journal entry!',
                //     message: showJournalSuccess,
                //     variant: 'success',
                // })
            })
            .catch(() => {
                msgAlert({
                    heading: 'No journal found',
                    message: showJournalFailure,
                    variant: 'danger',
                })
            })
    }, [updated])

    const removeTheJournal = () => {
        removeJournal(user, journal._id)
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    variant: 'success',
                })
            })
            .then(() => {navigate(`/my_journal`)})
            .catch(() => {
                msgAlert({
                    heading: 'something went wrong',
                    message: 'that aint it',
                    variant: 'danger',
                })
            })
    }



    if (!journal) {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="warning" >
                    <span className="visually-hidden">Loading....</span>
                </Spinner>
            </Container>
        )
    }

    return (
        <>
            <Container className="fluid">
                <Card>
                    <Card.Header><Moment format="MM/DD/YYYY">{journal.date}</Moment></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <small> {journal.entry}</small><br/>

                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                       
                        <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                            Edit Journal Entry
                        </Button>
                        <Button onClick={() => removeTheJournal()}className="m-2" variant="danger">
                            Delete Journal Entry
                        </Button>

                    </Card.Footer>
                </Card>
            </Container>
            <Container style={cardContainerLayout}>

            </Container>
            <EditJournalModal 
                journal={journal}
                show={modalOpen}
                user={user}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setModalOpen(false)}
            />

        </>
    )
}

export default ShowJournal