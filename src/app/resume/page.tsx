"use client";

import { Card } from "@/components/Card";
import GrainImage from "@/assets/images/grain.jpg";

const ResumePage = () => {
  const downloadPDF = () => {
    // Link to your PDF in the public folder
    const pdfUrl = '/Abdul-Aziz-Ziblim-Resume.pdf';
    
    // Create temporary link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Abdul-Aziz-Ziblim-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-20 pb-16 relative z-0">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">ABDUL-AZIZ ZIBLIM</h1>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <span>Kumasi, Ghana</span>
            <span>|</span>
            <span>(+233) 550562665</span>
            <span>|</span>
            <div className="flex gap-3">
              <a href="mailto:azizmeltzer@gmail.com" className="text-emerald-400 hover:text-emerald-300">Email</a>
              <a href="http://www.linkedin.com/in/azizjibril" className="text-emerald-400 hover:text-emerald-300">LinkedIn</a>
              <a href="https://github.com/aaziblim" className="text-emerald-400 hover:text-emerald-300">Github</a>
            </div>
          </div>
        </div>

        <Card className="p-8 mb-8">
          {/* Add download CV button at the top */}
          <div className="flex justify-end mb-6">
            <button 
              onClick={downloadPDF}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-400/10 text-emerald-400 rounded-lg hover:bg-emerald-400/20 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download CV
            </button>
          </div>

          <div 
            className="absolute inset-0 -z-10 opacity-5 rounded-3xl"
            style={{ backgroundImage: `url(${GrainImage.src})` }}
          />
          
          {/* Summary */}
          <p className="text-gray-300 mb-8">
            Industrial Engineering student with hands-on experience in Python programming, data analysis, machine learning, 
            and cloud computing basics. Passionate about solving complex problems through innovative technology solutions 
            and building a career in cloud computing, machine learning, and IT consultancy.
          </p>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-emerald-400 mb-4">EDUCATION</h2>
            <div className="border-l-2 border-gray-800 pl-4">
              <h3 className="font-semibold">KWAME NKRUMAH UNIVERSITY OF SCI & TECH</h3>
              <p className="text-gray-400">Bachelor of Engineering, Major in Industrial Engineering</p>
              <p className="text-sm text-gray-500">Since Sept. 2020; Kumasi</p>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-emerald-400 mb-4">EXPERIENCE</h2>
            <div className="space-y-6">
              <div className="relative border-l-2 border-gray-800 pl-4">
                <div className="absolute w-3 h-3 bg-emerald-400/20 border-2 border-emerald-400 rounded-full -left-[7px] top-1"></div>
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold">Intern | R&D and Engineering Design | IMHO Limited</h3>
                  <span className="text-sm text-gray-400">OCT 2024- NOV 2024</span>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Led a team of six in the design and fabrication of a mobile molten metal pouring system</li>
                  <li>Managed IT-based tasks, including system requirements documentation</li>
                </ul>
              </div>

              <div className="border-l-2 border-gray-800 pl-4">
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold">Media Chairperson | Campus Association</h3>
                  <span className="text-sm text-gray-400">2022-2024</span>
                </div>
                <p className="text-gray-300">Led the IT & Media department, orchestrating technological and media related endeavors</p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-emerald-400 mb-4">PROJECTS</h2>
            <div className="grid gap-4">
              {[
                {
                  title: "Portfolio Website",
                  tech: ["Next.js", "Tailwind", "Vercel"],
                  description: "Developed and deployed a modern personal portfolio website using HTML, CSS (Tailwind), and JavaScript, hosted on Vercel. Established a sleek, responsive design with dark mode support.",
                  link: "https://github.com/aaziblim"
                },
                {
                  title: "Django Social Media App",
                  tech: ["Django", "Docker", "GitHub Actions"],
                  description: "Accomplished a responsive social platform with user interaction features, measured by smooth multi-user testing and consistent deployment using Django and Docker.",
                  link: "https://github.com/aaziblim"
                },
                {
                  title: "Recommender System",
                  tech: ["Python", "Scikit-learn", "Pandas"],
                  description: "Developed a collaborative filtering-based movie recommender system using Python and Scikit-learn, demonstrating expertise in machine learning.",
                  link: "https://github.com/aaziblim"
                }
              ].map((project) => (
                <div key={project.title} className="p-4 rounded-xl border border-gray-800 hover:border-emerald-400/50 transition-all group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-gray-800/50 hover:bg-emerald-400/10 hover:text-emerald-400 transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-md bg-gray-800/50 text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Update the Skills section with categories */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-emerald-400 mb-4">TECHNICAL SKILLS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-400">Frontend & UI</h3>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'Tailwind'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-emerald-400/5 text-emerald-400 rounded-full text-sm border border-emerald-400/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-400">Backend & Data</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Django', 'FastAPI', 'Docker'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-400/5 text-blue-400 rounded-full text-sm border border-blue-400/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-400">Machine Learning</h3>
                <div className="flex flex-wrap gap-2">
                  {['Pandas', 'NumPy', 'TensorFlow', 'Scikit-learn'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-400/5 text-purple-400 rounded-full text-sm border border-purple-400/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mt-8">
            <h2 className="text-xl font-bold text-emerald-400 mb-4">CERTIFICATIONS & TRAINING</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>Python programming and intro to machine learning (Kaggle)</li>
              <li>Data analysis with Python (freecodecamp)</li>
              <li>Supervised learning, Unsupervised learning, Recommenders, Reinforcement learning (Coursera)</li>
            </ul>
          </section>

          {/* Languages */}
          <section className="mt-8">
            <h2 className="text-xl font-bold text-emerald-400 mb-4">LANGUAGES</h2>
            <p className="text-gray-300">Fluent in English and Dagbani</p>
          </section>
        </Card>

        {/* Back to Home Button */}
        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;