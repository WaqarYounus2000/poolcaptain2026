import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import InstagramGallery from "@/components/InstagramGallery";
import { products } from "@/data/products";
import "./page.css";

import FAQComponent from "@/components/FAQComponent";
import { poolchemicalsfaqs } from "@/data/poolchemicalsfaqs";

import { chemicalData } from "@/data/chemicalData";
import DetailsProducts from "@/components/DetailsProducts";

export default async function ProductDetail({ params }) {
  const resolvedParams = await params;
  const product = products.find(
    (item) => item.slug === resolvedParams.slug
  );



  const productData = Object.values(chemicalData).find(
    (item) => item.id === product.slug
  );

  if (!product) {
    return (
      <div className="notFound">
        <h1>Product Not Found</h1>
      </div>
    );
  }

  return (
    <main className="productPage">

      {/* ================= HERO ================= */}
      <section className="hero">

        <div className="heroBg">
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority
          />
          <div className="heroOverlay" />
        </div>

        <div className="heroInner">

          <div className="heroBadge">
            {product.category}
          </div>

          <h1>{product.heroTitle || product.title}</h1>

          <p>{product.heroDesc}</p>

          <div className="heroActions">
            <Link href="/contact" className="btnPrimary">
              Get Quote <FaArrowRight />
            </Link>

            <Link href="#details" className="btnGhost">
              Explore Details
            </Link>
          </div>

        </div>
      </section>

      {/* ================= QUICK HIGHLIGHTS ================= */}
      <section className="highlights">
        <div>
          <h4>Premium Grade</h4>
          <p>Industrial Quality Materials</p>
        </div>

        <div>
          <h4>Fast Delivery</h4>
          <p>Across Karachi</p>
        </div>

        <div>
          <h4>Expert Support</h4>
          <p>Installation Available</p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section id="details" className="content">

        <div className="sectionHeader">
          <h2>{product.title}</h2>
          <p>{product.shortDesc}</p>
        </div>

        {/* FEATURES */}
        <div className="cardBlock">
          <h3>Key Features</h3>

          <div className="grid">
            {product.features?.map((item, i) => (
              <div key={i} className="item">
                <FaCheckCircle />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SPECIFICATIONS */}
        <div className="cardBlock dark">
          <h3>Specifications</h3>

          <div className="grid">
            {product.specifications?.map((item, i) => (
              <div key={i} className="item">
                <FaCheckCircle />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BENEFITS */}
        <div className="cardBlock">
          <h3>Benefits</h3>

          <div className="grid">
            {product.benefits?.map((item, i) => (
              <div key={i} className="item">
                <FaCheckCircle />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* GALLERY */}
        <div className="gallerySection">
          <h3>Product Gallery</h3>

          <div className="gallery">
            {/* ================= GALLERY ================= */}
            <InstagramGallery
              images={product.gallery || []}
            />
          </div>
        </div>


        {/* //////////////////// details of products /////////////////////////////////*/}








        <div>
          <DetailsProducts data={productData} />
        </div>













        {/* CTA */}
        <div className="cta">
          <h2>Need Installation or Pricing?</h2>
          <p>Get expert consultation and best price in Karachi.</p>

          <Link href="/contact" className="ctaBtn">
            Contact Now <FaArrowRight />
          </Link>
        </div>
        {/* {console.log("service:", product.id)} */}
      </section>




      {/* ///////////////////// faqs //////////////////////////////// */}
      <FAQComponent faqs={poolchemicalsfaqs} />

    </main>
  );
}