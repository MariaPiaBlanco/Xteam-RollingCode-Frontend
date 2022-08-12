import jwtDecode from 'jwt-decode';

export const tokenInvalid = ()=>{
    let response = {}
    let token = localStorage.getItem('token');
    if(!token){
      response = {invalidToken: true, msg:"Debes iniciar sesión para publicar un comentario"}
      return response;
    }
    let decodedToken = jwtDecode(token);
    let dateNow = new Date();
    let dateToken = new Date(decodedToken.exp*1000);
    // console.log('Exp token')
    // console.log(dateToken);
    // console.log('Now')
    // console.log(dateNow);
    // console.log('Comparison')
    // console.log(dateToken < dateNow)
    if(dateToken > dateNow){
      response = {invalidToken: false, idUser: decodedToken.id, token}
      return response;
    } else{
      response = {invalidToken: true, msg:"Su sesión ha expirado. Por favor inicie sesión nuevamente para hacer un comentario"}
      return response;
    }
  }