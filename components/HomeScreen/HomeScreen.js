"use client"

import { useState } from "react"
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView, StatusBar, Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { styles } from "./HomeScreenStyles.js"
import PickItHeader from "../Header.js"
import NotificationModal from "../modals/NotificationModal.js"
import SearchModal from "../modals/SearchModal.js"
import { popupData } from "../../DATA/popupData.js"

// 팝업 카드 컴포넌트
const PopupCard = ({ popup, onDetailPress }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear().toString().slice(-2)
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const day = date.getDate().toString().padStart(2, "0")
    return `${year}.${month}.${day}`
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        {/* 1. 사진 - 터치 이벤트 제거 */}
        <Image source={require("../../src/homesrc/poster1.png")} style={styles.cardImage} resizeMode="cover" />

        <View style={styles.cardContent}>
          {/* 2. Detail 버튼 - 터치 이벤트만 유지 */}
          <TouchableOpacity style={styles.cardButton} onPress={() => onDetailPress(popup)} activeOpacity={0.7}>
            <Image
              source={require("../../src/homesrc/detailbutton.png")}
              style={styles.cardButtonImage}
              resizeMode="contain"
            />
          </TouchableOpacity>

          {/* 3. 제목 - 한 줄만 표시하고 말줄임표 처리 */}
          <Text style={styles.cardTitle} numberOfLines={1} ellipsizeMode="tail">
            {popup.title}
          </Text>

          {/* 4. 위치 */}
          <View style={styles.cardLocation}>
            <Image source={require("../../src/common/pickitpin.png")} style={styles.pin} />
            <Text style={styles.cardLocationText} numberOfLines={1}>
              {popup.location}
            </Text>
          </View>

          {/* 5. 날짜 */}
          <Text style={styles.cardDate}>
            {formatDate(popup.startDate)} - {formatDate(popup.endDate)}
          </Text>
        </View>
      </View>
    </View>
  )
}

// 메인 앱 컴포넌트
const HomeScreen = () => {
  const navigation = useNavigation()
  const [popups, setPopups] = useState(popupData)
  const [activeTab, setActiveTab] = useState("home")
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  // 이벤트 핸들러들
  const handleLogoPress = () => {
    setActiveTab("home")
    Alert.alert("홈", "홈 화면으로 이동합니다.")
  }

  const handleNotificationPress = () => {
    setShowNotifications(true)
  }

  const handleSearchPress = () => {
    setShowSearch(true)
  }

  const handleDetailPress = (popup) => {
    // DetailpageScreen으로 네비게이션하면서 데이터 전달
    navigation.navigate("DetailpageScreen", {
      popupData: popup,
    })
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    if (tab === "home") {
      Alert.alert("홈", "홈 화면입니다.")
    } else {
      Alert.alert("탭 변경", `${tab} 탭으로 이동합니다.`)
    }
  }

  const handleCloseNotifications = () => {
    setShowNotifications(false)
  }

  const handleCloseSearch = () => {
    setShowSearch(false)
  }

  const renderPopupCard = ({ item, index }) => <PopupCard popup={item} onDetailPress={handleDetailPress} />

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* 헤더 */}
      <PickItHeader
        onNotificationPress={handleNotificationPress}
        onSearchPress={handleSearchPress}
        onLogoPress={handleLogoPress}
      />

      {/* 메인 컨텐츠 */}
      <View style={styles.mainContent}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>
            <Text style={styles.highlightText}>놓치면 손해!</Text> 꼭 가봐야하는 팝업
          </Text>
        </View>

        {popups.length > 0 ? (
          <FlatList
            data={popups}
            renderItem={renderPopupCard}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <View style={styles.emptyIcon}>
              <Text style={styles.emptyIconText}>📋</Text>
            </View>
            <Text style={styles.emptyTitle}>등록된 팝업이 없습니다</Text>
            <Text style={styles.emptySubtitle}>다른 카테고리를 확인해보세요</Text>
          </View>
        )}
      </View>

      {/* 알림 모달 */}
      <NotificationModal visible={showNotifications} onClose={handleCloseNotifications} />

      {/* 검색 모달 */}
      <SearchModal visible={showSearch} onClose={handleCloseSearch} searchData={popups} />
    </SafeAreaView>
  )
}

export default HomeScreen
