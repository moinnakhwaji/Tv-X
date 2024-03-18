export {removetv} from "../reducers/tvSlice"
import axios from "../../utils/axios"
import {loadtv} from "../reducers/tvSlice"
export const asyncLoad = (id) => async (dispatch, getState) => {
  try {
    const detailResponse = await axios.get(`/tv/${id}`);
    const externalidResponse = await axios.get(`/tv/${id}/external_ids`);
    const recommendationResponse = await axios.get(`/tv/${id}/recommendations`);
    const similarResponse = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchprovider = await axios.get(`/tv/${id}/watch/providers`);

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

    dispatch(loadtv(thedetails));
  } catch (error) {
    console.log("Error fetching tv details:", error);
  }
};

//In this code, I've added console logs to show the details object and any errors that might occur during he asynchronous operations. This should help you identify whether the details object is being populated correctly and whether any errors are occurring that prevent it from being logged.


