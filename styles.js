import { StyleSheet, Dimensions } from "react-native"

const { width } = Dimensions.get("window")
const cardWidth = (width - 48) / 2 // 전체 너비에서 패딩 제외하고 2등분

export const styles = StyleSheet.create({
  // 메인 컨테이너
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },

  // 헤더 스타일
  header: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 44,
  },
  logoImage: {
    width: 120,
    height: 32,
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  // 메인 컨텐츠 스타일
  mainContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 100, // 하단 네비게이션 공간 확보
  },
  sectionTitleContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a1a1a",
    lineHeight: 24,
  },
  highlightText: {
    color: "#ff2e2a",
  },

  // FlatList 스타일
  flatListContent: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: "space-between",
  },

  // 팝업 카드 스타일
  cardContainer: {
    width: cardWidth,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: "100%",
    height: cardWidth * 0.75, // 4:3 비율
    backgroundColor: "#f7f7f7",
  },
  cardButton: {
    margin: 12,
    borderWidth: 1,
    borderColor: "#ff2e2a",
    borderRadius: 22,
    paddingVertical: 12,
    alignItems: "center",
    minHeight: 44,
  },
  cardButtonText: {
    color: "#ff2e2a",
    fontSize: 14,
    fontWeight: "500",
  },
  cardContent: {
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 8,
    lineHeight: 20,
  },
  cardLocation: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  cardLocationText: {
    fontSize: 12,
    color: "#787878",
    marginLeft: 4,
    flex: 1,
  },
  cardDate: {
    fontSize: 12,
    color: "#787878",
  },

  // 빈 상태 스타일
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 80,
  },
  emptyIcon: {
    width: 64,
    height: 64,
    backgroundColor: "#dadada",
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  emptyIconText: {
    fontSize: 32,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#3a3a3a",
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#787878",
    textAlign: "center",
  },

  // 하단 네비게이션 스타일
  bottomNavigation: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingBottom: 20, // Safe area
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bottomNavContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    minHeight: 44,
    borderRadius: 8,
  },
  tabIcon: {
    marginBottom: 4,
  },
  tabText: {
    fontSize: 12,
    fontWeight: "500",
  },
  tabActive: {
    color: "#ff2e2a",
  },
  tabInactive: {
    color: "#787878",
  },
})
