// API 기본 설정
const BASE_URL = 'http://localhost:8080';

// API 호출 헬퍼 함수
const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // DELETE 요청의 경우 응답 본문이 없을 수 있음
    if (response.status === 204 || options.method === 'DELETE') {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// 팝업 관련 API
export const popupAPI = {
  // 팝업 저장
  savePopup: async (popupData) => {
    return await apiCall('/popups/save', {
      method: 'POST',
      body: JSON.stringify(popupData),
    });
  },

  // 팝업 ID로 조회
  getPopupById: async (id) => {
    return await apiCall(`/popups/${id}`);
  },

  // 모든 팝업 조회
  getAllPopups: async () => {
    return await apiCall('/popups/all');
  },

  // 지역별 팝업 조회
  getPopupsByAddress: async (address) => {
    return await apiCall(`/popups/address?address=${encodeURIComponent(address)}`);
  },
};

// 댓글 관련 API
export const commentAPI = {
  // 댓글 조회
  getComment: async (id) => {
    return await apiCall(`/comments/${id}`);
  },

  // 댓글 수정
  updateComment: async (id, commentData) => {
    return await apiCall(`/comments/${id}`, {
      method: 'PUT',
      body: JSON.stringify(commentData),
    });
  },

  // 댓글 삭제
  deleteComment: async (id) => {
    return await apiCall(`/comments/${id}`, {
      method: 'DELETE',
    });
  },

  // 전체 댓글 조회
  getAllComments: async () => {
    return await apiCall('/comments');
  },

  // 댓글 생성
  createComment: async (commentData) => {
    return await apiCall('/comments', {
      method: 'POST',
      body: JSON.stringify(commentData),
    });
  },
};

// 옵션 카운트 관련 API
export const optionAPI = {
  // 특정 팝업의 카테고리별 옵션 카운트 조회
  getOptionCounts: async (popupId, category) => {
    return await apiCall(`/popups/${popupId}/option-counts/${category}`);
  },
};