import memojiAvatar1 from "@assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@assets/images/memoji-avatar-4.png";
import { HeaderSection } from "@/components/HeaderSection";
import Image from "next/image";

const testimonials = [
  {
    name: "Kwabena Obeng",
    position: "AI/ML LEAD",
    org: "Phrontlyne Technologies Limited",
    text: "Abdul-Aziz demonstrates solid software engineering fundamentals and a practical understanding of applied AI. From discussions around his projects, his use of LLM APIs shows good judgment and a focus on real-world product value.",
    avatar: memojiAvatar2,
    ringColor: "ring-blue-500/70 hover:ring-blue-400",
  },
  {
    name: "Jonathan Mensah",
    position: "Software Engineering",
    org: "KNUST E-Learning Center",
    text: "Working with Abdul-Aziz at the KNUST E-Learning Center has been a positive experience. He is highly dedicated and consistently goes the extra mile to deliver strong prototypes under tight timelines. Abdul-Aziz asks thoughtful, technically grounded questions that improve the overall quality of our work. He is fast-learning, effective, and dependable when it comes to building and delivering projects.",
    avatar: memojiAvatar4,
    ringColor: "ring-purple-500/70 hover:ring-purple-400",
  },
  {
    name: "Issifu Fatimata",
    position: "IT Consultant",
    org: "",
    text: "Abdul-Aziz demonstrates strong full-stack development skills and a solid understanding of modern web and mobile technologies. From reviewing his projects and technical approach, it's clear he can design and implement complete solutions using React, Django, and related tools. His work reflects good structure, practical problem-solving, and attention to maintainability.",
    avatar: memojiAvatar1,
    ringColor: "ring-amber-500/70 hover:ring-amber-400",
  },
  {
    name: "Sibdou Issifu",
    position: "Program Manager",
    org: "GeekByte",
    text: "Abdul-Aziz served as the Python Instructor for the GeekByte Python Track, where he demonstrated strong technical expertise and clear teaching methods. He consistently simplified complex programming concepts, making them accessible to beginners, and actively supported learners through practical exercises and mentorship. His reliability, collaborative approach, and passion for tech education contributed significantly to the success of the Python cohort.",
    avatar: memojiAvatar3,
    ringColor: "ring-emerald-500/70 hover:ring-emerald-400",
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

        {/* Testimonial Cards Grid */}
        <div className="mt-12 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group bg-gray-800 rounded-3xl p-6 md:p-8 flex flex-col min-h-[280px] hover:bg-gray-800/80 hover:-translate-y-px transition-all duration-150 ease-out"
            >
              {/* Subtle quote accent at top */}
              <div className="mb-4">
                <svg
                  className="w-6 h-6 text-white/20 group-hover:text-white/30 transition-colors duration-150"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote - Primary element, flex-grow to push identity down */}
              <div className="flex-1">
                <p className="text-base text-white/80 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>


              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/5">
                <div className={`size-10 flex-shrink-0 rounded-full bg-gray-900 ring-2 ${testimonial.ringColor} flex items-center justify-center overflow-hidden transition-all duration-150 ease-out group-hover:scale-110`}>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="size-8 object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-white/40 mt-0.5">
                    {testimonial.position}
                    {testimonial.org && ` · ${testimonial.org}`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
