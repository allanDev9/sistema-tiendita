import { useEffect, useState } from 'react';
import Productos from './Productos';
import './colors.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

const ProductosPage = () => {
    const [theme, setTheme] = useState<boolean>(() => {
        const saveTheme = localStorage.getItem('theme');
        return saveTheme === 'light' || saveTheme === 'dark';
    });

    useEffect(() => {
        const saveTheme = localStorage.getItem('theme');
        if (saveTheme === 'light') {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
            setTheme(true);
        } else {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            setTheme(false);
        }
    }, []);

    const handletoggleMode = () => {
        const newMode = theme ? 'dark' : 'light';
        setTheme(!theme);

        document.body.classList.toggle('dark-theme', newMode === 'dark');
        document.body.classList.toggle('light-theme', newMode === 'light');

        localStorage.setItem('theme', newMode);
    };

    return (
        <div className={`flex justify-center flex-row p-10 max-sm:p-5 text-center h-full ${theme ? 'light-theme' : 'dark-theme'}`}>
            <div className='flex'>
                <button
                    className={`text-black h-[53px] w-[55px] rounded-4xl relative left-209 max-sm:left-80 max-sm:w-[40px] max-sm:h-[41px] transition duration-300 ease-in-out ${theme ? 'bg-black text-white hover:bg-gray-800 border border-black' : 'bg-white text-black hover:bg-gray-200'}`}
                    onClick={handletoggleMode}
                >
                    {theme ? <NightlightRoundIcon /> : <WbSunnyIcon />}
                </button>
            </div>

            <Productos theme={theme} />
        </div>
    );
}

export default ProductosPage;