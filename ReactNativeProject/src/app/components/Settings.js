import React from 'react';
import { StyleSheet, SafeAreaView, Button, AsyncStorage } from 'react-native';

export default class Settings extends React.Component {
	constructor(props) {
		super(props)
	}

	_logUserOut = () => {
		try {
			AsyncStorage.removeItem('testUser');
			this.props.navigation.navigate('Home');
		}
		catch (error) {
			alert('Error while logging out', error);
		}
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Button
					onPress={this._logUserOut}
					title="Log Out"
					color="#841584"
					style={styles.logOutButton}
				/>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	logOutButton: {
		marginTop: 60
	}
})