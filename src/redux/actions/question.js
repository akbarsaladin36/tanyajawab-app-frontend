import axiosApiIntances from "../../utils/axios";

export const allQuestions = (data) => {
  return {
    type: "GET_ALL_QUESTIONS",
    payload: axiosApiIntances.get("question", data),
  };
};

export const oneQuestion = (id) => {
  return {
    type: "GET_ONE_QUESTION",
    payload: axiosApiIntances.get(`question/${id}`),
  };
}

export const allQuestionsByUserId = (id) => {
  return {
    type: "GET_ALL_QUESTIONS_BY_USER_ID",
    payload: axiosApiIntances.get(`question/all-questions/${id}`),
  }
}

export const createQuestion = (data) => {
  return {
    type: "CREATE_QUESTION",
    payload: axiosApiIntances.post("question", data),
  };
};