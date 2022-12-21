import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { Brand } from '../styles/Brand.styled'

const linkStyle = {
    color: '#c4bda9',
	font: "Gelasio",
    textDecoration: 'none',
	margin: '30px',
	
}

const brandStyle = {
	font: "Plaster",
    color: 'gray',
	
}
const authenticatedOptions = (
	<>
		<Nav.Item>
			{/* <Link to='/home' style={linkStyle}>
		
                Home  

            </Link>
			<Link to='/my_journal' style={linkStyle}>
                Journal  
            </Link>


			<Link to='/yoga_poses' style={linkStyle}>
                Yoga  
            </Link>


			<Link to='/my_favorites' style={linkStyle}>
                Favorites  
            </Link> */}

			{/* <Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='change-password' style={linkStyle}>
				Change password
			</Link> */}
		</Nav.Item>

	</>
)

const unauthenticatedOptions = (
	<>


<Link to='/' style={linkStyle}>
		
                Home  

            </Link>
			<Link to='/my_journal' style={linkStyle}>
                Journal  
            </Link>


			<Link to='/yoga_poses' style={linkStyle}>
                Yoga  
            </Link>


			<Link to='/o' style={linkStyle}>
                Favorites  
            </Link>









        {/* <Nav.Item>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item> */}
        {/* <Nav.Item>
		    <Link to='/' style={linkStyle}>Sign In</Link>
        </Nav.Item> */}
	</>
)

// const alwaysOptions = (
// 	<>
// 		<Nav.Link>
// 			<Link to='/' style={linkStyle}>
				
// 			</Link>
// 		</Nav.Link>
// 	</>
// )

const Header = ({ user }) => (


	
	<Navbar bg='Light' variant='Light' expand='md'>

	<Brand><Navbar.Brand style={brandStyle}>

      Mindful
      </Navbar.Brand>
	  </Brand>




		{/* <Navbar.Brand>
                Mindful 
        </Navbar.Brand> */}
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{/* {user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)} */}
				{/* {alwaysOptions} */}
				{user ? authenticatedOptions : unauthenticatedOptions}

			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header




