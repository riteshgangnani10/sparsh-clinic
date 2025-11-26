import api from './axios';

// Auth API
export const authAPI = {
  login: (credentials: { email: string; password: string }) =>
    api.post('/auth/login', credentials),
  getMe: () => api.get('/auth/me'),
  updatePassword: (data: { currentPassword: string; newPassword: string }) =>
    api.put('/auth/update-password', data),
};

// Services API
export const servicesAPI = {
  getAll: (params?: any) => api.get('/services', { params }),
  getBySlug: (slug: string) => api.get(`/services/${slug}`),
  create: (data: any) => api.post('/services', data),
  update: (id: string, data: any) => api.put(`/services/${id}`, data),
  delete: (id: string) => api.delete(`/services/${id}`),
  uploadImage: (id: string, formData: FormData) =>
    api.post(`/services/${id}/image`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};

// Testimonials API
export const testimonialsAPI = {
  getAll: (params?: any) => api.get('/testimonials', { params }),
  getById: (id: string) => api.get(`/testimonials/${id}`),
  create: (data: any) => api.post('/testimonials', data),
  update: (id: string, data: any) => api.put(`/testimonials/${id}`, data),
  delete: (id: string) => api.delete(`/testimonials/${id}`),
};

// Case Studies API
export const caseStudiesAPI = {
  getAll: (params?: any) => api.get('/case-studies', { params }),
  getBySlug: (slug: string) => api.get(`/case-studies/${slug}`),
  create: (data: any) => api.post('/case-studies', data),
  update: (id: string, data: any) => api.put(`/case-studies/${id}`, data),
  delete: (id: string) => api.delete(`/case-studies/${id}`),
  uploadImages: (id: string, formData: FormData) =>
    api.post(`/case-studies/${id}/images`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};

// Team API
export const teamAPI = {
  getAll: (params?: any) => api.get('/team', { params }),
  getById: (id: string) => api.get(`/team/${id}`),
  create: (data: any) => api.post('/team', data),
  update: (id: string, data: any) => api.put(`/team/${id}`, data),
  delete: (id: string) => api.delete(`/team/${id}`),
};

// Gallery API
export const galleryAPI = {
  getAll: (params?: any) => api.get('/gallery', { params }),
  getById: (id: string) => api.get(`/gallery/${id}`),
  upload: (formData: FormData) =>
    api.post('/gallery/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  uploadMultiple: (formData: FormData) =>
    api.post('/gallery/upload-multiple', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  update: (id: string, data: any) => api.put(`/gallery/${id}`, data),
  delete: (id: string) => api.delete(`/gallery/${id}`),
};

// Conditions API
export const conditionsAPI = {
  getAll: (params?: any) => api.get('/conditions', { params }),
  getBySlug: (slug: string) => api.get(`/conditions/${slug}`),
  create: (data: any) => api.post('/conditions', data),
  update: (id: string, data: any) => api.put(`/conditions/${id}`, data),
  delete: (id: string) => api.delete(`/conditions/${id}`),
};

// Resources API
export const resourcesAPI = {
  getAll: (params?: any) => api.get('/resources', { params }),
  getBySlug: (slug: string) => api.get(`/resources/${slug}`),
  create: (data: any) => api.post('/resources', data),
  update: (id: string, data: any) => api.put(`/resources/${id}`, data),
  delete: (id: string) => api.delete(`/resources/${id}`),
};

// Settings API
export const settingsAPI = {
  get: () => api.get('/settings'),
  update: (data: any) => api.put('/settings', data),
};

// Contact API
export const contactAPI = {
  submit: (data: any) => api.post('/contact', data),
  getAll: (params?: any) => api.get('/contact', { params }),
  getById: (id: string) => api.get(`/contact/${id}`),
  update: (id: string, data: any) => api.put(`/contact/${id}`, data),
  delete: (id: string) => api.delete(`/contact/${id}`),
};

