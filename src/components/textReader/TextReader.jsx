import { useSpeechSynthesis } from "react-speech-kit";
import { useEffect, useState } from "react";
import { RxSpeakerLoud } from "react-icons/rx";
import { RxSpeakerOff } from "react-icons/rx";
import { IconContext } from "react-icons";

import "./textReader.css";

const TextReader = () => {
	const [value, setValue] = useState("");
	const { speak, cancel, voices, speaking } = useSpeechSynthesis();

	return (
		<div id="textReaderContainer">
			<div id="speakerContainer">
				<h4>Text Reader</h4>
				<RxSpeakerLoud id="speakerOn" />
			</div>

			<div id="buttonContainer">
				<button
					className="textReaderBtn"
					onClick={() => {
						let highlighted = window.getSelection().toString();
						const errorMessage = document.getElementById("errorMessage");

						if (highlighted === "") {
							errorMessage.innerHTML = "You must highlight some" + "<br />" + "text on the page!";
						} else {
							errorMessage.innerHTML = "";
						}

						speak({ text: highlighted });
					}}
				>
					Speak
				</button>

				<button
					className="textReaderBtn"
					onClick={() => {
						cancel();
					}}
				>
					Pause
				</button>
			</div>

			<div id="errorMessage"></div>
		</div>
	);
};

export default TextReader;