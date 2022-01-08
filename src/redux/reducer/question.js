const initialState = {
    data: [],
    dataOneQuestion: [],
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

        case "GET_ONE_QUESTION_PENDING":
          return {
            ...state,
            isLogin: false,
            isLoading: true,
            isError: false,
          };
    
        case "GET_ONE_QUESTION_FULFILLED":
          return {
            ...state,
            isLogin: true,
            isLoading: false,
            isError: false,
            dataOneQuestion: action.payload.data.data[0],
            msg: action.payload.data.msg,
          };
    
        case "GET_ONE_QUESTION_REJECTED":
          return {
            ...state,
            isLogin: false,
            isLoading: false,
            isError: true,
            msg: action.payload.response.data.msg,
          };

        case "GET_ALL_QUESTIONS_BY_USER_ID_PENDING":
            return {
              ...state,
              isLogin: false,
              isLoading: true,
              isError: false,
            };
      
        case "GET_ALL_QUESTIONS_BY_USER_ID_FULFILLED":
            return {
              ...state,
              isLogin: true,
              isLoading: false,
              isError: false,
              data: action.payload.data.data,
              msg: action.payload.data.msg,
            };
      
      case "GET_ALL_QUESTIONS_BY_USER_ID_REJECTED":
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