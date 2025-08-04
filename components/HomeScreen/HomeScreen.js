"use client"

import { useState, useEffect } from "react"
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView, StatusBar, Alert, ActivityIndicator } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { styles } from "./HomeScreenStyles.js"
import PickItHeader from "../Header.js"
import NotificationModal from "../modals/NotificationModal.js"
import SearchModal from "../modals/SearchModal.js"
import { popupAPI } from "../../services/api.js"

// 팝업 카드 컴포넌트
const PopupCard = ({ popup, onDetailPress }) => {
  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    const year = date.getFullYear().toString().slice(-2)
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const day = date.getDate().toString().padStart(2, "0")
    return `${year}.${month}.${day}`
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        {/* 이미지 - API에서 받은 imageUrl 사용 */}
        <Image 
          source={popup.imageUrl ? { uri: popup.imageUrl } : require("../../src/homesrc/poster1.png")} 
          style={styles.cardImage} 
          resizeMode="cover" 
        />

        <View style={styles.cardContent}>
          {/* Detail 버튼 */}
          <TouchableOpacity style={styles.cardButton} onPress={() => onDetailPress(popup)} activeOpacity={0.7}>
            <Image
              source={require("../../src/homesrc/detailbutton.png")}
              style={styles.cardButtonImage}
              resizeMode="contain"
            />
          </TouchableOpacity>

          {/* 제목 */}
          <Text style={styles.cardTitle} numberOfLines={1} ellipsizeMode="tail">
            {popup.title}
          </Text>

          {/* 위치 - API 응답의 address 필드 사용 */}
          <View style={styles.cardLocation}>
            <Image source={require("../../src/common/pickitpin.png")} style={styles.pin} />
            <Text style={styles.cardLocationText} numberOfLines={1}>
              {popup.address}
            </Text>
          </View>

          {/* 날짜 - API 응답의 date 필드 사용 */}
          <Text style={styles.cardDate}>
            {popup.date}
          </Text>
        </View>
      </View>
    </View>
  )
}

// 메인 앱 컴포넌트
const HomeScreen = () => {
  const navigation = useNavigation()
  const [popups, setPopups] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState("home")
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  // 팝업 데이터 로드
  useEffect(() => {
    loadPopups()
  }, [])

  const loadPopups = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await popupAPI.getAllPopups()
      setPopups(data || [])
    } catch (err) {
      console.error('팝업 데이터 로드 실패:', err)
      setError('팝업 데이터를 불러오는데 실패했습니다.')
      Alert.alert('오류', '팝업 데이터를 불러오는데 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }

  // 이벤트 핸들러들
  const handleLogoPress = () => {
    setActiveTab("home")
    loadPopups() // 홈 로고 클릭시 데이터 새로고침
  }

  const handleNotificationPress = () => {
    setShowNotifications(true)
  }

  const handleSearchPress = () => {
    setShowSearch(true)
  }

  const handleDetailPress = async (popup) => {
    try {
      // 상세 정보를 API에서 가져오기
      const detailData = await popupAPI.getPopupById(popup.id)
      
      // DetailpageScreen으로 네비게이션하면서 상세 데이터 전달
      navigation.navigate("DetailpageScreen", {
        popupData: detailData,
        popupId: popup.id
      })
    } catch (err) {
      console.error('팝업 상세 정보 로드 실패:', err)
      Alert.alert('오류', '팝업 상세 정보를 불러오는데 실패했습니다.')
    }
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    if (tab === "home") {
      loadPopups()
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

  // 로딩 상태
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <PickItHeader
          onNotificationPress={handleNotificationPress}
          onSearchPress={handleSearchPress}
          onLogoPress={handleLogoPress}
        />
        <View style={[styles.mainContent, { justifyContent: 'center', alignItems: 'center' }]}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={{ marginTop: 16, fontSize: 16, color: '#666' }}>팝업 정보를 불러오는 중...</Text>
        </View>
      </SafeAreaView>
    )
  }

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

        {error ? (
          <View style={styles.emptyContainer}>
            <View style={styles.emptyIcon}>
              <Text style={styles.emptyIconText}>⚠️</Text>
            </View>
            <Text style={styles.emptyTitle}>데이터를 불러올 수 없습니다</Text>
            <Text style={styles.emptySubtitle}>{error}</Text>
            <TouchableOpacity 
              style={{ marginTop: 16, padding: 12, backgroundColor: '#007AFF', borderRadius: 8 }}
              onPress={loadPopups}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>다시 시도</Text>
            </TouchableOpacity>
          </View>
        ) : popups.length > 0 ? (
          <FlatList
            data={popups}
            renderItem={renderPopupCard}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.row}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
            refreshing={loading}
            onRefresh={loadPopups}
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