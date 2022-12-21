// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import './index.css'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'

import IndexAffirmations from './components/affirmations/IndexAffirmations'
import IndexYogas from './components/yoga/IndexYoga'
import ShowYogas from './components/yoga/ShowYoga'
import IndexJournals from './components/journal/IndexJournal'
import ShowJournals from './components/journal/ShowJournal'
import CreateJournal from './components/journal/CreateJournal'
import IndexFavorites from './components/favorites/IndexFavorites'

import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

const App = () => {

  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  console.log('user in app', user)
  console.log('message alerts', msgAlerts)
  const clearUser = () => {
    console.log('clear user ran')
    setUser(null)
  }

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      )
		})
	}


		return (
			<Fragment>
				<Header user={user} />
				<Routes>


					<Route path='/sign-up' element={
					<SignUp msgAlert={msgAlert} setUser={setUser} />
					}/>
					{/* this is our AFFIRMATION INDEX page route */}
					<Route path='/affirmations' element={
					<RequireAuth user={user}>
						<IndexAffirmations msgAlert={msgAlert} user={user} />
					</RequireAuth>
					}/>	

					{/* this is our YOGA INDEX page route */}
					<Route path='/yoga_poses' element={
			
						<IndexYogas msgAlert={msgAlert} user={user} />
					
					}/>	

					{/* this is our HOME INDEX page route */}
					<Route path='/' element={
					
						<Home msgAlert={msgAlert} user={user} />
				
					}/>	

					{/* this is our YOGA SHOW page route */}
					<Route path='/yoga_poses/:id' element={
					
						<ShowYogas msgAlert={msgAlert } user={user} />
					
					}/>	


					{/* this is our JOURNAL INDEX page route */}
					<Route path='/my_journal' element={
				
						<IndexJournals msgAlert={msgAlert} user={user} />
				
					}/>	

					{/* this is our JOURNAL SHOW page route */}
					<Route path='/my_journal/:id' element={
					
						<ShowJournals msgAlert={msgAlert} user={user} />
				
					}/>	

					{/* this is our JOURNAL CREATE page route */}
					<Route path='/add_journal' element={
					
						<CreateJournal msgAlert={msgAlert} user={user} />
				
					}/>	

					{/* this is our FAVORITES INDEX page route */}
					<Route path='/my_favorites' element={
				
						<IndexFavorites msgAlert={msgAlert} user={user} />
			
					}/>	


					{/* <Route path='/' element={
					<SignIn msgAlert={msgAlert} setUser={setUser} />
					}/> */}
					{/* <Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />  */}
				

					<Route path='/sign-out' element={
					<RequireAuth user={user}>
					<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
					</RequireAuth>
					}/>

					<Route path='/change-password' element={
					<RequireAuth user={user}>
					<ChangePassword msgAlert={msgAlert} user={user} />
					</RequireAuth>
					}/>

				</Routes>
				{msgAlerts.map((msgAlert) => (
					<AutoDismissAlert
						key={msgAlert.id}
						heading={msgAlert.heading}
						variant={msgAlert.variant}
						message={msgAlert.message}
						id={msgAlert.id}
						deleteAlert={deleteAlert}
					/>
				))}
			</Fragment>
		)
}

export default App
