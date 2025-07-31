import { createStackNavigator } from "@react-navigation/stack"
import MapScreen from "../MapScreen/MapScreen.js"
import DetailpageScreen from "../DetailpageScreen/DetailpageScreen.js"

const Stack = createStackNavigator()

export default function MapStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MapScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
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
