"use client"

import { useState } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { modalStyles } from "./ModalStyles.js"

const NotificationModal = ({ visible, onClose }) => {
  const [notifications] = useState([
    {
      id: 1,
      title: "새로운 팝업스토어가 등록되었습니다",
      message: "GS25 X 돈키호테 더현대서울점이 오픈했어요!",
      time: "2시간 전",
      isRead: false,
    },
    {
      id: 2,
      title: "관심 팝업스토어 마감 임박",
      message: "번개표 팝업스토어가 3일 후 마감됩니다.",
      time: "1일 전",
      isRead: false,
    },
    {
      id: 3,
      title: "새로운 지역에 팝업스토어 오픈",
      message: "부산 지역에 새로운 팝업스토어가 오픈했습니다.",
      time: "2일 전",
      isRead: true,
    },
  ])

  const markNotificationAsRead = (notificationId) => {
    console.log(`알림 ${notificationId} 읽음 처리됨`)
  }

  if (!visible) return null

  return (
    <View style={modalStyles.modalOverlay}>
      <View style={modalStyles.notificationModal}>
        <View style={modalStyles.notificationHeader}>
          <Text style={modalStyles.notificationTitle}>알림</Text>
          <TouchableOpacity onPress={onClose} style={modalStyles.closeButton}>
            <Text style={modalStyles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={modalStyles.notificationList}>
          {notifications.map((notification) => (
            <TouchableOpacity
              key={notification.id}
              style={[modalStyles.notificationItem, !notification.isRead && modalStyles.unreadNotification]}
              onPress={() => markNotificationAsRead(notification.id)}
            >
              <View style={modalStyles.notificationContent}>
                <Text style={modalStyles.notificationItemTitle}>{notification.title}</Text>
                <Text style={modalStyles.notificationMessage}>{notification.message}</Text>
                <Text style={modalStyles.notificationTime}>{notification.time}</Text>
              </View>
              {!notification.isRead && <View style={modalStyles.unreadDot} />}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default NotificationModal
