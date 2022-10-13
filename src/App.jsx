import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://staging.dracoon.com/api/v4';
const ACCESS_TOKEN = 'LTzH6qVrgphTmAV6KIHIbetylpZJCPG8';
const PARENT_ID = '1107008';
const _initialUploadFile = {
	preview: '',
	data: '',
	name: ''
};
const FILE_NAME = 'test.png';

function App() {
	const [uploadFile, setUploadFile] = useState({ ..._initialUploadFile });

	const handleSubmit = async (e) => {
		e.preventDefault();
		(async () => {
			const headers = {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${ACCESS_TOKEN}`
			};
			const response = await axios.post(BASE_URL, {
				directS3Upload: true,
				name: FILE_NAME,
				parentId: PARENT_ID,
				size: 20000
			}, headers);
			const data = response.data;
			console.log(data);
		})();
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		const _uploadFile = {
			name: file.name,
			preview: URL.createObjectURL(file),
			data: e.target.files[0]
		};
		setUploadFile(_uploadFile);
	};

	return (
		<div className="App">
			<h1>Upload Test</h1>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<input type="file" onChange={handleFileChange}></input>
				</div>
				<div className="row">
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default App;
