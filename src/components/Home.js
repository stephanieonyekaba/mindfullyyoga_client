import Header from './shared/Header'
import { Container } from './styles/Container.styled'
import { Box } from './styles/Box.styled'
import {Link} from "react-router-dom"
import Reviews from './reviews/Reviews'
import IndexAffirmations from './affirmations/IndexAffirmations'
import '../Home.css'


const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)








	return (
		<>
	<Container> 
	 <span className='welcome_home'>Welcome To Mindful</span>
	 <Box> 
<div className='about_section'>
<bold>Daily Affirmation:</bold>

<IndexAffirmations />
	
{/* //PUT BUTTO HERE */}

</div>
	 
	 </Box>
{/* 
	 {user.email} */}
	</Container>

	<Reviews/ >

		</>

	)
}

export default Home
