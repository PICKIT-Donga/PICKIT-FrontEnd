"use client"

import { useState } from "react"
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView, StatusBar, Alert } from "react-native"
import { styles } from "./HomeScreenStyles.js"
import PickItHeader from "./components/Header.js"
import BottomNavigation from "./components/BottomNavigation.js"

// 샘플 데이터
const samplePopups = [
  {
    id: "1",
    title: "미셸 들라크루아 특별전: 영원한, 화가",
    location: "서울 강남구",
    startDate: "2025-07-30",
    endDate: "2025-08-30",
    image: "./src/homesrc/poster1.png",
    category: "exhibition",
  },
  {
    id: "2",
    title: "톰 삭스 전 <스페이스 프로그램: 인피니티 ∞>",
    location: "서울 중구",
    startDate: "2025-07-19",
    endDate: "2025-11-09",
    image: "./src/homesrc/poster1.png",
    category: "exhibition",
  },
  {
    id: "3",
    title: "2025 앤서니 브라운展: 고릴라가 온다",
    location: "서울 서초구",
    startDate: "2025-05-30",
    endDate: "2025-07-27",
    image: "./src/homesrc/poster1.png",
    category: "exhibition",
  },
  {
    id: "4",
    title: "모네에서 앤디워홀까지 - 컬렉션 하이라이트",
    location: "서울 중구구",
    startDate: "2024-11-21",
    endDate: "2025-08-17",
    image: "./src/homesrc/poster1.png",
    category: "exhibition",
  },
  {
    id: "5",
    title: "디즈니 캐릭터 팝업스토어",
    location: "서울 강남구",
    startDate: "2025-01-15",
    endDate: "2025-02-29",
    image: "./src/homesrc/poster1.png",
    category: "trending",
  },
  {
    id: "6",
    title: "한정판 스니커즈 팝업",
    location: "서울 중구",
    startDate: "2025-02-10",
    endDate: "2025-02-20",
    image: "./src/homesrc/poster1.png",
    category: "fashion",
  },
]

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
        {/* 1. 사진 */}
        <Image source={require("./src/homesrc/poster1.png")} style={styles.cardImage} resizeMode="cover" />

        <View style={styles.cardContent}>
          {/* 2. Detail 버튼 */}
          <TouchableOpacity style={styles.cardButton} onPress={() => onDetailPress(popup)} activeOpacity={0.7}>
            <Image source={require("./src/homesrc/detailbutton.png")} style={styles.cardButtonImage} resizeMode="contain" />
          </TouchableOpacity>

          {/* 3. 제목 - 한 줄만 표시하고 말줄임표 처리 */}
          <Text style={styles.cardTitle} numberOfLines={1} ellipsizeMode="tail">
            {popup.title}
          </Text>

          {/* 4. 위치 */}
          <View style={styles.cardLocation}>
            <Image source={require("./src/common/pickitpin.png")} style={styles.pin} />
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
  const [popups, setPopups] = useState(samplePopups)
  const [activeTab, setActiveTab] = useState("home")

  // 이벤트 핸들러들
  const handleLogoPress = () => {
    setActiveTab("home")
    Alert.alert("홈", "홈 화면으로 이동합니다.")
  }

  const handleNotificationPress = () => {
    Alert.alert("알림", "알림 기능이 클릭되었습니다.")
  }

  const handleSearchPress = () => {
    Alert.alert("검색", "검색 기능이 클릭되었습니다.")
  }

  const handleDetailPress = (popup) => {
    Alert.alert("상세보기", `${popup.title}의 상세 정보를 확인합니다.`)
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    if (tab === "home") {
      Alert.alert("홈", "홈 화면입니다.")
    } else {
      Alert.alert("탭 변경", `${tab} 탭으로 이동합니다.`)
    }
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

      {/* 하단 네비게이션 */}
      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </SafeAreaView>
  )
}

export default HomeScreen;