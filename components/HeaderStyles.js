import { StyleSheet } from "react-native"

export const headerStyles = StyleSheet.create({
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
    marginLeft: 12,
  },
  bell: {
    width: 22,
    height: 22,
  },
  search: {
    width: 22,
    height: 22,
  },
})
