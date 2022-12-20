import apiUrl from '../apiConfig'
import axios from 'axios'
//note
// index function
export const getAllJournals = () => {
    return axios(`${apiUrl}/journals`)
}

// show function
export const getOneJournal = (journalId) => {
    return axios(`${apiUrl}/journals/${journalId}`)
}

// POST -> create function
export const createJournal = (user, newJournal) => {
    console.log('user', user)
    console.log('this is newJournal', newJournal)
    return axios({
        url: `${apiUrl}/journals`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { journal: newJournal }
    })
}

// PATCH -> update function
export const updateJournal = ( user, journalID, updatedJournal) => {
    console.log('user', user)
    console.log('this is newJournal', updatedJournal)
    return axios({
        url: `${apiUrl}/journals/${journalID}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { entry: updatedJournal }
    })
}

// DELETE -> remove function
export const removeJournal = (user, journalID) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/journals/${journalID}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}