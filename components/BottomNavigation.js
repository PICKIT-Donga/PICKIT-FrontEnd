import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { bottomNavStyles } from './BottomNavStyles.js';

const BottomNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "home", name: "홈", icon: require("../src/common/home.png") },
    { id: "map", name: "지도", icon: require("../src/common/map.png") },
    { id: "calendar", name: "캘린더", icon: require("../src/common/calendar.png") },
    { id: "profile", name: "마이", icon: require("../src/common/my.png") },
  ];

  return (
    <View style={bottomNavStyles.bottomNavigation}>
      <View style={bottomNavStyles.bottomNavContent}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <TouchableOpacity
              key={tab.id}
              style={bottomNavStyles.tabButton}
              onPress={() => onTabChange(tab.id)}
              activeOpacity={0.7}
            >
              <Image
                source={tab.icon}
                style={[
                  bottomNavStyles.tabIcon,
                  {
                    width: 24,
                    height: 24,
                    tintColor: isActive ? "#ff2e2a" : "#787878",
                  },
                ]}
                resizeMode="contain"
              />
              <Text style={[bottomNavStyles.tabText, isActive ? bottomNavStyles.tabActive : bottomNavStyles.tabInactive]}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomNavigation;