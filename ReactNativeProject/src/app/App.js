import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import { createAppContainer, createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
	{
		Home: {
			screen: Home,
		},
		Login: {
			screen: Login,
		},
	},
	{
		initialRouteName: 'Login',
	}
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
	render() {
		return (
			<AppContainer />
		);
	}
}