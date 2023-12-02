// write boilerplate react code for admin page to upload images

import React from 'react';
import {useState , useEffect} from 'react';
import axios from 'axios';
import {Cloudinary} from "@cloudinary/url-gen";

function Contri() {
	const [img , setImg] = useState({});//"http://source.unsplash.com/random"

	async function onClk(e) {
		// upload img to cloudinary , create instance on DB 
		const formData = new FormData();
		e.preventDefault();
		let link = (URL.createObjectURL(e.target[0].files[0]));
		console.log(link);
		//axios.post("http://localhost:8080/create", {title:e.target[1].value , link:link})
		formData.append("file", e.target[0].files[0]);
		formData.append("upload_preset", "wzpockzz");
		formData.append("public_id", e.target[1].value);	
		const imgRes = await axios.post("https://api.cloudinary.com/v1_1/dbnlrh9gs/image/upload", formData)
		console.log(imgRes.data.secure_url);
		axios.post("https://nutornot.el.r.appspot.com/create", {title:e.target[1].value , link:imgRes.data.secure_url})
	}

	function onChng(e) {
		console.log(e);
		setImg(URL.createObjectURL(e.target.files[0]));
		console.log(URL.createObjectURL(e.target.files[0]));
	}
	return (
		<div>
			<img src={img} alt="imgUpld" />
			<form onSubmit={onClk}>
				<input type="file" name="file" onChange={onChng}/>
				<input type="text" name="title"/>
				<input type="submit" value="submit"/>
			</form>
		</div>
	);
}

export default Contri;
