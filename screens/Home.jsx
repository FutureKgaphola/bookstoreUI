import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SubHome from "./SubHome";
import About from "./About";
import { Image } from "react-native";
const Tab = createMaterialBottomTabNavigator();
const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator
                initialRouteName="SubHome"
                activeColor="green"
            >
                <Tab.Screen
                    name="SubHome"
                    component={SubHome}
                    options={{
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="shopping"
                                size={24}
                                color="black"
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name="About"
                    component={About}
                    options={{
                        tabBarLabel: "Profile",
                        tabBarIcon: ({ color }) => (
                            <Image style={{ borderRadius: 90, width: 22, height: 22, objectFit: "contain" }} source={require('../assets/girl1.jpg')} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </View>
    );
}

export default Home;