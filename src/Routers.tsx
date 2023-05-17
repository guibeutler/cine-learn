import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Navbar from './components/Navbar'

import './Routers.css'

function Routers() {
	return (
		<div className="main-cointainer">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default Routers
