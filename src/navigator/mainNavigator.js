import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile121867Navigator from '../features/UserProfile121867/navigator';
import Settings121811Navigator from '../features/Settings121811/navigator';
import Settings121788Navigator from '../features/Settings121788/navigator';
import Settings121769Navigator from '../features/Settings121769/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile121867: { screen: UserProfile121867Navigator },
Settings121811: { screen: Settings121811Navigator },
Settings121788: { screen: Settings121788Navigator },
Settings121769: { screen: Settings121769Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
