import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import './style.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './colors.css';

const style = {
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    backgroundColor: '#31b3e0'
};

type ThemeProps = {
    theme: boolean
}

export const Home = ({ theme }: ThemeProps) => {
    const [open, setOpen] = useState(false);
    const ThemeMode = localStorage.getItem('theme') === 'dark' || 'light';
    const navigate = useNavigate();
    const username = localStorage.getItem('username') || '';

    const handleRedireccionProductos = () => {
        navigate('/productos')
    }

    const handleLogout = () => {
        localStorage.removeItem('username')
        navigate('/login')
    }

    const handleOpenModal = () => {
        setOpen(true);
    }
    const handleCloseModal = () => {
        setOpen(false)
    }

    return (
        <section className={`${theme ? 'light' : 'dark'}`}>
            <div className="grid grid-cols-5 grid-rows-5 gap-1 h-[100vh] p-5">
                <div className="row-span-5 border border-white bg-gray-600 rounded-xl"></div>
                <div className="col-span-3 border border-white row-span-5 bg-gray-600 overflow-y-scroll diseño-scroll rounded-xl">
                    <section className='flex flex-col justify-center items-center p-5 font-sans text-white'>
                        <div className='row-span-5 col-start-5 flex flex-row text-center fixed top-5 border-0 bg-blue-500 w-[57%] py-2 justify-center rounded-xl'>
                            <h1 className='font-mono text-yellow-300 font-bold relative left-19 top-2 text-2xl'>Mi Tiendita</h1>
                            <button onClick={handleRedireccionProductos} className='bg-black p-2 relative left-60 rounded-xl px-5'>Ir a la Tiendita<ArrowForwardIcon /></button>
                        </div>
                        <div className='self-start mt-20'>
                            <p>Esta es mi dienta en linea</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed velit est id blanditiis nulla fugiat delectus facere, dignissimos quae, a nesciunt architecto. Debitis amet perferendis vel nobis alias ea eaque.
                                Doloribus blanditiis ullam, sapiente deleniti numquam corporis, amet magni atque minima accusamus repudiandae asperiores possimus provident, tempora suscipit nostrum. Earum suscipit in maxime dolor voluptates amet ullam quas! Magni, laudantium!
                                Officiis veniam dignissimos veritatis odit dolores officia, ducimus perferendis, pariatur adipisci magni rem accusantium explicabo commodi voluptatum, amet maxime doloribus maiores nostrum ratione voluptatem blanditiis tempora delectus nihil! Suscipit, reiciendis?
                                Modi, ex eum! Laudantium voluptatibus voluptates maiores, assumenda dolor atque veniam esse alias incidunt fugiat iste vero veritatis enim. Rerum ratione numquam vitae assumenda at possimus molestiae quis quam ipsum!
                                Doloribus blanditiis ullam, sapiente deleniti numquam corporis, amet magni atque minima accusamus repudiandae asperiores possimus provident, tempora suscipit nostrum. Earum suscipit in maxime dolor voluptates amet ullam quas! Magni, laudantium!
                                Officiis veniam dignissimos veritatis odit dolores officia, ducimus perferendis, pariatur adipisci magni rem accusantium explicabo commodi voluptatum, amet maxime doloribus maiores nostrum ratione voluptatem blanditiis tempora delectus nihil! Suscipit, reiciendis?
                                Modi, ex eum! Laudantium voluptatibus voluptates maiores, assumenda dolor atque veniam esse alias incidunt fugiat iste vero veritatis enim. Rerum ratione numquam vitae assumenda at possimus molestiae quis quam ipsum!
                                Doloribus blanditiis ullam, sapiente deleniti numquam corporis, amet magni atque minima accusamus repudiandae asperiores possimus provident, tempora suscipit nostrum. Earum suscipit in maxime dolor voluptates amet ullam quas! Magni, laudantium!
                                Officiis veniam dignissimos veritatis odit dolores officia, ducimus perferendis, pariatur adipisci magni rem accusantium explicabo commodi voluptatum, amet maxime doloribus maiores nostrum ratione voluptatem blanditiis tempora delectus nihil! Suscipit, reiciendis?
                                Modi, ex eum! Laudantium voluptatibus voluptates maiores, assumenda dolor atque veniam esse alias incidunt fugiat iste vero veritatis enim. Rerum ratione numquam vitae assumenda at possimus molestiae quis quam ipsum!
                            </p>
                        </div>
                    </section>
                </div>
                <div className="col-span-1 border border-white row-span-5 bg-gray-600 rounded-xl">
                    <div className='flex flex-row font-extrabold justify-around mt-5 bg-blue-700 w-65 h-10 relative left-1.5 items-center'>
                        <div onClick={handleOpenModal}>
                            <span className='text-yellow-300 cursor-pointer'>Usuario: <span className='text-white'>{username}</span></span>
                        </div>
                        <div onClick={handleLogout} className='cursor cursor-pointer text-yellow-300 hover:text-white transition duration-300 ease-in-out'>
                            <LogoutIcon />
                        </div>
                    </div>
                </div>
                <div>
                    <Modal
                        open={open}
                        onClose={handleCloseModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: 'white' }}>
                                <span className='text-black'>Perfil:</span> {username}
                            </Typography>
                            <div className='border-1 border-b-black mt-5'></div>
                            <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'start' }}>
                                Datos del usuario...
                            </Typography>
                        </Box>
                    </Modal>
                </div>
            </div>
        </section>
    )
}