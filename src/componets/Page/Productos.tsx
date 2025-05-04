import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import type { ProductosType } from "../Interface/Types"
import type { ThemeProps } from "../Interface/Props"
import './style.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ProgressSpinner } from 'primereact/progressspinner';

const Productos = ({ theme }: ThemeProps) => {
    const navigate = useNavigate();

    const [producto, setProducto] = useState<ProductosType[]>([])
    const [searchProducto, setSearchProducto] = useState<string>('')
    const [filterProducto, setFilterProducto] = useState<ProductosType[]>(producto)
    const [loadProductos, setLoadProductos] = useState(false)

    useEffect(() => {
        const fetchingLProductos = async () => {
            try {
                setLoadProductos(true);
                await new Promise(resolve => setTimeout(resolve, 3000));

                const response = await fetch('https://dummyjson.com/products')
                const data = await response.json()
                setProducto(data.products)
                setFilterProducto(data.products)
                setLoadProductos(false);
            } catch (error) {
                console.error('Error al mostrar los productos', error)
            }
        }
        fetchingLProductos();
    }, [])

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchProducto = event.target.value.toLowerCase();
        setSearchProducto(searchProducto)

        const filteredProductos = producto.filter(producto => {
            return producto.title.toLowerCase().includes(searchProducto)
        })
        setFilterProducto(filteredProductos)
    }
    const handleBack = () => {
        navigate('/home')
    }

    return (
        <div className={`max-sm:grid max-sm:grid-cols-1 max-sm:place-items-center max-sm:mr-7`}>
            <div onClick={handleBack} className={`text-start cursor-pointer text-white hover:text-gray-300 relative top-7`}>
                <ArrowBackIcon sx={{ color: theme ? 'black' : 'white' }} />
            </div>
            <div className={`text-4xl font-extrabold ${theme ? 'text-blue-700' : 'text-yellow-300'}`}>
                Mi tiendita
            </div>
            <input
                className={`border mt-20 p-2 w-[280px] rounded-4xl max-sm:mr-0 ${theme ? 'border-black text-black' : 'border-gray-400 text-white'}`}
                type="text"
                placeholder="Buscar Producto..."
                value={searchProducto}
                onChange={handleSearchChange}
            />
            <div className="grid grid-cols-2 place-items-center">
                <section className="flex flex-col h-[80vh] gap-10 mt-10 snap-y max-sm:flex-col max-sm:h-[80vh] bg-gray-500 max-sm:m-h-[10vh] max-sm:w-[100%] rounded-xl max-w-[1000px] overflow-x-hidden overflow-y-auto p-10 max-sm:px-5 max-sm:py-5">
                    {loadProductos ? (
                        <div className="flex justify-center items-center w-75 mt-30">
                            <ProgressSpinner style={{ width: '50px', height: '50px' }} />
                        </div>
                    ) : (
                        filterProducto.length > 0 ? (
                            filterProducto.map((producto: ProductosType) => (
                                <li key={producto.id} className="max-sm:ml-4 list-none bg-gray-800 max-sm:w-[200px] w-[300px] h-[400px] flex flex-col items-center rounded-md text-white snap-center">
                                    <img
                                        src={producto.images}
                                        alt={producto.title}
                                        className="object-cover w-[298px] h-[26
                    80px] rounded-md bg-white" // Cambiado a object-contain
                                    />
                                    <div className="text-center p-5">
                                        <p className="font-bold">{producto.title}</p>
                                        <p className="font-bold">$ {producto.price}</p>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <p className="text-2xl text-white font-mono font-bold relative top-40 w-[290px]">No se encontraron caracteres</p>
                        )
                    )}
                </section>
                <section>
                    <div className="border-2 border-black w-[350px] h-[80vh] mt-10 bg-gray-400 rounded-xl">

                    </div>
                </section>
            </div>
        </div >
    )
}

export default Productos;