import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from "axios";

function App() {

  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  const [r, setRes] = useState();

  const handleChange = (event) => {

    setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);

    axios.post(
      `${process.env.REACT_APP_ACCOUNT_BASE_URL_ID}/v2.1/accounts/${process.env.REACT_APP_API_ACCOUNT_ID}`,
      {
        pdf: selectedFile
      } 
    ).then((res) => {
      setRes(res);
    })
  }

  return (
    <div className="App">
      <input type="file" accept="application/pdf" onChange={(e) => handleChange(e)}/>
      <p>Result: {r}</p>
    </div>
  );
}

export default App;
