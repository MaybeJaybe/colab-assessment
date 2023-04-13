import './Footer.css';

function Footer() {
	return (
		<div className="Footer">
			<img src="https://assets.website-files.com/5f5e3428a1c1478d81e71075/6051b7fcacc7bf1f92a97ebd_Circle%20Decor.svg" loading="lazy" className="bubble"></img>

			<div className="socials">
				<a href="https://www.linkedin.com/in/maybe-jay/">Linkedin</a>
				<a href="https://github.com/MaybeJaybe">Github</a>
			</div>
			
			<div className="disclaimer">
				<p>Assignment, color palette, and assets sourced from</p>
				<a href="https://www.joincolab.io/"><img src="https://assets.website-files.com/5f5e3428a1c1478d81e71075/62c5b04fb108966aa52dffbf_Co.Lab%20Logo.webp" loading="lazy" width="120" sizes="(max-width: 479px) 73vw, 119.99999237060547px" srcset="https://assets.website-files.com/5f5e3428a1c1478d81e71075/62c5b04fb108966aa52dffbf_Co.Lab%20Logo-p-500.webp 500w, https://assets.website-files.com/5f5e3428a1c1478d81e71075/62c5b04fb108966aa52dffbf_Co.Lab%20Logo-p-800.webp 800w, https://assets.website-files.com/5f5e3428a1c1478d81e71075/62c5b04fb108966aa52dffbf_Co.Lab%20Logo.webp 2042w" alt=""></img></a>
				{/* linked assets just in case */}
				{/* cyan circle https://assets.website-files.com/5f5e3428a1c1478d81e71075/6051b7fcacc7bf1f92a97ebd_Circle%20Decor.svg */}
				{/* colab logo https://assets.website-files.com/5f5e3428a1c1478d81e71075/60519b70acd92466ff6b8857_Co.Lab%20Logo.svg */}
			</div>
			
			<p className="copy"><small>&copy; Jay Mayberry</small></p>
		</div>
	)
}
export default Footer;