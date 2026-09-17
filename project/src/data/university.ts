import {
  BookOpen,
  BriefcaseBusiness,
  FlaskConical,
  HeartPulse,
  GraduationCap,
  Microscope,
  Lightbulb,
  Users,
  Globe2,
  Award,
  Scale,
  Cpu,
  Building2,
  Library,
  Trophy,
  Beaker,
  Stethoscope,
  Presentation,
  HandHeart,
  Wrench,
} from 'lucide-react';

export type Faculty = {
  id: string;
  name: string;
  shortName: string;
  icon: typeof BookOpen;
  description: string;
  longDescription: string;
  programs: Programme[];
  level: 'Undergraduate' | 'Postgraduate' | 'Certificate' | 'All Levels';
};

export type Programme = {
  name: string;
  level: 'Certificate' | 'Diploma' | 'Bachelor' | 'Postgraduate Diploma' | 'Masters' | 'PhD';
  duration: string;
  description: string;
};

/** NCHE-accredited bachelor programmes only (as of latest accreditation table). */
export const faculties: Faculty[] = [
  {
    id: 'education',
    name: 'Faculty of Education',
    shortName: 'Education',
    icon: BookOpen,
    description:
      'NCHE-accredited education programmes preparing teachers and early-childhood professionals for schools across Uganda and the region.',
    longDescription:
      'The Faculty of Education delivers research-informed, practice-oriented teacher education. All listed programmes are accredited by the National Council for Higher Education (NCHE). Students benefit from teaching practice placements, curriculum studies, educational psychology, and inclusive pedagogy. Graduates are prepared for primary and secondary classrooms, early childhood centres, and further postgraduate study. International applicants are welcome; English is the medium of instruction.',
    programs: [
      { name: 'Bachelor of Arts with Education', level: 'Bachelor', duration: '3 Years', description: 'Combines subject specialisation in the arts with professional teacher education. Includes school practice and pedagogy modules. Accredited by NCHE (last review 2025; next 2032).' },
      { name: 'Bachelor of Early Childhood Development', level: 'Bachelor', duration: '3 Years', description: 'Focused on the care, development and education of children from birth to eight years. Covers child psychology, play-based learning, and centre management. NCHE accredited.' },
      { name: 'Bachelor of Education Early Childhood Development', level: 'Bachelor', duration: '3 Years', description: 'Professional qualification for early childhood educators with a strong foundation in curriculum and assessment for young learners. NCHE accredited (review due 2028).' },
      { name: 'Bachelor of Education-Primary -Arts', level: 'Bachelor', duration: '3 Years', description: 'Prepares primary school teachers with an arts orientation. Teaching practice is compulsory. NCHE accredited (last 2025; next 2032).' },
      { name: 'Bachelor of Primary Education', level: 'Bachelor', duration: '3 Years', description: 'Core primary teacher education covering literacy, numeracy, science and social studies methods. Suitable for local and international students seeking a recognised teaching qualification.' },
      { name: 'Bachelor of Science with Education', level: 'Bachelor', duration: '3 Years', description: 'Science subject content combined with professional education studies. Ideal for secondary science teaching pathways. NCHE accredited (2026; next review 2033).' },
    ],
    level: 'Undergraduate',
  },
  {
    id: 'business',
    name: 'Faculty of Business Administration',
    shortName: 'Business',
    icon: BriefcaseBusiness,
    description:
      'Accredited business, accounting, agribusiness, tourism and records programmes for careers in the private and public sectors.',
    longDescription:
      'The Faculty of Business Administration offers NCHE-accredited bachelor degrees that blend theory with practical case work, industrial attachment and entrepreneurial projects. Programmes are designed for both Ugandan and international students. Assessment includes coursework, examinations and workplace experience. Graduates enter banking, SMEs, public administration support roles, hospitality and agribusiness value chains across East Africa.',
    programs: [
      { name: 'Bachelor of Accounting and Finance', level: 'Bachelor', duration: '3 Years', description: 'Financial accounting, management accounting, taxation, auditing and corporate finance. Prepares students for professional accounting pathways and finance roles. NCHE accredited (2025–2032).' },
      { name: 'Bachelor of Agribusiness Management', level: 'Bachelor', duration: '3 Years', description: 'Agribusiness value chains, farm management, agricultural marketing and rural enterprise development. Strong focus on practical agribusiness projects. NCHE accredited.' },
      { name: 'Bachelor of Business Administration', level: 'Bachelor', duration: '3 Years', description: 'Core management, marketing, human resources, operations and entrepreneurship. Widely recognised for entry-level management roles. NCHE accredited (2023–2030).' },
      { name: 'Bachelor of Business Administration and Management', level: 'Bachelor', duration: '3 Years', description: 'Extended management curriculum with organisational behaviour, strategy and project management. NCHE accredited (2023–2030).' },
      { name: 'Bachelor of Records and Information Management', level: 'Bachelor', duration: '3 Years', description: 'Records systems, archives, information governance and digital records management for public and private organisations. NCHE accredited.' },
      { name: 'Bachelor of Tourism and Hospitality Management', level: 'Bachelor', duration: '3 Years', description: 'Tourism operations, hospitality management, customer service excellence and destination marketing. Includes industrial attachment. NCHE accredited.' },
    ],
    level: 'Undergraduate',
  },
  {
    id: 'computing',
    name: 'Faculty of Computing & Information Technology',
    shortName: 'Computing & IT',
    icon: Cpu,
    description:
      'NCHE-accredited computing, IT and information systems degrees for the digital economy.',
    longDescription:
      'The Faculty of Computing & Information Technology prepares students for software development, systems analysis, networking and digital transformation roles. Laboratories support programming, databases and networking practicals. All programmes listed are NCHE-accredited. International students receive the same curriculum delivered in English, with support for visa and settling-in processes.',
    programs: [
      { name: 'Bachelor of Information Technology', level: 'Bachelor', duration: '3 Years', description: 'Networks, systems administration, web technologies, databases and IT project management. NCHE accredited (2023–2030).' },
      { name: 'Bachelor of Science in Computer Science', level: 'Bachelor', duration: '3 Years', description: 'Algorithms, programming, software engineering, operating systems and foundational computer science theory. NCHE accredited (2023–2030).' },
      { name: 'Bachelor of Science in Information System', level: 'Bachelor', duration: '3 Years', description: 'Information systems analysis and design, business process support, data management and enterprise systems. NCHE accredited (2023–2030).' },
    ],
    level: 'Undergraduate',
  },
  {
    id: 'nursing',
    name: 'School of Nursing & Health Sciences',
    shortName: 'Nursing & Health',
    icon: Stethoscope,
    description:
      'Accredited nursing science programmes and complementary medicine studies for clinical and community health careers.',
    longDescription:
      'The School of Nursing & Health Sciences focuses on evidence-based nursing education with clinical placements and skills-lab practice. Bachelor of Nursing Science and the Completion pathway are NCHE-accredited. Complementary Medicine is listed subject to relevant professional laws. International applicants must meet English proficiency and any licensing requirements of their home or intended practice country.',
    programs: [
      { name: 'Bachelor of Nursing Science', level: 'Bachelor', duration: '4 Years', description: 'Comprehensive nursing education with clinical rotations in medical-surgical, maternal, paediatric and community health settings. NCHE accredited (2022; review 2027).' },
      { name: 'Bachelor of Nursing Sciences -Completion', level: 'Bachelor', duration: '2–3 Years', description: 'Upgrade pathway for qualified nurses seeking a bachelor degree. Builds on prior diploma or certificate credentials. NCHE accredited (2023–2030).' },
      { name: 'Bachelor of Complementary Medicine (Pending Relevant Laws)', level: 'Bachelor', duration: '4 Years', description: 'Integrative and complementary medicine studies. Accreditation status is subject to relevant professional and legal frameworks. Contact admissions for current entry requirements.' },
    ],
    level: 'Undergraduate',
  },
  {
    id: 'social',
    name: 'Faculty of Arts, Social Sciences & Humanities',
    shortName: 'Arts & Social Sciences',
    icon: Users,
    description:
      'Accredited programmes in social work, public administration, arts, divinity, design and tourism conservation.',
    longDescription:
      'This faculty offers NCHE-accredited degrees that prepare graduates for social services, public sector roles, creative industries, faith-based leadership and conservation-linked tourism. Teaching emphasises research methods, community engagement and professional ethics. Suitable for international students seeking regionally recognised qualifications delivered in English.',
    programs: [
      { name: 'Bachelor of Arts and Social Science', level: 'Bachelor', duration: '3 Years', description: 'Interdisciplinary social sciences foundation covering sociology, development studies and research methods. NCHE accredited (2023–2030).' },
      { name: 'Bachelor of Divinity', level: 'Bachelor', duration: '3 Years', description: 'Theological and pastoral studies for ministry and faith-based organisational leadership. NCHE accredited.' },
      { name: 'Bachelor of Graphics and Communication Design', level: 'Bachelor', duration: '3 Years', description: 'Visual communication, branding, digital design tools and portfolio development for the creative industries. NCHE accredited (2023–2030).' },
      { name: 'Bachelor of Public Administration', level: 'Bachelor', duration: '3 Years', description: 'Public sector management, policy analysis, local government and administrative law foundations. NCHE accredited (2025–2032).' },
      { name: 'Bachelor of Social Work', level: 'Bachelor', duration: '3 Years', description: 'Professional social work practice, case management, community development and ethics. Includes field placements. NCHE accredited (2025–2032).' },
      { name: 'Bachelor of Social Work and Social Administration', level: 'Bachelor', duration: '3 Years', description: 'Social work combined with social administration and welfare systems. Prepares graduates for NGOs and government social services. NCHE accredited (2025–2032).' },
      { name: 'Bachelor of Tourism and Conservation Management', level: 'Bachelor', duration: '3 Years', description: 'Sustainable tourism, wildlife and conservation management, and community-based tourism models. NCHE accredited (2025–2032).' },
    ],
    level: 'Undergraduate',
  },
];

/** Flat list of all accredited programmes for search, download and catalogues. */
export type AccreditedProgramme = {
  no: number;
  name: string;
  level: string;
  tierDiscipline: string;
  lastAccreditation: string;
  dueForReview: string;
  reviewYear: string;
  district: string;
  facultyId: string;
  duration: string;
  description: string;
};

/** URL-safe slug from programme name */
export function programmeSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export type ProgrammeDetailExtra = {
  slug: string;
  overview: string;
  entryRequirements: string[];
  careerOutcomes: string[];
  yearStructure: { year: string; modules: string[] }[];
  mode: string;
  language: string;
  campus: string;
  internationalNotes: string;
};

/** Deeper detail for each of the 25 NCHE-accredited programmes */
export const programmeDetails: ProgrammeDetailExtra[] = [
  {
    slug: 'bachelor-of-accounting-and-finance',
    overview: 'This NCHE-accredited degree builds strong foundations in financial and management accounting, taxation, auditing and corporate finance. Students learn to prepare and interpret financial statements, support decision-making, and apply professional ethics. Industrial attachment and case-based learning prepare graduates for accounting offices, banks, NGOs and further professional qualification pathways (e.g. ACCA/CPA guidance).',
    entryRequirements: ['Uganda Advanced Certificate of Education (UACE) with at least two principal passes, or equivalent international qualification', 'Uganda Certificate of Education (UCE) with credits in Mathematics and English, or equivalent', 'International applicants: secondary school certificate equivalent to UACE; English proficiency (IELTS 6.0 / TOEFL 80 / PTE 50 or equivalent)', 'Mature age entry may be considered under university regulations'],
    careerOutcomes: ['Accountant / accounts assistant', 'Finance officer', 'Audit support roles', 'Banking operations', 'Tax assistant', 'Further study toward professional accounting'],
    yearStructure: [
      { year: 'Year 1', modules: ['Principles of Accounting', 'Business Mathematics', 'Microeconomics', 'Communication Skills', 'Introduction to ICT', 'Business Law fundamentals'] },
      { year: 'Year 2', modules: ['Financial Accounting', 'Cost & Management Accounting', 'Taxation I', 'Corporate Finance basics', 'Research Methods', 'Industrial attachment preparation'] },
      { year: 'Year 3', modules: ['Advanced Financial Accounting', 'Auditing', 'Taxation II', 'Financial Management', 'Research project / dissertation', 'Industrial attachment'] },
    ],
    mode: 'Full-time (day); selected evening/weekend options subject to demand',
    language: 'English',
    campus: 'Main Campus, Nabweru, Wakiso',
    internationalNotes: 'Suitable for international students. Transcripts must be certified; visa support available through the International Office after offer of admission.',
  },
  {
    slug: 'bachelor-of-agribusiness-management',
    overview: 'Focuses on agribusiness value chains, farm and enterprise management, agricultural marketing and rural development. Students combine classroom theory with field visits and projects linked to Uganda’s agricultural economy.',
    entryRequirements: ['UACE with two principal passes (preferably including a science or agriculture-related subject), or equivalent', 'UCE with relevant credits, or international secondary equivalent', 'English proficiency for international applicants'],
    careerOutcomes: ['Agribusiness manager', 'Agricultural marketing officer', 'Cooperative / value-chain coordinator', 'Rural enterprise advisor', 'NGO agribusiness programmes'],
    yearStructure: [
      { year: 'Year 1', modules: ['Introduction to Agribusiness', 'Principles of Economics', 'Crop & Livestock systems overview', 'Communication Skills', 'ICT for Agribusiness'] },
      { year: 'Year 2', modules: ['Agricultural Marketing', 'Farm Management', 'Agribusiness Finance', 'Rural Sociology', 'Research Methods'] },
      { year: 'Year 3', modules: ['Value Chain Analysis', 'Entrepreneurship in Agriculture', 'Policy & Trade', 'Field project', 'Industrial attachment'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus, Nabweru',
    internationalNotes: 'Field components are Uganda-based; international students participate fully with orientation support.',
  },
  {
    slug: 'bachelor-of-arts-and-social-science',
    overview: 'An interdisciplinary social sciences degree covering sociology, development studies, research methods and critical analysis of society and policy in East Africa and beyond.',
    entryRequirements: ['UACE with two principal passes, or equivalent international qualification', 'English proficiency for non-native speakers'],
    careerOutcomes: ['Community development officer', 'Research assistant', 'Policy support roles', 'NGO programme officer', 'Further postgraduate study in social sciences'],
    yearStructure: [
      { year: 'Year 1', modules: ['Introduction to Sociology', 'Development Studies', 'Academic Writing', 'Introduction to Political Science', 'ICT Skills'] },
      { year: 'Year 2', modules: ['Social Research Methods', 'Gender & Society', 'Public Policy foundations', 'Statistics for Social Sciences', 'Electives'] },
      { year: 'Year 3', modules: ['Advanced Research Project', 'Contemporary African Issues', 'Project Planning', 'Internship / field placement'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus, Nabweru',
    internationalNotes: 'English-medium; strong fit for students interested in development and social policy in the region.',
  },
  {
    slug: 'bachelor-of-arts-with-education',
    overview: 'Combines arts subject content with professional teacher education, including school practice. Prepares graduates for secondary teaching pathways and education-related roles.',
    entryRequirements: ['UACE with two principal passes in relevant arts subjects, or equivalent', 'Interest in teaching; school practice is compulsory'],
    careerOutcomes: ['Secondary school teacher (arts subjects)', 'Education officer (with further experience)', 'Curriculum support roles', 'Further PGDE or education studies'],
    yearStructure: [
      { year: 'Year 1', modules: ['Subject content I', 'Foundations of Education', 'Educational Psychology', 'Communication Skills'] },
      { year: 'Year 2', modules: ['Subject content II', 'Curriculum Studies', 'Teaching Methods', 'Assessment in Education'] },
      { year: 'Year 3', modules: ['Subject content III', 'School Practice', 'Research in Education', 'Inclusive Education'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus + partner schools for practice',
    internationalNotes: 'School practice is arranged in Uganda. International applicants should confirm recognition of the award in their home country for teacher licensing.',
  },
  {
    slug: 'bachelor-of-business-administration',
    overview: 'Core business degree covering management, marketing, human resources, operations and entrepreneurship. Case studies and attachment prepare graduates for private and public sector roles.',
    entryRequirements: ['UACE with two principal passes, or equivalent', 'UCE with credits including Mathematics and English preferred', 'International secondary equivalent + English proficiency'],
    careerOutcomes: ['Management trainee', 'Marketing officer', 'HR assistant', 'Operations coordinator', 'Entrepreneur / SME owner'],
    yearStructure: [
      { year: 'Year 1', modules: ['Principles of Management', 'Business Economics', 'Accounting fundamentals', 'Business Communication', 'ICT'] },
      { year: 'Year 2', modules: ['Marketing Management', 'Human Resource Management', 'Operations Management', 'Business Law', 'Research Methods'] },
      { year: 'Year 3', modules: ['Strategic Management', 'Entrepreneurship', 'Project Management', 'Research project', 'Industrial attachment'] },
    ],
    mode: 'Full-time; flexible options subject to demand',
    language: 'English',
    campus: 'Main Campus, Nabweru',
    internationalNotes: 'Widely recognised bachelor pathway; enquire about credit transfer if you hold prior tertiary study.',
  },
  {
    slug: 'bachelor-of-business-administration-and-management',
    overview: 'Extended management curriculum with organisational behaviour, strategy and project management emphasis for students seeking deeper management training.',
    entryRequirements: ['UACE with two principal passes, or equivalent international qualification', 'English proficiency for international applicants'],
    careerOutcomes: ['Team leader / supervisor', 'Project coordinator', 'Administrative manager', 'SME management', 'Further MBA pathway'],
    yearStructure: [
      { year: 'Year 1', modules: ['Management Principles', 'Economics', 'Quantitative Methods', 'Communication', 'ICT'] },
      { year: 'Year 2', modules: ['Organisational Behaviour', 'Marketing', 'HRM', 'Financial Management for Managers', 'Research Methods'] },
      { year: 'Year 3', modules: ['Strategic Management', 'Project Planning & Management', 'Leadership', 'Dissertation / project', 'Attachment'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus, Nabweru',
    internationalNotes: 'Same admissions pathway as other business programmes; international students welcome.',
  },
  {
    slug: 'bachelor-of-complementary-medicine-pending-relevant-laws',
    overview: 'Integrative and complementary medicine studies. Accreditation and professional practice remain subject to relevant Ugandan professional and legal frameworks. Contact Admissions for the latest regulatory status before applying.',
    entryRequirements: ['UACE with science principals preferred, or equivalent', 'Confirm current legal/professional status with Admissions', 'English proficiency for international applicants'],
    careerOutcomes: ['Roles depend on national regulation', 'Wellness and complementary care settings (where legally permitted)', 'Further study in health-related fields'],
    yearStructure: [
      { year: 'Year 1–2', modules: ['Foundations of complementary medicine', 'Anatomy & physiology overview', 'Professional ethics', 'Research methods'] },
      { year: 'Year 3–4', modules: ['Clinical observation (as permitted)', 'Specialist modules', 'Research project', 'Attachment where legally allowed'] },
    ],
    mode: 'Full-time (subject to regulatory updates)',
    language: 'English',
    campus: 'Main Campus / clinical partners as applicable',
    internationalNotes: 'International applicants must verify whether the award is recognised for practice in their intended country of work.',
  },
  {
    slug: 'bachelor-of-divinity',
    overview: 'Theological and pastoral studies for ministry and faith-based organisational leadership, combining biblical studies, practical theology and community engagement.',
    entryRequirements: ['UACE with two principal passes, or equivalent', 'Recommendation from a recognised church/religious body may be requested', 'English proficiency'],
    careerOutcomes: ['Pastoral ministry', 'Faith-based NGO leadership', 'Chaplaincy pathways', 'Further theological study'],
    yearStructure: [
      { year: 'Year 1', modules: ['Biblical Studies I', 'Introduction to Theology', 'Church History', 'Communication Skills'] },
      { year: 'Year 2', modules: ['Biblical Studies II', 'Practical Theology', 'Ethics', 'Research Methods'] },
      { year: 'Year 3', modules: ['Pastoral Care', 'Mission & Community', 'Research project', 'Field ministry placement'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus, Nabweru',
    internationalNotes: 'Open to international applicants from diverse Christian traditions; clarify denominational expectations with Admissions.',
  },
  {
    slug: 'bachelor-of-early-childhood-development',
    overview: 'Prepares professionals for care, development and education of children from birth to eight years, including play-based learning, child psychology and centre management.',
    entryRequirements: ['UACE with two principal passes, or equivalent', 'Interest in working with young children', 'English proficiency for international applicants'],
    careerOutcomes: ['Early childhood educator', 'ECD centre supervisor', 'NGO early years programmes', 'Further education studies'],
    yearStructure: [
      { year: 'Year 1', modules: ['Child Development', 'Play-based Learning', 'Health & Safety in ECD', 'Communication Skills'] },
      { year: 'Year 2', modules: ['Curriculum for Early Years', 'Inclusive Practice', 'Family & Community', 'Assessment of Young Learners'] },
      { year: 'Year 3', modules: ['Centre Management', 'Practicum in ECD settings', 'Research project', 'Professional ethics'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus + ECD practicum sites',
    internationalNotes: 'Practicum is Uganda-based; check home-country recognition for early years licensing.',
  },
  {
    slug: 'bachelor-of-education-early-childhood-development',
    overview: 'Professional qualification for early childhood educators with strong curriculum and assessment foundations for young learners.',
    entryRequirements: ['UACE with two principal passes, or equivalent', 'English proficiency'],
    careerOutcomes: ['ECD teacher', 'Education assistant in early years', 'Programme officer (early childhood NGOs)'],
    yearStructure: [
      { year: 'Year 1', modules: ['Foundations of ECD', 'Child Psychology', 'Language & Literacy in Early Years'] },
      { year: 'Year 2', modules: ['Numeracy in Early Years', 'Teaching Methods', 'Inclusive Education'] },
      { year: 'Year 3', modules: ['School/centre practice', 'Research in ECD', 'Leadership in early years settings'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus + practice centres',
    internationalNotes: 'International students welcome; practicum arranged locally.',
  },
  {
    slug: 'bachelor-of-education-primary-arts',
    overview: 'Primary teacher education with an arts orientation, including compulsory teaching practice in primary schools.',
    entryRequirements: ['UACE with two principal passes, or equivalent', 'Commitment to primary teaching'],
    careerOutcomes: ['Primary school teacher', 'Education support roles', 'Further education studies'],
    yearStructure: [
      { year: 'Year 1', modules: ['Primary curriculum foundations', 'Child development', 'Arts in primary education'] },
      { year: 'Year 2', modules: ['Teaching methods (primary)', 'Assessment', 'Inclusive education'] },
      { year: 'Year 3', modules: ['School practice', 'Research project', 'Professional studies'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus + partner primary schools',
    internationalNotes: 'Confirm teacher registration requirements in your home country.',
  },
  {
    slug: 'bachelor-of-graphics-and-communication-design',
    overview: 'Visual communication, branding, digital design tools and portfolio development for creative industries.',
    entryRequirements: ['UACE with two principal passes, or equivalent', 'Portfolio or demonstrated interest in design is an advantage', 'English proficiency'],
    careerOutcomes: ['Graphic designer', 'Brand / communications assistant', 'Digital content designer', 'Freelance creative'],
    yearStructure: [
      { year: 'Year 1', modules: ['Design fundamentals', 'Typography', 'Drawing & visual thinking', 'Digital tools I'] },
      { year: 'Year 2', modules: ['Branding', 'Layout & publication design', 'Digital tools II', 'Design history & theory'] },
      { year: 'Year 3', modules: ['Advanced studio projects', 'Portfolio development', 'Client project / attachment', 'Professional practice'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus, Nabweru',
    internationalNotes: 'Studio-based; bring or access a laptop where possible. International students fully eligible.',
  },
  {
    slug: 'bachelor-of-information-technology',
    overview: 'Networks, systems administration, web technologies, databases and IT project management for the digital workplace.',
    entryRequirements: ['UACE with two principal passes (Mathematics advantage), or equivalent', 'English proficiency for international applicants'],
    careerOutcomes: ['IT support / systems administrator', 'Web developer (junior)', 'Network technician', 'IT project coordinator'],
    yearStructure: [
      { year: 'Year 1', modules: ['Computer systems', 'Programming fundamentals', 'Networking basics', 'Web fundamentals', 'Mathematics for IT'] },
      { year: 'Year 2', modules: ['Databases', 'Systems analysis', 'Network administration', 'Web development', 'Research methods'] },
      { year: 'Year 3', modules: ['IT project management', 'Security fundamentals', 'Advanced electives', 'Capstone project', 'Industrial attachment'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus (ICT labs)',
    internationalNotes: 'Lab-based programme; international students receive the same curriculum and lab access.',
  },
  {
    slug: 'bachelor-of-nursing-science',
    overview: 'Comprehensive nursing education with clinical rotations in medical-surgical, maternal, paediatric and community health settings. Skills lab and hospital placements are central.',
    entryRequirements: ['UACE with science principals (Biology/Chemistry preferred), or equivalent', 'Medical fitness as required for clinical placement', 'English proficiency', 'International applicants: check home-country nursing council recognition'],
    careerOutcomes: ['Registered nurse pathway (subject to national licensing)', 'Hospital and clinic nursing', 'Community health nursing', 'Further specialist nursing study'],
    yearStructure: [
      { year: 'Year 1', modules: ['Anatomy & Physiology', 'Fundamentals of Nursing', 'Microbiology', 'Communication in Health Care'] },
      { year: 'Year 2', modules: ['Medical-Surgical Nursing', 'Pharmacology', 'Nursing research', 'Clinical placements'] },
      { year: 'Year 3–4', modules: ['Maternal & child health', 'Community health nursing', 'Leadership in nursing', 'Extended clinical practice', 'Research project'] },
    ],
    mode: 'Full-time (clinical schedules apply)',
    language: 'English',
    campus: 'Main Campus + teaching hospitals/clinics',
    internationalNotes: 'Clinical placements are in Uganda. Licensing to practise abroad depends on the destination country’s nursing regulator.',
  },
  {
    slug: 'bachelor-of-nursing-sciences-completion',
    overview: 'Upgrade pathway for qualified nurses seeking a bachelor degree, building on prior diploma or certificate credentials.',
    entryRequirements: ['Recognised nursing diploma/certificate', 'Evidence of registration/licence where applicable', 'Transcripts for credit assessment', 'English proficiency'],
    careerOutcomes: ['Enhanced clinical and leadership roles', 'Pathway to postgraduate nursing', 'Education and supervision roles in nursing'],
    yearStructure: [
      { year: 'Completion years', modules: ['Advanced nursing practice modules', 'Research methods', 'Leadership & management in nursing', 'Clinical integration', 'Research project'] },
    ],
    mode: 'Full-time or structured completion pathway',
    language: 'English',
    campus: 'Main Campus + clinical sites',
    internationalNotes: 'Prior learning is assessed case-by-case. International nurses should submit certified credentials early.',
  },
  {
    slug: 'bachelor-of-primary-education',
    overview: 'Core primary teacher education covering literacy, numeracy, science and social studies methods with school practice.',
    entryRequirements: ['UACE with two principal passes, or equivalent', 'Commitment to primary teaching'],
    careerOutcomes: ['Primary school teacher', 'Education programme roles', 'Further studies in education'],
    yearStructure: [
      { year: 'Year 1', modules: ['Foundations of primary education', 'Child development', 'Literacy methods'] },
      { year: 'Year 2', modules: ['Numeracy methods', 'Science & social studies methods', 'Assessment'] },
      { year: 'Year 3', modules: ['School practice', 'Inclusive education', 'Research project'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus + partner schools',
    internationalNotes: 'School practice in Uganda; verify recognition for teaching abroad.',
  },
  {
    slug: 'bachelor-of-public-administration',
    overview: 'Public sector management, policy analysis, local government and administrative foundations for government and NGO careers.',
    entryRequirements: ['UACE with two principal passes, or equivalent', 'English proficiency'],
    careerOutcomes: ['Public administration officer', 'Local government roles', 'NGO administration', 'Policy support'],
    yearStructure: [
      { year: 'Year 1', modules: ['Introduction to Public Administration', 'Government systems', 'Communication Skills', 'ICT'] },
      { year: 'Year 2', modules: ['Public Policy', 'Local Government', 'Public Finance basics', 'Research Methods'] },
      { year: 'Year 3', modules: ['Administrative Law foundations', 'Ethics in public service', 'Project / attachment', 'Research project'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus, Nabweru',
    internationalNotes: 'Useful for students targeting public service or development organisations in the region.',
  },
  {
    slug: 'bachelor-of-records-and-information-management',
    overview: 'Records systems, archives, information governance and digital records for public and private organisations.',
    entryRequirements: ['UACE with two principal passes, or equivalent', 'English proficiency'],
    careerOutcomes: ['Records officer', 'Archives assistant', 'Information governance support', 'Administrative information roles'],
    yearStructure: [
      { year: 'Year 1', modules: ['Introduction to Records Management', 'Office systems', 'ICT', 'Communication'] },
      { year: 'Year 2', modules: ['Archives administration', 'Digital records', 'Classification & retrieval', 'Research Methods'] },
      { year: 'Year 3', modules: ['Information governance', 'Legal aspects of records', 'Attachment', 'Research project'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus, Nabweru',
    internationalNotes: 'International applicants welcome; attachment sites are primarily in Uganda.',
  },
  {
    slug: 'bachelor-of-science-in-computer-science',
    overview: 'Algorithms, programming, software engineering, operating systems and foundational computer science theory.',
    entryRequirements: ['UACE with Mathematics principal preferred, or equivalent', 'English proficiency'],
    careerOutcomes: ['Software developer (junior)', 'Systems analyst pathway', 'Technical support engineering', 'Further CS postgraduate study'],
    yearStructure: [
      { year: 'Year 1', modules: ['Programming I', 'Discrete mathematics', 'Computer organisation', 'Web basics'] },
      { year: 'Year 2', modules: ['Data structures & algorithms', 'Databases', 'Operating systems', 'Software engineering'] },
      { year: 'Year 3', modules: ['Advanced electives', 'AI/ML introduction (where offered)', 'Capstone project', 'Industrial attachment'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus (ICT labs)',
    internationalNotes: 'Strong option for international students seeking a regional CS degree in English.',
  },
  {
    slug: 'bachelor-of-science-in-information-system',
    overview: 'Information systems analysis and design, business process support, data management and enterprise systems.',
    entryRequirements: ['UACE with two principal passes, or equivalent', 'English proficiency'],
    careerOutcomes: ['Business analyst (junior)', 'Information systems officer', 'ERP support roles', 'IT-business liaison'],
    yearStructure: [
      { year: 'Year 1', modules: ['IS foundations', 'Programming basics', 'Business processes', 'Databases intro'] },
      { year: 'Year 2', modules: ['Systems analysis & design', 'Data management', 'Networking for IS', 'Research Methods'] },
      { year: 'Year 3', modules: ['Enterprise systems', 'IS project', 'Attachment', 'Professional practice'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus, Nabweru',
    internationalNotes: 'Bridges business and IT; suitable for international applicants with mixed academic backgrounds.',
  },
  {
    slug: 'bachelor-of-science-with-education',
    overview: 'Science subject content combined with professional education studies for secondary science teaching pathways.',
    entryRequirements: ['UACE with science principals, or equivalent', 'English proficiency'],
    careerOutcomes: ['Secondary science teacher', 'Education roles in science programmes', 'Further science or education study'],
    yearStructure: [
      { year: 'Year 1', modules: ['Science content I', 'Foundations of Education', 'Educational Psychology'] },
      { year: 'Year 2', modules: ['Science content II', 'Science teaching methods', 'Curriculum & assessment'] },
      { year: 'Year 3', modules: ['Science content III', 'School practice', 'Research in education'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus + partner schools',
    internationalNotes: 'School practice in Uganda; check overseas teacher registration rules.',
  },
  {
    slug: 'bachelor-of-social-work',
    overview: 'Professional social work practice, case management, community development and ethics, with field placements.',
    entryRequirements: ['UACE with two principal passes, or equivalent', 'Suitability for client-facing work', 'English proficiency'],
    careerOutcomes: ['Social worker (NGO/government)', 'Case manager', 'Community development officer', 'Further social work study'],
    yearStructure: [
      { year: 'Year 1', modules: ['Introduction to Social Work', 'Sociology', 'Human behaviour', 'Communication Skills'] },
      { year: 'Year 2', modules: ['Case work & group work', 'Community practice', 'Social policy', 'Research Methods'] },
      { year: 'Year 3', modules: ['Field placement', 'Ethics & professional practice', 'Research project'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus + field agencies',
    internationalNotes: 'Field placements are local; licensing abroad depends on destination country rules.',
  },
  {
    slug: 'bachelor-of-social-work-and-social-administration',
    overview: 'Social work combined with social administration and welfare systems for NGOs and government social services.',
    entryRequirements: ['UACE with two principal passes, or equivalent', 'English proficiency'],
    careerOutcomes: ['Social administration roles', 'Welfare programme officer', 'NGO project roles', 'Social work practice pathways'],
    yearStructure: [
      { year: 'Year 1', modules: ['Social Work foundations', 'Public administration basics', 'Communication'] },
      { year: 'Year 2', modules: ['Social welfare systems', 'Community development', 'Research Methods'] },
      { year: 'Year 3', modules: ['Field placement', 'Administration of social services', 'Research project'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus + agencies',
    internationalNotes: 'International students welcome; placements arranged in Uganda.',
  },
  {
    slug: 'bachelor-of-tourism-and-conservation-management',
    overview: 'Sustainable tourism, wildlife and conservation management, and community-based tourism models relevant to East Africa.',
    entryRequirements: ['UACE with two principal passes, or equivalent', 'English proficiency'],
    careerOutcomes: ['Tourism officer', 'Conservation project assistant', 'Community tourism coordinator', 'Park/tourism operations support'],
    yearStructure: [
      { year: 'Year 1', modules: ['Introduction to Tourism', 'Ecology basics', 'Communication', 'ICT'] },
      { year: 'Year 2', modules: ['Conservation management', 'Sustainable tourism', 'Tourism economics', 'Research Methods'] },
      { year: 'Year 3', modules: ['Community-based tourism', 'Field project', 'Attachment', 'Research project'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus + field sites',
    internationalNotes: 'Field visits may include conservation areas; ideal for international students interested in East African tourism.',
  },
  {
    slug: 'bachelor-of-tourism-and-hospitality-management',
    overview: 'Tourism operations, hospitality management, customer service and destination marketing with industrial attachment.',
    entryRequirements: ['UACE with two principal passes, or equivalent', 'English proficiency'],
    careerOutcomes: ['Hotel/hospitality supervisor pathway', 'Tour operations', 'Front office / guest relations', 'Tourism marketing roles'],
    yearStructure: [
      { year: 'Year 1', modules: ['Hospitality operations', 'Tourism principles', 'Customer service', 'Communication'] },
      { year: 'Year 2', modules: ['Food & beverage basics', 'Front office', 'Destination marketing', 'Research Methods'] },
      { year: 'Year 3', modules: ['Hospitality management', 'Industrial attachment', 'Entrepreneurship in tourism', 'Research project'] },
    ],
    mode: 'Full-time',
    language: 'English',
    campus: 'Main Campus + industry partners',
    internationalNotes: 'Attachment with hospitality partners in Uganda; strong English skills are an advantage.',
  },
];

export const accreditedProgrammes: AccreditedProgramme[] = [
  { no: 1, name: 'Bachelor of Accounting and Finance', level: "Bachelor's", tierDiscipline: 'Business', lastAccreditation: '2025-04-25', dueForReview: '2032-04-25', reviewYear: '2032', district: 'Kampala', facultyId: 'business', duration: '3 Years', description: 'Financial accounting, management accounting, taxation, auditing and corporate finance.' },
  { no: 2, name: 'Bachelor of Agribusiness Management', level: "Bachelor's", tierDiscipline: 'Business', lastAccreditation: '2025-04-25', dueForReview: '2032-04-25', reviewYear: '2032', district: 'Kampala', facultyId: 'business', duration: '3 Years', description: 'Agribusiness value chains, farm management and agricultural marketing.' },
  { no: 3, name: 'Bachelor of Arts and Social Science', level: "Bachelor's", tierDiscipline: 'Social and Behavioral Sciences', lastAccreditation: '2023-10-13', dueForReview: '2030-10-13', reviewYear: '2030', district: 'Kampala', facultyId: 'social', duration: '3 Years', description: 'Interdisciplinary social sciences and research methods.' },
  { no: 4, name: 'Bachelor of Arts with Education', level: "Bachelor's", tierDiscipline: 'Education', lastAccreditation: '2025-04-25', dueForReview: '2032-04-25', reviewYear: '2032', district: 'Kampala', facultyId: 'education', duration: '3 Years', description: 'Arts subject specialisation with professional teacher education.' },
  { no: 5, name: 'Bachelor of Business Administration', level: "Bachelor's", tierDiscipline: 'Business', lastAccreditation: '2023-04-17', dueForReview: '2030-04-17', reviewYear: '2030', district: 'Kampala', facultyId: 'business', duration: '3 Years', description: 'Core management, marketing, HR and entrepreneurship.' },
  { no: 6, name: 'Bachelor of Business Administration and Management', level: "Bachelor's", tierDiscipline: 'Business', lastAccreditation: '2023-10-13', dueForReview: '2030-10-13', reviewYear: '2030', district: 'Kampala', facultyId: 'business', duration: '3 Years', description: 'Extended management and organisational strategy.' },
  { no: 7, name: 'Bachelor of Complementary Medicine (Pending Relevant Laws)', level: "Bachelor's", tierDiscipline: 'Medicine and Health Sciences', lastAccreditation: '2023-10-13', dueForReview: '2030-10-13', reviewYear: '2030', district: 'Kampala', facultyId: 'nursing', duration: '4 Years', description: 'Complementary medicine studies subject to relevant professional laws.' },
  { no: 8, name: 'Bachelor of Divinity', level: "Bachelor's", tierDiscipline: 'Arts and Humanities', lastAccreditation: '2023-10-13', dueForReview: '2030-10-13', reviewYear: '2030', district: 'Kampala', facultyId: 'social', duration: '3 Years', description: 'Theological and pastoral studies for ministry leadership.' },
  { no: 9, name: 'Bachelor of Early Childhood Development', level: "Bachelor's", tierDiscipline: 'Education', lastAccreditation: '2023-04-17', dueForReview: '2030-04-17', reviewYear: '2030', district: 'Kampala', facultyId: 'education', duration: '3 Years', description: 'Early childhood care, development and education (0–8 years).' },
  { no: 10, name: 'Bachelor of Education Early Childhood Development', level: "Bachelor's", tierDiscipline: 'Education', lastAccreditation: '2023-04-17', dueForReview: '2028-04-17', reviewYear: '2028', district: 'Kampala', facultyId: 'education', duration: '3 Years', description: 'Professional early childhood educator qualification.' },
  { no: 11, name: 'Bachelor of Education-Primary -Arts', level: "Bachelor's", tierDiscipline: 'Education', lastAccreditation: '2025-04-25', dueForReview: '2032-04-25', reviewYear: '2032', district: 'Kampala', facultyId: 'education', duration: '3 Years', description: 'Primary teacher education with arts orientation.' },
  { no: 12, name: 'Bachelor of Graphics and Communication Design', level: "Bachelor's", tierDiscipline: 'Arts and Humanities', lastAccreditation: '2023-04-17', dueForReview: '2030-04-17', reviewYear: '2030', district: 'Kampala', facultyId: 'social', duration: '3 Years', description: 'Visual communication, branding and digital design.' },
  { no: 13, name: 'Bachelor of Information Technology', level: "Bachelor's", tierDiscipline: 'Physical Sciences and Mathematics', lastAccreditation: '2023-04-17', dueForReview: '2030-04-17', reviewYear: '2030', district: 'Kampala', facultyId: 'computing', duration: '3 Years', description: 'Networks, systems, web technologies and IT projects.' },
  { no: 14, name: 'Bachelor of Nursing Science', level: "Bachelor's", tierDiscipline: 'Medicine and Health Sciences', lastAccreditation: '2022-08-22', dueForReview: '2027-08-22', reviewYear: '2027', district: 'Kampala', facultyId: 'nursing', duration: '4 Years', description: 'Full nursing degree with clinical rotations.' },
  { no: 15, name: 'Bachelor of Nursing Sciences -Completion', level: "Bachelor's", tierDiscipline: 'Medicine and Health Sciences', lastAccreditation: '2023-10-13', dueForReview: '2030-10-13', reviewYear: '2030', district: 'Kampala', facultyId: 'nursing', duration: '2–3 Years', description: 'Upgrade pathway for qualified nurses to bachelor level.' },
  { no: 16, name: 'Bachelor of Primary Education', level: "Bachelor's", tierDiscipline: 'Education', lastAccreditation: '2023-04-17', dueForReview: '2030-04-17', reviewYear: '2030', district: 'Kampala', facultyId: 'education', duration: '3 Years', description: 'Core primary teacher education qualification.' },
  { no: 17, name: 'Bachelor of Public Administration', level: "Bachelor's", tierDiscipline: 'Social and Behavioral Sciences', lastAccreditation: '2025-04-25', dueForReview: '2032-04-25', reviewYear: '2032', district: 'Kampala', facultyId: 'social', duration: '3 Years', description: 'Public sector management and policy foundations.' },
  { no: 18, name: 'Bachelor of Records and Information Management', level: "Bachelor's", tierDiscipline: 'Business', lastAccreditation: '2023-10-13', dueForReview: '2030-10-13', reviewYear: '2030', district: 'Kampala', facultyId: 'business', duration: '3 Years', description: 'Records, archives and information governance.' },
  { no: 19, name: 'Bachelor of Science in Computer Science', level: "Bachelor's", tierDiscipline: 'Physical Sciences and Mathematics', lastAccreditation: '2023-04-17', dueForReview: '2030-04-17', reviewYear: '2030', district: 'Kampala', facultyId: 'computing', duration: '3 Years', description: 'Computer science theory, software engineering and algorithms.' },
  { no: 20, name: 'Bachelor of Science in Information System', level: "Bachelor's", tierDiscipline: 'Physical Sciences and Mathematics', lastAccreditation: '2023-04-17', dueForReview: '2030-04-17', reviewYear: '2030', district: 'Kampala', facultyId: 'computing', duration: '3 Years', description: 'Information systems analysis, design and enterprise systems.' },
  { no: 21, name: 'Bachelor of Science with Education', level: "Bachelor's", tierDiscipline: 'Education', lastAccreditation: '2026-02-13', dueForReview: '2033-02-13', reviewYear: '2033', district: 'Kampala', facultyId: 'education', duration: '3 Years', description: 'Science content with professional teacher education.' },
  { no: 22, name: 'Bachelor of Social Work', level: "Bachelor's", tierDiscipline: 'Social and Behavioral Sciences', lastAccreditation: '2025-04-25', dueForReview: '2032-04-25', reviewYear: '2032', district: 'Kampala', facultyId: 'social', duration: '3 Years', description: 'Professional social work practice and field placements.' },
  { no: 23, name: 'Bachelor of Social Work and Social Administration', level: "Bachelor's", tierDiscipline: 'Social and Behavioral Sciences', lastAccreditation: '2025-04-25', dueForReview: '2032-04-25', reviewYear: '2032', district: 'Kampala', facultyId: 'social', duration: '3 Years', description: 'Social work combined with social administration.' },
  { no: 24, name: 'Bachelor of Tourism and Conservation Management', level: "Bachelor's", tierDiscipline: 'Physical Sciences and Mathematics', lastAccreditation: '2025-04-25', dueForReview: '2032-04-25', reviewYear: '2032', district: 'Kampala', facultyId: 'social', duration: '3 Years', description: 'Sustainable tourism and conservation management.' },
  { no: 25, name: 'Bachelor of Tourism and Hospitality Management', level: "Bachelor's", tierDiscipline: 'Business', lastAccreditation: '2023-10-13', dueForReview: '2030-10-13', reviewYear: '2030', district: 'Kampala', facultyId: 'business', duration: '3 Years', description: 'Tourism operations and hospitality management.' },
];

export function getProgrammeBySlug(slug: string) {
  const base = accreditedProgrammes.find((p) => programmeSlug(p.name) === slug);
  const extra = programmeDetails.find((d) => d.slug === slug);
  if (!base) return null;
  return { ...base, ...(extra || { slug, overview: base.description, entryRequirements: [], careerOutcomes: [], yearStructure: [], mode: 'Full-time', language: 'English', campus: 'Main Campus, Nabweru', internationalNotes: '' }) };
}



export type Stat = {
  value: string;
  label: string;
  icon: typeof Users;
};

export const stats: Stat[] = [
  { value: '2,000+', label: 'Students Enrolled', icon: Users },
  { value: '3M+', label: 'Video Lessons', icon: BookOpen },
  { value: '2.5K+', label: 'Daily Live Classes', icon: GraduationCap },
  { value: '75+', label: 'Exam Categories', icon: Award },
];

export const homeStats: Stat[] = [
  { value: '2,000+', label: 'Students Enrolled', icon: Users },
  { value: '25', label: 'NCHE-Accredited Programmes', icon: GraduationCap },
  { value: '100+', label: 'Faculty Members', icon: BriefcaseBusiness },
  { value: '5', label: 'Faculties & Schools', icon: Building2 },
];

export type ResearchArea = {
  title: string;
  description: string;
  icon: typeof Microscope;
};

export const researchAreas: ResearchArea[] = [
  {
    title: 'Technology & Innovation',
    description:
      'Research spanning computer science, networking, artificial intelligence, and digital transformation to solve real-world challenges in East Africa.',
    icon: Cpu,
  },
  {
    title: 'Health & Medicine',
    description:
      'Pioneering integrative medicine research that bridges traditional healing practices with evidence-based clinical care and public health policy.',
    icon: Stethoscope,
  },
  {
    title: 'Social Sciences & Education',
    description:
      'Exploring education policy, community development, governance, and the social dynamics shaping East Africa and the Global South.',
    icon: Users,
  },
  {
    title: 'Business & Entrepreneurship',
    description:
      'Engaging students in start-up ventures, market research, and applied business innovation with measurable economic impact.',
    icon: BriefcaseBusiness,
  },
];

export type ResearchProject = {
  title: string;
  lead: string;
  faculty: string;
  status: 'Ongoing' | 'Completed' | 'Recruiting';
  description: string;
};

export const researchProjects: ResearchProject[] = [
  {
    title: 'Efficacy of Traditional Herbal Medicine in Treating Malaria',
    lead: 'Dr. Robert Kato',
    faculty: 'Faculty of Alternative Medicine & Health Sciences',
    status: 'Ongoing',
    description: 'A clinical study comparing traditional herbal remedies with standard antimalarial treatments in rural Ugandan communities.',
  },
  {
    title: 'AI-Powered Crop Disease Detection for Smallholder Farmers',
    lead: 'Dr. Samuel Wamala',
    faculty: 'Faculty of Business Administration & ICT',
    status: 'Ongoing',
    description: 'Developing a mobile application using machine learning to help farmers identify and treat crop diseases in real time.',
  },
  {
    title: 'Inclusive Education Practices in Ugandan Primary Schools',
    lead: 'Dr. Esther Namaganda',
    faculty: 'Faculty of Education & Humanities',
    status: 'Completed',
    description: 'A two-year study examining the effectiveness of inclusive education policies in government-aided primary schools across four districts.',
  },
  {
    title: 'Nursing Simulation Training Outcomes',
    lead: 'Prof. Janet Amongi',
    faculty: 'Faculty of Nursing',
    status: 'Completed',
    description: 'Evaluating the impact of simulation-based learning on clinical competence among nursing students.',
  },
  {
    title: 'Digital Financial Inclusion in East Africa',
    lead: 'Prof. David Ssali',
    faculty: 'Faculty of Business Administration & ICT',
    status: 'Recruiting',
    description: 'Investigating the role of mobile money and digital platforms in expanding financial access for unbanked populations.',
  },
  {
    title: 'Community Health Outreach Impact Assessment',
    lead: 'Dr. Alice Nabwire',
    faculty: 'Faculty of Alternative Medicine & Health Sciences',
    status: 'Ongoing',
    description: 'Measuring the health outcomes of community engagement outreach programmes in underserved Kampala neighbourhoods.',
  },
];

export type ResearchCentre = {
  name: string;
  description: string;
  icon: typeof Microscope;
};

export const researchCentres: ResearchCentre[] = [
  {
    name: 'Centre for Innovation & Technology',
    description: 'A hub for applied technology research, prototyping, and student-led innovation projects.',
    icon: Cpu,
  },
  {
    name: 'Institute of Public Health',
    description: 'Advancing community health research and policy with a focus on preventive care and health equity.',
    icon: Stethoscope,
  },
  {
    name: 'Centre for Education Research',
    description: 'Conducting studies on teaching methodology, education policy, and learning outcomes.',
    icon: BookOpen,
  },
  {
    name: 'Entrepreneurship & Business Lab',
    description: 'Supporting student start-ups, market research, and applied business innovation.',
    icon: BriefcaseBusiness,
  },
];

export type NewsItem = {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  fullContent: string;
};

export const newsItems: NewsItem[] = [
  {
    id: 'august-intake-2026',
    date: '14 May 2026',
    category: 'Admissions',
    title: 'Admissions for 2026 August Intake Are Open — Half Bursary Available',
    excerpt:
      'The doors of Avance International University are open for all eligible applicants. A half bursary is running until the end of August. Apply now for Certificate, Diploma, Bachelor and Postgraduate programmes.',
    fullContent:
      'Admission for the August 2026 Intake is now open. Avance International University invites all eligible applicants to begin their academic journey with an institution committed to excellence, innovation, and practical skills. A HALF BURSARY is currently running from now until the end of August — do not miss this opportunity to study your dream course at an affordable cost. Programmes are offered across faculties and schools including Education, Business and Computer Science, Nursing & Midwifery, Allied Health Sciences, Law, and Vocational Studies. Nabweru Campus – Wakiso District. Call +256 700 670 691 / +256 766 751 763 or apply online at aviu.ac.ug.',
  },
  {
    id: 'september-intake-2026',
    date: '28 Aug 2026',
    category: 'Admissions',
    title: 'September 2026 Intake Now Open for Applications',
    excerpt:
      'Avance International University announces admissions for the September 2026 intake across all faculties and programme levels. Prospective students are encouraged to apply early.',
    fullContent:
      'The Office of the Academic Registrar invites applications from suitably qualified candidates for the September 2026 intake. Programmes are available at Certificate, Diploma, Bachelor, Postgraduate Diploma, and Masters levels across all faculties and schools. Applications can be submitted online or in person at the admissions office. Prospective students are encouraged to apply early to secure their place and access available scholarships and discounts.',
  },
  {
    id: 'tuition-payment-memo',
    date: '22 Aug 2026',
    category: 'Student Notice',
    title: 'Memo from the Bursar on Full Tuition Payment',
    excerpt:
      'Important information regarding full tuition payment and the implementation of the surcharge for late registration.',
    fullContent:
      'All students are reminded that full tuition payment must be completed before the registration period closes. A surcharge will be applied to all late registrations as outlined in the academic calendar. Students experiencing financial difficulties are encouraged to contact the bursar\u2019s office to discuss available payment plans. The university remains committed to making education affordable and accessible to all qualifying students.',
  },
  {
    id: 'innovation-centre-launch',
    date: '15 Aug 2026',
    category: 'Campus',
    title: 'New Innovation Centre Opens Its Doors',
    excerpt:
      'The fully equipped innovation centre provides students with hands-on access to modern laboratories, technology-enhanced learning, and collaborative project spaces.',
    fullContent:
      'Avance International University has officially opened its new Innovation Centre, a state-of-the-art facility designed to foster creativity, collaboration, and hands-on learning. The centre features modern laboratories, computer stations, prototyping equipment, and flexible project spaces. It will serve as the home for student start-up ventures, faculty research projects, and community engagement initiatives. The innovation centre represents a significant investment in the future of our students and the communities we serve.',
  },
  {
    id: 'nursing-simulation-lab',
    date: '02 Aug 2026',
    category: 'Academics',
    title: 'Nursing Faculty Launches Advanced Simulation Lab',
    excerpt:
      'The Faculty of Nursing unveils a state-of-the-art simulation laboratory, giving students real clinical experience in a controlled learning environment.',
    fullContent:
      'The Faculty of Nursing has unveiled its new advanced simulation laboratory, equipped with high-fidelity patient manikins, clinical monitoring equipment, and interactive learning stations. The lab allows nursing students to practice clinical procedures, emergency response, and patient care scenarios in a safe, controlled environment before working with real patients. This investment significantly enhances the quality of clinical training and better prepares graduates for the realities of modern healthcare practice.',
  },
  {
    id: 'research-grant-awarded',
    date: '20 Jul 2026',
    category: 'Research',
    title: 'AVIU Researchers Awarded Grant for Integrative Medicine Study',
    excerpt:
      'A team from the Faculty of Alternative Medicine has received funding to study the efficacy of traditional healing practices alongside modern clinical methods.',
    fullContent:
      'A research team led by Dr. Robert Kato from the Faculty of Alternative Medicine & Health Sciences has been awarded a significant grant to conduct a clinical study on the efficacy of traditional herbal medicine in treating malaria. The two-year study will compare outcomes of traditional remedies with standard antimalarial treatments in rural Ugandan communities. The research has the potential to influence public health policy and expand access to affordable treatment options.',
  },
  {
    id: 'business-startup-fair',
    date: '10 Jul 2026',
    category: 'Events',
    title: 'Student Startup Fair Showcases Entrepreneurial Talent',
    excerpt:
      'Students from the Faculty of Business Administration presented their ventures to industry leaders at the annual startup fair.',
    fullContent:
      'The annual Student Startup Fair brought together over 200 students, faculty, and industry leaders to celebrate student entrepreneurship. Twenty student teams pitched their business ventures to a panel of investors and industry experts, with three teams receiving funding commitments. The event highlighted the university\u2019s commitment to fostering innovation and entrepreneurship as core components of the student experience.',
  },
  {
    id: 'moot-court-success',
    date: '28 Jun 2026',
    category: 'Achievement',
    title: 'AVIU Students Excel at Inter-University Moot Court Competition',
    excerpt:
      'Our students demonstrated outstanding legal reasoning and advocacy skills at the regional moot court competition.',
    fullContent:
      'A team of students from the Faculty of Education & Humanities represented Avance International University at the annual Inter-University Moot Court Competition, finishing in the top three among twelve participating institutions. The team was praised for their legal reasoning, oral advocacy, and teamwork. This achievement reflects the university\u2019s commitment to producing graduates who excel in critical thinking and public communication.',
  },
  {
    id: 'community-health-outreach',
    date: '15 Jun 2026',
    category: 'Community',
    title: 'Nursing Students Lead Community Health Outreach in Kampala',
    excerpt:
      'Final-year nursing students provided free health screenings and education to over 500 community members.',
    fullContent:
      'Final-year nursing students from the Faculty of Nursing organised a community health outreach programme in Kawempe Division, Kampala. The initiative provided free blood pressure screening, diabetes testing, health education, and first aid training to over 500 community members. The outreach is part of the university\u2019s commitment to community engagement and gives students valuable real-world clinical experience while serving underserved populations.',
  },
  {
    id: 'partnership-signing',
    date: '01 Jun 2026',
    category: 'Partnership',
    title: 'AVIU Signs Partnership with Regional Health Authority',
    excerpt:
      'The partnership will create new clinical placement opportunities for nursing and health sciences students.',
    fullContent:
      'Avance International University has signed a memorandum of understanding with the Regional Health Authority to create structured clinical placement opportunities for nursing and health sciences students. The partnership will give students access to regional hospitals and health centres for their practical training, enhancing the quality of clinical education and strengthening the university\u2019s links with the healthcare sector.',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  program: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Studying Information Technology has equipped me with practical skills in programming, networking, and system management. The hands-on projects have prepared me to solve real-world tech challenges with confidence.',
    name: 'Kaaya Wycliffe',
    program: 'BSc Information Technology',
    initials: 'KW',
  },
  {
    quote:
      'Choosing Information Technology was the best decision for my future. I have gained technical expertise, innovation skills, and the confidence to build digital solutions that make a difference.',
    name: 'Kirawusi Vian',
    program: 'BSc Information Technology',
    initials: 'KV',
  },
  {
    quote:
      'Studying Business has opened my mind to endless opportunities. The practical approach to learning, case studies, and real-world projects have prepared me to confidently step into the corporate world.',
    name: 'Nakibuuka Maria Immy',
    program: 'BA Business Administration',
    initials: 'NM',
  },
  {
    quote:
      'From simulation labs to real clinical experience, every step of my Nursing journey has been impactful. The mentorship and guidance from our tutors inspire me to always give my best.',
    name: 'Nagawa Jamimmar',
    program: 'BSc Nursing',
    initials: 'NJ',
  },
  {
    quote:
      'The Education programme at AVIU transformed my understanding of teaching. The research-oriented approach helped me see education as a tool for social change, not just a career.',
    name: 'Opio Daniel',
    program: 'Bachelor of Education',
    initials: 'OD',
  },
  {
    quote:
      'The innovation hub gave me the space and resources to turn my idea into a real business. I graduated not just with a degree, but with a running company.',
    name: 'Achieng Brenda',
    program: 'BSc Computer Science',
    initials: 'AB',
  },
];

export const universityInfo = {
  name: 'Avance International University',
  tagline: 'Enhancing Innovations',
  established: 'Private Institution · Founded 2016 · Uganda',
  email: 'info@aviu.ac.ug',
  phone: '+256 700 670 691',
  phoneAlt: '+256 766 751 763',
  address: '1km off Nansana-Hoima Road, Nabweru, Wakiso District, Uganda',
  website: 'aviu.ac.ug',
  description:
    'Avance International University is a private university registered and accredited by the National Council for Higher Education (NCHE). We identify, analyse and focus on each student\u2019s strengths, and shape them so they apply them in today\u2019s competitive world of work. All programmes are designed to equip students with relevant knowledge and practical skills to address real-world challenges.',
  mission:
    'To provide transformative and innovative higher education services that meet societal needs.',
  vision:
    'To be a premier innovative higher education institution for social, economic and technological transformation in Africa.',
  coreValues: [
    'Diversity — We embrace different backgrounds, perspectives, and ideas.',
    'Excellence — We strive for the highest standards in education, research, and service.',
    'Sustainability — We promote responsible practices that support future generations.',
    'Integrity — We uphold honesty, transparency, and ethical conduct.',
    'Innovation — We encourage creativity and forward-thinking solutions.',
    'Affordability — We believe quality education should be accessible to all.',
  ],
  features: [
    '25 NCHE-accredited bachelor programmes across five faculties and schools',
    'Hands-on, competence-based teaching with industrial and clinical attachments',
    'Technology-enhanced learning and virtual campus for local and international students',
    'Dedicated international student support: visa guidance, airport pickup and orientation',
    'English-medium instruction with clear entry requirements for overseas applicants',
    'Multiple intakes per year (January, May, August/September)',
    'Modern simulation labs, ICT facilities and innovation spaces',
    'Research-oriented training and community engagement across programmes',
    'Accredited by the National Council for Higher Education (NCHE)',
  ],
  accreditations: [
    { name: 'NCHE', detail: 'National Council for Higher Education' },
    { name: 'ASIC', detail: 'Accredited' },
    { name: 'ISO', detail: '9001:2015' },
  ],
  history: [
    {
      year: '2016',
      event: 'Avance International University is founded as a private institution in Uganda, registered and later accredited by the National Council for Higher Education (NCHE).',
    },
    {
      year: '2014',
      event: 'First cohort of students admitted across the Faculty of Education and Faculty of Business Administration & ICT.',
    },
    {
      year: '2016',
      event: 'Faculty of Alternative Medicine & Health Sciences established, expanding the university\u2019s health education portfolio.',
    },
    {
      year: '2018',
      event: 'Faculty of Nursing launched with a Bachelor of Science in Nursing programme and the first simulation laboratory.',
    },
    {
      year: '2020',
      event: 'AVIU rapidly expands its e-learning platform, ensuring uninterrupted education during the global pandemic.',
    },
    {
      year: '2023',
      event: 'Innovation Centre opens, providing students with modern laboratories and collaborative project spaces.',
    },
    {
      year: '2025',
      event: 'Advanced nursing simulation lab unveiled and partnership signed with the Regional Health Authority.',
    },
  ],
  governance: [
    { title: 'General Meeting of AVIU Ltd', description: 'The highest proprietary body of the university company. It appoints the Board of Directors and receives annual reports on the institution’s performance and strategy.' },
    { title: 'Board of Directors', description: 'Provides strategic direction, financial oversight and long-term policy for Avance International University. Reports to the General Meeting of AVIU Ltd.' },
    { title: 'Chancellor', description: 'Ceremonial head of the university. Confers degrees at graduation, represents AVIU at national and international functions, and works closely with the Board and Council.' },
    { title: 'Committees of the Board of Directors', description: 'Specialist committees (e.g. Finance, Audit, Appointments) that support the Board in detailed oversight and policy formulation.' },
    { title: 'University Council', description: 'The principal governing body for academic and administrative policy. Oversees quality, resources and institutional compliance with NCHE and other regulators.' },
    { title: 'Committees of Council', description: 'Standing and ad-hoc committees that advise Council on finance, quality assurance, student affairs, infrastructure and other operational areas.' },
    { title: 'University Senate', description: 'Supreme academic authority. Approves programmes, academic regulations, examinations and awards. Reports to University Council.' },
    { title: 'Committees of Senate', description: 'Academic committees covering curriculum, examinations, research ethics, postgraduate studies and library services.' },
    { title: 'College / Faculty Board of Studies', description: 'Faculty-level academic boards that review curriculum delivery, assessment and student progress within each faculty or school.' },
    { title: 'School Board', description: 'School-level academic and operational board for specialised schools (e.g. Nursing & Health Sciences).' },
    { title: 'Departmental Board', description: 'Department-level boards responsible for day-to-day teaching quality, module delivery and student support.' },
  ],
  admissionsEmail: 'admissions@aviu.ac.ug',
  internationalEmail: 'international@aviu.ac.ug',
};

export type StaffMember = {
  name: string;
  role: string;
  category: 'Academic' | 'Administrative';
  initials: string;
  qualification: string;
};

export const staffMembers: StaffMember[] = [
  { name: 'Rt. Rev. James William Ssebaggala', role: 'Chancellor', category: 'Administrative', initials: 'JS', qualification: 'Retired Bishop of Mukono Diocese' },
  { name: 'Dr. Joshua Kato Kimata', role: 'Vice Chancellor', category: 'Administrative', initials: 'JK', qualification: 'PhD' },
  { name: 'Dr. Gracious Ariyo', role: 'Chairperson, Board of Directors', category: 'Administrative', initials: 'GA', qualification: 'PhD' },
  { name: 'Dr. Julius Arinaitwe', role: 'Chairperson, University Council', category: 'Administrative', initials: 'JA', qualification: 'PhD' },
  { name: 'Dr. Betty Mategeko', role: 'Director, Quality Assurance', category: 'Administrative', initials: 'BM', qualification: 'PhD' },
  { name: 'Dr. Etoru Martin', role: 'Former Vice Chancellor', category: 'Administrative', initials: 'EM', qualification: 'PhD' },
  { name: 'Mr. Anthony Uwaya', role: 'Deputy Vice Chancellor', category: 'Administrative', initials: 'AU', qualification: 'Senior Administrative Officer' },
  { name: 'Ms. Florence Mirembe', role: 'Director, Library & Information Resources', category: 'Administrative', initials: 'FM', qualification: 'MLS' },
  { name: 'Mr. David Ochieng', role: 'Director, ICT Services', category: 'Administrative', initials: 'DO', qualification: 'MSc' },
  { name: 'Ms. Grace Akello', role: 'Director, Internal Audit & Risk', category: 'Administrative', initials: 'GA', qualification: 'ACCA, CPA Uganda' },
  { name: 'Prof. David Ssali', role: 'Dean, Faculty of Business Administration', category: 'Academic', initials: 'DS', qualification: 'PhD, University of Cape Town' },
  { name: 'Dr. Esther Namaganda', role: 'Dean, Faculty of Education', category: 'Academic', initials: 'EN', qualification: 'PhD, University of Bristol' },
  { name: 'Prof. Janet Amongi', role: 'Dean, School of Nursing & Health Sciences', category: 'Academic', initials: 'JA', qualification: 'PhD, University of Edinburgh' },
  { name: 'Dr. Samuel Wamala', role: 'Dean, Faculty of Computing & Information Technology', category: 'Academic', initials: 'SW', qualification: 'PhD, University of Pretoria' },
  { name: 'Dr. Moses Opio', role: 'Dean, Faculty of Arts, Social Sciences & Humanities', category: 'Academic', initials: 'MO', qualification: 'PhD, University of Nairobi' },
  { name: 'Dr. Peter Busimba', role: 'Head of Department, Computer Science', category: 'Academic', initials: 'PB', qualification: 'PhD, University of the Witwatersrand' },
  { name: 'Ms. Ruth Achan', role: 'Head of Department, Business Management', category: 'Academic', initials: 'RA', qualification: 'MBA, Makerere University' },
  { name: 'Ms. Harriet Nankya', role: 'Head of Department, Nursing', category: 'Academic', initials: 'HN', qualification: 'MSc Nursing, Makerere University' },
  { name: 'Mr. Brian Ssebunya', role: 'Lecturer, Graphics & Communication Design', category: 'Academic', initials: 'BS', qualification: 'MA, Uganda Christian University' },
  { name: 'Ms. Joan Namatovu', role: 'Lecturer, Business Administration', category: 'Academic', initials: 'JN', qualification: 'MBA, Uganda Management Institute' },
];

export type EventItem = {
  id: string;
  date: string;
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
  category: string;
  description: string;
};

export const events: EventItem[] = [
  {
    id: 'annual-graduation',
    date: '2026-09-25',
    day: '25',
    month: 'Sep',
    title: 'AVIU Annual Graduation Ceremony',
    time: '9:00 AM - 2:00 PM',
    location: 'Main Campus Grounds / Graduation Pavilion',
    category: 'Ceremony',
    description: 'University-wide graduation held every year on 25 September. All faculties and schools confer degrees. Graduands, families, international guests and partners are welcome. Academic dress guidelines and guest registration are published each August.',
  },
  {
    id: 'innovation-fair-2026',
    date: '2026-09-15',
    day: '15',
    month: 'Sep',
    title: 'AVIU Innovation Fair 2026',
    time: '9:00 AM - 4:00 PM',
    location: 'Innovation Centre, Main Campus',
    category: 'Events',
    description: 'Students and faculty showcase cutting-edge projects in technology, health sciences, and business innovation. Industry partners and the public are invited to attend.',
  },
  {
    id: 'nursing-graduation',
    date: '2026-09-25',
    day: '25',
    month: 'Sep',
    title: 'Nursing & Health Sciences Recognition (Graduation Day)',
    time: 'Included in Annual Graduation',
    location: 'Main Campus',
    category: 'Ceremony',
    description: 'Nursing and health sciences graduands are recognised as part of the university-wide ceremony held every 25 September.',
  },
  {
    id: 'research-conference',
    date: '2026-10-05',
    day: '05',
    month: 'Oct',
    title: 'Annual Research Conference',
    time: '8:30 AM - 5:00 PM',
    location: 'Conference Hall, Main Campus',
    category: 'Conference',
    description: 'A full day of research presentations from faculty and postgraduate students across all four faculties, with keynote speakers from partner institutions.',
  },
  {
    id: 'community-engagement',
    date: '2026-10-12',
    day: '12',
    month: 'Oct',
    title: 'Community Engagement Day',
    time: '9:00 AM - 1:00 PM',
    location: 'Outreach - Kampala District',
    category: 'Community',
    description: 'Students and staff participate in community service activities including health outreach, education support, and environmental conservation.',
  },
  {
    id: 'open-day',
    date: '2026-10-25',
    day: '25',
    month: 'Oct',
    title: 'Open Day for Prospective Students',
    time: '10:00 AM - 3:00 PM',
    location: 'Main Campus',
    category: 'Admissions',
    description: 'Prospective students and their families are invited to tour the campus, meet faculty, and learn about programmes for the January 2027 intake.',
  },
  {
    id: 'startup-pitch',
    date: '2026-11-08',
    day: '08',
    month: 'Nov',
    title: 'Student Startup Pitch Competition',
    time: '2:00 PM - 6:00 PM',
    location: 'Innovation Centre',
    category: 'Events',
    description: 'Student entrepreneurs pitch their business ventures to a panel of investors and industry leaders for funding and mentorship opportunities.',
  },
  {
    id: 'public-health-symposium',
    date: '2026-11-15',
    day: '15',
    month: 'Nov',
    title: 'Public Health Symposium',
    time: '9:00 AM - 3:00 PM',
    location: 'Conference Hall, Main Campus',
    category: 'Conference',
    description: 'A symposium bringing together health professionals, researchers, and students to discuss emerging public health challenges in East Africa.',
  },
  {
    id: 'education-graduation',
    date: '2026-12-05',
    day: '05',
    month: 'Dec',
    title: 'Faculty of Education Graduation Ceremony',
    time: '10:00 AM',
    location: 'Main Hall, Avance Campus',
    category: 'Ceremony',
    description: 'Celebrating the achievements of our education and humanities graduates as they enter the teaching profession.',
  },
  {
    id: 'january-intake-orientation',
    date: '2027-01-10',
    day: '10',
    month: 'Jan',
    title: 'January 2027 Intake Orientation Week',
    time: 'All Day',
    location: 'Main Campus',
    category: 'Admissions',
    description: 'Welcome week for new students joining the January 2027 intake, including campus tours, faculty introductions, and programme briefings.',
  },
];

export type StudentLifeItem = {
  title: string;
  description: string;
  icon: typeof Users;
};

export const studentLifeItems: StudentLifeItem[] = [
  {
    title: 'Studying at AVIU',
    description: 'We provide resources that enrich both the student experience and campus life, from academic support to extracurricular activities.',
    icon: BookOpen,
  },
  {
    title: 'Innovation Hub',
    description: 'A dedicated space where students develop ideas, build prototypes, and collaborate on projects that solve real-world problems.',
    icon: Lightbulb,
  },
  {
    title: 'Student Guild',
    description: 'The student guild represents the student body, organises events, and advocates for student welfare throughout the academic year.',
    icon: Users,
  },
  {
    title: 'Community Engagement',
    description: 'Students participate in outreach activities that give back to the community, building civic responsibility alongside academic skills.',
    icon: Globe2,
  },
  {
    title: 'Accommodation',
    description: 'We assist students in finding safe, affordable housing near campus, with guidance on options that suit different budgets.',
    icon: Building2,
  },
  {
    title: 'Sports & Recreation',
    description: 'From football to debate club, AVIU offers a range of activities to keep students active, engaged, and connected outside the classroom.',
    icon: Trophy,
  },
  {
    title: 'Counselling & Wellbeing',
    description: 'Confidential counselling services and mental health support are available to all students throughout their academic journey.',
    icon: HandHeart,
  },
  {
    title: 'Career Services',
    description: 'Career guidance, internship placements, and employer connections to help students transition from university to the workplace.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Student Portal & E-Learning',
    description: 'Access timetables, results, course materials, and interactive online learning through our technology-enhanced platform.',
    icon: Cpu,
  },
];

export type CampusFacility = {
  name: string;
  description: string;
  icon: typeof Building2;
};

export const campusFacilities: CampusFacility[] = [
  {
    name: 'Innovation Centre',
    description: 'A fully equipped facility with modern laboratories, prototyping equipment, and collaborative project spaces for student innovation.',
    icon: Lightbulb,
  },
  {
    name: 'Nursing Simulation Lab',
    description: 'High-fidelity patient manikins and clinical monitoring equipment for hands-on nursing education.',
    icon: Beaker,
  },
  {
    name: 'University Library',
    description: 'A comprehensive physical and digital library with quiet study spaces, reference collections, and computer stations.',
    icon: Library,
  },
  {
    name: 'Computer Laboratories',
    description: 'Modern computing facilities with high-speed internet, specialised software, and technical support.',
    icon: Cpu,
  },
  {
    name: 'Lecture Halls',
    description: 'Spacious, technology-enabled lecture halls designed for interactive and engaging learning.',
    icon: Presentation,
  },
  {
    name: 'Sports Grounds',
    description: 'Outdoor sports facilities including a football pitch, volleyball court, and athletics track.',
    icon: Trophy,
  },
];

export type LibraryResource = {
  title: string;
  description: string;
  icon: typeof BookOpen;
};

export const libraryResources: LibraryResource[] = [
  {
    title: 'E-Library',
    description: 'Access thousands of digital books, journals, and research papers through our online library platform, available 24/7 to all registered students.',
    icon: BookOpen,
  },
  {
    title: 'Electronic Resources',
    description: 'A curated collection of academic databases, e-journals, and digital archives supporting research across all faculties.',
    icon: Globe2,
  },
  {
    title: 'Physical Library',
    description: 'Our campus library offers quiet study spaces, reference collections, and dedicated computer stations for research and coursework.',
    icon: Library,
  },
  {
    title: 'E-Learning Platform',
    description: 'Interactive online courses, video lessons, and live classes through our technology-enhanced learning management system.',
    icon: Lightbulb,
  },
  {
    title: 'Research Repository',
    description: 'A digital archive of student and faculty research outputs, including theses, dissertations, and published papers.',
    icon: Microscope,
  },
  {
    title: 'Student Portal',
    description: 'Access timetables, results, course materials, and academic records through the secure student portal.',
    icon: Users,
  },
];

export const libraryHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 10:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
  { day: 'E-Library', hours: '24/7 Online Access' },
];

export type FeeItem = {
  programme: string;
  uganda: string;
  international: string;
  perLabel: string;
};

export const feeStructure: FeeItem[] = [
  { programme: 'All Bachelor Programmes (Ugandan students)', uganda: 'Coming Soon', international: '—', perLabel: 'Contact Admissions' },
  { programme: 'All Bachelor Programmes (International students)', uganda: '—', international: 'Coming Soon', perLabel: 'Contact Admissions' },
  { programme: 'Nursing Science (clinical programmes)', uganda: 'Coming Soon', international: 'Coming Soon', perLabel: 'Contact Admissions' },
  { programme: 'Scholarships & Bursaries', uganda: 'Coming Soon', international: 'Coming Soon', perLabel: '—' },
];

export const feePaymentInfo = [
  {
    title: 'Payment Methods',
    description: 'Tuition can be paid via bank transfer, mobile money, or direct deposit at the bursar\u2019s office. Payment plans are available for students who need to pay in instalments.',
  },
  {
    title: 'Registration & Surcharge',
    description: 'Students must complete full tuition payment before registration closes. A surcharge applies for late registration as outlined in the academic calendar.',
  },
  {
    title: 'Scholarships & Discounts',
    description: 'Scholarship and bursary information is Coming Soon. Please contact admissions@aviu.ac.ug.',
  },
  {
    title: 'Refund Policy',
    description: 'Refunds are processed according to the university\u2019s fee policy. Students who withdraw before the third week of the semester may be eligible for a partial refund.',
  },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const admissionFAQs: FAQItem[] = [
  {
    question: 'When can I apply to Avance International University?',
    answer: 'AVIU offers three intakes per year: January, May, and September. Applications typically open two to three months before each intake. The September 2026 intake is currently accepting applications until 16th September 2026.',
  },
  {
    question: 'What are the entry requirements for undergraduate programmes?',
    answer: 'Applicants for bachelor\u2019s programmes need at least two principal passes at A\u2019Level or an equivalent qualification. Diploma programmes require O\u2019Level certificates, and certificate programmes have specific requirements listed on each programme page.',
  },
  {
    question: 'Can I pay tuition in instalments?',
    answer: 'Yes, AVIU offers flexible payment plans. Students can arrange to pay tuition in two or three instalments per semester. Contact the bursar\u2019s office to set up a payment plan.',
  },
  {
    question: 'Does AVIU offer scholarships?',
    answer: 'Scholarship and bursary details are Coming Soon. Contact admissions@aviu.ac.ug for the latest information for your programme and nationality.',
  },
  {
    question: 'Are there online learning options?',
    answer: 'Yes, AVIU has a robust e-learning platform with over 3 million video lessons and 2,500+ daily live classes. Many programmes offer blended learning options combining online and in-person instruction.',
  },
  {
    question: 'How long does the admissions process take?',
    answer: 'Once all required documents are submitted, the admissions team typically reviews applications and communicates decisions within two weeks. Early application is recommended to allow ample time for processing.',
  },
  {
    question: 'Does AVIU accept international students?',
    answer: 'Yes, AVIU welcomes international students. International applicants should submit certified academic transcripts, proof of English proficiency, and a valid passport. Separate fee rates apply to international students.',
  },
  {
    question: 'What support services are available for students?',
    answer: 'AVIU offers counselling services, career guidance, academic support, accommodation assistance, and a dedicated student portal for accessing academic resources and support.',
  },
];

export type PartnerItem = {
  name: string;
  type: string;
};

export const partners: PartnerItem[] = [
  { name: 'Regional Health Authority', type: 'Healthcare Partnership' },
  { name: 'Pearson Edexcel', type: 'Academic Accreditation' },
  { name: 'ASIC', type: 'Institutional Accreditation' },
  { name: 'NCHE Uganda', type: 'National Accreditation' },
  { name: 'Uganda Bankers Association', type: 'Industry Partnership' },
  { name: 'Kampala City Council', type: 'Community Partnership' },
];

export type NavLink = { label: string; path: string };

export const navLinks: NavLink[] = [
  { label: 'Study', path: '/study' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Research', path: '/research' },
  { label: 'Student Life', path: '/student-life' },
  { label: 'Staff', path: '/staff' },
  { label: 'Library', path: '/library' },
  { label: 'Fees', path: '/fees' },
  { label: 'About', path: '/about' },
  { label: 'News', path: '/news' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' },
];
