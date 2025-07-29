import { StyleSheet } from "react-native"

export const bottomNavStyles = StyleSheet.create({
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
})
