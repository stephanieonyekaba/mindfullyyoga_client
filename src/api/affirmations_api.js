import apiUrl from '../apiConfig'
import axios from 'axios'

//note
//note
//ffff
//index function 
export const getAllAffirmations = () => {
    return axios(`${apiUrl}/affirmations`)
}