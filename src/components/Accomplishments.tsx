import { Swiper, SwiperSlide } from "swiper/react";
import da_img from "../assets/images/da_img.jpg";
import data_lab_img from "../assets/images/ds_img.png";
import cs_bike_share from '../assets/images/cs_bike_share.png';
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useState } from "react";
import ImageModal from "./ImageModal";
const Accomplishments = () => {
  const accomplishments = [
   
    {
      img: da_img,
      name: "Google Data Analytics Specialization",
      link: "https://www.coursera.org/account/accomplishments/specialization/NCVK7ZBMMR9E",
    },
    {
      img: cs_bike_share,
      name: "Case Study: Bike-Share",
      link: "https://docs.google.com/presentation/d/10XJFSffJlDVmQjNAPQAyTnOtQSbvLoaDqldelCS514g/edit?usp=sharing",
    },
    {
      img: data_lab_img,
      name: "Web App: Data Lab",
      link: "https://github.com/ikramullahasakzai/datalab.git",
    },
  ];

  const [imageUrl, setImageUrl] = useState("");
  return (
    <section id="accomplishments">
      <div className="flex justify-center mt-16 text-4xl font-semibold gap-2">
        <h3 className="text-cyan-600">Accomplishments</h3>
      </div>
      <br />

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{ 768: { slidesPerView: 2 } }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay]}
        className="flex max-w-3xl gap-6 mb-8 px-5 mx-auto items-center justify-center lg:w-2/3 w-full"
      >
        {accomplishments?.map((certificate) => (
          <SwiperSlide
            key={certificate.link}
            className="h-fit w-full p-4 bg-slate-700 rounded-xl"
          >
            <div className="w-62 h-52">
              <img
                onClick={() => setImageUrl(certificate.img)}
                src={certificate.img}
                alt=""
                className="rounded-lg w-full h-full object-cover "
              />
            </div>
            <h3 className="text-md font-medium truncate my-4">{certificate.name}</h3>
            <div className="flex md:flex-row  flex-col items-center justify-center gap-3">
              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 font bg-gray-800 rounded-full px-2 mb-4 py-1 flex w-32 justify-center"
              >
                Verify
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {imageUrl && <ImageModal imageUrl={imageUrl} setImageUrl={setImageUrl} />}
    </section>
  );
};

export default Accomplishments;
