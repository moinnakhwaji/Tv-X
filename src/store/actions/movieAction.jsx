export {removemovie} from "../reducers/movieSlice"
import axios from "../../utils/axios"
import {loadmovie} from "../reducers/movieSlice"

export const asyncLoad = (id) => async (dispatch, getState) => {
  try {
    const detailResponse = await axios.get(`/movie/${id}`);
    const externalidResponse = await axios.get(`/movie/${id}/external_ids`);
    const recommendationResponse = await axios.get(`/movie/${id}/recommendations`);
    const similarResponse = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchprovider = await axios.get(`/movie/${id}/watch/providers`);

    let thedetails = {
      detail: detailResponse.data,
      externalid: externalidResponse.data,
      recommendations: recommendationResponse.data.results,
      similar: similarResponse.data.results,
      videos: videos.data.results.find(m => m.type === 'Trailer'),
      videos2: videos.data.results,
      watchprovider: watchprovider.data.results.IN,
    };

    console.log("Details:", thedetails);

    dispatch(loadmovie(thedetails));
  } catch (error) {
    console.log("Error fetching movie details:", error);
  }
};



