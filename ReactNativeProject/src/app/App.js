import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import ItemView from './components/ItemView';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {
				header: null,
				gesturesEnabled: false,
			}
		},
		Login: {
			screen: Login,
		},
		ItemView
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