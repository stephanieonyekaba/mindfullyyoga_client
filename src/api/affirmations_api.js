import apiUrl from '../apiConfig'
import axios from 'axios'

//note
//index function 
export const getAllAffirmations = () => {
    return axios(`${apiUrl}/affirmations`)
}