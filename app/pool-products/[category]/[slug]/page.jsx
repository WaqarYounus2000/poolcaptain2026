import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import InstagramGallery from "@/components/InstagramGallery";
import "./page.css";

import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";

import FAQComponent from "@/components/FAQComponent";
import { poolchemicalsfaqs } from "@/data/poolchemicalsfaqs";
import DetailsProducts from "@/components/DetailsProducts";

// ================= SEO METADATA =================
export async function generateMetadata({ params }) {
  const { slug } = await params;

  await connectDB();

  const product = await Product.findOne({ slug }).lean();

  return {
    title: `${product?.title || ""} ${product?.seoDesc || ""}`,
    description: product?.seoDesc || "",
    keywords: product?.keywords?.join(", ") || "",
  };
}

// ================= PAGE =================
export default async function ProductDetail({ params }) {
  const { slug } = await params;

  await connectDB();

  // ✅ fetch from MongoDB (MAIN SOURCE)
  const product = await Product.findOne({ slug }).lean();

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

          <p>{product.heroDesc || product.shortDesc}</p>

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
        {product.features?.length > 0 && (
          <div className="cardBlock">
            <h3>Key Features</h3>
            <div className="grid">
              {product.features.map((item, i) => (
                <div key={i} className="item">
                  <FaCheckCircle />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SPECIFICATIONS */}
        {product.specifications?.length > 0 && (
          <div className="cardBlock dark">
            <h3>Specifications</h3>
            <div className="grid">
              {product.specifications.map((item, i) => (
                <div key={i} className="item">
                  <FaCheckCircle />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BENEFITS */}
        {product.benefits?.length > 0 && (
          <div className="cardBlock">
            <h3>Benefits</h3>
            <div className="grid">
              {product.benefits.map((item, i) => (
                <div key={i} className="item">
                  <FaCheckCircle />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GALLERY */}
        {product.gallery?.length > 0 && (
          <div className="gallerySection">
            <h3>Product Gallery</h3>

            <InstagramGallery images={product.gallery} />
          </div>
        )}



        {/* OPTIONAL EXTRA DETAILS COMPONENT */} 
        {/* <DetailsProducts data={product} /> */}





        {/* CTA */}
        <div className="cta">
          <h2>Need Installation or Pricing?</h2>
          <p>Get expert consultation and best price in Karachi.</p>

          <Link href="/contact" className="ctaBtn">
            Contact Now <FaArrowRight />
          </Link>
        </div>

      </section>

      {/* FAQ */}
      <FAQComponent faqs={poolchemicalsfaqs} />

    </main>
  );
}