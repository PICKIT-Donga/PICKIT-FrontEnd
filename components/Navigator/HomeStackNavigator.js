import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../HomeScreen/HomeScreen.js"  // MapScreen이 아닌 HomeScreen
import DetailpageScreen from "../DetailpageScreen/DetailpageScreen.js"

const Stack = createStackNavigator()

export default function HomeStackNavigator() {  // 함수명 수정
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"  // MapScreen이 아닌 HomeScreen
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="HomeScreen"  // MapScreen이 아닌 HomeScreen
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailpageScreen"
        component={DetailpageScreen}
        options={{
          headerShown: false,
          presentation: "card",
        }}
      />
    </Stack.Navigator>
  )
}