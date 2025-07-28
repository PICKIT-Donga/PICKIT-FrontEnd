import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('후기');
  const [feedbackText, setFeedbackText] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [isHeartLiked, setIsHeartLiked] = useState(false);

  const serviceOptions = [
    { id: 1, text: '직원이 친절해요', count: 18, selected: true },
    { id: 2, text: '안내가 명확해요', count: 11, selected: false },
    { id: 3, text: '예약이 편해요', count: 10, selected: false },
  ];

  const spaceOptions = [
    { id: 4, text: '매장이 깨끗해요', count: 5, selected: true },
    { id: 5, text: '분위기가 예뻐요', count: 4, selected: false },
    { id: 6, text: '접근성이 좋아요', count: 3, selected: false },
  ];

  const contentOptions = [
    { id: 7, text: '상품이 다양해요', count: 7, selected: true },
    { id: 8, text: '퀄리티가 좋아요', count: 5, selected: false },
    { id: 9, text: '가격이 합리적이에요', count: 2, selected: false },
  ];

  const reviews = [
    {
      id: 1,
      author: '익명',
      content: '평일 낮에 가니까 사람 거의 없어서 쾌적했어요! 사진도 여유롭게 찍었어요. 그리고 전시도 좋았지만 굿즈 디테일 진짜 미쳤어요. 퀄리티 대박!',
      tags: ['매장이 깨끗해요'],
      likes: 3,
      date: '25.06.28 13:23',
    },
    {
      id: 2,
      author: '익명',
      content: '스탭분들 응대 친절하고 체험존도 재밌었어요. 굿즈 퀄도 괜찮은 편입니다. 금요일 오후 3시쯤 도착했는데 줄은 10분 정도? 금방 들어갔어요. 한정판 키링은 3시쯤 완판 났다고 해요. 참고하세요.',
      tags: ['퀄리티가 좋아요'],
      likes: 4,
      date: '25.06.23 15:02',
    },
    {
      id: 3,
      author: '익명',
      content: '"전체적으로 감성적인 분위기가 좋았어요. 입구부터 포토존처럼 꾸며져 있어서 도착하자마자 사진부터 찍었네요. 특히 내부에 있는 일러스트 벽면이랑 거울 실제 공간이 포토 스팟으로 완전 최고였어...',
      tags: ['안내가 명확해요'],
      likes: 6,
      date: '25.06.21 10:05',
    },
  ];

  const toggleTag = (tagId) => {
    setSelectedTags(prev => 
      prev.includes(tagId) 
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };

  const toggleHeart = () => {
    setIsHeartLiked(prev => !prev);
  };

  const renderTagButton = (option) => (
    <TouchableOpacity
      key={option.id}
      style={[
        styles.tagButton,
        option.selected && styles.selectedTagButton
      ]}
      onPress={() => toggleTag(option.id)}
    >
      <Text style={[
        styles.tagText,
        option.selected && styles.selectedTagText
      ]}>
        {option.text} ({option.count})
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
           <Image
            source={require('./src/back.png')}
            style={styles.back}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerIcon} onPress={toggleHeart}>
             <Image
            source={require('./src/heart.png')}
            style={[
              styles.heart,
              { tintColor: isHeartLiked ? '#ff4444' : '#666' }
            ]}
            resizeMode="cover"
          />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Image
            source={require('./src/search.png')}
            style={styles.search}
            resizeMode="cover"
          />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Event Poster */}
        <View style={styles.posterContainer}>
          <Image
            source={require('./src/poster1.png')}
            style={styles.posterImage}
            resizeMode="cover"
          />
        </View>

        {/* Event Info */}
        <View style={styles.eventInfo}>
          <Text style={styles.eventTitle}>오브젝트 서교 마쉬빌 퀵스카우트</Text>
          <Text style={styles.eventDate}>25.05.30 - 25.07.27</Text>
          
          <View style={styles.infoRow}>
            <Image
            source={require('./src/pin.png')}
            style={styles.pin}
            resizeMode="cover" />
            <Text style={styles.infoText}>서울 마포구 와우산로35길 13 오브젝트 서교</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Image
            source={require('./src/time.png')}
            style={styles.timeicon}
            resizeMode="cover" />
            <Text style={styles.infoText}>월~일 : 11:00 - 21:00</Text>
          </View>

          <View style={styles.tagContainer}>
            {['오브젝트', '캐릭터', '다이노탱', '전시'].map((tag, index) => (
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
                [ 오브젝트 서교/ 에디트 : Marshville Quokscout 🏕️ ]{'\n'}
                오브젝트가 마쉬빌 퀵스카우트 캠핑장으로 변신합니다!{'\n\n'}
                특히 이번 전시는 서울 서교점과 부산 에디트점까지{'\n'}
                퀵스카우트의 베이스캠프로 꾸며져,{'\n'}
                다양한 체험형 전시 공간으로 가득 채워질 예정입니다{'\n\n'}
                캠핑의 즐거움과 퀵스카우트의 매력을 동시에 느낄 수 있는{'\n'}
                특별한 공간으로 여러분을 초대합니다.{'\n\n'}
                다양한 포토존과 체험 공간이 마련되어 있어{'\n'}
                방문객들에게 잊지 못할 추억을 선사할 것입니다.{'\n\n'}
                이번 기회를 놓치지 마시고 꼭 방문해보세요!{'\n\n'}
                
                🏕️ 캠핑 체험존{'\n'}
                실제 캠핑 장비들을 체험해볼 수 있는 공간이 마련되어 있습니다.{'\n'}
                텐트 안에서 사진을 찍거나, 캠핑 용품들을 직접 만져볼 수 있어요.{'\n\n'}
                
                📸 포토존{'\n'}
                퀵스카우트 캐릭터들과 함께 사진을 찍을 수 있는{'\n'}
                다양한 포토존이 곳곳에 설치되어 있습니다.{'\n\n'}
                
                🛍️ 굿즈샵{'\n'}
                한정판 굿즈부터 일반 굿즈까지{'\n'}
                다양한 퀵스카우트 상품들을 만나보실 수 있습니다.{'\n\n'}
                
                ⏰ 운영시간 안내{'\n'}
                월요일 - 일요일: 11:00 - 21:00{'\n'}
                (입장 마감: 20:30){'\n\n'}
                
                💡 방문 팁{'\n'}
                - 평일 오전 시간대가 가장 한적합니다{'\n'}
                - 주말에는 대기시간이 있을 수 있으니 여유시간을 두고 방문하세요{'\n'}
                - 한정판 굿즈는 조기 품절될 수 있습니다{'\n'}
                - 현금과 카드 모두 사용 가능합니다{'\n\n'}
                
                🚇 교통편 안내{'\n'}
                지하철 6호선 상수역 1번 출구에서 도보 5분{'\n'}
                지하철 2호선 홍익대입구역 9번 출구에서 도보 10분{'\n\n'}
                
                여러분의 방문을 기다리고 있겠습니다! 🎉
              </Text>
            </ScrollView>
          </View>
        </View>

        {/* Rest of the component remains the same */}
        {/* Feedback Section */}
        <View style={styles.section}>
          <View style={styles.feedbackHeader}>
            <Icon name="location-on" size={20} color="#ff4444" />
            <Text style={styles.feedbackTitle}>현장 어때요? (우전 9시 기준)</Text>
          </View>
          <Text style={styles.feedbackSubtitle}>
            유저들이 직접 남긴 현장 상황을 실시간으로 확인해보세요
          </Text>

          {/* Tab Navigation */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, selectedTab === '후기' && styles.activeTab]}
              onPress={() => setSelectedTab('후기')}
            >
              <Text style={[styles.tabText, selectedTab === '후기' && styles.activeTabText]}>
                후기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, selectedTab === '현재 상황' && styles.activeTab]}
              onPress={() => setSelectedTab('현재 상황')}
            >
              <Text style={[styles.tabText, selectedTab === '현재 상황' && styles.activeTabText]}>
                현재 상황
              </Text>
            </TouchableOpacity>
          </View>

          {/* Service Options */}
          <Text style={styles.categoryTitle}>서비스</Text>
          <View style={styles.optionsContainer}>
            {serviceOptions.map(renderTagButton)}
          </View>

          {/* Space Options */}
          <Text style={styles.categoryTitle}>공간 및 환경</Text>
          <View style={styles.optionsContainer}>
            {spaceOptions.map(renderTagButton)}
          </View>

          {/* Content Options */}
          <Text style={styles.categoryTitle}>상품 및 콘텐츠</Text>
          <View style={styles.optionsContainer}>
            {contentOptions.map(renderTagButton)}
          </View>

          {/* Feedback Input */}
          <View style={styles.feedbackInputSection}>
            <Text style={styles.feedbackInputTitle}>지금 여기 어땠나요?</Text>
            <Text style={styles.feedbackInputSubtitle}>
              직접 느낀 좋은 점을 선택해보세요. 우선 한 마디가 큰 정보가 돼요!
            </Text>

            <View style={styles.quickOptions}>
              <View style={styles.quickOptionColumn}>
                <Icon name="emoji-emotions" size={20} color="#ff4444" />
                <Text style={styles.quickOptionTitle}>서비스</Text>
                {['안내가 명확해요', '직원이 친절해요', '예약이 편해요', '대기 시간이 짧아요'].map((option, index) => (
                  <TouchableOpacity key={index} style={styles.quickOptionButton}>
                    <Text style={styles.quickOptionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.quickOptionColumn}>
                <Icon name="domain" size={20} color="#ff4444" />
                <Text style={styles.quickOptionTitle}>공간 및 환경</Text>
                {['매장이 깨끗해요', '분위기가 예뻐요', '접근성이 좋아요', '대기 공간이 넓어요'].map((option, index) => (
                  <TouchableOpacity key={index} style={styles.quickOptionButton}>
                    <Text style={styles.quickOptionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.quickOptionColumn}>
                <Icon name="inventory" size={20} color="#ff4444" />
                <Text style={styles.quickOptionTitle}>상품 및 콘텐츠</Text>
                {['상품이 다양해요', '퀄리티가 좋아요', '가격이 합리적이에요', '굿즈가 예뻐요'].map((option, index) => (
                  <TouchableOpacity key={index} style={styles.quickOptionButton}>
                    <Text style={styles.quickOptionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TextInput
              style={styles.textInput}
              placeholder="매장 분위기, 입장 대기 시간, 제품 구성, 방문 팁 등을 실제 경험을 바탕으로 자유롭게 적어주세요. 당신의 정보가 큰 도움이 됩니다!"
              multiline
              value={feedbackText}
              onChangeText={setFeedbackText}
            />

            <TouchableOpacity style={styles.submitButton}>
              <Icon name="edit" size={20} color="#fff" />
              <Text style={styles.submitButtonText}>반응 쓰기</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Reviews Section */}
        <View style={styles.section}>
          <View style={styles.reviewsHeader}>
            <Text style={styles.reviewsTitle}>받음 42</Text>
            <Icon name="chevron-right" size={24} color="#666" />
          </View>

          {reviews.map((review) => (
            <View key={review.id} style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewAuthor}>
                  <View style={styles.avatar}>
                    <Icon name="person" size={24} color="#fff" />
                  </View>
                  <Text style={styles.authorName}>{review.author}</Text>
                </View>
                <TouchableOpacity>
                  <Icon name="more-vert" size={20} color="#666" />
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
            <Text style={styles.viewAllText}>전체 받음 보기</Text>
            <Icon name="chevron-right" size={16} color="#666" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;