import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Search from "./components/Search/Search";
import Pagination from "./components/Pagination/Pagination";
import Table from "./components/Table/Table";
import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
	let [fetchedData, updateFetchedData] = useState([]);
	let { info, results } = fetchedData;
	let [pageNumber, updatePageNumber] = useState(1);
	let [search, setSearch] = useState("");
	let [status, updateStatus] = useState("");
	let [gender, updateGender] = useState("");
	let [species, updateSpecies] = useState("");

	let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
	//call the api again when the page number changes

	useEffect(() => {
		(async function () {
			let data = await fetch(api).then((res) => res.json());
			updateFetchedData(data);
		})();
	}, [api, pageNumber, search]);

	return (
		<div className="App">
			<h1 className="webTitle">Rick and Morty characters</h1>
			<Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
			<Table data={results} />
			<Pagination
				info={info}
				pageNumber={pageNumber}
				updatePageNumber={updatePageNumber}
			/>
		</div>
	);
}

export default App;
