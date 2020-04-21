import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import EmaginiStartScreen from '../app/index';
import EmaginiPhotoGallery from '../app/gallery';

const screens = {
    Launch: {
        screen: EmaginiStartScreen,
        navigationOptions: {
            header: null,
          }
    },
    Gallery: {
        screen: EmaginiPhotoGallery,
        navegationOptions: {
            header: null,
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);