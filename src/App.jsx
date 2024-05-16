import NavBar from './components/SectionComponents/NavBar';
import ImageSlider from './components/ImageSlider';
import FeaturedProductCards from './components/UnitComponents/CTA-Cards';
import CardProducts from './components/SectionComponents/OurProducts';
import QuoteSlider from './components/SectionComponents/QuoteSlider';
import CategoryList from './components/SectionComponents/CategoryList';
import FeaturedSection from './components/SectionComponents/Featured';
import FromTheBlog from './components/SectionComponents/FromTheBlog';
import BannerSection from './components/SectionComponents/BannerSection';
import Footer from './components/SectionComponents/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <ImageSlider />
      <FeaturedProductCards />
      <CardProducts />
      <QuoteSlider />
      <CategoryList />
      <FeaturedSection />
      <FromTheBlog />
      <BannerSection />
      <Footer />
    </div>
  )
}

export default App
