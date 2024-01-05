import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useMemo, useState } from "react";
import { Text, SafeAreaView, ActivityIndicator, View, Dimensions } from "react-native";
import CustomButton from "../../Components/CustomButton/CustomButton.jsx";
import { useQuizContext } from "../../context/QuizContext.jsx";
import GradientWrapper from "../../Components/GradientWrapper/GradientWrapper.jsx";

import getStyles from "./Quiz.style.js";
import { trafficQuestions } from "../../helpers/helpers.js";

const Quiz = () => {
	const {
		addAnswer,
		counter,
		updateCounter,
	} = useQuizContext();

	const screenDimensions = Dimensions.get("screen");
	const styles = getStyles(screenDimensions)

	const [selectedOption, setSelectedOption] = useState("");

	const navigation = useNavigation();
	const trafficQuestions1 = useMemo(() => {
		const getRandomSubset = (trafficQuestions, subsetLength) => {
			const shuffled = trafficQuestions.sort(() => Math.random() - 0.5); // Shuffle the array
			return shuffled.slice(0, subsetLength); // Get a subset of specified length
		}
		const data = getRandomSubset(trafficQuestions, 5)
		return data
	}, [])
	const endOfQuestions = counter === trafficQuestions1?.length - 1;

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

	if (trafficQuestions1.length === 0) {
		return <ActivityIndicator />;
	} else {
		return (
			<GradientWrapper>
				<SafeAreaView style={styles.mainContainer}>
					<View style={styles.gameContainer}>
						<Text style={styles.title}>Question {counter + 1}</Text>
						<Text style={styles.question}>
							{trafficQuestions1 && trafficQuestions1[counter]?.question}
						</Text>
						<View style={styles.buttonContainer}>
							{trafficQuestions1 &&
								trafficQuestions1[counter]?.answers.map((answer, index) => (
									<CustomButton
										key={`${answer}-${index}`}
										index={index}
										buttonText={answer}
										choice={trafficQuestions1[counter]?.answers}
										correctAnswer={trafficQuestions1[counter]?.correctAnswer}
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
