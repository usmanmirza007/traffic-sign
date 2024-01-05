import { Text, Pressable, Dimensions, StyleSheet } from "react-native";
import getStyles from "./CustomButton.style";
import palette from "../../styles/colours";
import { useEffect, useState } from "react";


const CustomButton = ({
	fullWidth,
	buttonText,
	width,
	disabled,
	type,
	onPress,
	correctAnswer,
	choice,
	index,
}) => {
	const screenDimensions = Dimensions.get("screen");
	const styles = getStyles(screenDimensions);
	const [answers, setAnswers] = useState([...choice]);
	const [selectAnswer, setSelectAnswer] = useState('');
	const [incorrectText, setIncorrectText] = useState('');
	const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
	const [incorrectAnswerIndex, setIncorrectAnswerIndex] = useState(null);
	const [allIndex, setAllIndex] = useState([]);
	// const index1 = buttonText?.indexOf(correctAnswer)
	// console.log('indexsdsd', allIndex, correctAnswerIndex, incorrectAnswerIndex);

	useEffect(() => {

		let arr = []
		for (let index = 0; index < choice?.length; index++) {
			// const element = array[index];
			arr.push(index)

		}
		// arr.push(index)
		setAllIndex([...arr])
	}, []);
	const handleAnswerClick = (index) => {
    if (index === correctAnswerIndex) {
      // Correct answer clicked
      const updatedAnswers = choice?.map((answer, i) => {
        return { text: answer, color: i === index ? 'green' : 'white' };
      });
      setAnswers(updatedAnswers);
    } else {
      // Incorrect answer clicked
      const updatedAnswers = choice?.map((answer, i) => {
        return {
          text: answer,
          color:
            i === index ? 'red' : i === correctAnswerIndex ? 'green' : 'white',
        };
      });
			onPress()
      setAnswers(updatedAnswers);
    }
  };
	let styleItem = {}
	// useEffect(() => {
	// 	if (selectAnswer == 'correct') {
	// 		styleItem = {backgroundColor: 'yellow'}
	// 	} else {
	// 		if (allIndex.includes(correctAnswerIndex)) {
	// 			styleItem = {backgroundColor: 'green'}
	// 		}
	// 		if (allIndex.includes(incorrectAnswerIndex) ) {
	// 			styleItem = {backgroundColor: 'red'}
	// 		}
	// 	}
	// }, [correctAnswerIndex, incorrectAnswerIndex]);
	return (
		<Pressable
			style={[
				styles.button,
				buttonStyle.getStyle(selectAnswer, width, correctAnswerIndex, incorrectAnswerIndex, allIndex, fullWidth)
			]}
			onPress={() => {
				// let answerTime = null

				// if (buttonText.includes(correctAnswer)) {
				// 	setSelectAnswer('correct')
				// 	answerTime = setTimeout(() => {
				// 		onPress()
				// 	}, 2000)
				// } else {
				// 	// const index = buttonText?.findIndex(fruit => fruit == correctAnswer);
				// 	// console.log('correctAnswer', correctAnswer, buttonText);
				// 	setSelectAnswer('incorrect')
				// 	setIncorrectText(buttonText)
				// 	const index1 = choice?.indexOf(correctAnswer)
				// 	const index2 = choice?.indexOf(buttonText)
				// 	// console.log('fofo', index1, index2);
				// 	setCorrectAnswerIndex(index1)
				// 	setIncorrectAnswerIndex(index2)
				// 	answerTime = setTimeout(() => {
				// 		onPress()
				// 	}, 2000)
				// }
				// () => {
				// 	clearTimeout(answerTime)
				// }
				handleAnswerClick(index)
			}}
			disabled={disabled}
		>
			<Text
				style={[
					styles.buttonText,
					{ color: disabled ? palette[type] : "white" },
				]}
			>
				{buttonText}
			</Text>
		</Pressable>
	);
};

export default CustomButton;

const buttonStyle = StyleSheet.create({
	getStyle: (selectAnswer, width, correctAnswerIndex, incorrectAnswerIndex, allIndex, fullWidth) => {
		let styleItem = {}
		if (selectAnswer == 'correct') {
			console.log('correct');
			styleItem = { backgroundColor: 'yellow' }
		} else {
			if (allIndex.includes(correctAnswerIndex)) {
				console.log('correct 1');
				styleItem = { backgroundColor: 'green' }
			}
			if (allIndex.includes(incorrectAnswerIndex)) {
				console.log('incorrect');
				styleItem = { backgroundColor: 'red' }
			}
		}
		return {

			width: width || "auto",
			// backgroundColor: selectAnswer == 'correct' ? 'green' : selectAnswer == 'incorrect' && ? 'red' && index == correctAnswer && 'green' :  'black',
			// backgroundColor: index == 1 ? 'green' : index == 2 ? 'red' : 'black',
			// backgroundColor: selectAnswer == 'correct' ? 'yellow'
			// 	: selectAnswer == 'incorrect' ?
			// 		allIndex.includes(correctAnswerIndex) && 'green' ||
			// 		allIndex.includes(incorrectAnswerIndex) && 'red' : 'black',
			// backgroundColor: styleItem,
			...styleItem,
			borderWidth: 2,
			// borderColor: palette[type],
			alignSelf: fullWidth ? "stretch" : "center",
		}
	}

})