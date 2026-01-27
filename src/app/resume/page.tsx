"use client";

import GrainImage from "@/assets/images/grain.jpg";

const ResumePage = () => {
  const downloadPDF = () => {
    const pdfUrl = '/Ziblim Abdul-Aziz-Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Ziblim Abdul-Aziz-Resume';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-950 py-20 relative z-0">
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${GrainImage.src})` }}
      />

      <div className="container max-w-3xl mx-auto px-6">
        {/* Header */}
        <header className="mb-16">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide mb-4">
            Abdul-Aziz Ziblim
          </h1>
          <p className="text-white/60 text-lg mb-6">
            Full-Stack Developer & Mobile Engineer
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/50">
            <span>Kumasi, Ghana</span>
            <span className="hidden sm:inline">•</span>
            <span>(+233) 550562665</span>
            <span className="hidden sm:inline">•</span>
            <a href="mailto:azizmeltzer@gmail.com" className="hover:text-white transition-colors">
              azizmeltzer@gmail.com
            </a>
          </div>
          <div className="flex gap-4 mt-4 text-sm">
            <a
              href="http://www.linkedin.com/in/azizjibril"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/aaziblim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-12">
          <p className="text-white/70 leading-relaxed">
            Full-stack developer and Industrial Engineering graduate with expertise in building
            production-ready web and mobile applications. Skilled in React, Next.js, React Native,
            Python, and Django with a focus on real-time systems and AI integration. Proven ability
            to lead projects from concept to deployment while delivering measurable user impact.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-white/40 mb-6">
            Experience
          </h2>

          <div className="space-y-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="font-medium text-white">Software & IT Support</h3>
                <span className="text-sm text-white/40">Jan 2025 – Present</span>
              </div>
              <p className="text-white/50 text-sm mb-3">KNUST E-learning Center</p>
              <ul className="text-white/60 text-sm space-y-2">
                <li>Developing ACE IT, an AI-powered mobile learning app using React Native and Expo, targeting KNUST&apos;s 60,000+ student population</li>
                <li>Integrated Google Gemini AI to auto-generate personalized courses and flashcards, reducing study prep time by an estimated 60%</li>
                <li>Providing technical support for e-learning platforms serving 10,000+ students across campus</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="font-medium text-white">R&D and Engineering Design Intern</h3>
                <span className="text-sm text-white/40">Oct – Nov 2024</span>
              </div>
              <p className="text-white/50 text-sm mb-3">IMHO Limited</p>
              <ul className="text-white/60 text-sm space-y-2">
                <li>Led a cross-functional team of 6 engineers in designing and fabricating a mobile molten metal pouring system, improving production efficiency</li>
                <li>Created system requirements documentation and technical specifications for manufacturing processes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-white/40 mb-6">
            Education
          </h2>

          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h3 className="font-medium text-white">B.Eng Industrial Engineering</h3>
              <span className="text-sm text-white/40">Sept 2020 – 2025 (Graduated)</span>
            </div>
            <p className="text-white/50 text-sm">
              Kwame Nkrumah University of Science and Technology, Kumasi
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-white/40 mb-6">
            Projects
          </h2>

          <div className="space-y-6">
            <div className="group">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-medium text-white group-hover:text-emerald-300 transition-colors">
                  Spherespace
                </h3>
                <a
                  href="https://github.com/aaziblim/spaceSphere-hangout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/40 hover:text-white transition-colors"
                >
                  View ↗
                </a>
              </div>
              <p className="text-white/50 text-sm mb-2">React · Django · WebSockets · PostgreSQL · Redis</p>
              <p className="text-white/60 text-sm">
                Architected and built a full-stack real-time social platform featuring live video streaming, WebSocket-powered instant messaging, and gamification (achievements, streaks). Implemented user engagement features that drive daily active usage.
              </p>
            </div>

            <div className="group">
              <div className="flex items-baseline justify-between mb-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-white group-hover:text-emerald-300 transition-colors">
                    ACE IT - AI Learning Assistant
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-white/10 text-white/60 rounded-full border border-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-2.5"
                    >
                      <path fillRule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z" clipRule="evenodd" />
                    </svg>
                    Private
                  </span>
                </div>
                <a
                  href="https://drive.google.com/file/d/1MWoaVTanJlVGbApranXWrs7Zuh_7TpUN/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/40 hover:text-white transition-colors"
                >
                  Demo ↗
                </a>
              </div>
              <p className="text-white/50 text-sm mb-2">React Native · Expo · Supabase · TypeScript · Google Gemini</p>
              <p className="text-white/60 text-sm">
                Developing an AI learning assistant for KNUST&apos;s 60,000+ students that auto-generates courses and flashcards using Google Gemini API. Features personalized study plans and progress tracking, designed to reduce study prep time by 60%.
              </p>
            </div>

            <div className="group">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-medium text-white group-hover:text-emerald-300 transition-colors">
                  Developer Portfolio
                </h3>
                <a
                  href="https://github.com/aaziblim/new-portfolio-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/40 hover:text-white transition-colors"
                >
                  View ↗
                </a>
              </div>
              <p className="text-white/50 text-sm mb-2">Next.js 14 · TypeScript · Tailwind CSS</p>
              <p className="text-white/60 text-sm">
                Designed and developed a responsive portfolio using Next.js 14 App Router with server components, achieving 95+ Lighthouse performance score and optimized SEO.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-white/40 mb-6">
            Skills
          </h2>

          <div className="text-white/60 text-sm leading-relaxed">
            <p className="mb-2">
              <span className="text-white/40">Languages:</span>{" "}
              Python, TypeScript, JavaScript, HTML, CSS
            </p>
            <p className="mb-2">
              <span className="text-white/40">Frameworks:</span>{" "}
              Django, FastAPI, React Native, Expo, Next.js, Tailwind CSS
            </p>
            <p className="mb-2">
              <span className="text-white/40">Data & ML:</span>{" "}
              Pandas, NumPy, Scikit-learn, TensorFlow
            </p>
            <p>
              <span className="text-white/40">Tools:</span>{" "}
              Docker, Git, Vercel
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-white/40 mb-6">
            Certifications
          </h2>

          <ul className="text-white/60 text-sm space-y-2">
            <li>Python Programming & Intro to Machine Learning — Kaggle</li>
            <li>Data Analysis with Python — freeCodeCamp</li>
            <li>Machine Learning Specialization — Coursera</li>
          </ul>
        </section>

        {/* Footer Actions */}
        <footer className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <a
            href="/"
            className="text-sm text-white/50 hover:text-white transition-colors inline-flex items-center gap-2"
          >
            ← Back to Home
          </a>

          <button
            onClick={downloadPDF}
            className="text-sm text-white/50 hover:text-white transition-colors inline-flex items-center gap-2"
          >
            Download PDF ↓
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ResumePage;