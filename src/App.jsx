import './App.css';
import axios from 'axios';

const BASE_URL = 'https://staging.dracoon.com/api/v4';
const ACCESS_TOKEN = 'LTzH6qVrgphTmAV6KIHIbetylpZJCPG8';
const PARENT_ID = '1107008';
const _initialUploadFile = {
	preview: '',
	data: '',
	name: ''
};
const FILE_NAME = 'photographer.jpg';

function App() {
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
				size: 2491865
			}, headers);
			const data = response.data;
			console.log(data);
		})();
	};

	return (
		<div className="App">
			<h1>Upload Test</h1>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default App;
