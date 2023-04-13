const TextareaField = (props) => {
	const { handleChange, label, name, value } = props;
	return (
		<div>
			<label className="name-label" htmlFor={name}>{label}</label>
			<textarea className="textbox" onChange={handleChange} name={name} rows="4" value={value}></textarea>
		</div>
	)
}
export default TextareaField