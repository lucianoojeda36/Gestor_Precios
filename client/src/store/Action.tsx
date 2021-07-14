import axios from "axios";
export const GET_PRECIOS_CODIGO: string = "GET_PRECIOS_CODIGO";
export const GET_PORCENTAJE = "GET_PORCENTAJE";
export const GET_PRODUCTO = "GET_PRODUCTO"
export const GET_HOME = "GET_HOME"


export const getProductByCodigo = (id: any) => {
  return function (dispatch: any) {
    axios
      .get(`http://localhost:4000/api/productos/${id}`)
      .then((producto: any) => { console.log("productos",producto)
        dispatch({ type: GET_PRECIOS_CODIGO, payload: producto.data });
      })
      .catch((err: string) => console.log(err));
  };
};

export const file_excel = (excell: any) => {
  return function () {console.log(excell,"==============pepe========>")
    axios.post(`http://localhost:4000/api/excell`,excell)
  };
};

export const home = () => {
  return function (dispatch: any) {
    axios
      .get('http://localhost:4000/')
      .then((element: any) => {
        dispatch({ type: GET_HOME, payload:element.data});
      })
      .catch((err: string) => console.log(err));
  };
};


export const getProducto = () => {
  return function (dispatch: any) {
    axios
      .get('http://localhost:4000/api/productos')
      .then((producto: any) => {console.log(producto)
        dispatch({ type: GET_PRODUCTO, payload:producto});
      })
      .catch((err: string) => console.log(err));
  };
};







export const getPorcentaje = (payload: any) => {
  return function (dispatch: any) {
    dispatch({ type: GET_PORCENTAJE, payload: payload });
  }
};
