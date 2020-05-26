import React, { useState } from 'react'
import {FaBars, FaTimes, FaCogs, FaTable, FaList, FaUser} from "react-icons/fa"

import './Navigation.css'

function Navigation() {

	const [ isOpen, setIsOpen ] = useState(false)

	const handleTrigger = () => setIsOpen(!isOpen)

	return (
		<div className="App">
			<div className="page">
				<div className="content">
					<a target="_blank" rel="noopener noreferrer" href="https://codepen.io/mejdej93/pen/eYYJGjd">
						original Pen
					</a>
				</div>

				<div className={`sidebar${isOpen ? ' sidebar--open' : ''}`}>
					<div className="trigger" onClick={handleTrigger}>
						{isOpen ? <FaTimes/> : <FaBars/>} 
					</div>

					<div className="sidebar-position">
						<FaUser/>
						<span>Home</span>
					</div>
					<div className="sidebar-position">
						<FaCogs/>
						<span>Menu item 2</span>
					</div>
					<div className="sidebar-position">
						<FaTable/>
						<span>Menu item 3</span>
					</div>

					<div className="sidebar-position">
						<FaList />
						<span>Position 4</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navigation

