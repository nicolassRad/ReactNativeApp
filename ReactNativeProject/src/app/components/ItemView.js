import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ItemView extends React.Component {
	render() {
		const itemData = this.props.navigation.state.params.item
		return (
			<View>
				<Text>{itemData.title}</Text>
				<Text>{itemData.description}</Text>
				<Image
					source={{ uri: itemData.imageUrl }}
					style={{ width: 150, height: 150 }}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({

})