import axios from "axios";

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmI3YjY4OTYxMjYyYWRlMDVkNDYzZTQ0ZjRmYzZjMiIsInN1YiI6IjY1ZTMzZjY5OWVlMGVmMDE4NTZmNmNkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V_Q8ddxp7IoRaRXTjpl0P-XWwbmKJ3pOCql1i351B5s'
      }
    
    
    
})
export default instance;