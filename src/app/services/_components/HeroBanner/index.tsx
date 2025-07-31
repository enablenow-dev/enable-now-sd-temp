
import { FunctionComponent } from "react";
import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";

type HeroBannerProps = {
  heroImage: string;
  title: string;
  subTitle: string;
  textColor?: string;
};

const HeroBanner: FunctionComponent<HeroBannerProps> = ({
  heroImage,
  title,
  subTitle,
  textColor = 'text-white'
}) => {
  return (
    <>
      <div
        className={`relative pt-[50px] md:pt-[80px] lg:pt-[80px] xl:pt-[100px] pb-[55px] bg-no-repeat bg-cover bg-center h-[650px]`}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute top-0 left-0 bg-gray-800/70 w-full h-full bg-contain"> </div>
        <div className="container lg:max-w-[1500px] mx-auto z-auto">
          <div className="grid place-items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 h-full">
            <div className="text-center relative xl:mt-28 sm:mt-20 lg:mt-20 md:mt-20 2xl:mt-20">
              <h1
                className={`${textColor} text-[30px] md:text-[40px] lg:text-[39px] xl:text-[45px] 2xl:text-[50px] leading-[40px] md:leading-[50px] lg:leading-[45px] xl:leading-[55px] 2xl:leading-[60px] font-semibold mb-[10px] sm:mb-[10px]`}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                {title}
              </h1>

              <p
                className={`${textColor} text-[30px] md:text-[18px] mb-[30px] md:mb-[45px] lg:mb-[30px] xl:mb-[45px] leading-[28px]`}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
                style={{fontSize : '25px'}}
              >
                {subTitle}
              </p>

              <Link
              href="/contact-us/"
              className="bg-[#007ba8] text-white text-[14px] font-medium inline-block uppercase rounded-full py-[15px] px-[38px] transition duration-500 ease-in-out hover:text-[15px]"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              let’s talk{" "}
              <ArrowRight2
                className="inline-block relative -top-[2px]"
                size={20}
              />
            </Link>

              
            </div>

          
          </div>
        </div>
        </div>
    </>
  );
};

export default HeroBanner;
