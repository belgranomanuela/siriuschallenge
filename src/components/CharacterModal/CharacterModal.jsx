import React from "react";
import styles from "./CharacterModal.module.scss";

const CharacterModal = ({ data }) => {
	return (
		<div className={styles.modal}>
			<div className={styles.modalContent}>
				<div className={styles.modaldata}>
					<div className={styles.modalHeader}>
						<h2>{data?.name}</h2>
					</div>
					<div className={styles.modaldataLeft}>
						<img src={data?.image} alt="" />
					</div>
					<div className={styles.modaldataRight}>
						<p> Status: {data?.status}</p>
						<p> Species: {data?.species}</p>

						<div className={styles.modaldataRightBottom}>
							<div className={styles.modaldataRightBottomdata}></div>
							<div className={styles.modaldataRightBottomdata}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CharacterModal;
