import { Navigate } from "react-router-dom";

const Profil = (props) => {

	const autentificat=localStorage.getItem('user');
	
	return autentificat?(
		<div className="profile">
			
			
			<h3> Bine ati venit, {props.name}!</h3>
		
		</div>
	):(
		<Navigate  to="/login" />
	)

};

export default Profil;