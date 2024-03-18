export {removeperson}  from "../reducers/personSlice"
import axios from "../../utils/axios"
import { loadperson } from "../reducers/personSlice"
export const asyncLoad = (id) => async (dispatch, getState) => {
try {
    const detailResponse = await axios.get(`/person/${id}`);
    const externalidResponse = await axios.get(`/person/${id}/external_ids`);
    const combinedcredit = await axios.get(`/person/${id}/combined_credits`);
    const   moviecredit =    await axios.get(`/person/${id}/movie_credits`);
    const tvcredit  =  await axios.get(`/person/${id}tv_credits`);
  
    let thedetails = {
        detail: detailResponse.data,
        externalid: externalidResponse.data,
        combinedcredit: combinedcredit.data,
        moviecredit:moviecredit.data,
        tvcredit:tvcredit.data,
      
      };
console.log(thedetails)

dispatch(loadperson(thedetails));

} catch (error) {
  console.log(error)   
}
// combined_credits


}