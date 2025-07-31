import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Image } from "react-native"

// 컴포넌트 경로
import HomeScreen from "../HomeScreen/HomeScreen.js"
import MapScreen from "../MapScreen/MapScreen.js"
import CalendarScreen from "../CalendarScreen/CalendarScreen.js"
import ProfileScreen from "../ProfileScreen/ProfileScreen.js"

const Tab = createBottomTabNavigator()

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#ff2e2a", // 활성화된 탭 아이콘 및 텍스트 색상
        tabBarInactiveTintColor: "#787878", // 비활성화된 탭 아이콘 및 텍스트 색상
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: "#ffff",
          borderTopWidth: 1,
          borderTopColor: "#eee",
          paddingVertical: 3,
          height: 90, // 탭 바 높이 조정
        },
        headerShown: false, // 헤더 숨김
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "홈",
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={require("../../src/common/home.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "지도",
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={require("../../src/common/map.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: "캘린더",
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={require("../../src/common/calendar.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "마이",
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={require("../../src/common/my.png")}
              style={{
                width: 24,
                height: 24,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
