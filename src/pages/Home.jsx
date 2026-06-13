import { useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import WebGLErrorBoundary from '../components/WebGLErrorBoundary';

const Scene3D = lazy(() => import('../components/Scene3D'));

export default function Home() {
  const [subtitle, setSubtitle] = useState('');
  const fullText = "Welcome, friend!";

  useEffect(() => {
    let i = 0;
    setSubtitle('');
    const intervalId = setInterval(() => {
      setSubtitle(fullText.substring(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(intervalId);
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  const projects = [
    {
      title: 'AssessQ',
      filename: 'assessq.py',
      url: 'https://github.com/caffeicsatyam/AssessQ',
      liveUrl: 'https://assessq.streamlit.app/',
      desc: 'An assessment recommendation engine utilizing BM25 lexical retrieval, dense embeddings, and reciprocal-rank fusion for SHL-style test catalogs.',
      tags: ['Python', 'Recommendation Engine', 'BM25', 'Embeddings']
    },
    {
      title: 'CFOBuddy',
      filename: 'cfobuddy.py',
      url: 'https://github.com/caffeicsatyam/CFOBuddy',
      desc: 'An AI-powered multi-agent orchestration for CFOs — transforming raw financial data into actionable insights through conversational analysis and dynamic charting.',
      tags: ['Python', 'LangGraph', 'Next.js', 'PostgreSQL']
    },
    {
      title: 'ColCommute',
      filename: 'colcommute.ts',
      url: 'https://github.com/caffeicsatyam/ColCommute',
      desc: 'AI-powered student carpooling platform built with Google ADK — matches rides, optimizes routes, predicts demand, and automates the full commute lifecycle.',
      tags: ['TypeScript', 'Next.js', 'Python', 'Google ADK']
    },
    {
      title: 'BookBay',
      filename: 'bookbay.ipynb',
      url: 'https://github.com/caffeicsatyam/BookBay',
      desc: 'A machine learning-powered web application providing intelligent book recommendations using collaborative filtering, content-based search, and AI next-word prediction.',
      tags: ['Python', 'Flask', 'TensorFlow', 'Scikit-learn']
    },
    {
      title: 'Multi-Lingual Llama Chatbot',
      filename: 'fine_tuning_llama.ipynb',
      url: 'https://github.com/caffeicsatyam/fine-tunning-llama',
      desc: 'A multi-lingual conversational AI agent created by fine-tuning a Llama large language model to handle accurate cross-lingual dialogue.',
      tags: ['Python', 'Jupyter', 'Llama', 'NLP']
    },
    {
      title: 'Small ML Projects',
      filename: 'ml_projects.py',
      url: 'https://github.com/caffeicsatyam/Small-Machine-Learning-Projects',
      desc: 'A diverse collection of small machine learning projects showcasing implementations of various algorithms, data processing techniques, and model evaluations.',
      tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas']
    }
  ];

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <WebGLErrorBoundary>
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </WebGLErrorBoundary>
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <h1 style={{ position: 'relative', zIndex: 1 }}>Satyam Chaturvedi</h1>
        <p className="hero-subtitle" style={{ position: 'relative', zIndex: 1 }}>{subtitle}</p>
        <div className="social-row" style={{ position: 'relative', zIndex: 1 }}>
          <a href="https://github.com/caffeicsatyam" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <svg fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/satyamchaturvedi0237" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://leetcode.com/u/Knightmen/" aria-label="LeetCode" target="_blank" rel="noopener noreferrer">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
          </a>
          <a href="#projects" onClick={handleScrollToProjects} aria-label="Projects" style={{ cursor: 'pointer' }}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 9l3 3-3 3m5 0h3M4 6h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
          </a>
          <Link to="/links" aria-label="Links">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
          </Link>
          <Link to="/certificates" aria-label="Certificates">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="16" rx="1.5" />
              <path d="M7 8h10M7 12h5" />
              <circle cx="15.5" cy="12.5" r="2.5" />
              <path d="M14.5 14.8L13.5 19l2-1 2 1-1-4.2" />
            </svg>
          </Link>
        </div>
      </section>

      <section id="projects" className="container" style={{ paddingBottom: '128px', zIndex: 10, position: 'relative' }}>
        <h2 className="text-headline-lg" style={{ marginBottom: '64px', textAlign: 'center' }}>
          ~/projects <span className="terminal-cursor"></span>
        </h2>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <article key={idx} className="project-card" style={{ height: '100%', position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <a href={proj.liveUrl || proj.url} target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', inset: 0, zIndex: 1 }} aria-label={proj.title}></a>
              <div className="project-card-header">
                <div className="project-card-dot"></div>
                <div className="project-card-dot"></div>
                <div className="project-card-dot"></div>
                <span className="project-card-filename">{proj.filename}</span>
              </div>
              <div className="project-card-body" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div className="project-card-title-row">
                  <h2 className="project-card-title">&gt; {proj.title}</h2>
                  <div style={{ display: 'flex', gap: '12px', position: 'relative', zIndex: 2, alignItems: 'center' }}>
                    <a href={proj.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" style={{ color: 'var(--on-surface-variant)', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--on-surface)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--on-surface-variant)'}>
                       <svg fill="currentColor" viewBox="0 0 24 24" width="22" height="22"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    </a>
                    {proj.liveUrl && (
                      <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>open_in_new</span>
                      </a>
                    )}
                    {!proj.liveUrl && (
                      <span className="material-symbols-outlined project-card-arrow" style={{ pointerEvents: 'none', color: 'var(--on-surface-variant)' }}>arrow_outward</span>
                    )}
                  </div>
                </div>
                <p className="project-card-desc">{proj.desc}</p>
                <div className="project-card-tags" style={{ marginTop: 'auto' }}>
                  {proj.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
