import { Usuario } from "../entities/usuario";

export interface UsuarioRepository {
  getAllUsuarios(): Promise<Usuario[]>;
  login(username: string, password: string): Promise<Usuario | null>;
}
