import { StyleSheet, Dimensions } from "react-native"

const { width } = Dimensions.get("window")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerIcons: {
    flexDirection: "row",
  },
  headerIcon: {
    marginLeft: 16,
  },
  back: {
    width: 19,
    height: 19,
  },
  heart: {
    width: 28,
    height: 28,
  },
  search: {
    width: 25,
    height: 25,
    marginTop: 3,
  },
  scrollView: {
    flex: 1,
  },
  posterContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  posterImage: {
    width: "100%",
    height: 400,
    borderRadius: 20,
  },
  eventInfo: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  eventDate: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: "#333",
    marginLeft: 8,
    flex: 1,
  },
  pin: {
    width: 25,
    height: 25,
  },
  timeicon: {
    width: 15,
    height: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  },
  eventTag: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  eventTagText: {
    fontSize: 12,
    color: "black",
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 2,
    borderTopColor: "#f8f8f8",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 12,
  },
  introductionBox: {
    width: 360,
    height: 420,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 16,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  introductionScrollView: {
    flex: 1,
  },
  joinText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  locationicon: {
    width: 35,
    height: 35,
  },
  feedbackHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  feedbackTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 2,
    marginBottom: 5,
  },
   feedbackTitlenext: {
    color: "#666",
    marginLeft: 8,
  },
  feedbackSubtitle: {
    fontSize: 12,
    color: "#666",
    marginBottom: 10,
    marginLeft: 8,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 4,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 16,
  },
  activeTab: {},
  tabText: {
    fontSize: 14,
    color: "#666",
  },
  activeTabText: {
    color: "#ff4444",
    fontWeight: "bold",
  },
  tabSeparator: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginHorizontal: -8,
    marginBottom: 20,
  },
  // 새로운 가로 스크롤 카테고리 스타일
  categoryScrollView: {
    marginBottom: 20,
    height: 320,
  },
  categoryScrollContainer: {
    flexDirection: "row",
  },
  categoryComponent: {
    width: width - 32,
    paddingHorizontal: 8,
  },
  categorySection: {
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 12,
  },
  optionsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingRight: 16,
  },
  tagButton: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 18,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#cccccc",
    alignSelf: "flex-start",
    minWidth: 60,
  },
  selectedTagButton: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  tagText: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
  },
  selectedTagText: {
    color: "#fff",
  },
  feedbackInputSection: {
    marginTop: 24,
  },
  feedback_wicon: {
    flexDirection: "row",
  },
  essentialicon: {
    marginLeft: 5,
    marginTop: 5,
    width: 45,
    height: 21,
  },
  feedbackInputTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  feedbackInputSubtitle: {
    fontSize: 12,
    color: "#666",
    marginBottom: 16,
  },
  // 기존 가로 스크롤 스타일
  quickOptionsScrollView: {
    marginBottom: 20,
  },
  quickOptionsContainer: {
    flexDirection: "row",
    paddingRight: 16,
    alignItems: "flex-start",
  },
  quickOptionColumnWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginRight: 8,
  },
  quickOptionColumn: {
    marginRight: 12,
  },
  quickO: {
    flexDirection: "row",
    marginBottom: 13,
  },
  // 개별 아이콘 스타일들
  serviceIcon: {
    width: 18,
    height: 18,
    marginRight: 5,
    marginTop: 5,
  },
  placeIcon: {
    width: 18,
    height: 18,
    marginRight: 5,
    marginTop: 5,
  },
  contentsIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
    marginTop: 5,
  },
  waitIcon: {
    width: 18,
    height: 18,
    marginRight: 5,
    marginTop: 5,
  },
  stockIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
    marginTop: 6,
  },
  crowdIcon: {
    width: 18,
    height: 18,
    marginRight: 5,
    marginTop: 6,
  },
  // 기존 아이콘 스타일들 (하위 호환성을 위해 유지)
  serviceicon: {
    width: 18,
    height: 18,
    marginRight: 5,
    marginTop: 5,
  },
  placeicon: {
    width: 15,
    height: 15,
    marginRight: 5,
    marginTop: 5,
  },
  contentsicon: {
    width: 15,
    height: 15,
    marginRight: 5,
    marginTop: 5,
  },
  quickOptionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginTop: 2,
  },
  quickOptionButton: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 18,
    marginBottom: 10,
    marginRight: 7,
    borderWidth: 1,
    borderColor: "#cccccc",
    alignSelf: "flex-start",
    minWidth: 60,
  },
  selectedQuickOptionButton: {
    backgroundColor: "#000000",
    borderColor: "#000000",
  },
  quickOptionText: {
    fontSize: 12,
    color: "black",
    textAlign: "center",
  },
  selectedQuickOptionText: {
    color: "#ffffff",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 16,
    height: 120,
    textAlignVertical: "top",
    fontSize: 14,
    color: "#333",
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: "#ff4444",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 8,
  },
  writeicon: {
    width: 21,
    height: 21,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  reviewsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  reviewItem: {
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  reviewAuthor: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  profileicon: {
    width: 52,
    height: 52,
    marginLeft: 17,
  },
  authorName: {
    marginLeft: 17,
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  moreicon: {
    width: 22,
    height: 22,
  },
  back2icon: {
    width: 12,
    height: 26,
  },
  reviewContent: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
    marginBottom: 12,
  },
  reviewFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reviewTags: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  reviewTag: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  reviewTagText: {
    fontSize: 11,
    color: "#666",
  },
  likesCount: {
    fontSize: 12,
    color: "#666",
    marginLeft: 4,
  },
  reviewDate: {
    fontSize: 11,
    color: "#999",
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    marginTop: 8,
  },
  wholereact: {
    width: 125,
    height: 38,
  },
  categorySeparator: {
    width: 0.5,
    height: 180,
    backgroundColor: "#d0d0d0",
    marginHorizontal: 8,
    marginTop: 25,
  },
})

export default styles
