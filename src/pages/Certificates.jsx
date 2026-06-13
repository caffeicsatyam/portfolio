import { Link } from 'react-router-dom';

export default function Certificates() {
  const certificates = [
    {
      title: 'Google Cloud Gen AI Academy',
      filename: 'google_genai_academy.crt',
      url: '#',
      desc: 'APAC Edition (Cohort 1). Advanced training in building and deploying enterprise-grade generative AI applications, vector search indexes, large language models (LLMs), and safety frameworks on Google Cloud Platform.',
      verifyId: '[VERIFY_ID: 2026H2S04GCGENAIAPACC1-P00852]',
      tags: ['Generative AI', 'Google Cloud', 'LLMs', 'APAC Edition'],
      icon: 'lock'
    },
    {
      title: 'OCI AI Foundations Associate',
      filename: 'oci_ai_foundations.crt',
      url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=D81D82F2F9B54D3441749E200B40BC65F6DC5A885EDC16D73A454F1F5F6B054E',
      desc: 'Official Oracle Cloud Infrastructure 2025 Certification. Proves rigorous understanding of Artificial Intelligence foundations, deep learning concepts, machine learning lifecycles, and OCI generative AI suite implementations.',
      verifyId: '[STATUS: ACTIVE_VERIFIED]',
      tags: ['OCI', 'Oracle Cloud', 'AI Foundations', 'Certified'],
      icon: 'arrow_outward'
    },
    {
      title: 'AWS AI Practitioner Challenge',
      filename: 'aws_ai_practitioner.crt',
      url: '#',
      desc: 'Intensive evaluation of cloud-native machine learning workflows, artificial intelligence fundamentals, serverless model serving architectures, and generative AI features on Amazon Web Services.',
      verifyId: '[BENCHMARK: COMPLETED]',
      tags: ['AWS', 'Cloud AI', 'Machine Learning', 'AI Models'],
      icon: 'lock'
    },
    {
      title: 'ML with PyTorch & Hugging Face',
      filename: 'ml_specialization.crt',
      url: '#',
      desc: 'Advanced multi-course specialization validating expert capability in designing regression and classification models with Scikit-learn, training deep neural networks in PyTorch, and fine-tuning transformers via Hugging Face.',
      verifyId: '[VERIFY_ID: RCUX8B1ZJU1Y]',
      tags: ['PyTorch', 'Hugging Face', 'Scikit-learn', 'Deep Learning'],
      icon: 'lock'
    },
    {
      title: 'Gen AI & LLMs: Architecture',
      filename: 'genai_llm_architecture.crt',
      url: '#',
      desc: 'Focuses on deep architecture blocks of large language models, structured dataset preparation pipelines, efficient tokenization routines, context management strategies, and optimal fine-tuning mechanics.',
      verifyId: '[VERIFY_ID: VTMJULK09INV]',
      tags: ['Generative AI', 'LLMs', 'Model Architecture', 'Data Prep'],
      icon: 'lock'
    },
    {
      title: 'Advanced Learning Algorithms',
      filename: 'advanced_algorithms.crt',
      url: '#',
      desc: 'Validation of advanced machine learning capabilities: designing multi-layer neural networks, coding backpropagation routines, and building predictive systems using decision trees, random forests, and XGBoost structures.',
      verifyId: '[VERIFY_ID: QLC36IUUBGZZ]',
      tags: ['Neural Networks', 'XGBoost', 'TensorFlow', 'Model Evaluation'],
      icon: 'lock'
    },
    {
      title: 'Unsupervised & Reinforcement Learning',
      filename: 'unsupervised_reinforcement.crt',
      url: '#',
      desc: 'Mastery of unsupervised clustering (K-Means), anomaly detection platforms, neural network recommendation engines (content-based & collaborative filtering models), and state-action-reward Q-learning reinforcement agents.',
      verifyId: '[VERIFY_ID: 3JUDRQ2XKKSF]',
      tags: ['Recommender Systems', 'Reinforcement Learning', 'Clustering', 'Q-Learning'],
      icon: 'lock'
    },
    {
      title: 'Supervised Machine Learning',
      filename: 'supervised_learning.crt',
      url: '#',
      desc: 'Core machine learning engineering competency. Covers statistical modeling, mathematical formulations, linear regression, multi-class logistic classification, gradient descent algorithms, and regularized optimization steps.',
      verifyId: '[VERIFY_ID: L86XAUQHB2BD]',
      tags: ['Supervised Learning', 'Regression', 'Classification', 'Optimizers'],
      icon: 'lock'
    },
    {
      title: 'Developing Soft Skills & Personality',
      filename: 'soft_skills_personality.crt',
      url: '#',
      desc: 'National Program on Technology Enhanced Learning (NPTEL) certified benchmark. Validates competence in professional workplace communication dynamics, emotional intelligence, leadership qualities, and personal growth.',
      verifyId: '[VERIFY_ID: NPTEL24HS176S553600783]',
      tags: ['NPTEL', 'Soft Skills', 'Leadership', 'Interpersonal Skills'],
      icon: 'lock'
    }
  ];

  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '64px' }}>
      <div className="page-header">
        <Link to="/" className="back-btn" aria-label="Return to landing page">
          <span className="material-symbols-outlined">arrow_back</span>
          return to root
        </Link>
        <h1 className="page-title">~/certificates<span className="terminal-cursor"></span></h1>
        <p className="page-desc">
          A showcase of official technical credentials, cloud architecture verifications, and machine learning specializations completed by Satyam Chaturvedi.
        </p>
      </div>

      <div className="projects-grid">
        {certificates.map((cert, idx) => (
          <a key={idx} href={cert.url} target={cert.url !== '#' ? '_blank' : '_self'} rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }} aria-label={`View ${cert.title} Certificate`}>
            <article className="project-card" style={{ height: '100%' }}>
              <div className="project-card-header">
                <div className="project-card-dot"></div>
                <div className="project-card-dot"></div>
                <div className="project-card-dot"></div>
                <span className="project-card-filename">{cert.filename}</span>
              </div>
              <div className="project-card-body">
                <div className="project-card-title-row">
                  <h2 className="project-card-title">&gt; {cert.title}</h2>
                  <span className="material-symbols-outlined project-card-arrow">{cert.icon}</span>
                </div>
                <p className="project-card-desc">{cert.desc}</p>
                <div style={{ fontFamily: 'var(--font-code)', fontSize: '13px', color: 'var(--outline)', marginBottom: '16px', wordBreak: 'break-all' }}>
                  {cert.verifyId}
                </div>
                <div className="project-card-tags">
                  {cert.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          </a>
        ))}
      </div>
    </div>
  );
}
