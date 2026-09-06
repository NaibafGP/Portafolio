import { useState } from "react";
import { personalInfo, education } from "../data/portafolioData";
import profilePic from "../assets/profile.png";
import { User, GraduationCap, Award } from "lucide-react";

export default function About() {
    const [activeTab, setActiveTab] = useState<"about" | "education" | "certifications">("about");

    return (
  <section id="about" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
    <span className="text-accent font-mono text-sm tracking-wider uppercase">// Conóceme</span>
    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12 text-primary">Sobre Mí</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div className="flex flex-col items-start text-left">
        <div className="flex gap-4 border-b border-border w-full pb-2 mb-6">
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