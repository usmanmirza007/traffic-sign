import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState, useRef, useMemo } from "react";
import {
	Text,
	SafeAreaView,
	FlatList,
	View,
	ActivityIndicator,
	Dimensions
} from "react-native";
import { useQuizContext } from "../../context/QuizContext.jsx";
import ResultItem from "../../Components/ResultItem/ResultItem.jsx";
import CustomButton from "../../Components/CustomButton/CustomButton.jsx";
import GradientWrapper from "../../Components/GradientWrapper/GradientWrapper.jsx";
import LottieView from "lottie-react-native";
import getStyles from "./Finish.style.";
import { trafficQuestions } from "../../helpers/helpers.js";

const Finish = () => {
	const { recordedAnswers, reset } = useQuizContext();
	const [finalScore, setFinalScore] = useState(null);

	const navigation = useNavigation();
	const animation = useRef(null);

	const screenDimensions = Dimensions.get("screen");
	const styles = getStyles(screenDimensions);

	const trafficQuestions1 = useMemo(() => {
		const getRandomSubset = (trafficQuestions, subsetLength) => {
			const shuffled = trafficQuestions.sort(() => Math.random() - 0.5); // Shuffle the array
			return shuffled.slice(0, subsetLength); // Get a subset of specified length
		}
		const data = getRandomSubset(trafficQuestions, 5)
		return data
	}, [])

	const getScore = () => {
		let score = 0;
		for (let i = 0; i < trafficQuestions1.length; i++) {
			if (trafficQuestions1[i].correctAnswer === recordedAnswers[i].answer) {
				score++;
			}
		}
		setFinalScore(score);
	};

	const playAgain = () => {
		navigation.navigate("Quiz");
		reset("answers");
	};

	const quit = () => {
		navigation.navigate("Starter");
		reset("all");
	};

	useEffect(() => {
		getScore();
	}, []);

	if (finalScore === null) return <ActivityIndicator />;

	return (
		<GradientWrapper>
			<SafeAreaView style={styles.container}>
				<View style={styles.resultContainer}>
					<Text style={styles.endTitle}>All questions answered!</Text>

					<Text style={styles.scoreAnnouncement}>
						You scored {finalScore} out of {trafficQuestions1.length}
					</Text>

					<LottieView
						autoPlay
						ref={animation}
						style={{
							width: 200,
							height: 200,
							backgroundColor: "transparent",
						}}
						// Find more Lottie files at https://lottiefiles.com/featured
						source={require("../../assets/animations/trophy.json")}
					/>

					{/* <Image source={awardImg} alt="trophy" style={styles.awardImg} /> */}

					<View style={styles.buttonContainer}>
						<CustomButton
							buttonText="Play Again"
							onPress={() => playAgain()}
							type="primary"
						/>
						<CustomButton
							buttonText="Quit"
							onPress={() => quit()}
							type="secondary"
						/>
					</View>

					<View style={styles.listContainer}>
						<Text style={styles.subtitle}>Review your answers:</Text>
						<FlatList
							data={recordedAnswers}
							renderItem={({ item }) => (
								<ResultItem questions={trafficQuestions1} item={item} />
							)}
							keyExtractor={(item) => item.id}
						/>
					</View>
				</View>
			</SafeAreaView>
		</GradientWrapper>
	);
};

export default Finish;
