

//importing typewriter-effect
import Typewriter from "typewriter-effect";


function  Writing() {
	return (
		<div className="title">
			<Typewriter

				onInit={(typewriter) => {
					typewriter
						.typeString("LEGACY GPT")
						.pauseFor(1000)
						.deleteAll()
						.typeString("AI INNOVATION FOR CRYPTO PROJECTS")
						.start();
				}}
			/>
		</div>
	);
}

export default Writing;
