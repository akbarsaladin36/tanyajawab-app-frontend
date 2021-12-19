import axiosApiIntances from "../../utils/axios";

export const allQuestions = (data) => {
  return {
    type: "GET_ALL_QUESTIONS",
    payload: axiosApiIntances.get("question", data),
  };
};

export const createQuestion = (data) => {
  return {
    type: "CREATE_QUESTION",
    payload: axiosApiIntances.post("question", data),
  };
};