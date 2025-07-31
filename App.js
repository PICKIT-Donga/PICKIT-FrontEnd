"use client"

import { useState, useRef } from "react"
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
} from "react-native"
import styles from "./styles"

const { width } = Dimensions.get("window")

const App = () => {
  const [selectedTab, setSelectedTab] = useState("후기")
  const [feedbackText, setFeedbackText] = useState("")
  const [selectedTags, setSelectedTags] = useState([])
  const [selectedQuickOptions, setSelectedQuickOptions] = useState([])
  const [isHeartLiked, setIsHeartLiked] = useState(false)
  const categoryScrollRef = useRef(null)

  const serviceOptions = [
    { id: 1, text: "직원이 친절해요", count: 18, selected: true },
    { id: 2, text: "안내가 명확해요", count: 11, selected: false },
    { id: 3, text: "예약이 편해요", count: 10, selected: false },
    { id: 4, text: "응답이 빨라요", count: 8, selected: false },
    { id: 5, text: "서비스가 좋아요", count: 6, selected: false },
  ]

  const spaceOptions = [
    { id: 6, text: "매장이 깨끗해요", count: 5, selected: true },
    { id: 7, text: "분위기가 예뻐요", count: 4, selected: false },
    { id: 8, text: "접근성이 좋아요", count: 3, selected: false },
    { id: 9, text: "공간이 넓어요", count: 7, selected: false },
    { id: 10, text: "조명이 좋아요", count: 2, selected: false },
  ]

  const contentOptions = [
    { id: 11, text: "상품이 다양해요", count: 7, selected: true },
    { id: 12, text: "퀄리티가 좋아요", count: 5, selected: false },
    { id: 13, text: "가격이 합리적이에요", count: 2, selected: false },
    { id: 14, text: "디자인이 예뻐요", count: 9, selected: false },
    { id: 15, text: "한정판이 많아요", count: 4, selected: false },
  ]

  const waitingOptions = [
    { id: 16, text: "대기 없음", count: 12, selected: false },
    { id: 17, text: "짧은 대기", count: 8, selected: true },
    { id: 18, text: "보통 대기", count: 5, selected: false },
    { id: 19, text: "긴 대기", count: 3, selected: false },
  ]

  const stockOptions = [
    { id: 20, text: "재고 충분", count: 15, selected: true },
    { id: 21, text: "일부 품절", count: 7, selected: false },
    { id: 22, text: "거의 매진", count: 4, selected: false },
    { id: 23, text: "완전 매진", count: 2, selected: false },
  ]

  const crowdOptions = [
    { id: 24, text: "여유로움", count: 6, selected: false },
    { id: 25, text: "약간 붐빔", count: 11, selected: true },
    { id: 26, text: "매우 붐빔", count: 8, selected: false },
    { id: 27, text: "입장 제한", count: 1, selected: false },
  ]

  // 새로운 옵션 카테고리들 추가 (iconStyle 추가)
  const quickOptionCategories = [
    {
      id: "service",
      title: "서비스",
      icon: require("./src/service.png"),
      iconStyle: "serviceIcon",
      options: ["안내가 명확해요", "직원이 친절해요", "예약이 편해요", "대기 시간이 짧아요"],
    },
    {
      id: "space",
      title: "공간 및 환경",
      icon: require("./src/place.png"),
      iconStyle: "placeIcon",
      options: ["매장이 깨끗해요", "분위기가 예뻐요", "접근성이 좋아요", "대기 공간이 넓어요"],
    },
    {
      id: "content",
      title: "상품 및 콘텐츠",
      icon: require("./src/detailpagesrc/contentsicon.png"),
      iconStyle: "contentsIcon",
      options: ["상품이 다양해요", "퀄리티가 좋아요", "가격이 합리적이에요", "굿즈가 예뻐요"],
    },
    {
      id: "waiting",
      title: "대기 현황",
      icon: require("./src/wait.png"),
      iconStyle: "waitIcon",
      options: ["대기 없음", "짧은 대기", "보통 대기", "긴 대기"],
    },
    {
      id: "stock",
      title: "재고 상황",
      icon: require("./src/detailpagesrc/goodsicon.png"),
      iconStyle: "stockIcon",
      options: ["재고 충분", "일부 품절", "거의 매진", "완전 매진"],
    },
    {
      id: "crowd",
      title: "혼잡도",
      icon: require("./src/detailpagesrc/peopleicon.png"),
      iconStyle: "crowdIcon",
      options: ["여유로움", "약간 붐빔", "매우 붐빔", "입장 제한"],
    },
  ]

  const reviews = [
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
        '"전체적으로 감성적인 분위기가 좋았어요. 입구부터 포토존처럼 꾸며져 있어서 도착하자마자 사진부터 찍었네요. 특히 내부에 있는 일러스트 벽면이랑 거울 실제 공간이 포토 스팟으로 완전 최고였어...',
      tags: ["안내가 명확해요"],
      likes: 6,
      date: "25.06.21 10:05",
    },
  ]

  const toggleTag = (tagId) => {
    setSelectedTags((prev) => (prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]))
  }

  const toggleQuickOption = (option) => {
    setSelectedQuickOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option],
    )
  }

  const toggleHeart = () => {
    setIsHeartLiked((prev) => !prev)
  }

  const handleScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x
    const componentWidth = width - 32 // accounting for padding

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

  const renderTagButton = (option, index, array) => (
    <TouchableOpacity
      key={option.id}
      style={[
        styles.tagButton,
        option.selected && styles.selectedTagButton,
        { marginRight: index === array.length - 1 ? 24 : 8 }, // 마지막 버튼에 추가 여백
      ]}
      onPress={() => toggleTag(option.id)}
    >
      <Text style={[styles.tagText, option.selected && styles.selectedTagText]}>
        {option.text} ({option.count})
      </Text>
    </TouchableOpacity>
  )

  const renderQuickOptionButton = (option, index) => {
    const isSelected = selectedQuickOptions.includes(option)
    return (
      <TouchableOpacity
        key={index}
        style={[styles.quickOptionButton, isSelected && styles.selectedQuickOptionButton]}
        onPress={() => toggleQuickOption(option)}
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
        {category.options.map(renderQuickOptionButton)}
      </View>
      {/* Add separator line after "content" category */}
      {category.id === "content" && <View style={styles.categorySeparator} />}
    </View>
  )

  // 후기 관련 카테고리 컴포넌트 - 수정된 버전
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
          {serviceOptions.map((option, index) => renderTagButton(option, index, serviceOptions))}
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
          {spaceOptions.map((option, index) => renderTagButton(option, index, spaceOptions))}
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
          {contentOptions.map((option, index) => renderTagButton(option, index, contentOptions))}
        </ScrollView>
      </View>
    </View>
  )

  // 현재 상황 관련 카테고리 컴포넌트 - 수정된 버전
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
          {waitingOptions.map((option, index) => renderTagButton(option, index, waitingOptions))}
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
          {stockOptions.map((option, index) => renderTagButton(option, index, stockOptions))}
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
          {crowdOptions.map((option, index) => renderTagButton(option, index, crowdOptions))}
        </ScrollView>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require("./src/detailpagesrc/backicon.png")} style={styles.back} resizeMode="cover" />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerIcon} onPress={toggleHeart}>
            <Image
              source={require("./src/heart.png")}
              style={[styles.heart, { tintColor: isHeartLiked ? "#ff4444" : "#666" }]}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Image source={require("./src/common/searchicon.png")} style={styles.search} resizeMode="cover" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Event Poster */}
        <View style={styles.posterContainer}>
          <Image source={require("./src/poster1.png")} style={styles.posterImage} resizeMode="cover" />
        </View>

        {/* Event Info */}
        <View style={styles.eventInfo}>
          <Text style={styles.eventTitle}>오브젝트 서교 마쉬빌 퀵스카우트</Text>
          <Text style={styles.eventDate}>25.05.30 - 25.07.27</Text>

          <View style={styles.infoRow}>
            <Image source={require("./src/common/pickitpin.png")} style={styles.pin} resizeMode="cover" />
            <Text style={styles.infoText}>서울 마포구 와우산로35길 13 오브젝트 서교</Text>
          </View>

          <View style={styles.infoRow}>
            <Image source={require("./src/time.png")} style={styles.timeicon} resizeMode="cover" />
            <Text style={styles.infoText}>월~일 : 11:00 - 21:00</Text>
          </View>

          <View style={styles.tagContainer}>
            {["오브젝트", "캐릭터", "다이노탱", "전시"].map((tag, index) => (
              <View key={index} style={styles.eventTag}>
                <Text style={styles.eventTagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Store Introduction - Enhanced Scrollable Section */}
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
                [ 오브젝트 서교/ 에디트 : Marshville Quokscout 🏕️ ]{"\n"}
                오브젝트가 마쉬빌 퀵스카우트 캠핑장으로 변신합니다!{"\n\n"}
                특히 이번 전시는 서울 서교점과 부산 에디트점까지{"\n"}
                퀵스카우트의 베이스캠프로 꾸며져,{"\n"}
                다양한 체험형 전시 공간으로 가득 채워질 예정입니다{"\n\n"}
                캠핑의 즐거움과 퀵스카우트의 매력을 동시에 느낄 수 있는{"\n"}
                특별한 공간으로 여러분을 초대합니다.{"\n\n"}
                다양한 포토존과 체험 공간이 마련되어 있어{"\n"}
                방문객들에게 잊지 못할 추억을 선사할 것입니다.{"\n\n"}
                이번 기회를 놓치지 마시고 꼭 방문해보세요!{"\n\n"}
                🏕️ 캠핑 체험존{"\n"}
                실제 캠핑 장비들을 체험해볼 수 있는 공간이 마련되어 있습니다.{"\n"}
                텐트 안에서 사진을 찍거나, 캠핑 용품들을 직접 만져볼 수 있어요.{"\n\n"}📸 포토존{"\n"}
                퀵스카우트 캐릭터들과 함께 사진을 찍을 수 있는{"\n"}
                다양한 포토존이 곳곳에 설치되어 있습니다.{"\n\n"}
                🛍️ 굿즈샵{"\n"}
                한정판 굿즈부터 일반 굿즈까지{"\n"}
                다양한 퀵스카우트 상품들을 만나보실 수 있습니다.{"\n\n"}⏰ 운영시간 안내{"\n"}
                월요일 - 일요일: 11:00 - 21:00{"\n"}
                (입장 마감: 20:30){"\n\n"}💡 방문 팁{"\n"}- 평일 오전 시간대가 가장 한적합니다{"\n"}- 주말에는
                대기시간이 있을 수 있으니 여유시간을 두고 방문하세요{"\n"}- 한정판 굿즈는 조기 품절될 수 있습니다{"\n"}-
                현금과 카드 모두 사용 가능합니다{"\n\n"}🚇 교통편 안내{"\n"}
                지하철 6호선 상수역 1번 출구에서 도보 5분{"\n"}
                지하철 2호선 홍익대입구역 9번 출구에서 도보 10분{"\n\n"}
                여러분의 방문을 기다리고 있겠습니다! 🎉
              </Text>
            </ScrollView>
          </View>
        </View>

        {/* Feedback Section */}
        <View style={styles.section}>
          <View style={styles.feedbackHeader}>
            <Image source={require("./src/common/pickitpin.png")} style={styles.locationicon} resizeMode="cover" />
            <Text style={styles.feedbackTitle}>현장 어때요?</Text>
            <Text style={styles.feedbackTitlenext}>(오전 9시 기준)</Text>
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

          {/* 탭과 카테고리 사이 구분선 */}
          <View style={styles.tabSeparator} />

          {/* 수정된 가로 스크롤 가능한 카테고리 섹션 */}
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
              <Image source={require("./src/detailpagesrc/essentialicon.png")} style={styles.essentialicon} resizeMode="cover" />
            </View>
            <Text style={styles.feedbackInputSubtitle}>
              직접 느낀 좋은 점을 선택해보세요. 우선 한 마디가 큰 정보가 돼요!
            </Text>

            {/* 기존 가로 스크롤 가능한 퀵 옵션 섹션 */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.quickOptionsScrollView}
              contentContainerStyle={styles.quickOptionsContainer}
            >
              {quickOptionCategories.map((category, index) => renderQuickOptionCategory(category, index))}
            </ScrollView>

            <TextInput
              style={styles.textInput}
              placeholder="매장 분위기, 입장 대기 시간, 제품 구성, 방문 팁 등을 실제 경험을 바탕으로 자유롭게 적어주세요. 당신의 정보가 큰 도움이 됩니다!"
              multiline
              value={feedbackText}
              onChangeText={setFeedbackText}
            />

            <TouchableOpacity style={styles.submitButton}>
              <Image source={require("./src/write.png")} style={styles.writeicon} resizeMode="cover" />
              <Text style={styles.submitButtonText}>반응 쓰기</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Reviews Section */}
        <View style={styles.section}>
          <View style={styles.reviewsHeader}>
            <Text style={styles.reviewsTitle}>반응 42</Text>
            <Image source={require("./src/back2.png")} style={styles.back2icon} resizeMode="cover" />
          </View>

          {reviews.map((review) => (
            <View key={review.id} style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewAuthor}>
                  <View style={styles.avatar}>
                    <Image source={require("./src/profile.png")} style={styles.profileicon} resizeMode="cover" />
                  </View>
                  <Text style={styles.authorName}>{review.author}</Text>
                </View>
                <TouchableOpacity>
                  <Image source={require("./src/detailpagesrc/moreicon.png")} style={styles.moreicon} resizeMode="cover" />
                </TouchableOpacity>
              </View>

              <Text style={styles.reviewContent}>{review.content}</Text>

              <View style={styles.reviewFooter}>
                <View style={styles.reviewTags}>
                  {review.tags.map((tag, index) => (
                    <View key={index} style={styles.reviewTag}>
                      <Text style={styles.reviewTagText}>{tag}</Text>
                    </View>
                  ))}
                  <Text style={styles.likesCount}>+{review.likes}</Text>
                </View>
                <Text style={styles.reviewDate}>{review.date} 방문</Text>
              </View>
            </View>
          ))}

          <TouchableOpacity style={styles.viewAllButton}>
            <Image source={require("./src/wholereact.png")} style={styles.wholereact} resizeMode="cover" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
