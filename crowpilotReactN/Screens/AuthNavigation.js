import { StyleSheet, Text, Button, View, Image, Dimensions, Animated, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './SignUp.js';
import LogIn from './LogIn.js';
import { Video } from 'expo-av';
import wind from '../styles.js'
const dimensions = Dimensions.get('screen')
const idealHW = (dimensions.width * 0.8)

function Welcome({ navigation }) {
    return (
        <>
            <Video
            style = {styles.video}
            rate = {1}
            source={require('../assets/airportview.mp4')}
            useNativeControls={false}
            resizeMode="cover"
            isLooping
            isMuted
            shouldPlay
            />
            <Image source = {require('../assets/Crowpilot_text.png')} alt = "Crowpilot logo" style = {{"width": idealHW, "height": 150, "resizeMode": "contain", "margin": 20}}></Image>
            <Text>Broaden your horizons</Text>
            <View className={wind.container}>
                <Pressable
                    className={wind.button}
                    onPress={() => navigation.navigate("SignUp")}
                >
                    <View className={wind.container}>
                        <Text className={wind.textButtonLight}>Sign up</Text>
                    </View>
                </Pressable>
                 <View style = {wind.between}></View>
                <Pressable
                    className={wind.button}
                    onPress={() =>navigation.navigate("LogIn")}
                >
                    <Text className={wind.textButtonLight}>Log in</Text>
                </Pressable>
            </View>
        </>
    );
}

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="LogIn" component={LogIn} />
        </Stack.Navigator>
    );
}
  const styles = StyleSheet.create({
    between: {
        padding: 10
    },
    video: {
        height: dimensions.height,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }
  });