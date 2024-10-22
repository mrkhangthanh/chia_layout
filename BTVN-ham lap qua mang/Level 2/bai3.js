// Gom các object của posts thành mảng posts
// const topics = [
//   {
//     topic: "ReactJS",
//     posts: [
//       { postID: "id1", title: "title1" },
//       { postID: "id2", title: "title2" },
//     ],
//   },
//   {
//     topic: "Vue.js",
//     posts: [
//       { postID: "id3", title: "title3" },
//       { postID: "id4", title: "title4" },
//     ],
//   },
// ];

const topics = [
    {
      topic: "ReactJS",
      posts: [
        { postID: "id1", title: "title1" },
        { postID: "id2", title: "title2" },
      ],
    },
    {
      topic: "Vue.js",
      posts: [
        { postID: "id3", title: "title3" },
        { postID: "id4", title: "title4" },
      ],
    },
  ];
  
  const ketQua = topics.reduce((pre, curr) => {
    return pre.concat(curr.posts); 
  }, []);
  
  console.log(ketQua);
  
