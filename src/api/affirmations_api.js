import apiUrl from '../apiConfig'
import axios from 'axios'

//index function 
export const getAllAffirmations = () => {
    return axios(`${apiUrl}/affirmations`)
}