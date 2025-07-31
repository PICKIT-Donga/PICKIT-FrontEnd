"use client"

import { useState } from "react"
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from "react-native"
import { modalStyles } from "./ModalStyles.js"

const SearchModal = ({ visible, onClose, searchData = [] }) => {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredResults = searchData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleClose = () => {
    setSearchQuery("")
    onClose()
  }

  if (!visible) return null

  return (
    <View style={modalStyles.modalOverlay}>
      <View style={modalStyles.searchModal}>
        <View style={modalStyles.searchHeader}>
          <Text style={modalStyles.searchTitle}>팝업스토어 검색</Text>
          <TouchableOpacity onPress={handleClose} style={modalStyles.closeButton}>
            <Text style={modalStyles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>
        <View style={modalStyles.searchInputContainer}>
          <Text style={modalStyles.searchIcon}>🔍</Text>
          <TextInput
            style={modalStyles.searchInput}
            placeholder="팝업스토어명 또는 지역을 검색하세요"
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoFocus
          />
        </View>
        <ScrollView style={modalStyles.searchResults}>
          {filteredResults.map((item) => (
            <TouchableOpacity key={item.id} style={modalStyles.searchResultItem}>
              <Image
                source={
                  item.image?.uri ? { uri: item.image.uri } : item.image || require("../../src/homesrc/poster1.png")
                }
                style={modalStyles.searchResultImage}
              />
              <View style={modalStyles.searchResultInfo}>
                <Text style={modalStyles.searchResultTitle}>{item.title}</Text>
                <Text style={modalStyles.searchResultLocation}>{item.location}</Text>
                <Text style={modalStyles.searchResultDate}>{item.date || `${item.startDate} - ${item.endDate}`}</Text>
              </View>
            </TouchableOpacity>
          ))}
          {searchQuery && filteredResults.length === 0 && (
            <View style={modalStyles.noResults}>
              <Text style={modalStyles.noResultsText}>검색 결과가 없습니다</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  )
}

export default SearchModal
