import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import './style.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export const Home = () => {
    const [open, setOpen] = useState(false);
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
        <section className='bg-black'>
            <div className="grid grid-cols-5 grid-rows-5 gap-1 h-[100vh] p-5">
                <div className="row-span-5 border border-white bg-gray-600 rounded-xl"></div>
                <div className="col-span-3 border border-white row-span-5 bg-gray-600 overflow-y-scroll diseño-scroll rounded-xl">
                    <section className='flex flex-col justify-center items-center p-5 font-sans text-white'>
                        <div className='flex flex-row text-center'>
                            <h1 className='font-mono text-yellow-300 font-bold relative left-19 top-2 text-2xl'>Mi Tiendita</h1>
                            <button onClick={handleRedireccionProductos} className='bg-black p-2 relative left-60 rounded-xl px-5'>Ir a la Tiendita<ArrowForwardIcon /></button>
                        </div>
                        <div className='self-start mt-5'>
                            <p>Esta es mi dienta en linea</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed velit est id blanditiis nulla fugiat delectus facere, dignissimos quae, a nesciunt architecto. Debitis amet perferendis vel nobis alias ea eaque.
                                Doloribus blanditiis ullam, sapiente deleniti numquam corporis, amet magni atque minima accusamus repudiandae asperiores possimus provident, tempora suscipit nostrum. Earum suscipit in maxime dolor voluptates amet ullam quas! Magni, laudantium!
                                Officiis veniam dignissimos veritatis odit dolores officia, ducimus perferendis, pariatur adipisci magni rem accusantium explicabo commodi voluptatum, amet maxime doloribus maiores nostrum ratione voluptatem blanditiis tempora delectus nihil! Suscipit, reiciendis?
                                Modi, ex eum! Laudantium voluptatibus voluptates maiores, assumenda dolor atque veniam esse alias incidunt fugiat iste vero veritatis enim. Rerum ratione numquam vitae assumenda at possimus molestiae quis quam ipsum!
                                Dolores quaerat molestias inventore quis illum aperiam expedita perferendis nulla quo eos corporis maxime nam, suscipit, debitis asperiores repellat eveniet fugit quos distinctio. Nihil possimus velit, accusamus deserunt eos ab.
                                Consequuntur quam alias eum provident reiciendis expedita dolore. Obcaecati iste animi quos neque dolore, porro molestias earum similique quibusdam ipsum aliquid. Minus eius sit vitae aspernatur fugit veritatis deserunt odio!
                                Temporibus consectetur hic, praesentium eaque reprehenderit odio libero nemo voluptas tempora rem tenetur, fugiat, a accusamus odit quisquam deserunt magnam dolores laboriosam sint. Accusantium ut aliquid quibusdam doloremque sunt pariatur!
                                Sit minima eius quae maiores aliquid similique exercitationem placeat officiis, sapiente beatae nesciunt labore veritatis, ducimus ipsum totam. Debitis ut repudiandae ipsa sapiente. Expedita corporis, deserunt laboriosam possimus illo ex.
                                Neque, iusto quod dolorem itaque iste sit distinctio nobis voluptatibus qui accusantium voluptas quis optio, perferendis delectus omnis voluptates laborum? Totam a ratione blanditiis necessitatibus pariatur nam enim asperiores dignissimos.
                                Iure aliquid vel expedita, recusandae laboriosam earum officia officiis, fugiat fugit architecto soluta? Eveniet porro dolor dicta, at saepe, eligendi dignissimos expedita enim nulla distinctio numquam quod praesentium! Dolore, temporibus.
                                Non optio ducimus ipsam, possimus accusamus cupiditate provident tempore repellat, quo neque ullam ab rem minima, nesciunt et omnis beatae quae reiciendis sunt eos quos odio veniam libero! Totam, nostrum!
                                Quasi laudantium harum fuga magnam molestias, dolor ratione atque ut a, laboriosam eum officia, quam nostrum enim incidunt voluptatum temporibus placeat maxime? Neque distinctio laudantium mollitia laboriosam natus, sunt corrupti.
                                Totam accusantium obcaecati velit laboriosam culpa dolorem dignissimos! Quisquam nulla expedita reprehenderit, at id veritatis quibusdam necessitatibus pariatur officia dolore tenetur magnam! Magni, aspernatur eaque! Perferendis sunt cupiditate itaque ratione.
                                Voluptate recusandae, laborum a dicta quod ipsum saepe at? Totam necessitatibus voluptates nulla culpa omnis assumenda, voluptas accusantium aperiam natus tenetur ad nihil repellendus quo provident, quod, delectus fuga fugiat.
                                Eveniet distinctio ullam in ratione minus voluptatibus saepe harum, reprehenderit officia alias placeat dolorum commodi, quia tenetur mollitia repellendus. Hic ab totam ut officia eveniet sed voluptatibus iste necessitatibus dolor!
                                Expedita cupiditate facilis inventore architecto nisi. Iure quibusdam aperiam maiores corporis ea laboriosam natus cumque at consequuntur voluptates non cum consequatur ex eveniet quis, voluptate deleniti molestiae praesentium! Fuga, doloremque.
                                Amet, deserunt eveniet quod tempora asperiores sint blanditiis ipsum illum beatae sunt voluptatibus, labore reiciendis sapiente eum praesentium nemo. Veniam sequi officiis beatae iure quibusdam corrupti dolorem perferendis voluptatum nisi.
                                Maiores dolorum harum pariatur maxime aliquam. Sed voluptatibus tempora quos magni ullam deleniti suscipit accusamus. Molestiae atque facere culpa, dicta expedita a harum omnis laboriosam suscipit dignissimos, consequuntur nam ea.
                                Voluptate ut corporis molestias, quam aliquam aspernatur cupiditate alias, nulla, quae commodi culpa? Amet id mollitia nihil reiciendis suscipit quos similique porro, corporis itaque fugiat aspernatur, accusantium tempore distinctio totam!
                                Maiores quaerat recusandae consequatur, aspernatur fugiat veniam dicta, voluptatibus debitis dolorem doloribus, eos voluptate incidunt quidem rem quas accusantium rerum? Molestias minima nulla eius molestiae ducimus. Iusto quo itaque commodi?
                                Consectetur, quae! Esse, aliquam officia accusamus dolorum necessitatibus porro odit commodi perferendis laborum quos. Illo, eius id. Iste commodi dolore id facilis esse ut nesciunt. Culpa magnam enim consequatur! Eum.
                                Neque nulla animi et. Quos porro facere aspernatur officia doloremque sit expedita consequatur, nobis architecto officiis, ut sed, atque dignissimos totam. Voluptates cumque nisi veritatis suscipit fuga rerum molestias ullam?
                                At consequuntur inventore quae quam harum exercitationem dolore laborum, veniam nesciunt autem dolorum voluptatem! Omnis praesentium, ullam, culpa commodi aspernatur numquam facere ex quam voluptates reprehenderit placeat. Aut, nemo doloribus?
                                Accusantium eaque repellendus quasi aut, minus nisi officia officiis tempore adipisci unde voluptate nihil ipsam deserunt nesciunt praesentium suscipit iste quo nostrum veritatis ratione delectus consequatur corporis optio. Velit, soluta?
                                Error omnis modi iure accusantium ratione iste maiores possimus, numquam dignissimos natus ad voluptatum consequuntur tenetur ducimus animi et quidem odio temporibus tempore autem? Est ipsa neque possimus error nihil.
                                Nostrum rem porro ex nesciunt! Maiores minus temporibus facilis eos tempore soluta ut ullam, iusto illo, iste autem sapiente. Quia eligendi incidunt velit similique aliquam, recusandae harum sed ullam accusamus?
                                Optio rerum dicta, dolorem minus nobis iure amet sapiente sed at, voluptatibus eligendi obcaecati, magnam fuga aut ipsum tempore! Nemo hic deleniti deserunt labore perferendis quis reprehenderit! A, impedit odit!
                                Unde, dolorum sed, nobis illo porro officia laudantium numquam quidem maiores minima voluptatibus libero quasi suscipit facere cupiditate placeat iste fuga voluptas reiciendis, explicabo expedita enim distinctio nisi! Sint, saepe?
                                Magni quo culpa vitae doloribus quos dolores neque dolorum minima repellendus ratione recusandae commodi nostrum excepturi quibusdam aliquid sunt accusantium quas aliquam iusto doloremque necessitatibus, blanditiis quidem facilis. Quisquam, ipsam.
                                Corrupti explicabo magnam amet eveniet facere, officia rem animi? Earum iure libero commodi, corrupti minus mollitia explicabo aperiam amet eligendi, deleniti cupiditate excepturi. Velit id voluptates corrupti aperiam, magni eos?
                                Similique quia voluptas consectetur quae itaque temporibus deleniti libero sunt placeat velit quam quis natus reiciendis nesciunt repellat, sequi voluptate deserunt odio accusamus dignissimos minima porro fuga exercitationem! Suscipit, consectetur.
                                Pariatur rem, debitis veniam dicta dolorem fugiat dolor odio nesciunt architecto at magnam illum, qui earum ea iure aliquid repellat vero modi aut obcaecati perferendis reprehenderit. Tempore ab animi beatae!
                                Vero rem asperiores aperiam! Quibusdam vitae numquam dolores odit omnis ullam, nihil, quas labore ipsum, aliquam ducimus! Sapiente sit labore necessitatibus quisquam voluptate minus dicta vitae. Nostrum totam consequatur temporibus.
                                Fuga reprehenderit expedita quidem repudiandae itaque blanditiis! Mollitia a neque ut, hic nostrum aspernatur dolorem adipisci quibusdam explicabo ab, fugiat alias officia incidunt corrupti nemo esse officiis eveniet inventore? Asperiores.
                                Reiciendis, voluptatibus. Laudantium nihil, debitis officia mollitia dolores quam in quia eum illo optio neque accusantium fuga. Assumenda doloribus omnis voluptate officiis, harum perferendis tempora, recusandae qui alias natus eos.
                                Quo blanditiis deleniti fugit est consequatur reprehenderit! Aliquid delectus rerum quae necessitatibus reiciendis aperiam architecto explicabo culpa similique! Illum ut dignissimos laborum fugiat aut. Odit reiciendis fuga recusandae omnis voluptates.
                                Nam voluptatibus molestiae mollitia unde asperiores, sit vel dolor dolore officia quos tenetur ut, deleniti perferendis! Odit culpa ipsum perferendis deleniti aperiam magnam nulla beatae tempore dolor repellendus, fuga nostrum.
                                Aliquid ratione rem ducimus culpa vel magni facilis quidem ipsum, quisquam nihil excepturi eius eaque minima optio molestias qui! Provident ipsum corrupti odio consectetur dicta deleniti amet asperiores sapiente delectus.
                                Voluptatem, minima expedita ex tempora, nemo, maiores laborum incidunt earum corporis temporibus sint optio. In soluta illo provident ea. Necessitatibus laborum repellat libero asperiores exercitationem porro nemo, alias esse labore!
                                Sed perspiciatis totam quidem exercitationem error inventore officiis, laboriosam molestias commodi aliquid dolore fuga veritatis, eaque recusandae porro, quae magni doloribus! Soluta obcaecati quos ea cupiditate quam vitae dignissimos doloribus?
                                Repellendus quam aliquid impedit voluptatum rerum, sunt vel consectetur aperiam quasi natus minus animi eligendi tenetur nesciunt dicta. Placeat adipisci incidunt numquam dolore illum fuga quam itaque, deserunt ab rem.
                                Beatae porro, officiis expedita itaque vero qui asperiores animi cum debitis ipsa aperiam esse facilis, maxime consectetur iste laudantium delectus illo sunt temporibus vitae iure nemo placeat atque! In, corrupti.
                                Officia voluptate accusantium rerum tempora eum dolorum assumenda possimus distinctio ratione quod enim laboriosam odio sint, impedit, voluptates eveniet dicta explicabo repudiandae illo molestiae eligendi? Minima nihil maiores nostrum hic.
                                Nam quisquam asperiores, delectus inventore nulla iusto laudantium alias optio perspiciatis eveniet ipsam consectetur nobis corrupti, excepturi, amet accusamus aut totam labore dolorum obcaecati. Corporis necessitatibus voluptatibus modi odio quis.
                                Nam sed dolorum dolore, facilis facere illo sint corporis ipsam perferendis, molestiae omnis reiciendis, deleniti libero optio? Animi iste maiores esse, autem reprehenderit nostrum itaque omnis repellat nihil dolores minus?
                                Sint id laborum reiciendis voluptas quam quis eum facere iure, distinctio omnis at quos commodi eius provident aliquid hic assumenda obcaecati minima, ea nam et, nostrum quae dolorem? Libero, quo.
                                Itaque reiciendis sint corrupti nostrum sunt aspernatur animi iusto atque molestias recusandae, nam asperiores? Aliquam, pariatur. Tenetur reprehenderit exercitationem obcaecati quia modi, facilis earum iste, fugiat tempore quam fugit nulla?
                                Sed tempore eveniet nemo quasi aperiam pariatur nostrum fugiat ut nihil, corrupti non ad porro delectus culpa at illum repellendus dolores repellat voluptatibus! Quo, amet! Impedit autem aspernatur repellendus in?
                                Fugit eius commodi alias impedit sequi, possimus nemo quasi libero quam vel, architecto, in dicta? Ipsam dolore at dignissimos modi nostrum, nobis rerum consequatur amet assumenda reprehenderit, non accusamus pariatur?
                                Impedit dolor, nisi ad dignissimos quas est obcaecati autem assumenda tenetur veritatis. Veniam quos iusto illum, fuga facilis amet ab dicta tempora suscipit, doloremque qui est porro odit? Consectetur, laudantium?</p>
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