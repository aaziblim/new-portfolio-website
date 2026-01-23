"use client";

import GrainImage from "@/assets/images/grain.jpg";

const ResumePage = () => {
  const downloadPDF = () => {
    const pdfUrl = '/Abdul-Aziz-Ziblim-Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Abdul-Aziz-Ziblim-Resume.pdf';
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
            Industrial Engineering Student & Developer
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
            Industrial Engineering student with hands-on experience in Python programming,
            data analysis, machine learning, and cloud computing basics. Passionate about
            solving complex problems through innovative technology solutions and building
            a career in cloud computing, machine learning, and IT consultancy.
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
                <h3 className="font-medium text-white">R&D and Engineering Design Intern</h3>
                <span className="text-sm text-white/40">Oct – Nov 2024</span>
              </div>
              <p className="text-white/50 text-sm mb-3">IMHO Limited</p>
              <ul className="text-white/60 text-sm space-y-2">
                <li>Led a team of six in the design and fabrication of a mobile molten metal pouring system</li>
                <li>Managed IT-based tasks, including system requirements documentation</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="font-medium text-white">Media Chairperson</h3>
                <span className="text-sm text-white/40">2022 – 2024</span>
              </div>
              <p className="text-white/50 text-sm mb-3">Campus Association</p>
              <p className="text-white/60 text-sm">
                Led the IT & Media department, orchestrating technological and media related endeavors
              </p>
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
              <span className="text-sm text-white/40">Sept 2020 - Sept 2025</span>
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
                Real-time social platform with live streaming, chat, gamification, and creator analytics.
              </p>
            </div>

            <div className="group">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-medium text-white group-hover:text-emerald-300 transition-colors">
                  Social Media Platform
                </h3>
                <a
                  href="https://github.com/aaziblim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/40 hover:text-white transition-colors"
                >
                  View ↗
                </a>
              </div>
              <p className="text-white/50 text-sm mb-2">Django · Docker · GitHub Actions</p>
              <p className="text-white/60 text-sm">
                Full-featured social platform with user interactions and CI/CD deployment.
              </p>
            </div>

            <div className="group">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-medium text-white group-hover:text-emerald-300 transition-colors">
                  Movie Recommender System
                </h3>
                <a
                  href="https://github.com/aaziblim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/40 hover:text-white transition-colors"
                >
                  View ↗
                </a>
              </div>
              <p className="text-white/50 text-sm mb-2">Python · Scikit-learn · Pandas</p>
              <p className="text-white/60 text-sm">
                Collaborative filtering-based recommendation engine using machine learning.
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
              Python, JavaScript, HTML, CSS
            </p>
            <p className="mb-2">
              <span className="text-white/40">Frameworks:</span>{" "}
              Django, FastAPI, Next.js, Tailwind CSS
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