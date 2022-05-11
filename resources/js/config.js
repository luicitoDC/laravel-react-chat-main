export default {
  baseUrl: 'http://localhost:8000/api',
  axiosConfig: {
    validateStatus: function (status) {
      return true
    },
  }
}