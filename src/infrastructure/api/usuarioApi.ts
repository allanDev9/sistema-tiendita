import { apiTiendita } from "../../services/apiTiendita";
import { Usuario } from "../../domain/entities/usuario";

export const fetchUsuarios = async (): Promise<Usuario[]> => {
  try {
    const response = await apiTiendita.get("user");
    return response.data;
  } catch (error) {
    console.log("Error al obtener los usuarios", error);
    return [];
  }
};

export const loginUsuario = async (
  username: string,
  password: string
): Promise<Usuario | null> => {
  try {
    const response = await apiTiendita.post<Usuario>("user/login", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.log("Error al iniciar sesion", error);
    return null;
  }
};
