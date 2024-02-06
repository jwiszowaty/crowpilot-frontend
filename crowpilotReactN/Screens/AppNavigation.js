import Map from "./Map";
import PhotoNavigation from "./AddPhoto/PhotoNavigation"
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileNav from "./Profile";
import Timeline from "./Timeline";

const Drawer = createDrawerNavigator();

export default AppNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Timeline" component={Timeline} />
            <Drawer.Screen name="Map" component={Map} />
            <Drawer.Screen name="Profile" component={ProfileNav} />
            <Drawer.Screen name="PhotoNavigation" component={PhotoNavigation} />
        </Drawer.Navigator>
    );
}