import Category1 from '../../assets/images/products/apparel/Cat-1-pro.jpg'
import Category2 from '../../assets/images/products/apparel/Cat-2-pro.jpg'
import Category3 from '../../assets/images/products/apparel/Cat-3-pro.jpg'

function CategoryList() {
    return (
        <div className="flex justify-center gap-9 my-9 px-10">
            <div>
                <img src={Category1} alt="Woman in orange top"></img>
            </div>
            <div>
                <img src={Category2} alt="orange purse"></img>
            </div>
            <div>
                <img src={Category3} alt="Woman in jeans"></img>
            </div>
        </div>
    )
}

export default CategoryList;