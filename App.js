import React from "react";
import Navigation from "./src/routes/RouteContainer";
import { QuizProvider } from "./src/context/QuizContext";
import { ActivityIndicator } from "react-native";
import Instabug from 'instabug-reactnative';

import { useFonts, Blaka_400Regular } from "@expo-google-fonts/dev";

const App = () => {
	let [fontsLoaded] = useFonts({
		Blaka_400Regular,
	});

	useEffect(() => {
		Instabug.init({
			token: 'APP_TOKEN',
			invocationEvents: [Instabug.invocationEvent.shake],
		});
	},[])
	if (!fontsLoaded) {
		return <ActivityIndicator />;
	} else {
		return (
			<QuizProvider>
				<Navigation />
			</QuizProvider>
		);
	}
};

export default App;
