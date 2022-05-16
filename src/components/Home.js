import Header from './shared/Header'
import { Container } from './styles/Container.styled'
import { Box } from './styles/Box.styled'
import {Link} from "react-router-dom"


const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
	<Container> 
	 <span>Welcome To Mindful</span>
	 <Box> 
	 <p id="homeText"> What is Mindful?</p> <br/>
	 <p id="homeText">This is an interactive app that allows users to find their morning groove.
	 In this app you will be able to practice mindfulness, yoga, and gratitude to start your day off right.</p>
	 <Link to="/affirmations">
	 <button type="button" class="btn btn-outline-light btn-lg">Daily Affirmation   </button>
	 </Link>
	 

	 
	 </Box>
{/* 
	 {user.email} */}
	</Container>

		</>

	)
}

export default Home
