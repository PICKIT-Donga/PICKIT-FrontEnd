import { View, Image, TouchableOpacity } from "react-native"
import { headerStyles } from "./HeaderStyles.js"

const PickItHeader = ({ onNotificationPress, onSearchPress, onLogoPress }) => {
  return (
    <View style={headerStyles.header}>
      <View style={headerStyles.headerContent}>
        <TouchableOpacity onPress={onLogoPress} activeOpacity={0.7}>
          <Image source={require("../src/common/pickitlogo.png")} style={headerStyles.logoImage} resizeMode="contain" />
        </TouchableOpacity>
        <View style={headerStyles.headerActions}>
          <TouchableOpacity style={headerStyles.iconButton} onPress={onNotificationPress} activeOpacity={0.7}>
            <Image source={require("../src/common/alramicon.png")} style={headerStyles.bell} />
          </TouchableOpacity>
          <TouchableOpacity style={headerStyles.iconButton} onPress={onSearchPress} activeOpacity={0.7}>
            <Image source={require("../src/common/searchicon.png")} style={headerStyles.search} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default PickItHeader
