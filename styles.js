import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#ffff",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logoImage: {
    width: 123,
    height: 22,
  },
  headerActions: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 15,
  },
  bell: {
    width: 22,
    height: 22,
  },
  search: {
    width: 22,
    height: 22,
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  sectionTitleContainer: {
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'black',
  },
  highlightText: {
    color: "#ff2e2a",
  },
  cardContainer: {
    width: "50%",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    // 그림자 제거 - shadowColor, shadowOffset, shadowOpacity, shadowRadius, elevation 제거
  },
  cardImage: {
    width: "100%",
    height: 190,
  },
  cardButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 2,
  },
  cardButtonImage: {
    width: 172,
    height: 32,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
    color: 'black'
  },
  cardLocation: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  pin:{
    width: 25,
    height: 25,
  },
  cardLocationText: {
    fontSize: 12,
    color: "#787878",
    marginLeft: 5,
  },
  cardDate: {
    fontSize: 12,
    color: "#787878",
  },
  bottomNavigation: {
    backgroundColor: "#ffff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingVertical: 10,
  },
  bottomNavContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  tabButton: {
    alignItems: "center",
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  tabText: {
    fontSize: 12,
  },
  tabActive: {
    color: "#ff2e2a",
  },
  tabInactive: {
    color: "#787878",
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
  flatListContent: {
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  emptyIconText: {
    fontSize: 40,
    color: "#999",
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#787878",
  },
})