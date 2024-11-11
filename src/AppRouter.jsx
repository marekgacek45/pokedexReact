import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './components/pages/HomePage'
import PokemonPage from './components/pages/PokemonPage'
import SearchPage from './components/pages/SearchPage'

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route path='/' element={<HomePage />} />
				<Route path='pokemon/:id' element={<PokemonPage />} />
				<Route path='search' element={<SearchPage />} />
			</Route>

            <Route path='*' element={<Navigate to='/' />} />
		</Routes>
	)
}

export default AppRouter
