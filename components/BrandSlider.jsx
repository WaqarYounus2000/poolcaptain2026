import Image from "next/image";
import styles from "../styles/BrandSlider.module.css";

const brands = [
  { name: "Minder", logo: "https://poolproducts.s3.ap-southeast-2.amazonaws.com/brandImages/minder-australia-pool-filters-and-pool-pumps.webp" },
  { name: "Astral", logo: "https://poolproducts.s3.ap-southeast-2.amazonaws.com/brandImages/astral-pool-equipment-accessories.webp" },
  { name: "Laswim", logo: "https://poolproducts.s3.ap-southeast-2.amazonaws.com/brandImages/laswim-pool-accessories-pool-filters-pumps-cleaning-accessories.webp" },
  { name: "Hayward", logo: "https://poolproducts.s3.ap-southeast-2.amazonaws.com/brandImages/Hayward_pool-products-and-accessories.webp" },
  { name: "FiveStar", logo: "https://poolproducts.s3.ap-southeast-2.amazonaws.com/brandImages/five-star-pool-products-and-equipments.webp" },
  { name: "Coates Heaters", logo: "https://poolproducts.s3.ap-southeast-2.amazonaws.com/brandImages/coates-water-pool-heater.webp" },
  { name: "Power World Heaters", logo: "https://poolproducts.s3.ap-southeast-2.amazonaws.com/brandImages/power_world_heat_pump-swimming-pool.webp" },
  { name: "Hariya", logo: "https://poolproducts.s3.ap-southeast-2.amazonaws.com/brandImages/hariya-steam-generators-sauna-room-accessories.webp" },
  { name: "Fanlan Sauna", logo: "https://poolproducts.s3.ap-southeast-2.amazonaws.com/brandImages/fanlan-sauna-generators-sauna-room-equipment-accessories.webp" },
];

export default function BrandSlider() {
  const sliderBrands = [...brands, ...brands];

  return (
    <section className={styles.brandSection}>
      <div className={styles.brandContent}>
        <span className={styles.badge}>Trusted Global Brands</span>

        <h3 className={styles.title}>
          Partnering with Industry-Leading Pool Equipment Manufacturers
        </h3>

        <p className={styles.description}>
          We supply genuine swimming pool equipment and accessories from
          internationally recognized brands known for performance,
          durability, energy efficiency, and long-term reliability.
          From residential pools to commercial aquatic facilities,
          our carefully selected partners help us deliver exceptional
          quality and lasting value to every project.
        </p>
      </div>

      <div className={styles.sliderWrapper}>
        <div className={styles.brandTrack}>
          {sliderBrands.map((brand, index) => (
            <div className={styles.brandItem} key={index}>
              <Image
                src={brand.logo}
                alt={brand.name}
                width={180}
                height={90}
                className={styles.logo}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}