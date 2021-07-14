import {
    GET_PRECIOS_CODIGO,GET_PORCENTAJE,GET_PRODUCTO,GET_HOME
  } from "./Action";
  
  var initialState = {
    product: [],
    porcentaje: 0,
    element:''
  };
  
  const productReducer = (state = initialState, action:any) => {
    switch (action.type) {
     
      case GET_PRECIOS_CODIGO:
        return {
          ...state,
          product: action.payload,
        };
        case GET_PORCENTAJE:
        return {
          ...state,
          porcentaje: action.payload,
        };
        case GET_PRODUCTO:
        return {
          ...state,
          product: action.payload,
        };
        case GET_HOME:
        return {
          ...state,
          element: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;