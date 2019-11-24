import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './Views/Home';
import Profile from './Views/Profile';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Profile: {screen: Profile},
});

export default createAppContainer(MainNavigator);
