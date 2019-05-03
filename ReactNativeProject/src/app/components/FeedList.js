import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';

export default class FeedList extends React.Component {
	static navigationOptions = {
		header: null
	}

	render() {
		return (
			<View >
				<FlatList
					data={this.props.data}
					renderItem={({ item }) => (
						<TouchableOpacity>
							<View style={styles.cardContainer}>
								<View style={item.status ? styles.available : styles.disabled} />
								<Text style={styles.cardTitle}>{item.title}</Text>
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
		backgroundColor: '#f9f9f9',
		height: 200,
		flexDirection: 'row',
		alignItems: 'center'
	},
	cardImage: {
		borderRadius: 50,
		width: 100,
		height: 100,
	},
	cardTitle: {

	},
	cardDescription: {

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