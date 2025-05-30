import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useEffect, useState } from "react";
import "../../../styled/styles-page-home.css";
import "../../../styled/theme.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

import AnuncioImg from "../../../assets/Anuncio.png";
import Prodcutos1Img from "../../../assets/ProductosHome1.jpg";
import Prodcutos2Img from "../../../assets/ProductosHome2.webp";

import { apiTiendita } from "../../../services/apiTiendita";

const style = {
  position: "absolute",
  textAlign: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 500,
  bgcolor: "rgba(0, 0, 255, 0.5)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Home = () => {
  const UsersJSON = {
    name: "",
    username: "",
  };

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const [user, setUser] = useState(UsersJSON);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await apiTiendita.get(`user/${username}`);
        console.log("Usuarios recibidos:", response.data);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (username) {
      fetchUser();
    }
  }, [username]);

  const handleRedireccionProductos = () => {
    navigate("/productos");
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <section className="bg-black">
      <div className="grid grid-cols-5 grid-rows-5 gap-1 h-[100vh] p-5">
        <div className="row-span-5 border border-white bg-gray-600 rounded-xl">
          <img
            className="w-[100%] h-[94vh]"
            src={AnuncioImg}
            alt="Imagen del Anuncio"
          />
        </div>
        <div className="col-span-3 border border-white row-span-5 bg-gray-600 overflow-y-scroll diseño-scroll rounded-xl">
          <section className="flex flex-col justify-center items-center p-5 font-sans text-white">
            <div className="row-span-5 col-start-5 flex flex-row text-center fixed top-5 border-0 bg-blue-500 w-[57%] py-2 justify-center rounded-xl">
              <h1 className="font-mono text-yellow-300 font-bold relative left-19 top-2 text-2xl">
                Mi Tiendita
              </h1>
              <button
                onClick={handleRedireccionProductos}
                className="bg-black p-2 relative left-60 rounded-xl px-5"
              >
                Ir a la Tiendita
                <ArrowForwardIcon />
              </button>
            </div>
            <div className="self-start mt-20">
              <p className="text-blue-300 font-bold text-xl">
                ¡Bienvenidos a Tu Tiendita de Confianza!
              </p>
              <p>
                En nuestra tiendita encontrarás todo lo que necesitas para el
                hogar y el día a día: productos frescos, artículos de limpieza,
                snacks, bebidas, y mucho más. Nos enorgullece ofrecer atención
                cercana, buenos precios y un servicio rápido. Tu satisfacción es
                nuestra prioridad. ¡Gracias por apoyarnos y ser parte de nuestra
                comunidad!
              </p>
              <div className="grid grid-cols-2 gap-x-5 mt-10">
                <p>
                  <img
                    className="w-[100%] h-[100%]"
                    src={Prodcutos1Img}
                    alt="Imagen de producto 1"
                  />
                </p>
                <p>
                  <img src={Prodcutos2Img} alt="Imagen de producto 2" />
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="col-span-1 border border-white row-span-5 bg-gray-600 rounded-xl">
          <div className="flex flex-row font-extrabold justify-around mt-5 bg-blue-700 w-65 h-10 relative left-1.5 items-center">
            <div onClick={handleOpenModal}>
              <span className="text-yellow-300 cursor-pointer">
                Usuario: <span className="text-white">{username}</span>
              </span>
            </div>
            <div
              onClick={handleLogout}
              className="cursor cursor-pointer text-yellow-300 hover:text-white transition duration-300 ease-in-out"
            >
              <LogoutIcon />
            </div>
          </div>
        </div>
        <div>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <section id="modal-modal-title" style={{ color: "white" }}>
                <div className="flex flex-row relative left-77 bottom-3 bg-red-700 w-6 hover:bg-red-600">
                  <CloseIcon
                    className="cursor-pointer"
                    onClick={handleCloseModal}
                  />
                </div>
                <h1 className="text-yellow-300 font-bold">Datos del Usuario</h1>
              </section>
              <div className="border-1 border-b-white mt-5"></div>
              <section
                id="modal-modal-description"
                style={{
                  marginTop: 20,
                  textAlign: "start",
                  fontWeight: "bold",
                  color: "yellow",
                }}
              >
                <li className="flex flex-col">
                  <span>
                    Nombre: <span className="text-white">{user.name}</span>
                  </span>
                  <span>
                    Usuario: <span className="text-white">{user.username}</span>
                  </span>
                </li>
              </section>
            </Box>
          </Modal>
        </div>
      </div>
    </section>
  );
};
