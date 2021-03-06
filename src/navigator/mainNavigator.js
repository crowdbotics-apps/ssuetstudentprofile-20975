import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps121876Navigator from '../features/Maps121876/navigator';
import Add-Item121875Navigator from '../features/Add-Item121875/navigator';
import Maps121871Navigator from '../features/Maps121871/navigator';
import UserProfile121867Navigator from '../features/UserProfile121867/navigator';
import Settings121811Navigator from '../features/Settings121811/navigator';
import Settings121788Navigator from '../features/Settings121788/navigator';
import Settings121769Navigator from '../features/Settings121769/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps121876: { screen: Maps121876Navigator },
Add-Item121875: { screen: Add-Item121875Navigator },
Maps121871: { screen: Maps121871Navigator },
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
