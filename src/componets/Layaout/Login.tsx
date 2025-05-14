import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormEvent, useState } from "react";
import { ProgressSpinner } from "primereact/progressspinner";

import { apiTiendita } from "../../services/apiTiendita";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const handlelogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await apiTiendita.post("user/login", {
        username,
        password,
      });
      setMessage(response.data.message);
      setMessageType("success");
      console.log("User", response.data.user);

      localStorage.setItem("username", username);

      setTimeout(() => {
        if (username) {
          const usuarioLogiado = localStorage.getItem("username") || "";
          if (usuarioLogiado === "") {
            navigate("/");
          } else {
            navigate("/home");
          }
        }
      }, 3000);
    } catch (error: any) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Error de conexión al servidor");
      }
      setMessageType("error");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-center h-screen bg-gray-500">
      <form onSubmit={handlelogin} className="bg-blue-400 p-25 rounded-xl">
        <h1 className="font-bold font-mono text-2xl">Inicia Sesión</h1>
        <Box
          className="flex flex-col text-white"
          component="form"
          sx={{ m: 5, width: "25ch", gap: 4 }}
          noValidate
          autoComplete="off"
        >
          <TextField
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="standard-basic"
            color="success"
            label="Usuario"
            variant="standard"
          />
          <TextField
            className="mt-5"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="standard-basic"
            color="success"
            label="Contraseña"
            variant="standard"
          />
        </Box>
        <button
          type="submit"
          className="bg-black text-white p-3 rounded-xl w-50 font-bold cursor-pointer hover:bg-gray-800"
        >
          Iniciar
        </button>
        {message && (
          <div>
            <p
              className={`font-semibold relative right-0.5 top-5 ${
                messageType === "error" ? "text-red-700" : "text-green-700"
              }`}
            >
              {message}
            </p>
            {messageType === "success" && (
              <div className="flex justify-center relative top-7">
                <ProgressSpinner style={{ width: "50px", height: "50px" }} />
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
