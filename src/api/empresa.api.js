import axios from "axios";

export const getEmpresasRequest = async () =>
    await axios.get("http://localhost:5000/empresas");

export const crearEmpresaRequest = async (empresa) => {
  return await axios.post('http://localhost:5000/empresas', empresa);
}

export const deleteEmpresaRequest = async (id_empresa) =>
    await axios.delete(`http://localhost:5000/empresas/${id_empresa}`);

export const getEmpresaRequest = async (id_empresa) => 
    await axios.get(`http://localhost:5000/empresas/${id_empresa}`);

export const updateEmpresaRequest = async (id_empresa, nuevoCampo) => 
    await axios.put(`http://localhost:5000/empresas/${id_empresa}`, nuevoCampo);
    

/*export const crearEmpresaRequest = async (empresa) => {
  // Verificación de contraseña antes de enviar al servidor
  if (!verificarContrasenia(empresa.contrasenia)) {
    // La contraseña no cumple con los criterios, puedes manejar esto según tus necesidades
    throw new Error('La contraseña no cumple con los requisitos');
  }

  // La contraseña cumple con los criterios, puedes continuar con la solicitud al servidor
  return await axios.post('http://localhost:5000/empresas', empresa);


  const response = await axios.post(`${}/login`, {
      nit,
      contrasenia,
    });

    //http://localhost:5000

//await axios.post('http://localhost:5000/empresas', empresa);
    /*if (!verificarContrasenia(empresa.contrasenia)) {
    throw new Error('La contraseña no cumple con los requisitos');
  }

  const verificarContrasenia = (contrasenia) => {
  const longitudMinima = contrasenia.length >= 8;
  const tieneMayuscula = /[A-Z]/.test(contrasenia);
  const tieneNumero = /\d/.test(contrasenia);

  return longitudMinima && tieneMayuscula && tieneNumero;
};
export const verificarInicioDeSesionEmpresa = async (nit, contrasenia) =>{
    try {
      const response = await axios.post(`http://localhost:5000/login`, {
        nit,
        contrasenia,
      });
    
    console.log(response.data); 
    return response.status === 200;
  } catch (error) {
    console.error('Error al verificar inicio de sesión: (verificarInicioDeSesionEmpresa)', error);
    return false;
  }
}
  
};*/