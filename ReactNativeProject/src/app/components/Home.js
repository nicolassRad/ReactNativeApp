import React from 'react';
import { StyleSheet, SafeAreaView, Image, View } from 'react-native';
import FeedList from './FeedList';
import UserProfile from './UserProfile';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { DATA_TO_BE_CONSUMED } from '../utils/constants';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: DATA_TO_BE_CONSUMED
		}
	}
	render() {
		return (
			<SafeAreaView style={{ backgroundColor: '#ffffff' }}>
				<View style={styles.imageBannerContainer}>
					<Image
						style={styles.imageBanner}
						source={require('../../images/3pillarglobal-logo.png')}
					/>
				</View>
				<FeedList data={this.state.data} />
			</SafeAreaView>
		)
	}
}

const TabNavigator = createBottomTabNavigator({
	Home,
	UserProfile,
});

const styles = StyleSheet.create({
	imageBannerContainer: {
		alignItems: 'center',
	},
	imageBanner: {
		height: 100,
		width: 150,
		marginBottom: 10,
	}
})

export default createAppContainer(TabNavigator);
