import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './Home.css';

function Home() {
	return(
		<div className="Home">
			<About />
			<Projects />
			<Contact />
		</div>
	);
}
export default Home;