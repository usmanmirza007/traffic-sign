import { Text, Pressable, Dimensions, StyleSheet, Animated } from "react-native";
import getStyles from "./CustomButton.style";
import palette from "../../styles/colours";
import { useEffect, useRef, useState } from "react";


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
	const colorAnimation = useRef(new Animated.Value(0)).current;
	const [animatedColor] = useState(new Animated.Value(0)); // Initialize animated value
	const [isAnimating, setIsAnimating] = useState(false); // To track animation status
	const [selectAnswer, setSelectAnswer] = useState('');

	const animateBackground = () => {
		if (!isAnimating) {
			setIsAnimating(true);
			Animated.timing(animatedColor, {
				toValue: 1, // Change the value to 1 (completely green)
				duration: 1000, // Animation duration in milliseconds
				useNativeDriver: false, // Ensure to use JavaScript thread for animation
			}).start(() => {
				setIsAnimating(false); // Reset animation status
			});
		}
	};

	const backgroundColor = animatedColor.interpolate({
		inputRange: [0, 1],
		outputRange: ['red', 'green'],
	});
	let itemStyle = {}
	return (
		
		// <Animated.View style={[{backgroundColor: '#fff'}, backgroundColor]}>
		<Pressable
			style={[
				styles.button,
				{
					width: width || "auto",
					backgroundColor: selectAnswer == 'correct' ? 'green' : selectAnswer == 'incorrect' ? 'red' : 'white',
					borderWidth: 2,
					borderColor:  selectAnswer == 'correct' ? 'green' : selectAnswer == 'incorrect' ? 'red' : palette[type],
					alignSelf: fullWidth ? "stretch" : "center",
				},
				itemStyle
			]}
			onPress={() => {
				if (buttonText === correctAnswer) {
					setSelectAnswer('correct')
				} else {
					setSelectAnswer('incorrect')
				}
				let answerTime = setTimeout(() => {
					onPress()
					setSelectAnswer('')
				}, 200)

				return () => {
					clearTimeout(answerTime)
				}

			}}
			disabled={selectAnswer ? true : false}
		>
			<Text
				style={[
					styles.buttonText,
					{ color:  selectAnswer == 'correct' ? 'white' : selectAnswer == 'incorrect' ? 'white' : palette[type] },
				]}
			>
				{buttonText}
			</Text>
		</Pressable>
		// </Animated.View>
	);
};

export default CustomButton;

const buttonStyle = StyleSheet.create({


})