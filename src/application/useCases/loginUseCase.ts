import { Usuario } from "../../domain/entities/usuario";
import { UsuarioRepository } from "../../domain/repositories/usuarioRepository";

export class LoginUseCase {
  //Recibe una instancia del repositorio que implementa UsuarioRepository
  constructor(private readonly usuarioRepo: UsuarioRepository) {}

  //se ejectura el caso de uso: Ininicar sesion
  async execute(username: string, password: string): Promise<Usuario> {
    const usuario = await this.usuarioRepo.login(username, password);

    if (!usuario) {
      throw new Error("Credenciales incorrectas");
    }

    localStorage.setItem("username", usuario.username);
    return usuario;
  }
}
