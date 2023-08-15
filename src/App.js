import { useState } from 'react';
import { data } from './content/data';
import Modal from './modal/Modal';
import Header from './components/Header';


function App() {
	const [showModal, setShowModal] = useState(false);          //State variable deciding whether to show the modal or not.
	const [selectedContent, setSelectedContent] = useState(null);   //State Variable storing which image is selected for display on the modal. This can be changed from the gallery app or from the modal which is open having the images displayed at the bottom.

	return (
		<>
			{showModal && <Modal setShowModal={setShowModal} setSelectedContent={setSelectedContent} content={selectedContent} data={data} />}

			<div style={styles.main}>
				<Header title="Photo Gallery" subtitle="A simple photo gallery app built by Sagnik" />

				<div style={styles.container}>
					{data.map((image_data, index) => {
						return (
							<div style={styles.imageContainer}
								onClick={() => {
									setShowModal(true);
									setSelectedContent(image_data);
								}}
							>
								<img style={styles.image} src={image_data.url} alt="" />
								<div style={styles.imageDescription}>
									<p style={styles.imageDescriptionText}>{image_data.name}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

const styles = {
	main: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		backgroundColor: '#f0f0f0',
		flexDirection: "column"
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: 10,
		maxWidth: "60vw"
	},
	imageContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		cursor: 'pointer',
	},
	image: {
		width: '300px',
		height: '300px',
		objectFit: 'cover',
	},
	imageDescription: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		width: '100%',
		height: '50px',
		backgroundColor: '#000000',
		opacity: '0.5',
	},
	imageDescriptionText: {
		color: '#ffffff',
		fontSize: '16px',
		fontWeight: 'bold',
	},
}

export default App
