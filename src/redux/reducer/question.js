const initialState = {
    data: {},
    isLogin: false,
    isLoading: false,
    isError: false,
    msg: "",
  };
  
  const question = (state = initialState, action) => {
    switch (action.type) {
      case "GET_ALL_QUESTIONS_PENDING":
        return {
          ...state,
          isLogin: false,
          isLoading: true,
          isError: false,
        };
  
      case "GET_ALL_QUESTIONS_FULFILLED":
        return {
          ...state,
          isLogin: true,
          isLoading: false,
          isError: false,
          data: action.payload.data.data,
          msg: action.payload.data.msg,
        };
  
      case "GET_ALL_QUESTIONS_REJECTED":
        return {
          ...state,
          isLogin: false,
          isLoading: false,
          isError: true,
          msg: action.payload.response.data.msg,
        };
  
      case "CREATE_QUESTION_PENDING":
        return {
          ...state,
          isLogin: false,
          isLoading: true,
          isError: false,
        };
  
      case "CREATE_QUESTION_FULFILLED":
        return {
          ...state,
          isLogin: true,
          isLoading: false,
          isError: false,
          msg: action.payload.data.msg,
        };
  
      case "CREATE_QUESTION_REJECTED":
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
  
  export default question;