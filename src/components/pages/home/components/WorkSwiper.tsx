"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import LinkBtn from "@/components/ui/LinkBtn";
// import { PROJECTS } from "@/lib/constants";
import WorkCard from "./WorkCard";
// import { getProjects } from "@/lib/api/projects";
import { Project } from "@/lib/types/projects-types";

const WorkSwiper = ({
  lang,
  projects,
}: {
  lang: string;
  projects?: Project[];
}) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-10">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Navigation]}
          navigation={true}
          className="mySwiper w-full py-5! px-10! md:px-30!"
          slidesPerView={1}
          breakpoints={{
            0: {
              spaceBetween: 50,
            },
            768: {
              spaceBetween: 80,
            },
            1024: {
              spaceBetween: 150,
            },
          }}
        >
          {projects &&
            projects.map((project) => (
              <SwiperSlide className="text-center" key={project._id}>
                <WorkCard
                  image={project.image.url}
                  logoSrc={project.logo.url}
                  title={project.title}
                  description={project.shortDescription}
                  href={project.slug}
                  lang={lang}
                />
              </SwiperSlide>
            ))}
        </Swiper>

        <LinkBtn
          lang={lang}
          href="/works"
          bg="bg-[#259CCB]"
          label={{ ar: "عرض الكل", en: "View All" }}
        />
      </div>
    </div>
  );
};

export default WorkSwiper;
