import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/profile_form.scss";
import oscarImageUrl from "../../img/oscar.jpg";

const profile_form = () => {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [aboutMe, setAboutMe] = useState("");
	const [github, setGithub] = useState("");
	const [linkedin, setLinkedin] = useState("");
	const [twitter, setTwitter] = useState("");

	const handleSubmit = e => {
		e.preventDefault();

		console.log(aboutMe.length);

		const data = {
			name: name,
			last_name: lastName,
			about_me: aboutMe,
			github: github,
			linkedin: linkedin,
			twitter: twitter,
			user_id: sessionStorage.getItem("id_user")
		};
		fetch(process.env.BACKEND_URL + "/api/profile", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
				setRedirect(true);
			})
			.catch(error => {
				console.error("Error:", error);
			});

		// setRedirect(true);
	};

	// FETCH

	return (
		<div className="form container">
			<form onSubmit={e => handleSubmit(e)}>
				<div className="text-center">
					<img id="imagen" className="rounded-circle" src="https://picsum.photos/200" />
				</div>
				<br />

				<div className="note">
					<p>Connect4Devs</p>
				</div>
				<br />
				<div className="form-content container2">
					<div className="none">
						<div className="col-md-12">
							<div className="form-group">
								<input
									type="name"
									className="form-control"
									id="floatingName"
									placeholder="Name"
									onChange={e => setName(e.target.value)}
								/>

								{/* <label htmlFor="floatingInput">Name</label> */}
							</div>
						</div>
						<div className="col-md-12">
							<div className="form-group">
								<input
									type="lastname"
									className="form-control"
									id="floatingInput"
									placeholder="Last Name"
									onChange={e => setLastName(e.target.value)}
								/>
								{/* <label htmlFor="floatingInput">Last Name</label> */}
							</div>
						</div>
						<div className="col-md-12">
							<div className="form-group">
								<div className="form-group">
									<textarea
										className="form-control"
										id="exampleFormControlTextarea1"
										rows="3"
										onChange={e => setAboutMe(e.target.value)}
									/>

									{/* <label htmlFor="floatingInput">About me</label> */}
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-12">
						<div className="form-group input-group">
							<input
								type="github"
								className="form-control"
								id="floatingInput"
								placeholder="GitHub"
								onChange={e => setGithub(e.target.value)}
							/>

							<input
								type="linkedin"
								className="form-control"
								id="floatingInput"
								placeholder="Linkedin"
								onChange={e => setLinkedin(e.target.value)}
							/>

							<input
								type="twiter"
								className="form-control"
								id="floatingInput"
								placeholder="Twiter"
								onChange={e => setTwitter(e.target.value)}
							/>
						</div>

						<div className="row g-2">
							{/* <div className="col-md">
								<div className="form-floating">
									<label htmlFor="floatingInput">GitHub</label>
								</div>
							</div>
							<div className="col-md">
								<div className="form-floating">
									<label>Linkedin</label>
								</div>
							</div>
							<div className="col-md">
								<div className="form-floating">
									<label htmlFor="floatingInput">Twiter</label>
								</div>
							</div> */}
						</div>
					</div>
				</div>

				<button className="w-100 btnRegister btn-lg btn-light" type="submit" value="Register">
					Submit
				</button>
			</form>
		</div>
	);
};

export default profile_form;
