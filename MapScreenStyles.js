import { StyleSheet, Dimensions } from "react-native"

const { width } = Dimensions.get("window")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },

  // Header Styles
  header: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 12,
  },

  // Icon Styles
  iconContainer: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  iconImage: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  iconText: {
    fontSize: 12,
  },

  // Filter Styles
  filterContainer: {
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#dadada",
  },
  filterScrollContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    borderWidth: 0.3,
    borderColor: "#000",
  },
  filterButtonActive: {
    backgroundColor: "#ff2e2a",
    borderColor: "#ff2e2a",
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#3a3a3a",
  },
  filterButtonTextActive: {
    color: "#ffffff",
  },

  // Map Styles
  mapContainer: {
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#dadada",
    position: "relative",
  },
  mapImageContainer: {
    width: width,
    height: width * 0.6,
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },

  // Fixed Header Styles
  fixedHeader: {
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#dadada",
    zIndex: 100,
  },

  // District Selector Styles
  districtSelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#ffffff",
  },
  districtSelectorText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#3a3a3a",
  },

  // District Dropdown Styles
  districtDropdown: {
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#dadada",
    maxHeight: 200,
    zIndex: 99,
  },
  districtDropdownScroll: {
    maxHeight: 200,
  },
  districtDropdownItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#f0f0f0",
  },
  districtDropdownText: {
    fontSize: 14,
    color: "#3a3a3a",
  },

  // Store List Styles
  storeListContainer: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  storeListHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 7,
  },
  storeListTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#3a3a3a",
  },
  chevronIcon: {
    fontSize: 14,
    color: "#787878",
  },
  storeList: {
    paddingBottom: 16,
  },

  // Store Card Styles
  storeItem: {
    paddingVertical: 20,
    paddingHorizontal: 13,
    flexDirection: "row",
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    backgroundColor: "#ffffff",
  },

  storeImageContainer: {
    width: 80,
    height: 100,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    position: "relative",
    overflow: "hidden",
  },
  storeImage: {
    width: "100%",
    height: "100%",
  },
  storeInfo: {
    flex: 1,
    minWidth: 0,
  },
  storeTitleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  storeTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1a1a1a",
    lineHeight: 30,
    flex: 1,
    marginRight: 8,
  },

  // Heart Icon Styles
  heartButton: {
    padding: 4,
  },
  heartIcon: {
    fontSize: 16,
  },
  heartIconFilled: {
    color: "#ff2e2a",
  },
  heartIconImage: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },

  // Map Pin Icon Image Styles
  mapPinIconImage: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  // Location Styles
  storeLocationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 4,
  },
  mapPinIcon: {
    fontSize: 10,
  },
  storeLocation: {
    fontSize: 14,
    color: "#787878",
  },
  storeDate: {
    fontSize: 14,
    fontWeight: "500",
    color: "#3a3a3a",
    marginBottom: 4,
  },
  storeDescription: {
    fontSize: 12,
    color: "#787878",
    lineHeight: 16,
  },

  // Bottom Navigation Styles
  bottomNavigation: {
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#dadada",
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    alignItems: "center",
    paddingVertical: 8,
    flex: 1,
  },
  navIconImage: {
    width: 24,
    height: 24,
    marginBottom: 4,
    resizeMode: "contain",
  },
  navText: {
    fontSize: 12,
    color: "#787878",
  },
  navTextActive: {
    color: "#ff2e2a",
    fontWeight: "500",
  },

  // Notification Badge Styles
  notificationBadge: {
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: "#ff2e2a",
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  notificationBadgeText: {
    fontSize: 10,
    color: "#ffffff",
    fontWeight: "bold",
  },

  // Modal Styles
  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
    justifyContent: "center",
    alignItems: "center",
  },

  // Search Modal Styles
  searchModal: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    margin: 20,
    maxHeight: "80%",
    width: "90%",
  },
  searchHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  searchTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  closeButton: {
    padding: 8,
  },
  closeButtonText: {
    fontSize: 18,
    color: "#666666",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
    color: "#666666",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#1a1a1a",
  },
  searchResults: {
    maxHeight: 400,
  },
  searchResultItem: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  searchResultImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  searchResultInfo: {
    flex: 1,
  },
  searchResultTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  searchResultLocation: {
    fontSize: 12,
    color: "#666666",
    marginBottom: 2,
  },
  searchResultDate: {
    fontSize: 12,
    color: "#666666",
  },
  noResults: {
    padding: 40,
    alignItems: "center",
  },
  noResultsText: {
    fontSize: 16,
    color: "#666666",
  },

  // Notification Modal Styles
  notificationModal: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    margin: 20,
    maxHeight: "80%",
    width: "90%",
  },
  notificationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  notificationList: {
    maxHeight: 400,
  },
  notificationItem: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    alignItems: "center",
  },
  unreadNotification: {
    backgroundColor: "#f8f9ff",
  },
  notificationContent: {
    flex: 1,
  },
  notificationItemTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 13,
    color: "#666666",
    lineHeight: 18,
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: "#999999",
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ff2e2a",
    marginLeft: 8,
  },
})

export default styles
