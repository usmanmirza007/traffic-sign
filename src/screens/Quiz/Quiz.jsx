import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, ActivityIndicator, View, Dimensions } from "react-native";
import CustomButton from "../../Components/CustomButton/CustomButton.jsx";
import { useQuizContext } from "../../context/QuizContext.jsx";
import GradientWrapper from "../../Components/GradientWrapper/GradientWrapper.jsx";

import getStyles from "./Quiz.style.js";
import {
	getTrueFalseQuestions,
	getSpecificNumberOfRegularQuestions,
} from "../../api/quiz.js";
import { trafficQuestions } from "../../helpers/helpers.js";

const Quiz = () => {
	const {
		quizQuestions,
		numQuestions,
		questionType,
		updateQuestions,
		addAnswer,
		counter,
		updateCounter,
	} = useQuizContext();

	const screenDimensions = Dimensions.get("screen");
	const styles = getStyles(screenDimensions)

	const [selectedOption, setSelectedOption] = useState("");

	const navigation = useNavigation();

	const endOfQuestions = counter === numQuestions - 1;

	const fetchQuestions = async () => {
		if (questionType === "True or False") {
			const trueOrFalseQuestions = await getTrueFalseQuestions(numQuestions);
			await updateQuestions(trueOrFalseQuestions);
		} else {
			const regularQuestions = await getSpecificNumberOfRegularQuestions(
				numQuestions,
			);
			await updateQuestions(regularQuestions);
		}
	};

	const saveAnswer = (answer) => {
		setSelectedOption(answer);

		addAnswer({ id: counter, answer: answer });

		if (!endOfQuestions) {
			goToNextQuestion();
		} else {
			navigation.navigate("Finish");
		}
	};

	const goToNextQuestion = () => {
		const nextQuestion = counter + 1;
		updateCounter(nextQuestion);
		setSelectedOption("");
	};

	useEffect(() => {
		fetchQuestions();
	}, []);

	const trafficSignTest = [
  {
    question: "What does this sign indicate?",
    image: "image_url_1.jpg", // You can use image URLs if the signs need visual representation
    options: [
      "No U-turn",
      "No overtaking",
      "No parking",
      "No entry"
    ],
    answer: 3 // Index of the correct answer in the options array (No entry)
  },
  {
    question: "What does this sign mean?",
    image: "image_url_2.jpg",
    options: [
      "Give way",
      "Stop",
      "Pedestrian crossing",
      "Traffic lights ahead"
    ],
    answer: 0 // Index of the correct answer in the options array (Give way)
  },
  {
    question: "Identify this sign:",
    image: "image_url_3.jpg",
    options: [
      "Roundabout ahead",
      "Merging traffic",
      "No entry",
      "Yield to oncoming traffic"
    ],
    answer: 2 // Index of the correct answer in the options array (No entry)
  },
  // Add more questions similarly
];

// Accessing the questions and answers
// trafficSignTest.forEach((questionObj, index) => {
//   console.log(`Question ${index + 1}: ${questionObj.question}`);
//   console.log(`Options: ${questionObj.options.join(', ')}`);
//   console.log(`Answer: ${questionObj.options[questionObj.answer]}\n`);
// });

console.log('quizQuestions[counter].answers', quizQuestions);

	if (trafficQuestions.length === 0) {
		return <ActivityIndicator />;
	} else {
		return (
			<GradientWrapper>
				<SafeAreaView style={styles.mainContainer}>
					<View style={styles.gameContainer}>
						<Text style={styles.title}>Question {counter + 1}</Text>
						<Text style={styles.question}>
							{trafficQuestions && trafficQuestions[counter].question}
						</Text>
						<View style={styles.buttonContainer}>
							{trafficQuestions &&
								trafficQuestions[counter].answers.map((answer, index) => (
									<CustomButton
										key={`${answer}-${index}`}
										buttonText={answer}
										onPress={() => saveAnswer(answer)}
										type="primary"
										fullWidth
									/>
								))}
						</View>
					</View>
				</SafeAreaView>
			</GradientWrapper>
		);
	}
};

export default Quiz;
