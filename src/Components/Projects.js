
import './Projects.css';

function Projects() {
	return (
		<div className="Projects">
			<h2>Projects</h2>
			<ul>
				<li>
					<img src="images/mayberry-and-sons-landing.png" className="projects-img"></img>
					<div className="project-description">
						<a href="https://maybejaybe.github.io/mayberry-bootstrap-site/" target="_blank" rel="noopener noreferrer">Mayberry &amp; Sons</a>
						<p>This site is made with HTML and CSS. This is a project I have put a lot of work into because it was commissioned by my brother for his farmhouse and business.</p>
					</div>
				</li>
				{/* <li>
					<img src="images/barter-landing.png" className="projects-img"></img>
					<div className="project-description">
						<a href="https://barter-me.onrender.com/" target="_blank" rel="noopener noreferrer">Simple Shop</a>
						<p>This shop was made in Python. My favourite part of this project was validating specific users and only allowing that user to edit the shop and items they created.</p>
						<p>Note: the render site can take some time to launch.</p>
					</div>
				</li> */}
				<li>
					<img src="images/raffle-landing.png" className="projects-img"></img>
					<div className="project-description">
						<a href="https://maybejaybe.github.io/INT1.2-raffle-app/" target="_blank" rel="noopener noreferrer">Raffle App</a>
						<p>This app is made with JavaScript. It meets a need for a cute simple app that randomly selects an item from a given list as the winner for easier decision making.</p>
					</div>
				</li>
			</ul>
		</div>
	)
}
export default Projects;
