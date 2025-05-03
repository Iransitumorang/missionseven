import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getAllVideos = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const getVideoById = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
};

export const addVideo = async (video) => {
  const res = await axios.post(BASE_URL, video);
  return res.data;
};

export const updateVideo = async (id, updatedVideo) => {
  const res = await axios.put(`${BASE_URL}/${id}`, updatedVideo);
  return res.data;
};

export const deleteVideo = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
