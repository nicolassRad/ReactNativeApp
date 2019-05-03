import React from 'react';
import { View } from 'react-native';
import FeedList from './FeedList';

export default class Home extends React.Component {
	static navigationOptions = {
		header: null,
		gesturesEnabled: false,
	}
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					title: "Titlu 1",
					status: true,
					description: 'Description 1',
					imageUrl: 'https://pixel.nymag.com/imgs/daily/vulture/2018/11/02/02-avatar-2.w700.h700.jpg'
				},
				{
					title: "Titlu 2",
					status: false,
					description: 'Description 2',
					imageUrl: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/44/1540913834-sigourneyweaveravatar.jpg?resize=480:*'
				},
				{
					title: "Titlu 3",
					status: true,
					description: 'Description 3',
					imageUrl: 'https://cdn.vox-cdn.com/thumbor/89QwH4iOr1P1EoYrnXR0uZGg0EM=/0x37:1100x656/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/54394907/Avatar.0.png'
				},
				{
					title: "Titlu 4",
					status: true,
					description: 'Description 4',
					imageUrl: 'https://i.kinja-img.com/gawker-media/image/upload/s--C00bVsGR--/c_scale,f_auto,fl_progressive,q_80,w_800/a8sv2drcithudsjmy7wz.jpg'
				},
				{
					title: "Titlu 5",
					status: false,
					description: 'Description 5',
					imageUrl: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias-cine/avatar-2-cumplira-con-su-fecha-de-estreno-segun-james-cameron/90508637-1-esl-ES/Avatar-2-cumplira-con-su-fecha-de-estreno-segun-James-Cameron.jpg'
				},
			]
		}
	}
	render() {
		return (
			<View style={{ backgroundColor: '#ffffff' }}>
				<FeedList data={this.state.data} />
			</View>
		)
	}
}

