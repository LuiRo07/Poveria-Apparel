import React from 'react';
import SectionTitle from '../UnitComponents/Title';
import blog1 from '../../assets/images/products/apparel/blog1.jpg'
import blog2 from '../../assets/images/products/apparel/blog2.jpg'
import blog3 from '../../assets/images/products/apparel/blog3.jpg'
import blog4 from '../../assets/images/products/apparel/blog4.jpg'


const products = [
    {
        imageDefault: blog1,
      },
      {
        imageDefault: blog2,
      },
      {
        imageDefault: blog3,
      },
      {
        imageDefault: blog4,
      },
]

function FromTheBlog() {
    return (
        <div className="mb-11">
            <SectionTitle title={'From The Blog'} />
            <div className="Carousel grid grid-cols-3 p-12 gap-12">
                <div className="Card-Wrapper">
                    <img src={products[0].imageDefault} />
                </div>
                <div className="Card-Wrapper">
                    <img src={products[1].imageDefault} />
                </div>
                <div className="Card-Wrapper">
                    <img src={products[2].imageDefault} />
                </div>
                <div className="Card-Wrapper">
                    <img src={products[3].imageDefault} />
                </div>
            </div>
        </div>
    )
}

export default FromTheBlog;

