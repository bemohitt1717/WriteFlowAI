import Header from "../Layouts/Header"
import HeroPage from "../Home/HeroPage/heroPage"
import Features from "../Home/features/Features"
import Reviews from "../Home/reviews/reviews"
import Pricing from "../Home/pricing/Pricing"
import Template from "../Home/templates/Template"
import CtaSection from "../Home/finalCTA/ctaSection"
import Blogs from "../Home/blog&docs/Blogs"
import Footer from "../Layouts/Footer"



export const HomeLayout = () => {
    return <>
    <Header />
      <HeroPage />
      <section id="features">
        <Features />
      </section>
      <Reviews />
      <section id="pricing">
      <Pricing />
      </section>
      <section id="template">
      <Template />
      </section>
      <CtaSection />
      <section id="blogs">
      <Blogs />
      </section>
      <Footer />
      </>
}