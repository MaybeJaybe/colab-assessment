import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Header.css'

function Header() {
	const [isNavExpanded, setNavExpanded] = useState(false)
	
	return(
		<div className="Header">
			<nav className="navbar">
				<NavLink to="/home" className="nav-home">Home</NavLink>
				<button 
					className="hamburger"
					onClick={() => {
						setNavExpanded(!isNavExpanded);
					}}
				>
					<svg 
						className="hamburger-bg" 
						viewbox="0 0 100 80" width="52" height="52" 
						fill="#fcfaf5">
							<rect y="2" width="25" height="2"></rect>
							<rect y="10" width="25" height="2"></rect>
							<rect y="18" width="25" height="2"></rect>
					</svg>
				</button>
				<div 
					className={
						isNavExpanded ? "nav-menu expanded" : "nav-menu"
					}
				>
					<ul className="nav-select">
						<li>
							<NavLink to="/projects">Projects</NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
export default Header;