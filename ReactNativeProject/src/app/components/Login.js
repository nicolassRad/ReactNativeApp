import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { USER } from './../utils/constants';
export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}
	static navigationOptions = {
		header: null
	}

	componentDidMount() {
		this._checkUserIfUserIsLogged()
	}

	_checkUserIfUserIsLogged = async () => {
		let userIsLogged = await AsyncStorage.getItem('testUser');
		if (userIsLogged == 'true') {
			this.props.navigation.navigate('Home');
		}
	}

	_loginUser = () => {
		const { password, username } = this.state;
		if (password == USER.PASSWORD && username == USER.USERNAME) {
			AsyncStorage.setItem('testUser', 'true');
			this.props.navigation.navigate('Home');
		}
		else {
			alert('Username or password incorect')
		}
	}

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<View style={styles.logoContainer}>
					<Image
						style={styles.logo}
						source={require('../../images/mafia.png')}
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
						onChangeText={(username) => this.setState({ username })}
					/>
					<TextInput
						placeholderTextColor="#b6bdc6"
						placeholder="Password"
						secureTextEntry
						style={styles.formInput}
						autoCorrect={false}
						onChangeText={(password) => this.setState({ password })}
					/>
					<TouchableOpacity style={styles.buttonContainer} onPress={this._loginUser}>
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
		width: 150,
		height: 150
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
		marginBottom: 80,
		height: 50,
		padding: 15,
		backgroundColor: '#5874a0'
	},
	buttonText: {
		textAlign: "center",

	}
})