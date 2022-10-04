import React from "react";
import styles from "./Table.module.scss";
import Modal from "react-modal";
import CharacterModal from "../CharacterModal/CharacterModal";

const Table = ({ data }) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [modalData, setModalData] = React.useState(null);

	const openModal = (data) => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};
	const handleModal = (key) => {
		setModalData(data[key - 1]);
		openModal();
	};

	return (
		<div className={styles.table}>
			<table className={styles.tableWrapper}>
				<thead className={styles.tableHead}>
					<tr>
						<th scope="col" style={{ padding: "10px" }}>
							Name
						</th>
						<th scope="col">Status</th>
						<th scope="col">Species</th>
						<th scope="col">...</th>
					</tr>
				</thead>
				<tbody className={styles.tableBody}>
					{data?.map((item) => (
						<tr key={item?.id} className={styles.tableRow}>
							<td>{item?.name}</td>
							<td>{item?.status}</td>
							<td>{item?.species}</td>
							<td>
								<button
									className={styles.eyeButton}
									onClick={() => handleModal(item?.id)}
								>
									<img src="/eye.png" alt="" />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Modal
				ariaHideApp={false}
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				className={styles.modal}
			>
				<CharacterModal data={modalData} />
				<button onClick={closeModal} className={styles.closeModalButton}>
					Close
				</button>
			</Modal>
		</div>
	);
};
export default Table;
