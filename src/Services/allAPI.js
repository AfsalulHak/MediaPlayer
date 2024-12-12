import { data } from "react-router-dom";
import commonAPI from "./commonAPI";
import server_url from "./seviceUrl";

// api call for add videoDetails ,

export const addVideoAPI=async(video)=>{
    
    return await commonAPI("POST",`${server_url}/allVideos`,video)

}

//api call for get videos

export const getVideoAPI=async()=>{

    return await commonAPI("GET",`${server_url}/allVideos`,"")

}

//api call for delete video call
export const deleteVideoAPI=async(videoId)=>{

    return await commonAPI("DELETE",`${server_url}/allVideos/${videoId}`,{})

}

//api call for add videos into watch history
export const addWatchHistoryAPI=async(videoDetails)=>{

    return await commonAPI("POST",`${server_url}/wathHistory/`,videoDetails)

}

//api call for add video history into history table

export const getWatchHistoryAPI=async()=>{
    
    return await commonAPI("GET",`${server_url}/wathHistory/`,"")

}

//delete watch history Api
export const deleteHistoryAPI=async(videoId)=>{

    return await commonAPI("DELETE",`${server_url}/wathHistory/${videoId}`,{})

}

//api call for add catogory

export const addCategoryAPI=async(categoryDetails)=>{
    return await commonAPI("POST",`${server_url}/catogory`,categoryDetails)

}


//api call for FETCH/get all catogory
export const getCatogoryAPI=async()=>{
    
    return await commonAPI("GET",`${server_url}/catogory/`,"")

}

//api call for delete catogory list
export const deleteCatogoryAPI=async(categoryId)=>{

    return await commonAPI("DELETE",`${server_url}/catogory/${categoryId}`,{})

}

//
// api call for single api
export const getSingleVideoAPI =async(videoId)=>{
    return await commonAPI("GET",`${server_url}/allVideos/${videoId}`,"")
}
// update category

export const updateCategoryAPI = async (categoryId, categoryDetails) => {
    return await commonAPI("PUT", `${server_url}/catogory/${categoryId}`, categoryDetails);
};

// get single category api

export const getSingleCategoryAPI =async(categoryId)=>{
    return await commonAPI("GET",`${server_url}/catogory/${categoryId}`,"")
}

