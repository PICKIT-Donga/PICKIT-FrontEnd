"use client"

import { useState, useEffect } from "react"
import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView, ActivityIndicator, Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import styles from "./MapScreenStyles.js"
import PickItHeader from "../Header.js"
import NotificationModal from "../modals/NotificationModal.js"
import SearchModal from "../modals/SearchModal.js"
import { popupAPI } from "../../services/api.js"

const regions = [
  { id: "all", name: "전체", address: "", active: true },
  { id: "seoul", name: "서울", address: "서울", active: false },
  { id: "gyeonggi", name: "경기", address: "경기", active: false },
  { id: "incheon", name: "인천", address: "인천", active: false },
  { id: "busan", name: "부산", address: "부산", active: false },
  { id: "daejeon", name: "대전", address: "대전", active: false },
  { id: "daegu", name: "대구", address: "대구", active: false },
  { id: "gwangju", name: "광주", address: "광주", active: false },
  { id: "ulsan", name: "울산", address: "울산", active: false },
  { id: "chungbuk", name: "충북", address: "충청북도", active: false },
  { id: "gangwon", name: "강원도", address: "강원도", active: false },
  { id: "chungnam", name: "충남", address: "충청남도", active: false },
  { id: "sejong", name: "세종", address: "세종", active: false },
  { id: "jeonbuk", name: "전북", address: "전라북도", active: false },
  { id: "jeonnam", name: "전남", address: "전라남도", active: false },
  { id: "gyeongnam", name: "경남", address: "경상남도", active: false },
  { id: "jeju", name: "제주도", address: "제주", active: false },
]

const seoulDistricts = [
  { id: "gangnam", name: "강남구", address: "서울 강남구" },
  { id: "gangdong", name: "강동구", address: "서울 강동구" },
  { id: "gangbuk", name: "강북구", address: "서울 강북구" },
  { id: "gangseo", name: "강서구", address: "서울 강서구" },
  { id: "gwanak", name: "관악구", address: "서울 관악구" },
  { id: "gwangjin", name: "광진구", address: "서울 광진구" },
  { id: "guro", name: "구로구", address: "서울 구로구" },
  { id: "geumcheon", name: "금천구", address: "서울 금천구" },
  { id: "nowon", name: "노원구", address: "서울 노원구" },
  { id: "dobong", name: "도봉구", address: "서울 도봉구" },
  { id: "dongjak", name: "동작구", address: "서울 동작구" },
  { id: "dongdaemun", name: "동대문구", address: "서울 동대문구" },
  { id: "mapo", name: "마포구", address: "서울 마포구" },
  { id: "seodaemun", name: "서대문구", address: "서울 서대문구" },
  { id: "seocho", name: "서초구", address: "서울 서초구" },
  { id: "seongdong", name: "성동구", address: "서울 성동구" },
  { id: "seongbuk", name: "성북구", address: "서울 성북구" },
  { id: "songpa", name: "송파구", address: "서울 송파구" },
  { id: "yangcheon", name: "양천구", address: "서울 양천구" },
  { id: "yeongdeungpo", name: "영등포구", address: "서울 영등포구" },
  { id: "yongsan", name: "용산구", address: "서울 용산구" },
  { id: "eunpyeong", name: "은평구", address: "서울 은평구" },
  { id: "jongno", name: "종로구", address: "서울 종로구" },
  { id: "jungnang", name: "중랑구", address: "서울 중랑구" },
  { id: "jung", name: "중구", address: "서울 중구" },
]

// 구별 지도 이미지 (기존과 동일)
const districtMapImages = {
  gangnam: require("../../src/locationmapimg/seoul/Gangnam-gu.png"),
  gangdong: require("../../src/locationmapimg/seoul/Gangdong-gu.png"),
  gangbuk: require("../../src/locationmapimg/seoul/Gangbuk-gu.png"),
  gangseo: require("../../src/locationmapimg/seoul/Gangseo-gu.png"),
  gwanak: require("../../src/locationmapimg/seoul/Gwanak-gu.png"),
  gwangjin: require("../../src/locationmapimg/seoul/Gwangjin-gu.png"),
  guro: require("../../src/locationmapimg/seoul/Guro-gu.png"),
  geumcheon: require("../../src/locationmapimg/seoul/Geumcheon-gu.png"),
  nowon: require("../../src/locationmapimg/seoul/Nowon-gu.png"),
  dobong: require("../../src/locationmapimg/seoul/Dobong-gu.png"),
  dongjak: require("../../src/locationmapimg/seoul/Dongjak-gu.png"),
  dongdaemun: require("../../src/locationmapimg/seoul/Dongdaemun-gu.png"),
  mapo: require("../../src/locationmapimg/seoul/Mapo-gu.png"),
  seodaemun: require("../../src/locationmapimg/seoul/Seodaemun-gu.png"),
  seocho: require("../../src/locationmapimg/seoul/Seocho-gu.png"),
  seongdong: require("../../src/locationmapimg/seoul/Seongdong-gu.png"),
  seongbuk: require("../../src/locationmapimg/seoul/Seongbuk-gu.png"),
  songpa: require("../../src/locationmapimg/seoul/Songpa-gu.png"),
  yangcheon: require("../../src/locationmapimg/seoul/Yangcheon-gu.png"),
  yeongdeungpo: require("../../src/locationmapimg/seoul/Yeongdeungpo-gu.png"),
  yongsan: require("../../src/locationmapimg/seoul/Yongsan-gu.png"),
  eunpyeong: require("../../src/locationmapimg/seoul/Eunpyeong-gu.png"),
  jongno: require("../../src/locationmapimg/seoul/Jongno-gu.png"),
  jungnang: require("../../src/locationmapimg/seoul/Jungnang-gu.png"),
  jung: require("../../src/locationmapimg/seoul/Jung-gu.png"),
}

// 간단한 아이콘 컴포넌트들
const HeartIcon = ({ filled, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.heartButton}>
    <Image source={require("../../src/mapicon/favorites.png")} style={styles.heartIconImage} />
  </TouchableOpacity>
)

const MapPinIcon = () => <Image source={require("../../src/mapicon/locationpin.png")} style={styles.mapPinIconImage} />

const ChevronDownIcon = () => <Text style={styles.chevronIcon}>▼</Text>

const MapScreen = () => {
  const navigation = useNavigation()
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedDistrict, setSelectedDistrict] = useState(null)
  const [showDistrictDropdown, setShowDistrictDropdown] = useState(false)
  const [showSeoulMap, setShowSeoulMap] = useState(false)
  const [likedStores, setLikedStores] = useState([])
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [activeTab, setActiveTab] = useState("map")

  // API 관련 상태
  const [allPopups, setAllPopups] = useState([])
  const [filteredStores, setFilteredStores] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // 초기 데이터 로드
  useEffect(() => {
    loadAllPopups()
  }, [])

  // 지역 필터링
  useEffect(() => {
    filterPopupsByRegion()
  }, [selectedRegion, selectedDistrict, allPopups])

  const loadAllPopups = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await popupAPI.getAllPopups()
      setAllPopups(data || [])
    } catch (err) {
      console.error("팝업 데이터 로드 실패:", err)
      setError("팝업 데이터를 불러오는데 실패했습니다.")
    } finally {
      setLoading(false)
    }
  }

  const loadPopupsByAddress = async (address) => {
    try {
      setLoading(true)
      console.log("API 호출 주소:", address) // 디버깅용
      const data = await popupAPI.getPopupsByAddress(address)
      console.log("API 응답 데이터:", data) // 디버깅용
      setFilteredStores(data || [])
    } catch (err) {
      console.error("지역별 팝업 데이터 로드 실패:", err)
      setError("지역별 팝업 데이터를 불러오는데 실패했습니다.")
      setFilteredStores([])
    } finally {
      setLoading(false)
    }
  }

  const filterPopupsByRegion = () => {
    if (selectedRegion === "all") {
      setFilteredStores(allPopups)
    } else if (selectedDistrict) {
      // 구별 필터링 - 실제 주소로 API 호출
      const district = seoulDistricts.find((d) => d.id === selectedDistrict)
      if (district) {
        loadPopupsByAddress(district.address)
      }
    } else if (selectedRegion !== "all") {
      // 지역별 필터링 - 실제 주소로 API 호출
      const region = regions.find((r) => r.id === selectedRegion)
      if (region && region.address) {
        loadPopupsByAddress(region.address)
      }
    }
  }

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
  }

  // 스토어 아이템 터치 시 DetailpageScreen으로 이동
  const handleStorePress = async (store) => {
    try {
      // 상세 정보를 API에서 가져오기
      const detailData = await popupAPI.getPopupById(store.id)

      navigation.navigate("DetailpageScreen", {
        popupData: detailData,
        popupId: store.id,
      })
    } catch (err) {
      console.error("팝업 상세 정보 로드 실패:", err)
      Alert.alert("오류", "팝업 상세 정보를 불러오는데 실패했습니다.")
    }
  }

  const handleRegionClick = (regionId) => {
    setSelectedRegion(regionId)
    setShowSeoulMap(regionId === "seoul")

    if (regionId === "seoul") {
      setShowDistrictDropdown(true)
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
      return require("../../src/locationmapimg/seoulmap.png")
    }
    return require("../../src/locationmapimg/koreamap.png")
  }

  const getSelectedDistrictName = () => {
    if (selectedDistrict) {
      const district = seoulDistricts.find((d) => d.id === selectedDistrict)
      return district ? district.name : "지역 선택 "
    }
    return "지역(구) 선택"
  }

  const formatDate = (dateString) => {
    if (!dateString) return "날짜 정보 없음"
    return dateString
  }

  // contents 내용을 한 줄로 표시하는 함수
  const getStoreDescription = (store) => {
    // contents 필드가 있으면 사용, 없으면 comment 사용, 둘 다 없으면 기본 메시지
    const description = store.contents || store.comment || store.description || "설명이 없습니다."

    // 줄바꿈 제거하고 한 줄로 만들기
    return description.replace(/\n/g, " ").trim()
  }

  if (loading && allPopups.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <PickItHeader
          onNotificationPress={handleNotificationPress}
          onSearchPress={handleSearchPress}
          onLogoPress={handleLogoPress}
        />
        <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={{ marginTop: 16, fontSize: 16, color: "#666" }}>지도 정보를 불러오는 중...</Text>
        </View>
      </SafeAreaView>
    )
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
        {loading && (
          <View style={{ padding: 20, alignItems: "center" }}>
            <ActivityIndicator size="small" color="#007AFF" />
            <Text style={{ marginTop: 8, color: "#666" }}>로딩 중...</Text>
          </View>
        )}

        {error && (
          <View style={{ padding: 20, alignItems: "center" }}>
            <Text style={{ color: "#ff4444", textAlign: "center" }}>{error}</Text>
            <TouchableOpacity
              style={{ marginTop: 12, padding: 8, backgroundColor: "#007AFF", borderRadius: 4 }}
              onPress={loadAllPopups}
            >
              <Text style={{ color: "white" }}>다시 시도</Text>
            </TouchableOpacity>
          </View>
        )}

        {!loading && filteredStores.length === 0 && (
          <View style={{ padding: 20, alignItems: "center" }}>
            <Text style={{ color: "#666", textAlign: "center" }}>
              {selectedRegion === "all" ? "등록된 팝업이 없습니다." : "해당 지역에 등록된 팝업이 없습니다."}
            </Text>
          </View>
        )}

        <View style={styles.storeList}>
          {filteredStores.map((store) => (
            <TouchableOpacity
              key={store.id}
              style={styles.storeItem}
              onPress={() => handleStorePress(store)}
              activeOpacity={0.8}
            >
              <View style={styles.storeImageContainer}>
                <Image
                  source={store.imageUrl ? { uri: store.imageUrl } : require("../../src/homesrc/poster1.png")}
                  style={styles.storeImage}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.storeInfo}>
                <View style={styles.storeTitleRow}>
                  <Text style={styles.storeTitle} numberOfLines={2}>
                    {store.title}
                  </Text>
                  <HeartIcon
                    filled={likedStores.includes(store.id)}
                    onPress={(e) => {
                      e.stopPropagation()
                      toggleLike(store.id)
                    }}
                  />
                </View>
                <View style={styles.storeLocationRow}>
                  <MapPinIcon />
                  <Text style={styles.storeLocation}>{store.address}</Text>
                </View>
                <Text style={styles.storeDate}>{formatDate(store.date)}</Text>
                <Text style={styles.storeDescription} numberOfLines={2}>
                  {getStoreDescription(store)}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* 알림 모달 */}
      <NotificationModal visible={showNotifications} onClose={handleCloseNotifications} />

      {/* 검색 모달 */}
      <SearchModal visible={showSearch} onClose={handleCloseSearch} searchData={filteredStores} />
    </SafeAreaView>
  )
}

export default MapScreen
