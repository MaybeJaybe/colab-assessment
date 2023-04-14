import { useEffect, useState } from 'react';
import InputField from './InputField';
import TextareaField from './TextareaField';
import emailjs from '@emailjs/browser';
import Explanation from './Explanation';
import './Contact.css';

function Contact() {
	const [values, setValues] = useState({
		name: '', email: '', message: '' 
	});
	const [status, setStatus] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs.send('service_zajhd3a', 'template_kvwhkvn', values, 'PoN8jLMrEaWz7wp_f')
		.then(response => {
			console.log('Success', response);
			setValues({
				name: '',
				email: '',
				message: ''
			});
			setStatus('SUCCESS');
		}, error => {
			console.log('FAILED', error);
		});
	}

	useEffect(() => {
		if(status === 'SUCCESS') {
			setTimeout(() => {
				setStatus('');
			}, 3000);
		}
	}, [status]);

	const handleChange = (e) => {
		setValues(values => ({
			...values,
			[e.target.name]: e.target.value
		}))
	}

	return(
		<div className="Contact">
			<h2>Contact Me</h2>
			{status && renderAlert()}
			<form onSubmit={handleSubmit}>
				<div className="inputs">
					<div className="name-input">
						<label for="name" className="label">Name</label>
						<InputField value={values.name} handleChange={handleChange} id="name" name="name" type="text" placeholder="John Doe" />
					</div>
					<div className="email-input">
						<label for="email" className="label">Email</label>
						<InputField value={values.email} handleChange={handleChange} id="email" name="email" type="email" placeholder="user@example.com" />
					</div>
				</div>
				<div className="message-input">
					<label for="message" className="label">Message</label>
					<TextareaField value={values.message} handleChange={handleChange} id="message" name="message" placeholder="Write a short message" />

				</div>
				<button type="submit" className="contact-button">Send</button>
			</form>
			<Explanation />
		</div>
	);
}
const renderAlert = () => (
	<div className="px-4 py-3 leading-normal">
		<p>Message sent</p>
	</div>
)
export default Contact;