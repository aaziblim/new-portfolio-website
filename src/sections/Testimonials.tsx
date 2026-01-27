import memojiAvatar1 from "@assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@assets/images/memoji-avatar-5.png";
import { HeaderSection } from "@/components/HeaderSection";
import Image from "next/image";
import GrainImage from "@assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Kwabena Obeng",
    position: "AI/ML LEAD @ Phrontlyne Technologies Limited",
    text: "Abdul-Aziz demonstrates solid software engineering fundamentals and a practical understanding of applied AI. From discussions around his projects, his use of LLM APIs shows good judgment and a focus on real-world product value.",
    avatar: memojiAvatar2,
  },
  {
    name: "Jonathan Mensah",
    position: "Software Engineering @ KNUST E-Learning Center",
    text: "Working with Abdul-Aziz at the KNUST E-Learning Center has been a positive experience. He is highly dedicated and consistently goes the extra mile to deliver strong prototypes under tight timelines. Abdul-Aziz asks thoughtful, technically grounded questions that improve the overall quality of our work. He is fast-learning, effective, and dependable when it comes to building and delivering projects.",
    avatar: memojiAvatar4,
  },
  {
    name: "Issifu Fatimata",
    position: "IT Consultant",
    text: "Abdul-Aziz demonstrates strong full-stack development skills and a solid understanding of modern web and mobile technologies. From reviewing his projects and technical approach, it’s clear he can design and implement complete solutions using React, Django, and related tools. His work reflects good structure, practical problem-solving, and attention to maintainability.",
    avatar: memojiAvatar1,
  },

  {
    name: "Sibdou Issifu",
    position: "Program Manager @ GeekByte",
    text: "Abdul-Aziz served as the Python Instructor for the GeekByte Python Track, where he demonstrated strong technical expertise and clear teaching methods. He consistently simplified complex programming concepts, making them accessible to beginners, and actively supported learners through practical exercises and mentorship. His reliability, collaborative approach, and passion for tech education contributed significantly to the success of the Python cohort.",
    avatar: memojiAvatar3,
  },

];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <HeaderSection
          title="Great Collaborations"
          eyebrow="What Colleagues Say About Me"
          description="Peer feedback from academic and personal projects"
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none animate-move-left py-4 [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={`${idx}-${testimonial.name}`}
                    className="max-w-xs p-6 md:p-8 md:max-w-md hover:rotate-3 transition duration-300 flex-shrink-0"
                  >
                    <div className="flex items-center gap-4 ">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm mt-4 md:mt-6 md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>))}
          </div>
        </div>
      </div>
    </div>
  );
};
