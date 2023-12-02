// write boilerplate react code for admin page to upload images

import React from 'react';
import {useState , useEffect} from 'react';
import axios from 'axios';
import {Cloudinary} from "@cloudinary/url-gen";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contri() {
	const [img, setImg] = useState({});
	const [title, setTitle] = useState("");

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

		try{
			const imgRes = await axios.post("https://api.cloudinary.com/v1_1/dbnlrh9gs/image/upload", formData)
			console.log(imgRes.data.secure_url);
			axios.post("https://nutornot.el.r.appspot.com/create", {title:e.target[1].value , link:imgRes.data.secure_url})
			setImg("https://res.cloudinary.com/dbnlrh9gs/image/upload/v1701532189/done.jpg");
			toast.success("Image uploaded successfully");
			setTitle("");
		}
		catch(err){
			console.log(err);
			toast.error("Image upload failed");
		}
	}

	function onChng(e) {
		console.log(e);
		setImg(URL.createObjectURL(e.target.files[0]));
		console.log(URL.createObjectURL(e.target.files[0]));
	}
	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
  <div className="bg-white p-6 rounded-lg shadow-lg">
    {img && <img src={img} alt="Upload_Image" className="w-64 h-64 object-cover mb-4" />}
    <form onSubmit={onClk} className={`flex flex-col items-center ${img ? 'space-y-4' : 'space-y-2'}`}>
      <label className={`w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border-2 border-blue border-dashed cursor-pointer hover:border-solid hover:bg-blue-500 hover:text-white ${img ? 'mt-4' : 'mt-0'}`}>
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M16.88 7.05l-4.95-4.95c-.58-.58-1.34-.9-2.15-.9H5.5C4.12 7.2 3 8.32 3 9.7v6.6c0 1.38 1.12 2.5 2.5 2.5h8c1.38 0 2.5-1.12 2.5-2.5V9.2c0-.81-.32-1.57-.9-2.15zM9 12.5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm4 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm1-6.5H6v-1h8v1z" />
        </svg>
        <span className="mt-2 text-base leading-normal">Drag and drop a file or click to select</span>
        <input type="file" name="file" className="hidden" onChange={onChng} />
      </label>
	  <p>after clicking wait for a few seconds</p>
      <input type="text" name="title" className="px-4 py-2 border rounded" placeholder="Enter title" />
      <input type="submit" value="Submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" />
	  <ToastContainer />
    </form>
  </div>
</div>

	);
}

export default Contri;