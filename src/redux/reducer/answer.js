const initialState = {
    data: [],
    dataOneAnswer: [],
    isLogin: false,
    isLoading: false,
    isError: false,
    msg: "",
};

const answer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_ALL_ANSWERS_PENDING":
        return {
          ...state,
          isLogin: false,
          isLoading: true,
          isError: false,
        };
  
      case "GET_ALL_ANSWERS_FULFILLED":
        return {
          ...state,
          isLogin: true,
          isLoading: false,
          isError: false,
          data: action.payload.data.data,
          msg: action.payload.data.msg,
        };
  
      case "GET_ALL_ANSWERS_REJECTED":
        return {
          ...state,
          isLogin: false,
          isLoading: false,
          isError: true,
          msg: action.payload.response.data.msg,
        };

        case "CREATE_ANSWER_PENDING":
          return {
            ...state,
            isLogin: false,
            isLoading: true,
            isError: false,
          };
    
        case "CREATE_ANSWER_FULFILLED":
          return {
            ...state,
            isLogin: true,
            isLoading: false,
            isError: false,
            data: action.payload.data.data,
            msg: action.payload.data.msg,
          };
    
        case "CREATE_ANSWER_REJECTED":
          return {
            ...state,
            isLogin: false,
            isLoading: false,
            isError: true,
            msg: action.payload.response.data.msg,
          };
    
  
      default:
        return state;
    }
  };

export default answer;