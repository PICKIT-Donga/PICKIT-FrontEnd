"use client"

import { useState } from "react"
import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView, TextInput } from "react-native"
import styles from "./MapScreenStyles.js"
import BottomNavigation from "./components/BottomNavigation.js"
import PickItHeader from "./components/Header.js"

const regions = [
  { id: "all", name: "전체", active: true },
  { id: "seoul", name: "서울", active: false },
  { id: "gyeonggi", name: "경기", active: false },
  { id: "incheon", name: "인천", active: false },
  { id: "busan", name: "부산", active: false },
  { id: "daejeon", name: "대전", active: false },
  { id: "daegu", name: "대구", active: false },
  { id: "gwangju", name: "광주", active: false },
  { id: "ulsan", name: "울산", active: false },
  { id: "chungbuk", name: "충북", active: false },
  { id: "gangwon", name: "강원도", active: false },
  { id: "chungnam", name: "충남", active: false },
  { id: "sejong", name: "세종", active: false },
  { id: "jeonbuk", name: "전북", active: false },
  { id: "jeonnam", name: "전남", active: false },
  { id: "gyeongnam", name: "경남", active: false },
  { id: "jeju", name: "제주도", active: false },
]

const seoulDistricts = [
{ id: "gangnam", name: "강남구" },
{ id: "gangdong", name: "강동구" },
{ id: "gangbuk", name: "강북구" },
{ id: "gangseo", name: "강서구" },
{ id: "gwanak", name: "관악구" },
{ id: "gwangjin", name: "광진구" },
{ id: "guro", name: "구로구" },
{ id: "geumcheon", name: "금천구" },
{ id: "nowon", name: "노원구" },
{ id: "dobong", name: "도봉구" },
{ id: "dongjak", name: "동작구" },
{ id: "dongdaemun", name: "동대문구" },
{ id: "mapo", name: "마포구" },
{ id: "seodaemun", name: "서대문구" },
{ id: "seocho", name: "서초구" },
{ id: "seongdong", name: "성동구" },
{ id: "seongbuk", name: "성북구" },
{ id: "songpa", name: "송파구" },
{ id: "yangcheon", name: "양천구" },
{ id: "yeongdeungpo", name: "영등포구" },
{ id: "yongsan", name: "용산구" },
{ id: "eunpyeong", name: "은평구" },
{ id: "jongno", name: "종로구" },
{ id: "jungnang", name: "중랑구" },
{ id: "jung", name: "중구" },
]

const popupStores = [
  {
    id: 1,
    title: "퍼센테이지 디자인 팝업스토어",
    location: "부산 진구",
    date: "25.07.13 - 25.10.21",
    description: "2025년 여름에도 퍼디가 트위에뜨올에 찾아왔어요...",
    image: "https://via.placeholder.com/80x80",
    liked: false,
    region: "busan",
    district: null,
  },
  {
    id: 2,
    title: "웃수터 놀이터 팝업스토어",
    location: "서울 성동구",
    date: "25.07.18 - 25.07.27",
    description: "성수에 등장할 예정이라는 거대 놀이터가 있다고?...",
    image: "https://via.placeholder.com/80x80",
    liked: false,
    region: "seoul",
    district: "seongdong",
  },
  {
    id: 3,
    title: "번개표 팝업스토어",
    location: "서울 강남구",
    date: "25.07.11 - 25.07.24",
    description: "2025년으로 리뉴얼한 번개표의 컬 컬러빌리지의 문을 여시네...",
    image: "https://via.placeholder.com/80x80",
    liked: false,
    region: "seoul",
    district: "gangnam",
  },
  {
    id: 4,
    title: "부산 해운대 팝업스토어",
    location: "부산 해운대구",
    date: "25.07.20 - 25.08.15",
    description: "바다가 보이는 특별한 팝업스토어가 해운대에 오픈했어요...",
    image: "https://via.placeholder.com/80x80",
    liked: false,
    region: "busan",
    district: null,
  },
  {
    id: 5,
    title: "경기 수원 팝업스토어",
    location: "경기 수원시",
    date: "25.07.25 - 25.08.10",
    description: "수원 화성 근처에 새로운 팝업스토어가 등장했습니다...",
    image: "https://via.placeholder.com/80x80",
    liked: false,
    region: "gyeonggi",
    district: null,
  },
  {
    id: 6,
    title: "대전 유성구 팝업스토어",
    location: "대전 유성구",
    date: "25.08.01 - 25.08.20",
    description: "과학도시 대전에 테크 관련 팝업스토어가 오픈합니다...",
    image: "https://via.placeholder.com/80x80",
    liked: false,
    region: "daejeon",
    district: null,
  },
]

// 구별 지도 이미지
const districtMapImages = {
  gangnam: require("./src/locationmapimg/seoul/Gangnam-gu.png"),
  gangdong: require("./src/locationmapimg/seoul/Gangdong-gu.png"),
  gangbuk: require("./src/locationmapimg/seoul/Gangbuk-gu.png"),
  gangseo: require("./src/locationmapimg/seoul/Gangseo-gu.png"),
  gwanak: require("./src/locationmapimg/seoul/Gwanak-gu.png"),
  gwangjin: require("./src/locationmapimg/seoul/Gwangjin-gu.png"),
  guro: require("./src/locationmapimg/seoul/Guro-gu.png"),
  geumcheon: require("./src/locationmapimg/seoul/Geumcheon-gu.png"),
  nowon: require("./src/locationmapimg/seoul/Nowon-gu.png"),
  dobong: require("./src/locationmapimg/seoul/Dobong-gu.png"),
  dongjak: require("./src/locationmapimg/seoul/Dongjak-gu.png"),
  dongdaemun: require("./src/locationmapimg/seoul/Dongdaemun-gu.png"),
  mapo: require("./src/locationmapimg/seoul/Mapo-gu.png"),
  seodaemun: require("./src/locationmapimg/seoul/Seodaemun-gu.png"),
  seocho: require("./src/locationmapimg/seoul/Seocho-gu.png"),
  seongdong: require("./src/locationmapimg/seoul/Seongdong-gu.png"),
  seongbuk: require("./src/locationmapimg/seoul/Seongbuk-gu.png"),
  songpa: require("./src/locationmapimg/seoul/Songpa-gu.png"),
  yangcheon: require("./src/locationmapimg/seoul/Yangcheon-gu.png"),
  yeongdeungpo: require("./src/locationmapimg/seoul/Yeongdeungpo-gu.png"),
  yongsan: require("./src/locationmapimg/seoul/Yongsan-gu.png"),
  eunpyeong: require("./src/locationmapimg/seoul/Eunpyeong-gu.png"),
  jongno: require("./src/locationmapimg/seoul/Jongno-gu.png"),
  jungnang: require("./src/locationmapimg/seoul/Jungnang-gu.png"),
  jung: require("./src/locationmapimg/seoul/Jung-gu.png"),
}

// 간단한 아이콘 컴포넌트들
const HeartIcon = ({ filled, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.heartButton}>
    <Image source={require("./src/mapicon/favorites.png")} style={styles.heartIconImage} />
  </TouchableOpacity>
)

const MapPinIcon = () => <Image source={require("./src/mapicon/locationpin.png")} style={styles.mapPinIconImage} />

const ChevronDownIcon = () => <Text style={styles.chevronIcon}>▼</Text>

const MapScreen = () => {
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedDistrict, setSelectedDistrict] = useState(null)
  const [showDistrictDropdown, setShowDistrictDropdown] = useState(false)
  const [showSeoulMap, setShowSeoulMap] = useState(false)
  const [likedStores, setLikedStores] = useState([])
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [notificationCount, setNotificationCount] = useState(3)
  const [activeTab, setActiveTab] = useState("map")

  const notifications = [
    {
      id: 1,
      title: "새로운 팝업스토어가 등록되었습니다",
      message: "GS25 X 돈키호테 더현대서울점이 오픈했어요!",
      time: "2시간 전",
      isRead: false,
    },
    {
      id: 2,
      title: "관심 팝업스토어 마감 임박",
      message: "번개표 팝업스토어가 3일 후 마감됩니다.",
      time: "1일 전",
      isRead: false,
    },
    {
      id: 3,
      title: "새로운 지역에 팝업스토어 오픈",
      message: "부산 지역에 새로운 팝업스토어가 오픈했습니다.",
      time: "2일 전",
      isRead: true,
    },
  ]

  const filteredStores = selectedDistrict
    ? popupStores.filter((store) => store.district === selectedDistrict)
    : selectedRegion === "seoul"
      ? popupStores.filter((store) => store.region === "seoul")
      : selectedRegion === "all"
        ? popupStores.filter(
            (store) =>
              store.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              store.location.toLowerCase().includes(searchQuery.toLowerCase()),
          )
        : popupStores.filter((store) => store.region === selectedRegion)

  const handleNotificationPress = () => {
    setShowNotifications(true)
  }

  const handleSearchPress = () => {
    setShowSearch(true)
  }

  const handleLogoPress = () => {
    console.log("로고 클릭됨")
  }

  const handleCloseNotifications = () => {
    setShowNotifications(false)
  }

  const handleCloseSearch = () => {
    setShowSearch(false)
    setSearchQuery("")
  }

  const markNotificationAsRead = (notificationId) => {
    console.log(`알림 ${notificationId} 읽음 처리됨`)
  }

  const handleRegionClick = (regionId) => {
    setSelectedRegion(regionId)
    setShowSeoulMap(regionId === "seoul")

    // 지역별 네비게이션 로직
    if (regionId === "busan") {
      console.log("부산 지역으로 이동")
      setShowDistrictDropdown(false)
      setSelectedDistrict(null)
    } else if (regionId === "seoul") {
      setShowDistrictDropdown(true)
      setSelectedDistrict(null)
    } else if (regionId === "gyeonggi") {
      console.log("경기 지역으로 이동")
      setShowDistrictDropdown(false)
      setSelectedDistrict(null)
    } else if (regionId === "incheon") {
      console.log("인천 지역으로 이동")
      setShowDistrictDropdown(false)
      setSelectedDistrict(null)
    } else if (regionId === "daejeon") {
      console.log("대전 지역으로 이동")
      setShowDistrictDropdown(false)
      setSelectedDistrict(null)
    } else if (regionId === "daegu") {
      console.log("대구 지역으로 이동")
      setShowDistrictDropdown(false)
      setSelectedDistrict(null)
    } else if (regionId === "gwangju") {
      console.log("광주 지역으로 이동")
      setShowDistrictDropdown(false)
      setSelectedDistrict(null)
    } else if (regionId === "ulsan") {
      console.log("울산 지역으로 이동")
      setShowDistrictDropdown(false)
      setSelectedDistrict(null)
    } else if (regionId === "chungbuk") {
      console.log("충북 지역으로 이동")
      setShowDistrictDropdown(false)
      setSelectedDistrict(null)
    } else if (regionId === "gangwon") {
      console.log("강원도 지역으로 이동")
      setShowDistrictDropdown(false)
      setSelectedDistrict(null)
    } else if (regionId === "chungnam") {
      console.log("충남 지역으로 이동")
      setShowDistrictDropdown(false)
      setSelectedDistrict(null)
    } else if (regionId === "sejong") {
      console.log("세종 지역으로 이동")
      setShowDistrictDropdown(false)
      setSelectedDistrict(null)
    } else if (regionId === "jeonbuk") {
      console.log("전북 지역으로 이동")
      setShowDistrictDropdown(false)
      setSelectedDistrict(null)
    } else if (regionId === "jeonnam") {
      console.log("전남 지역으로 이동")
      setShowDistrictDropdown(false)
      setSelectedDistrict(null)
    } else if (regionId === "gyeongnam") {
      console.log("경남 지역으로 이동")
      setShowDistrictDropdown(false)
      setSelectedDistrict(null)
    } else if (regionId === "jeju") {
      console.log("제주도 지역으로 이동")
      setShowDistrictDropdown(false)
      setSelectedDistrict(null)
    } else {
      setShowDistrictDropdown(false)
      setSelectedDistrict(null)
    }
  }

  const handleDistrictSelect = (districtId) => {
    setSelectedDistrict(districtId)
    setShowDistrictDropdown(false)
  }

  const toggleLike = (storeId) => {
    setLikedStores((prev) => (prev.includes(storeId) ? prev.filter((id) => id !== storeId) : [...prev, storeId]))
  }

  const handleTabChange = (tabName) => {
    setActiveTab(tabName)
    console.log(`${tabName} 탭 클릭됨`)
  }

  const getMapImage = () => {
    if (selectedDistrict && districtMapImages[selectedDistrict]) {
      return districtMapImages[selectedDistrict]
    }
    if (showSeoulMap) {
      return require("./src/locationmapimg/seoulmap.png")
    }
    // 전체 지도는 로컬 한국 지도 이미지 사용
    return require("./src/locationmapimg/koreamap.png")
  }

  const getSelectedDistrictName = () => {
    if (selectedDistrict) {
      const district = seoulDistricts.find((d) => d.id === selectedDistrict)
      return district ? district.name : "지역 선택 "
    }
    return "지역(구) 선택"
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <PickItHeader
        onNotificationPress={handleNotificationPress}
        onSearchPress={handleSearchPress}
        onLogoPress={handleLogoPress}
      />

      {/* 지역 필터 */}
      <View style={styles.filterContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScrollContent}
        >
          {regions.map((region) => (
            <TouchableOpacity
              key={region.id}
              style={[styles.filterButton, selectedRegion === region.id && styles.filterButtonActive]}
              onPress={() => handleRegionClick(region.id)}
            >
              <Text style={[styles.filterButtonText, selectedRegion === region.id && styles.filterButtonTextActive]}>
                {region.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* 지도 섹션 */}
      <View style={styles.mapContainer}>
        <View style={styles.mapImageContainer}>
          <Image
            source={typeof getMapImage() === "string" ? { uri: getMapImage() } : getMapImage()}
            style={styles.mapImage}
            resizeMode="cover"
          />
        </View>
      </View>

      {/* 고정된 구 선택 헤더 */}
      {selectedRegion === "seoul" && (
        <View style={styles.fixedHeader}>
          <TouchableOpacity
            style={styles.districtSelector}
            onPress={() => setShowDistrictDropdown(!showDistrictDropdown)}
          >
            <Text style={styles.districtSelectorText}>{getSelectedDistrictName()}</Text>
            <ChevronDownIcon />
          </TouchableOpacity>
        </View>
      )}

      {/* 구 드롭다운 */}
      {showDistrictDropdown && selectedRegion === "seoul" && (
        <View style={styles.districtDropdown}>
          <ScrollView style={styles.districtDropdownScroll}>
            {seoulDistricts.map((district) => (
              <TouchableOpacity
                key={district.id}
                style={styles.districtDropdownItem}
                onPress={() => handleDistrictSelect(district.id)}
              >
                <Text style={styles.districtDropdownText}>{district.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {/* 스토어 목록 */}
      <ScrollView style={styles.storeListContainer}>
        <View style={styles.storeList}>
          {filteredStores.map((store) => (
            <View key={store.id} style={styles.storeItem}>
              <View style={styles.storeImageContainer}>
                <Image source={{ uri: store.image }} style={styles.storeImage} resizeMode="cover" />
              </View>
              <View style={styles.storeInfo}>
                <View style={styles.storeTitleRow}>
                  <Text style={styles.storeTitle} numberOfLines={2}>
                    {store.title}
                  </Text>
                  <HeartIcon filled={likedStores.includes(store.id)} onPress={() => toggleLike(store.id)} />
                </View>
                <View style={styles.storeLocationRow}>
                  <MapPinIcon />
                  <Text style={styles.storeLocation}>{store.location}</Text>
                </View>
                <Text style={styles.storeDate}>{store.date}</Text>
                <Text style={styles.storeDescription} numberOfLines={2}>
                  {store.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* 검색 모달 */}
      {showSearch && (
        <View style={styles.modalOverlay}>
          <View style={styles.searchModal}>
            <View style={styles.searchHeader}>
              <Text style={styles.searchTitle}>팝업스토어 검색</Text>
              <TouchableOpacity onPress={handleCloseSearch} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.searchInputContainer}>
              <Text style={styles.searchIcon}>🔍</Text>
              <TextInput
                style={styles.searchInput}
                placeholder="팝업스토어명 또는 지역을 검색하세요"
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoFocus
              />
            </View>
            <ScrollView style={styles.searchResults}>
              {filteredStores.map((store) => (
                <TouchableOpacity key={store.id} style={styles.searchResultItem}>
                  <Image source={{ uri: store.image }} style={styles.searchResultImage} />
                  <View style={styles.searchResultInfo}>
                    <Text style={styles.searchResultTitle}>{store.title}</Text>
                    <Text style={styles.searchResultLocation}>{store.location}</Text>
                    <Text style={styles.searchResultDate}>{store.date}</Text>
                  </View>
                </TouchableOpacity>
              ))}
              {searchQuery && filteredStores.length === 0 && (
                <View style={styles.noResults}>
                  <Text style={styles.noResultsText}>검색 결과가 없습니다</Text>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      )}

      {/* 알림 모달 */}
      {showNotifications && (
        <View style={styles.modalOverlay}>
          <View style={styles.notificationModal}>
            <View style={styles.notificationHeader}>
              <Text style={styles.notificationTitle}>알림</Text>
              <TouchableOpacity onPress={handleCloseNotifications} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.notificationList}>
              {notifications.map((notification) => (
                <TouchableOpacity
                  key={notification.id}
                  style={[styles.notificationItem, !notification.isRead && styles.unreadNotification]}
                  onPress={() => markNotificationAsRead(notification.id)}
                >
                  <View style={styles.notificationContent}>
                    <Text style={styles.notificationItemTitle}>{notification.title}</Text>
                    <Text style={styles.notificationMessage}>{notification.message}</Text>
                    <Text style={styles.notificationTime}>{notification.time}</Text>
                  </View>
                  {!notification.isRead && <View style={styles.unreadDot} />}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      )}

      {/* 하단 네비게이션 */}
      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </SafeAreaView>
  )
}

export default MapScreen
