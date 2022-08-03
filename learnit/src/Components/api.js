import axios from "axios";

export const getComments = async () => {
  let comments=[]
  const response = await axios.get('http://localhost/Project9/learnit/backend/comments.php').then(res =>
  comments=res.data
  )
  return comments;
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
