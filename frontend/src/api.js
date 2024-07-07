// import axios from 'axios';
// import jwtDecode from 'jwt-decode';
// import { useNavigate } from 'react-router-dom';

// const api = axios.create({
//     baseURL: "http://localhost:8000",
// })

// const navigate = useNavigate();

// const refreshAccessToken = async () => {
//   const localRefreshToken = localStorage.getItem("NoteAppRefreshToken");
//   if (!localRefreshToken) {
//     alert("There is No Refresh Token")
//     navigate('/login', { replace: true });
//   }
//   const decodedToken = jwtDecode(localRefreshToken);
//         if (decodedToken.exp < Date.now() / 1000) {
//             alert("Token is Expired")
//             navigate('/login', { replace: true });
//         }
//   try {
//     const response = await api.post("/api/token/refresh/", {
//       refresh: localRefreshToken,
//     });
//     if (response.status === 200) {
//       const newAccessToken = response.data.access;
//       localStorage.setItem("NoteAppAccessToken", newAccessToken);
//       localStorage.setItem("NoteAppRefreshToken", newRefreshToken);
//       return newAccessToken;
//     } else {
//       throw new Error(`Failed to refresh token: ${response.status}`);
//     }
//   } catch (error) {
//     console.error(error);
//     throw error; // re-throw the error
//   }
// };

// api.interceptors.request.use(
//     (config) => {
//       const token = localStorage.getItem('NoteAppAccessToken');
//       if (token) {
//         const decodedToken = jwtDecode(token);
//         if (decodedToken.exp < Date.now() / 1000) {
//           console.log("token is expired");
//           // Refresh the token and retry the request
//           return refreshAccessToken().then((newToken) => {
//             config.headers['Authorization'] = `Bearer ${newToken}`;
//             return config;
//           });
//         } else {
//           console.log("token is valid");
//           config.headers['Authorization'] = `Bearer ${token}`;
//           return config;
//         }
//       } else {
//         console.log("token is invalid");
//         // Return an error or handle the case where there's no token
//         navigate('/login', { replace: true });
//       }
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );