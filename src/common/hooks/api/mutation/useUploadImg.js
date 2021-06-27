import axios from "axios";

const useUploadImg = () => {
  const upLoadfile = async (img) => {
    const form = new FormData();
    form.append("image", img);
    const { data } = await axios.post(
      "https://api.imgbb.com/1/upload?key=164107c247d7ad9d3c93d685037d3f4e",
      form,
      {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: false,
      }
    );
    return data?.data?.display_url;
  };
  return upLoadfile;
};
export default useUploadImg;
