import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
// import UserSideDrawer from './UserSideDrawer';
import Settings from './Settings';
import Contact from './Contact';
import About from './About';

export default class UserProfile extends React.Component {
	render() {
		return (
			<UserDrawerContainer />
		)
	}
}

const UserDrawerNavigator = createDrawerNavigator({
	Settings: Settings,
	Contact: Contact,
	About: About
},
	// {
	// 		contentComponent: UserSideDrawer
	// 	}
)

const UserDrawerContainer = createAppContainer(UserDrawerNavigator);
const styles = StyleSheet.create({
})