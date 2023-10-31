


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Banner = () => {


    useEffect(() => {
        Aos.init({
            duration: 1000,
        })
    }, [])
    return (
        <div className='h-screen'>
            <Swiper pagination={true} modules={[Pagination]} className='h-screen' >
                <SwiperSlide className='' >

                    <div className=''>
                        <img data-aos="fade-right" data-aos-delay="200" className='md:object-cover w-full h-full md:object-center ' src="https://demo.fieldthemes.com/bookshop/demo10/modules/revsliderprestashop/uploads/slider1-h10.jpg" alt="banner 01" />
                        <div className='relative -top-80  -right-[700px]' data-aos="fade-up" data-aos-delay="100">
                            <span className='text-5xl font-bold'>Grontho Bilash</span>
                            <p className='max-w-xl py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae dicta et debitis laudantium, at maxime.</p>
                            <button data-aos="fade-up" data-aos-delay="200" className='border my-4 hover:bg-[#11B8B4] rounded px-6 py-2 text-black hover:text-white transition p-1'>Shop Now</button>


                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://demo.fieldthemes.com/bookshop/demo10/modules/revsliderprestashop/uploads/slider2-h10.jpg" alt="banner 01" />
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>

            </Swiper>

        </div >
    );
};

export default Banner;