import banner1 from '../../assets/images/banners/banner-1.png'
import banner2 from '../../assets/images/banners/banner-2.png'
import banner3 from '../../assets/images/banners/banner-3.png'
import banner4 from '../../assets/images/banners/banner-4.png'
import banner5 from '../../assets/images/banners/banner-5.png'

function BannerSection() {
    return (
        <div className="px-5 mb-5 flex justify-around items-center h-[30vh]">
            <img src={banner1} alt={"Company Logo"}/>
            <img src={banner2} alt={"Company Logo"}/>
            <img src={banner3} alt={"Company Logo"}/>
            <img src={banner4} alt={"Company Logo"}/>
            <img src={banner5} alt={"Company Logo"}/>
        </div>
    )
}

export default BannerSection