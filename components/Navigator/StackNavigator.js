import { createStackNavigator } from "@react-navigation/stack"
import BottomNavigator from "./BottomNavigator.js"
import DetailpageScreen from "../DetailpageScreen/DetailpageScreen.js"

const Stack = createStackNavigator()

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // 모든 스크린에서 헤더 숨김
      }}
    >
      <Stack.Screen
        name="MainTabs"
        component={BottomNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailpageScreen"
        component={DetailpageScreen}
        options={{
          headerShown: false,
          presentation: "card", // iOS에서 카드 스타일 전환
        }}
      />
    </Stack.Navigator>
  )
}
