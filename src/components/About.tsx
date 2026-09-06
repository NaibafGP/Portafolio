import { useState } from "react";
import { personalInfo, education, experiences } from "../data/portafolioData";
import profilePic from "../assets/profile.png";
import { User, Briefcase, GraduationCap, Award } from "lucide-react";

export default function About() {
    const [activeTab, setActiveTab] = useState<"about" | "experience" | "education" | "certifications">("about");

    return (
  <section id="about" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
    <span className="text-accent font-mono text-sm tracking-wider uppercase">// Conóceme</span>
    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12 text-primary">Sobre Mí</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div className="flex flex-col items-start text-left">
        <div className="flex flex-wrap gap-4 border-b border-border w-full pb-2 mb-6">
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-2 text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'about'
                ? 'text-accent border-b-2 border-accent'
                : 'text-secondary hover:text-primary'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Sobre mí</span>
          </button>

          <button
            onClick={() => setActiveTab('experience')}
            className={`pb-2 text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'experience'
                ? 'text-accent border-b-2 border-accent'
                : 'text-secondary hover:text-primary'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Experiencia</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`pb-2 text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'education'
                ? 'text-accent border-b-2 border-accent'
                : 'text-secondary hover:text-primary'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Educación</span>
          </button>

          <button
            onClick={() => setActiveTab('certifications')}
            className={`pb-2 text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'certifications'
                ? 'text-accent border-b-2 border-accent'
                : 'text-secondary hover:text-primary'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Certificaciones</span>
          </button>
        </div>

        {/* Pestañas superpuestas */}
        <div className="grid text-secondary text-base leading-relaxed w-full">
          <div
            className={`[grid-area:1/1] transition-opacity duration-200 ${
              activeTab === 'about' ? 'opacity-100' : 'opacity-0 invisible pointer-events-none'
            }`}
          >
            <p>{personalInfo.summary}</p>
          </div>

          <div
            className={`[grid-area:1/1] transition-opacity duration-200 ${
              activeTab === 'experience' ? 'opacity-100' : 'opacity-0 invisible pointer-events-none'
            }`}
          >
            {experiences.map((exp) => (
              <div key={exp.company} className="mb-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h4 className="text-primary font-bold text-xl">{exp.company}</h4>
                  <span className="text-xs font-mono text-secondary">{exp.period}</span>
                </div>
                <p className="text-accent text-sm font-mono mb-3">{exp.role}</p>
                <ul className="space-y-1.5 text-sm text-secondary">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent select-none mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className={`[grid-area:1/1] transition-opacity duration-200 ${
              activeTab === 'education' ? 'opacity-100' : 'opacity-0 invisible pointer-events-none'
            }`}
          >
            {education.map((item) => (
              <div key={item.institution} className="mb-4">
                <h4 className="text-primary font-bold text-2xl">{item.institution}</h4>
                <p className="text-accent text-md font-mono">{item.degree}</p>
                <p className="text-sm text-secondary mt-1">{item.period}</p>
              </div>
            ))}
          </div>

          <div
            className={`[grid-area:1/1] transition-opacity duration-200 ${
              activeTab === 'certifications' ? 'opacity-100' : 'opacity-0 invisible pointer-events-none'
            }`}
          >
            <ul className="space-y-2">
              {education[0]?.certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          src={profilePic}
          alt="Fabian Garcia"
          className="w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover border-2 border-border shadow-2xl shadow-accent/5 hover:border-accent/50 transition-all duration-300"
        />
      </div>

    </div>
  </section>
);
}