import apiUrl from '../apiConfig'
import axios from 'axios'

//note
//index function 
export const getAllReviews = () => {
    return axios(`${apiUrl}/reviews`)
}