const InputField = (props) => {
	const { handleChange, label, name, type, value } = props;
	return(
		<div className="input-field">
			<label className="name-label" htmlFor={name}>{label}</label>
			<input className="change-name" type={type} onChange={handleChange} value={value} name={name} required />
		</div>
	)
}
export default InputField