import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

class FeedList extends React.Component {
	static navigationOptions = {
		header: null
	}

	render() {
		return (
			<View >
				<FlatList
					data={this.props.data}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => this.props.navigation.navigate('ItemView', { item })}
						>
							<View style={styles.cardContainer}>
								<View style={item.status ? styles.available : styles.disabled} />
								<Image
									style={styles.cardImage}
									source={{ uri: item.imageUrl }} />
								<Text style={styles.cardDescription}>{item.description}</Text>
							</View>
						</TouchableOpacity>
					)}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	cardContainer: {
		marginBottom: 10,
		backgroundColor: '#f2f4f7',
		height: 160,
		flexDirection: 'row',
		alignItems: 'center'
	},
	cardImage: {
		borderRadius: 50,
		width: 100,
		height: 100,
		marginLeft: 10
	},
	cardTitle: {
		alignSelf: 'stretch',
	},
	cardDescription: {
		alignSelf: 'center',
		marginLeft: 10
	},

	available: {
		backgroundColor: '#6ad16e',
		alignSelf: 'stretch',
		flexDirection: 'row',
		textAlign: 'center',
		width: 15
	},
	disabled: {
		backgroundColor: 'red',
		alignSelf: 'stretch',
		flexDirection: 'row',
		textAlign: 'center',
		width: 15
	}
})

export default withNavigation(FeedList);