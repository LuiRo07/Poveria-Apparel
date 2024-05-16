import { Fragment } from 'react';
import category1 from '../../assets/images/products/apparel/Cat-1-pro.jpg'
import category2 from '../../assets/images/products/apparel/Cat-2-pro.jpg'
import category3 from '../../assets/images/products/apparel/Cat-3-pro.jpg'

const images = [
    {   id: 1,
        imageSource: category1,
        alternativeText: 'Woman in orange top'
    },
    {
        id: 2,
        imageSource: category2,
        alternativeText: 'orange purse'
    },
    {   id: 3,
        imageSource: category3,
        alternativeText: 'Woman in jeans'
    }
]

const backgroundDiv1 = {
    backgroundImage: `url(${category1})`,
}

const backgroundDiv2 = {
    backgroundImage: `url(${category2})`,
}

const backgroundDiv3 = {
    backgroundImage: `url(${category3})`,
}


function handleHover() {

}

function Image({imageSource, alternativeText }) {
    return (
        <img src={imageSource} 
        alt={alternativeText}
        />
    )
}

function CategoryList() {
    return (
        <div className="my-10 h-[50vh] grid grid-cols-3 p-7 gap-24">
            <div style={backgroundDiv1} className="h-full bg-transparent bg-no-repeat bg-cover bg-center flex justify-center items-center group">
                <div className="group-hover:visible group-hover:transition-all hidden p-2 bg-slate-50/40">
                    <h2>Women's Clothes</h2>
                    <h3 className="underline ">Shop Now</h3>
                </div>
            </div>
            <div>
                <div style={backgroundDiv2} className="h-full bg-transparent bg-no-repeat bg-cover bg-center flex justify-center items-center group">
                    <div className="group-hover:visible group-hover:transition-all hidden p-2 bg-slate-50/40">
                        <h2>Women's Handbag</h2>
                        <h3>Shop Now</h3>
                    </div>
                </div>
            </div>
            <div>
                <div style={backgroundDiv3} className="h-full bg-transparent bg-no-repeat bg-cover bg-center flex justify-center items-center group">
                    <div className="group-hover:visible group-hover:transition-all hidden p-2 bg-slate-50/40">
                        <h2>Women's Jeans</h2>
                        <h3>Shop Now</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

{/* <Image imageSource={category1} alternativeText={"Woman in orange top"} /> */}
{/* <Image imageSource={category2} alternativeText={"Orange Purse"} />
<Image imageSource={category3} alternativeText={"Woman in jeans"} />  */}

export default CategoryList;