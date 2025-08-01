"use client"

import { useState, useRef, useEffect } from "react"
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Modal,
  Alert,
} from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import styles from "./DetailpageScreenStyles.js"

const { width } = Dimensions.get("window")

const DetailpageScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { popupData } = route.params || {}

  const [selectedTab, setSelectedTab] = useState("후기")
  const [feedbackText, setFeedbackText] = useState("")
  const [selectedTags, setSelectedTags] = useState([])
  const [selectedQuickOptions, setSelectedQuickOptions] = useState({})
  const [isHeartLiked, setIsHeartLiked] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  const [comments, setComments] = useState([])
  const [showAllComments, setShowAllComments] = useState(false)
  const [showSelectedOptions, setShowSelectedOptions] = useState(false)
  const [editingComment, setEditingComment] = useState(null)
  const [editText, setEditText] = useState("")
  const categoryScrollRef = useRef(null)

  // 뒤로가기 핸들러
  const handleBackPress = () => {
    navigation.goBack()
  }

  // 현재 시간 업데이트
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes()
      const timeString = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000) // 1분마다 업데이트

    return () => clearInterval(interval)
  }, [])

  // 댓글 등록시 카운트 업데이트를 위한 옵션 데이터
  const [serviceOptions, setServiceOptions] = useState([
    { id: 1, text: "직원이 친절해요", count: 18, selected: false },
    { id: 2, text: "안내가 명확해요", count: 11, selected: false },
    { id: 3, text: "예약이 편해요", count: 10, selected: false },
    { id: 4, text: "응답이 빨라요", count: 8, selected: false },
    { id: 5, text: "서비스가 좋아요", count: 6, selected: false },
  ])

  const [spaceOptions, setSpaceOptions] = useState([
    { id: 6, text: "매장이 깨끗해요", count: 5, selected: false },
    { id: 7, text: "분위기가 예뻐요", count: 4, selected: false },
    { id: 8, text: "접근성이 좋아요", count: 3, selected: false },
    { id: 9, text: "공간이 넓어요", count: 7, selected: false },
    { id: 10, text: "조명이 좋아요", count: 2, selected: false },
  ])

  const [contentOptions, setContentOptions] = useState([
    { id: 11, text: "상품이 다양해요", count: 7, selected: false },
    { id: 12, text: "퀄리티가 좋아요", count: 5, selected: false },
    { id: 13, text: "가격이 합리적이에요", count: 2, selected: false },
    { id: 14, text: "디자인이 예뻐요", count: 9, selected: false },
    { id: 15, text: "한정판이 많아요", count: 4, selected: false },
  ])

  const [waitingOptions, setWaitingOptions] = useState([
    { id: 16, text: "대기 없음", count: 12, selected: false },
    { id: 17, text: "짧은 대기", count: 8, selected: false },
    { id: 18, text: "보통 대기", count: 5, selected: false },
    { id: 19, text: "긴 대기", count: 3, selected: false },
  ])

  const [stockOptions, setStockOptions] = useState([
    { id: 20, text: "재고 충분", count: 15, selected: false },
    { id: 21, text: "일부 품절", count: 7, selected: false },
    { id: 22, text: "거의 매진", count: 4, selected: false },
    { id: 23, text: "완전 매진", count: 2, selected: false },
  ])

  const [crowdOptions, setCrowdOptions] = useState([
    { id: 24, text: "여유로움", count: 6, selected: false },
    { id: 25, text: "약간 붐빔", count: 11, selected: false },
    { id: 26, text: "매우 붐빔", count: 8, selected: false },
    { id: 27, text: "입장 제한", count: 1, selected: false },
  ])

  // quickOptionCategories에서 카테고리별로 하나만 선택 가능하도록 수정
  const quickOptionCategories = [
    {
      id: "service",
      title: "서비스",
      icon: require("../../src/detailpagesrc/serviceicon.png"),
      iconStyle: "serviceIcon",
      options: ["안내가 명확해요", "직원이 친절해요", "예약이 편해요", "대기 시간이 짧아요"],
    },
    {
      id: "space",
      title: "공간 및 환경",
      icon: require("../../src/detailpagesrc/placeicon.png"),
      iconStyle: "placeIcon",
      options: ["매장이 깨끗해요", "분위기가 예뻐요", "접근성이 좋아요", "대기 공간이 넓어요"],
    },
    {
      id: "content",
      title: "상품 및 콘텐츠",
      icon: require("../../src/detailpagesrc/contentsicon.png"),
      iconStyle: "contentsIcon",
      options: ["상품이 다양해요", "퀄리티가 좋아요", "가격이 합리적이에요", "굿즈가 예뻐요"],
    },
    {
      id: "waiting",
      title: "대기 현황",
      icon: require("../../src/detailpagesrc/waitingicon.png"),
      iconStyle: "waitIcon",
      options: ["대기 없음", "짧은 대기", "보통 대기", "긴 대기"],
    },
    {
      id: "stock",
      title: "재고 상황",
      icon: require("../../src/detailpagesrc/goodsicon.png"),
      iconStyle: "stockIcon",
      options: ["재고 충분", "일부 품절", "거의 매진", "완전 매진"],
    },
    {
      id: "crowd",
      title: "혼잡도",
      icon: require("../../src/detailpagesrc/peopleicon.png"),
      iconStyle: "crowdIcon",
      options: ["여유로움", "약간 붐빔", "매우 붐빔", "입장 제한"],
    },
  ]

  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: "익명",
      content:
        "평일 낮에 가니까 사람 거의 없어서 쾌적했어요! 사진도 여유롭게 찍었어요. 그리고 전시도 좋았지만 굿즈 디테일 진짜 미쳤어요. 퀄리티 대박!",
      tags: ["매장이 깨끗해요"],
      likes: 3,
      date: "25.06.28 13:23",
    },
    {
      id: 2,
      author: "익명",
      content:
        "스탭분들 응대 친절하고 체험존도 재밌었어요. 굿즈 퀄도 괜찮은 편입니다. 금요일 오후 3시쯤 도착했는데 줄은 10분 정도? 금방 들어갔어요. 한정판 키링은 3시쯤 완판 났다고 해요. 참고하세요.",
      tags: ["퀄리티가 좋아요"],
      likes: 4,
      date: "25.06.23 15:02",
    },
    {
      id: 3,
      author: "익명",
      content:
        "전체적으로 감성적인 분위기가 좋았어요. 입구부터 포토존처럼 꾸며져 있어서 도착하자마자 사진부터 찍었네요. 특히 내부에 있는 일러스트 벽면이랑 거울 실제 공간이 포토 스팟으로 완전 최고였어...",
      tags: ["안내가 명확해요"],
      likes: 6,
      date: "25.06.21 10:05",
    },
  ])

  // 카테고리별로 하나만 선택 가능하도록 수정된 함수
  const toggleQuickOption = (categoryId, option) => {
    setSelectedQuickOptions((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId] === option ? null : option,
    }))
  }

  const toggleHeart = () => {
    setIsHeartLiked((prev) => !prev)
  }

  const handleScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x
    const componentWidth = width - 32

    if (scrollX < componentWidth / 2) {
      setSelectedTab("후기")
    } else {
      setSelectedTab("현재 상황")
    }
  }

  const handleTabPress = (tab) => {
    setSelectedTab(tab)
    if (categoryScrollRef.current) {
      const scrollX = tab === "후기" ? 0 : width - 32
      categoryScrollRef.current.scrollTo({ x: scrollX, animated: true })
    }
  }

  // 댓글 등록 함수
  const handleSubmitComment = () => {
    if (!feedbackText.trim() && Object.keys(selectedQuickOptions).length === 0) {
      Alert.alert("알림", "댓글 내용을 입력하거나 옵션을 선택해주세요.")
      return
    }

    const selectedOptionsList = Object.values(selectedQuickOptions).filter((option) => option !== null)

    // 새 댓글 생성
    const newComment = {
      id: Date.now(),
      author: "익명",
      content: feedbackText || "옵션만 선택했습니다.",
      tags: selectedOptionsList,
      likes: 0,
      date: new Date()
        .toLocaleDateString("ko-KR", {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })
        .replace(/\. /g, ".")
        .replace(".", ".")
        .slice(0, -1),
    }

    // 댓글 추가
    setReviews((prev) => [newComment, ...prev])

    // 선택된 옵션들의 카운트 업데이트
    updateOptionCounts(selectedOptionsList)

    // 입력 필드 초기화
    setFeedbackText("")
    setSelectedQuickOptions({})

    Alert.alert("완료", "댓글이 등록되었습니다!")
  }

  // 옵션 카운트 업데이트 함수
  const updateOptionCounts = (selectedOptions) => {
    const updateOptions = (options, setOptions) => {
      setOptions((prev) =>
        prev.map((option) => {
          if (selectedOptions.includes(option.text)) {
            return { ...option, count: option.count + 1 }
          }
          return option
        }),
      )
    }

    updateOptions(serviceOptions, setServiceOptions)
    updateOptions(spaceOptions, setSpaceOptions)
    updateOptions(contentOptions, setContentOptions)
    updateOptions(waitingOptions, setWaitingOptions)
    updateOptions(stockOptions, setStockOptions)
    updateOptions(crowdOptions, setCrowdOptions)
  }

  // 댓글 삭제 함수
  const handleDeleteComment = (commentId) => {
    Alert.alert("댓글 삭제", "정말로 이 댓글을 삭제하시겠습니까?", [
      { text: "취소", style: "cancel" },
      {
        text: "삭제",
        style: "destructive",
        onPress: () => {
          setReviews((prev) => prev.filter((review) => review.id !== commentId))
        },
      },
    ])
  }

  // 댓글 수정 함수
  const handleEditComment = (comment) => {
    setEditingComment(comment.id)
    setEditText(comment.content)
  }

  const handleSaveEdit = () => {
    setReviews((prev) =>
      prev.map((review) => (review.id === editingComment ? { ...review, content: editText } : review)),
    )
    setEditingComment(null)
    setEditText("")
  }

  // 가장 큰 값을 찾는 함수
  const getMaxCount = (options) => {
    return Math.max(...options.map((option) => option.count))
  }

  // 수정된 renderTagButton - 컴포넌트 자체 색상 반전
  const renderTagButton = (option, index, array, allOptions) => {
    const maxCount = getMaxCount(allOptions)
    const isMaxCount = option.count === maxCount

    return (
      <View
        key={option.id}
        style={[
          styles.tagButton,
          option.selected && styles.selectedTagButton,
          isMaxCount && styles.maxCountTagButton, // 최대값일 때 배경색 변경
          { marginRight: index === array.length - 1 ? 24 : 8 },
        ]}
      >
        <Text
          style={[
            styles.tagText,
            option.selected && styles.selectedTagText,
            isMaxCount && styles.maxCountTagText, // 최대값일 때 텍스트 색상 변경
          ]}
        >
          {option.text} ({option.count})
        </Text>
      </View>
    )
  }

  const renderQuickOptionButton = (categoryId, option, index) => {
    const isSelected = selectedQuickOptions[categoryId] === option
    return (
      <TouchableOpacity
        key={index}
        style={[styles.quickOptionButton, isSelected && styles.selectedQuickOptionButton]}
        onPress={() => toggleQuickOption(categoryId, option)}
      >
        <Text style={[styles.quickOptionText, isSelected && styles.selectedQuickOptionText]}>{option}</Text>
      </TouchableOpacity>
    )
  }

  const renderQuickOptionCategory = (category, index) => (
    <View key={category.id} style={styles.quickOptionColumnWrapper}>
      <View style={styles.quickOptionColumn}>
        <View style={styles.quickO}>
          <Image source={category.icon} style={styles[category.iconStyle]} resizeMode="cover" />
          <Text style={styles.quickOptionTitle}>{category.title}</Text>
        </View>
        {category.options.map((option, idx) => renderQuickOptionButton(category.id, option, idx))}
      </View>
      {category.id === "content" && <View style={styles.categorySeparator} />}
    </View>
  )

  // 선택된 옵션들을 보여주는 컴포넌트 - 가로 스크롤 추가
  const renderSelectedOptions = () => {
    const selectedOptionsList = Object.values(selectedQuickOptions).filter((option) => option !== null)

    if (selectedOptionsList.length === 0) return null

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.selectedOptionsContainer}
        contentContainerStyle={styles.selectedOptionsContentContainer}
      >
        {selectedOptionsList.map((option, index) => (
          <View key={index} style={styles.selectedOptionTag}>
            <Text style={styles.selectedOptionTagText}>{option}</Text>
          </View>
        ))}
      </ScrollView>
    )
  }

  // 댓글에서 선택된 옵션 표시 - 한 개만 보이고 나머지는 +숫자로 표시
  const renderReviewTags = (tags) => {
    if (tags.length === 0) return null

    const firstTag = tags[0]
    const remainingCount = tags.length - 1

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.reviewTagsScrollView}
        contentContainerStyle={styles.reviewTagsContentContainer}
      >
        <View style={styles.reviewTag}>
          <Text style={styles.reviewTagText}>{firstTag}</Text>
        </View>
        {remainingCount > 0 && (
          <TouchableOpacity
            style={styles.moreTagsButton}
            onPress={() => {
              Alert.alert("선택된 옵션", tags.join(", "), [{ text: "확인", style: "default" }])
            }}
          >
            <Text style={styles.moreTagsText}>+{remainingCount}</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    )
  }

  // 후기 관련 카테고리 컴포넌트
  const ReviewCategoriesComponent = () => (
    <View style={styles.categoryComponent}>
      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>서비스</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            alignItems: "flex-start",
            paddingRight: 32,
          }}
        >
          {serviceOptions.map((option, index) => renderTagButton(option, index, serviceOptions, serviceOptions))}
        </ScrollView>
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>공간 및 환경</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            alignItems: "flex-start",
            paddingRight: 32,
          }}
        >
          {spaceOptions.map((option, index) => renderTagButton(option, index, spaceOptions, spaceOptions))}
        </ScrollView>
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>상품 및 콘텐츠</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            alignItems: "flex-start",
            paddingRight: 32,
          }}
        >
          {contentOptions.map((option, index) => renderTagButton(option, index, contentOptions, contentOptions))}
        </ScrollView>
      </View>
    </View>
  )

  // 현재 상황 관련 카테고리 컴포넌트
  const CurrentStatusComponent = () => (
    <View style={styles.categoryComponent}>
      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>대기 현황</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            alignItems: "flex-start",
            paddingRight: 32,
          }}
        >
          {waitingOptions.map((option, index) => renderTagButton(option, index, waitingOptions, waitingOptions))}
        </ScrollView>
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>재고 상황</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            alignItems: "flex-start",
            paddingRight: 32,
          }}
        >
          {stockOptions.map((option, index) => renderTagButton(option, index, stockOptions, stockOptions))}
        </ScrollView>
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>혼잡도</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            alignItems: "flex-start",
            paddingRight: 32,
          }}
        >
          {crowdOptions.map((option, index) => renderTagButton(option, index, crowdOptions, crowdOptions))}
        </ScrollView>
      </View>
    </View>
  )

  // 전체 댓글 보기 모달
  const AllCommentsModal = () => (
    <Modal visible={showAllComments} animationType="slide" presentationStyle="pageSheet">
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>전체 반응 보기</Text>
          <TouchableOpacity onPress={() => setShowAllComments(false)}>
            <Text style={styles.closeButton}>닫기</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.modalContent}>
          {reviews.map((review) => (
            <View key={review.id} style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewAuthor}>
                  <View style={styles.avatar}>
                    <Image
                      source={require("../../src/detailpagesrc/profileicon.png")}
                      style={styles.profileicon}
                      resizeMode="cover"
                    />
                  </View>
                  <Text style={styles.authorName}>{review.author}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert("더보기", "원하는 작업을 선택하세요", [
                      { text: "취소", style: "cancel" },
                      { text: "수정", onPress: () => handleEditComment(review) },
                      { text: "삭제", style: "destructive", onPress: () => handleDeleteComment(review.id) },
                    ])
                  }}
                >
                  <Image
                    source={require("../../src/detailpagesrc/moreicon.png")}
                    style={styles.moreicon}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              </View>

              {editingComment === review.id ? (
                <View>
                  <TextInput style={styles.editInput} value={editText} onChangeText={setEditText} multiline />
                  <View style={styles.editButtons}>
                    <TouchableOpacity onPress={() => setEditingComment(null)} style={styles.cancelButton}>
                      <Text style={styles.cancelButtonText}>취소</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSaveEdit} style={styles.saveButton}>
                      <Text style={styles.saveButtonText}>저장</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <Text style={styles.reviewContent}>{review.content}</Text>
              )}

              <View style={styles.reviewFooter}>
                <View style={styles.reviewTags}>{renderReviewTags(review.tags)}</View>
                <Text style={styles.reviewDate}>{review.date} 방문</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </Modal>
  )

  // 날짜 포맷팅 함수
  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    const year = date.getFullYear().toString().slice(-2)
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const day = date.getDate().toString().padStart(2, "0")
    return `${year}.${month}.${day}`
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require("../../src/detailpagesrc/backicon.png")} style={styles.back} resizeMode="cover" />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerIcon} onPress={toggleHeart}>
            <Image
              source={require("../../src/common/favorites.png")}
              style={[styles.heart, { tintColor: isHeartLiked ? "#ff4444" : "#666" }]}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Image source={require("../../src/common/searchicon.png")} style={styles.search} resizeMode="cover" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Event Poster */}
        <View style={styles.posterContainer}>
          <Image
            source={popupData?.image || require("../../src/poster1.png")}
            style={styles.posterImage}
            resizeMode="cover"
          />
        </View>

        {/* Event Info */}
        <View style={styles.eventInfo}>
          <Text style={styles.eventTitle}>{popupData?.title || "오브젝트 서교 마쉬빌 퀵스카우트"}</Text>
          <Text style={styles.eventDate}>
            {popupData?.startDate && popupData?.endDate
              ? `${formatDate(popupData.startDate)} - ${formatDate(popupData.endDate)}`
              : "25.05.30 - 25.07.27"}
          </Text>

          <View style={styles.infoRow}>
            <Image source={require("../../src/common/pickitpin.png")} style={styles.pin} resizeMode="cover" />
            <Text style={styles.infoText}>{popupData?.location || "서울 마포구 와우산로35길 13 오브젝트 서교"}</Text>
          </View>

          <View style={styles.infoRow}>
            <Image
              source={require("../../src/detailpagesrc/timeicon.png")}
              style={styles.timeicon}
              resizeMode="cover"
            />
            <Text style={styles.infoText}>{popupData?.operatingHours || "월~일 : 11:00 - 21:00"}</Text>
          </View>

          <View style={styles.tagContainer}>
            {(popupData?.tags || ["오브젝트", "캐릭터", "다이노탱", "전시"]).map((tag, index) => (
              <View key={index} style={styles.eventTag}>
                <Text style={styles.eventTagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Store Introduction */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>팝업스토어 소개</Text>
          <View style={styles.introductionBox}>
            <ScrollView
              style={styles.introductionScrollView}
              showsVerticalScrollIndicator={true}
              persistentScrollbar={true}
              nestedScrollEnabled={true}
              bounces={true}
              scrollEventThrottle={16}
            >
              <Text style={styles.joinText}>[ Join Us! ] 퀵스카우트 대원 모집!🏕️</Text>
              <Text style={styles.descriptionText}>
                {popupData?.description ||
                  `[ 오브젝트 서교/ 에디트 : Marshville Quokscout 🏕️ ]
오브젝트가 마쉬빌 퀵스카우트 캠핑장으로 변신합니다!

특히 이번 전시는 서울 서교점과 부산 에디트점까지
퀵스카우트의 베이스캠프로 꾸며져,
다양한 체험형 전시 공간으로 가득 채워질 예정입니다

캠핑의 즐거움과 퀵스카우트의 매력을 동시에 느낄 수 있는
특별한 공간으로 여러분을 초대합니다.

다양한 포토존과 체험 공간이 마련되어 있어
방문객들에게 잊지 못할 추억을 선사할 것입니다.

이번 기회를 놓치지 마시고 꼭 방문해보세요!`}
              </Text>
            </ScrollView>
          </View>
        </View>

        {/* Feedback Section */}
        <View style={styles.section}>
          <View style={styles.feedbackHeader}>
            <Image source={require("../../src/common/pickitpin.png")} style={styles.locationicon} resizeMode="cover" />
            <Text style={styles.feedbackTitle}>현장 어때요?</Text>
            <Text style={styles.feedbackTitlenext}>({currentTime} 기준)</Text>
          </View>
          <Text style={styles.feedbackSubtitle}>유저들이 직접 남긴 현장 상황을 실시간으로 확인해보세요</Text>

          {/* Tab Navigation */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, selectedTab === "후기" && styles.activeTab]}
              onPress={() => handleTabPress("후기")}
            >
              <Text style={[styles.tabText, selectedTab === "후기" && styles.activeTabText]}>후기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, selectedTab === "현재 상황" && styles.activeTab]}
              onPress={() => handleTabPress("현재 상황")}
            >
              <Text style={[styles.tabText, selectedTab === "현재 상황" && styles.activeTabText]}>현재 상황</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tabSeparator} />

          {/* 카테고리 섹션 - 터치 기능 제거됨 (보여지기만 함) */}
          <ScrollView
            ref={categoryScrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScrollView}
            contentContainerStyle={styles.categoryScrollContainer}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            <ReviewCategoriesComponent />
            <CurrentStatusComponent />
          </ScrollView>

          {/* Feedback Input */}
          <View style={styles.feedbackInputSection}>
            <View style={styles.feedback_wicon}>
              <Text style={styles.feedbackInputTitle}>지금 여기 어땠나요?</Text>
              <Image
                source={require("../../src/detailpagesrc/essentialicon.png")}
                style={styles.essentialicon}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.feedbackInputSubtitle}>
              직접 느낀 좋은 점을 선택해보세요. 우선 한 마디가 큰 정보가 돼요!
            </Text>

            {/* 퀵 옵션 섹션 */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.quickOptionsScrollView}
              contentContainerStyle={styles.quickOptionsContainer}
            >
              {quickOptionCategories.map((category, index) => renderQuickOptionCategory(category, index))}
            </ScrollView>

            {/* 선택된 옵션들 표시 */}
            {Object.values(selectedQuickOptions).filter((option) => option !== null).length > 0 && (
              <View style={styles.selectedOptionsSection}>
                <TouchableOpacity
                  style={styles.showSelectedButton}
                  onPress={() => setShowSelectedOptions(!showSelectedOptions)}
                >
                  <Text style={styles.showSelectedButtonText}>
                    선택된 옵션 +{Object.values(selectedQuickOptions).filter((option) => option !== null).length}
                  </Text>
                </TouchableOpacity>
                {showSelectedOptions && renderSelectedOptions()}
              </View>
            )}

            <TextInput
              style={styles.textInput}
              placeholder="매장 분위기, 입장 대기 시간, 제품 구성, 방문 팁 등을 실제 경험을 바탕으로 자유롭게 적어주세요. 당신의 정보가 큰 도움이 됩니다!"
              multiline
              value={feedbackText}
              onChangeText={setFeedbackText}
            />

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmitComment}>
              <Image
                source={require("../../src/detailpagesrc/writeicon.png")}
                style={styles.writeicon}
                resizeMode="cover"
              />
              <Text style={styles.submitButtonText}>반응 쓰기</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Reviews Section */}
        <View style={styles.section}>
          <View style={styles.reviewsHeader}>
            <Text style={styles.reviewsTitle}>반응 {reviews.length}</Text>
            <TouchableOpacity onPress={() => setShowAllComments(true)}>
              <Image
                source={require("../../src/detailpagesrc/wholereview.png")}
                style={styles.back2icon}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>

          {reviews.slice(0, 3).map((review) => (
            <View key={review.id} style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewAuthor}>
                  <View style={styles.avatar}>
                    <Image
                      source={require("../../src/detailpagesrc/profileicon.png")}
                      style={styles.profileicon}
                      resizeMode="cover"
                    />
                  </View>
                  <Text style={styles.authorName}>{review.author}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert("더보기", "원하는 작업을 선택하세요", [
                      { text: "취소", style: "cancel" },
                      { text: "수정", onPress: () => handleEditComment(review) },
                      { text: "삭제", style: "destructive", onPress: () => handleDeleteComment(review.id) },
                    ])
                  }}
                >
                  <Image
                    source={require("../../src/detailpagesrc/moreicon.png")}
                    style={styles.moreicon}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              </View>

              {editingComment === review.id ? (
                <View>
                  <TextInput style={styles.editInput} value={editText} onChangeText={setEditText} multiline />
                  <View style={styles.editButtons}>
                    <TouchableOpacity onPress={() => setEditingComment(null)} style={styles.cancelButton}>
                      <Text style={styles.cancelButtonText}>취소</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSaveEdit} style={styles.saveButton}>
                      <Text style={styles.saveButtonText}>저장</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <Text style={styles.reviewContent}>{review.content}</Text>
              )}

              <View style={styles.reviewFooter}>
                <View style={styles.reviewTags}>{renderReviewTags(review.tags)}</View>
                <Text style={styles.reviewDate}>{review.date} 작성</Text>
              </View>
            </View>
          ))}

          <TouchableOpacity style={styles.viewAllButton} onPress={() => setShowAllComments(true)}>
            <Image
              source={require("../../src/detailpagesrc/wholereact.png")}
              style={styles.wholereact}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <AllCommentsModal />
    </SafeAreaView>
  )
}

export default DetailpageScreen
