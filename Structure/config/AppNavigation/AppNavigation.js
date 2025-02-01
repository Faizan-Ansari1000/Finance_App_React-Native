import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignUp from "../../Auth/SignUp";
import Login from "../../Auth/Login";
import Toast from "react-native-toast-message";
import User from "../../Main/User/User";
import Admin from "../../Main/Admin/Admin";
import RegUser from "../../Main/Admin/RegUser";
import Wedding from "../../Main/User/Wedding";
import Construction from "../../Main/User/Construction";
import Business from "../../Main/User/Business";
import Education from "../../Main/User/Education";
import LoanUser from "../../Main/Admin/LoanUser";
import GaurantierUsers from "../../Main/Admin/GuarantierUsers";
import ConstructionLoan from "../../Main/Admin/ConstructionLoan";
import Home from "../../Main/Home";
import AppInfo from "../../Main/User/AppInfo";
import { Text, TouchableOpacity } from "react-native";



export default function AppNavigation() {

    const Stack = createNativeStackNavigator();

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SignUp">
                    <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
                    <Stack.Screen name="User" options={{ headerRight: () => <TouchableOpacity><Text style={{ paddingRight: '20' }}>App Info</Text></TouchableOpacity> }} component={User} />
                    <Stack.Screen name="Admin" component={Admin} />
                    <Stack.Screen name="RegUser" component={RegUser} />
                    <Stack.Screen name="Wedding" component={Wedding} />
                    <Stack.Screen name="Construction" component={Construction} />
                    <Stack.Screen name="Business" component={Business} />
                    <Stack.Screen name="Education" component={Education} />
                    <Stack.Screen name="LoanUser" component={LoanUser} />
                    <Stack.Screen name="GaurantierUsers" component={GaurantierUsers} />
                    <Stack.Screen name="ConstructionLoan" component={ConstructionLoan} />
                    <Stack.Screen name="AppInfo" component={AppInfo} />
                </Stack.Navigator>
                <Toast />
            </NavigationContainer>
        </>
    )
}