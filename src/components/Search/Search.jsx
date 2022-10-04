import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch, updatePageNumber }) => {
	return (
		<form className={`${styles.search} `}>
			<img src="/magnifyingglass.png" alt="" />
			<input
				onChange={(e) => {
					updatePageNumber(1);
					setSearch(e.target.value);
				}}
				placeholder="Search User"
				className={styles.input}
				type="text"
			/>
		</form>
	);
};

export default Search;
