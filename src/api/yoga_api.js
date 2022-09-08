import apiUrl from '../apiConfig'
import axios from 'axios'

//index function 
//Here we are creating a function that will be called in our index yogas page
//this function allows us to access the data from our mindful-api 
//we make sure the routes we are hitting here match up with the routes in our yoga section of mindful api project
//We are essentially making an aciox call to our mindful api to get data to use in our client 

export const getAllYogas = () => {
    return axios(`${apiUrl}/yogas`)
}



//this is the axios call to the backend to access the user favorite schema 

export const getAllFavoriteYogas = () => {
    return axios(`${apiUrl}/favoriteYogas`)
}




//show function
//Here we are creating a function that will be called in our show yoga page
//this function allows us to access the data from our mindful-api 
//we make sure the routes we are hitting here match up with the routes in our yoga section of mindful api project
//I named this function getOneYoga because the show page is simply one item I want to display, however since 
//it is just the name of the function it could be called anything. 
//We are essentially making an aciox call to our mindful api to get data to use in our client 

export const getOneYoga = (yogaId) => {
    return axios(`${apiUrl}/yogas/${yogaId}`)
}



export const favoriteYogas = (user, yogaId) => {
    console.log('uzaa', user)
    console.log('uzaa', yogaId)
    return axios({
        url: `${apiUrl}/yoga/favorites/${yogaId}`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
    })
}
