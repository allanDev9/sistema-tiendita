import { UsuarioRepository } from "../../domain/repositories/usuarioRepository";
import { Usuario } from "../../domain/entities/usuario";
import { fetchUsuarios, loginUsuario } from "../api/usuarioApi";

export class UsuarioRepositoyImpl implements UsuarioRepository {
  async getAllUsuarios(): Promise<Usuario[]> {
    return await fetchUsuarios();
  }
  async login(username: string, password: string): Promise<Usuario | null> {
    return await loginUsuario(username, password);
  }
}
