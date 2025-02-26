'use client';
import brandsData from "./brandsData";
import { useEffect, useState } from "react";
import styles from "./Marquee.module.css";
import Image from "next/image";

const Brands = () => {
  const [repeatedBrands, setRepeatedBrands] = useState([]);

  useEffect(() => {
    setRepeatedBrands(Array(10).fill(brandsData).flat());
  }, []);
  return (
    <section className="pt-16">
      <div className="container">
        <div
          className={`${styles.marqueeContainer} bg-gradient-to-r from-fuchsia-500 to-cyan-500`}
        >
          <div className={styles.marqueeContent}>
            {repeatedBrands.map((brand, index) => (
              <span key={index} className={styles.marqueeItem}>
                <Image
                  src={brand.image}
                  alt="Brand Logo"
                  width={100}
                  height={100}
                  className={styles.brandImage}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

// const SingleBrand = ({ brand }: { brand: Brand }) => {
//   const { image, name } = brand;

//   return (
//     <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
//       <a
//         href={href}
//         target="_blank"
//         rel="nofollow noreferrer"
//         className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
//       >
//         <Image src={image} alt={name} fill />
//       </a>
//     </div>
//   );
// };
