import CategoryCard from "../UnitComponents/CategoryCard";
import category1 from "/assets/images/products/apparel/Cat-1-pro.jpg";
import category2 from "/assets/images/products/apparel/Cat-2-pro.jpg";
import category3 from "/assets/images/products/apparel/Cat-3-pro.jpg";

const products = [
  {
    name: "Women's Clothes",
    imageDefault: category1,
  },
  {
    name: "Women's Handbag",
    imageDefault: category2,
  },
  {
    name: "Women's Jeans",
    imageDefault: category3,
  },
];

function CategoryList() {
  return (
    <div className="mt-20 flex justify-center sm:grid-cols-2 md-grid-cols-3 gap-20 overflow-hidden">
      {products.map((product) => (
        <CategoryCard key={product.name} product={product} />
      ))}
    </div>
  );
}

export default CategoryList;
