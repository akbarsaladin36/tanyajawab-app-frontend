import axiosApiIntances from "../../utils/axios";

export const getAllAnswer = (id, data) => {
    return {
        type: "GET_ALL_ANSWERS",
        payload: axiosApiIntances.get(`answer/question/${id}`, data),
    };
};