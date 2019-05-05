
import { SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { DrawerItems } from 'react-navigation';
export const UserSideDrawer = (props) => {
	<SafeAreaView style={{ flex: 1 }}>
		<ScrollView>
			<DrawerItems {...props} />
		</ScrollView>
	</SafeAreaView>
}