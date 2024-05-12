import ImageSlider from './components/ImageSlider';
import FeaturedProductCards from './components/UnitComponents/CTA-Cards';
import CardProducts from './components/SectionComponents/OurProducts';
import QuoteSlider from './components/SectionComponents/QuoteSlider';
import CategoryList from './components/SectionComponents/CategoryList';
import FeaturedSection from './components/SectionComponents/Featured';

function App() {
  return (
    <div>
      <ImageSlider />
      <FeaturedProductCards />
      <CardProducts />
      <QuoteSlider />
      <CategoryList />
      <FeaturedSection />
    </div>
  )
}

export default App
