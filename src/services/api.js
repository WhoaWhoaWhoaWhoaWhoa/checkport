import { API_BASE_URL } from '../utils/constants';

class ApiService {
  async request(url, options = {}) {
    try {
      const response = await fetch(`${API_BASE_URL}${url}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const text = await response.text();
      return text ? JSON.parse(text) : null;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async getFilials() {
    return this.request('/filial/');
  }

  async getMenu(filialId, params = {}) {
    const queryParams = new URLSearchParams({
      limit: '10',
      ...params,
    }).toString();
    
    return this.request(`/filial/${filialId}/menu/?${queryParams}`);
  }
}

export const apiService = new ApiService();