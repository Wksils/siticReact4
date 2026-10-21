import classes from './section6Style.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Photo } from '../../Photo';

export default function Section6(){
    const brands = [
        {photo:Photo.brand1, text:"“Your one stop solution to feeling energised and focused.”"},
        {photo:Photo.brand2, text:"“A revelation. Not just about looking better and feeling better. LYMA is about real health benefits.”"},
        {photo:Photo.brand3, text:"“Experts are queuing up to praise LYMA.”"},
        {photo:Photo.brand4, text:"“The A-list secret health hack.”"},
        {photo:Photo.brand5, text:"“The celebrity super supplement.”"},
        {photo:Photo.brand6, text:"“The new standard in supplements.”"},
        {photo:Photo.brand7, text:"“A massive scientific breakthrough.”"},
        {photo:Photo.brand8, text:"“A pioneer in health and wellness.”"},
        {photo:Photo.brand9, text:"“Miracle pills. The days of taking a cocktail of hit and miss vitamins are over.”"}
    ];
    return(
        <>
            <section className={classes.section6}>
                <div className={classes.container}>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        centeredSlides={true}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className={classes.mySwiper}
                    >
                        {brands.map((i, index) => (
                            <SwiperSlide key={index}>
                                <div className={classes.brand}>
                                    <p>{i.text}</p>
                                    <img src={i.photo} alt="" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}