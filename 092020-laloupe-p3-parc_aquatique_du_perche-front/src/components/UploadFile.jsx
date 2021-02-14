// import React, { useState } from "react";
// import axios from "axios"
// const API__URL = process.env.REACT_APP_API_URL;

// function UploadFile() {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const onChangeHandle = (event) => {
//     console.log(event.target.files);
//     setSelectedFile(event.target.files[0]);
//   };

//   const onClickHandle = () => {
//     console.log("file send");
//     if (
//       selectedFile.type !== "image/jpeg" &&
//       selectedFile.type !== "image/jpg" &&
//       selectedFile.type !== "image/png"
//     ) {
//       alert("Only jpeg, jpg and png allowed");
//     } else {
//       const data = new FormData();
//       data.append("file", selectedFile);
//       console.table("form: ", data.get("file"));
//       axios.post(`${API_URL}/api/upload`, data)
//       .then(res => res.data)
//       .then(res => {
//     console.log(res);  
//       })
//       .catch(err => {
//         alert(err);
//       })
//     }
//   };

//   return (
//     <form>
//       <input
//         type="file"
//         name="file"
//         accept="image/*"
//         onChange={onChangeHandle}
//       />
//       <button type="button" onClick={onClickHandle}>
//         Upload
//       </button>
//     </form>
//   );
// }

// export default UploadFile;
