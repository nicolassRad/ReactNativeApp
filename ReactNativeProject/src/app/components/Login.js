import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default class Login extends React.Component {
	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<View style={styles.logoContainer}>
					<Image
						style={styles.logo}
						source={require('../../images/user-logo.png')}
					/>
					<Text style={styles.titleText}>Practice, focus and move to React Native </Text>
				</View>
				<View style={styles.formContainer}>
					<TextInput
						placeholder="Username or email"
						placeholderTextColor='#b6bdc6'
						style={styles.formInput}
						autoCapitalize="none"
						autoCorrect={false}
					/>
					<TextInput
						placeholderTextColor="#b6bdc6"
						placeholder="Password"
						secureTextEntry
						style={styles.formInput}
						autoCorrect={false}
					/>
					<TouchableOpacity style={styles.buttonContainer}>
						<Text style={styles.buttonText}>Login</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#5D6D7E'
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		width: 100,
		height: 100
	},
	titleText: {
		textAlign: 'center'
	},
	formContainer: {
		padding: 20
	},
	formInput: {
		height: 40,
		marginBottom: 10,
		backgroundColor: '#535963',
		paddingHorizontal: 20
	},
	buttonContainer: {
		marginBottom: 40,
		height: 50,
		padding: 15,
		backgroundColor: '#5874a0'
	},
	buttonText: {
		textAlign: "center",

	}
})