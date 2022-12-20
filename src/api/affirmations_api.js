import apiUrl from '../apiConfig'
import axios from 'axios'

//note
//ffff
//index function 
export const getAllAffirmations = () => {
    return axios(`${apiUrl}/affirmations`)
}