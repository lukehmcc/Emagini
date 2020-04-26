import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import EmaginiStartScreen from '../app/index';
import EmaginiPhotoGallery from '../app/gallery';

const screens = {
    Launch: {
        screen: EmaginiStartScreen,
        navigationOptions: {
            headerShown: false,
          }
    },
    Gallery: {
        screen: EmaginiPhotoGallery,
        navegationOptions: {
            headerShown: false,
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);