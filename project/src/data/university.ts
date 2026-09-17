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

export const faculties: Faculty[] = [
  {
    id: 'education',
    name: 'Faculty of Education & Humanities',
    shortName: 'Education',
    icon: BookOpen,
    description:
      'Training the next generation of educators, researchers, and thought leaders who shape society through teaching and scholarship.',
    longDescription:
      'The Faculty of Education & Humanities is dedicated to advancing educational practice and policy in Uganda and the broader East African region. Our programmes blend theory with hands-on classroom experience, preparing graduates to lead in schools, government, and community organisations. We emphasise research-oriented teaching, inclusive education, and the development of critical thinking skills that educators need to shape the next generation.',
    programs: [
      { name: 'Bachelor of Education', level: 'Bachelor', duration: '3 Years', description: 'A comprehensive degree preparing teachers for primary and secondary education with specialisations in core subjects.' },
      { name: 'Bachelor of Arts in Humanities', level: 'Bachelor', duration: '3 Years', description: 'An interdisciplinary degree exploring literature, history, philosophy, and cultural studies.' },
      { name: 'Postgraduate Diploma in Education (PGDE)', level: 'Postgraduate Diploma', duration: '1 Year', description: 'For graduates seeking professional teaching qualification and classroom certification.' },
      { name: 'Postgraduate Diploma in Education Planning & Management (PGDEPM)', level: 'Postgraduate Diploma', duration: '1 Year', description: 'Designed for education administrators and policy professionals managing educational institutions.' },
      { name: 'Diploma in Education', level: 'Diploma', duration: '2 Years', description: 'A foundational teaching qualification for primary school educators.' },
      { name: 'Higher Education Certificate', level: 'Certificate', duration: '1 Year', description: 'A bridging programme preparing students for university-level study in education and humanities.' },
    ],
    level: 'All Levels',
  },
  {
    id: 'business',
    name: 'Faculty of Business Administration & ICT',
    shortName: 'Business & ICT',
    icon: BriefcaseBusiness,
    description:
      'Equipping future leaders with the business acumen and technological fluency to thrive in a competitive global economy.',
    longDescription:
      'The Faculty of Business Administration & ICT combines management sciences with information technology to produce graduates equipped for 21st-century workplaces. Our curriculum emphasises critical thinking, problem solving, communication, collaboration, and innovation. Students engage in real-world business projects, case studies, and start-up ventures, building the practical skills and entrepreneurial mindset needed to succeed in today\u2019s dynamic business and technology landscape.',
    programs: [
      { name: 'Bachelor of Business Administration', level: 'Bachelor', duration: '3 Years', description: 'A comprehensive business degree covering management, finance, marketing, and entrepreneurship.' },
      { name: 'Bachelor of Science in Information Technology', level: 'Bachelor', duration: '3 Years', description: 'Programming, networking, system management, and emerging technologies for the digital economy.' },
      { name: 'Bachelor of Science in Computer Science', level: 'Bachelor', duration: '3 Years', description: 'Advanced computing theory, algorithms, software engineering, and data science fundamentals.' },
      { name: 'Master of Business Administration (MBA)', level: 'Masters', duration: '2 Years', description: 'Strategic leadership, organisational management, and advanced business decision-making.' },
      { name: 'Postgraduate Diploma in Project Planning & Management', level: 'Postgraduate Diploma', duration: '1 Year', description: 'Project design, monitoring, evaluation, and management for development professionals.' },
      { name: 'Diploma in Business Management', level: 'Diploma', duration: '2 Years', description: 'Foundational business skills in management, accounting, and marketing.' },
      { name: 'Diploma in Information Technology', level: 'Diploma', duration: '2 Years', description: 'Practical IT skills in networking, web development, and system administration.' },
      { name: 'Certificate in Computer Networking', level: 'Certificate', duration: '6 Months', description: 'Hands-on training in network design, configuration, and security.' },
      { name: 'Certificate in Multimedia & Graphic Design', level: 'Certificate', duration: '6 Months', description: 'Digital media production, graphic design principles, and creative software proficiency.' },
      { name: 'IT Fundamentals for Non-IT Workers', level: 'Certificate', duration: '3 Months', description: 'Essential digital literacy and IT skills for professionals in non-technical roles.' },
    ],
    level: 'All Levels',
  },
  {
    id: 'medicine',
    name: 'School of Allied Health Sciences',
    shortName: 'Health Sciences',
    icon: HeartPulse,
    description:
      'Advancing healthcare through integrative medicine, combining traditional healing knowledge with modern clinical science.',
    longDescription:
      'The Faculty of Alternative Medicine & Health Sciences pioneers an integrative approach to healthcare education. We combine traditional African healing knowledge with evidence-based modern clinical practice, producing graduates who can serve diverse healthcare needs. Our programmes are delivered in modern laboratories and through community-based clinical placements, ensuring students gain both theoretical knowledge and the practical experience needed to make a meaningful contribution to public health.',
    programs: [
      { name: 'Bachelor of Alternative Medicine', level: 'Bachelor', duration: '4 Years', description: 'An integrative medical degree combining traditional healing with modern clinical science.' },
      { name: 'Bachelor of Public Health', level: 'Bachelor', duration: '3 Years', description: 'Community health, epidemiology, health policy, and disease prevention strategies.' },
      { name: 'Diploma in Health Sciences', level: 'Diploma', duration: '2 Years', description: 'A broad health sciences foundation for entry into healthcare support roles.' },
      { name: 'Certificate in Public Health', level: 'Certificate', duration: '1 Year', description: 'Fundamentals of community health, sanitation, and disease prevention.' },
      { name: 'Certificate in First Aid & Emergency Response', level: 'Certificate', duration: '3 Months', description: 'Life-saving emergency response skills for healthcare workers and the public.' },
    ],
    level: 'All Levels',
  },
  {
    id: 'nursing',
    name: 'School of Nursing & Midwifery',
    shortName: 'Nursing & Midwifery',
    icon: FlaskConical,
    description:
      'Preparing compassionate, skilled nursing professionals through hands-on clinical training and simulation labs.',
    longDescription:
      'The Faculty of Nursing prepares compassionate, highly skilled nursing professionals through a combination of theoretical instruction, simulation laboratory practice, and real clinical placements. Our state-of-the-art simulation lab allows students to practice clinical procedures in a safe, controlled environment before working with real patients. Graduates are equipped to serve in hospitals, clinics, community health centres, and other healthcare settings across the region.',
    programs: [
      { name: 'Bachelor of Science in Nursing', level: 'Bachelor', duration: '4 Years', description: 'A comprehensive nursing degree with clinical placements and simulation lab training.' },
      { name: 'Diploma in Nursing', level: 'Diploma', duration: '3 Years', description: 'A practical nursing qualification with hands-on clinical experience.' },
      { name: 'Certificate in Midwifery', level: 'Certificate', duration: '1 Year', description: 'Specialised training in maternal care, childbirth, and postnatal support.' },
      { name: 'Certificate in Healthcare Assistance', level: 'Certificate', duration: '6 Months', description: 'Entry-level healthcare support skills for patient care assistance.' },
    ],
    level: 'All Levels',
  },
  {
    id: 'law',
    name: 'School of Law',
    shortName: 'Law',
    icon: Scale,
    description:
      'Training ethical, skilled legal professionals ready to serve justice, governance, and society in Uganda and beyond.',
    longDescription:
      'The School of Law offers a flexible, accredited Bachelor of Laws (LLB) programme designed to develop strong legal reasoning, advocacy, and professional ethics. Students learn from experienced lecturers and engage with contemporary legal issues affecting Uganda and the East African region. Graduates are prepared for careers in legal practice, public service, corporate counsel, and further professional legal training.',
    programs: [
      { name: 'Bachelor of Laws (LLB)', level: 'Bachelor', duration: '4 Years', description: 'A comprehensive law degree covering constitutional law, criminal law, contract, tort, and professional legal practice.' },
      { name: 'Diploma in Law', level: 'Diploma', duration: '2 Years', description: 'Foundational legal training for paralegals, legal assistants, and those preparing for further legal study.' },
    ],
    level: 'All Levels',
  },
  {
    id: 'vocational',
    name: 'School of Vocational Studies',
    shortName: 'Vocational',
    icon: Wrench,
    description:
      'Hands-on vocational and technical programmes that prepare graduates for skilled careers and entrepreneurship.',
    longDescription:
      'The School of Vocational Studies delivers practical, industry-aligned training in technical and applied fields. Programmes emphasise workshop practice, field attachments, and entrepreneurial skills so graduates are ready for employment or self-employment. The school supports the university\u2019s commitment to competence-based teaching and accessible pathways into higher education.',
    programs: [
      { name: 'Diploma in Vocational Studies', level: 'Diploma', duration: '2 Years', description: 'Broad vocational training with practical modules and workplace attachment.' },
      { name: 'Certificate in Technical Skills', level: 'Certificate', duration: '1 Year', description: 'Focused technical certificate for rapid entry into skilled work.' },
      { name: 'Higher Education Certificate (HEC)', level: 'Certificate', duration: '1 Year', description: 'Bridging programme for students progressing toward diploma or degree study.' },
    ],
    level: 'All Levels',
  },

];

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
  { value: '50+', label: 'Academic Programmes', icon: GraduationCap },
  { value: '100+', label: 'Faculty Members', icon: BriefcaseBusiness },
  { value: '7', label: 'Faculties & Schools', icon: Building2 },
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
    'Hands-on based teaching methodology',
    'Wide range of study programmes across faculties and schools',
    'Competence-based professional teaching',
    'Technology-enhanced learning with virtual campus and e-learning platform',
    'Research-oriented training across all programmes',
    'Student engagement in business start-up ventures and field attachments',
    'Multiple intakes per year including August 2026 intake',
    'Flexible payment plans, half bursaries and scholarship opportunities',
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
    { title: 'Board of Directors', description: 'The governing body responsible for the strategic direction and oversight of the university.' },
    { title: 'Chancellor', description: 'The ceremonial head of the university who confers degrees and represents the institution at official functions.' },
    { title: 'University Council', description: 'The policy-making organ of the university, responsible for academic and administrative governance.' },
    { title: 'Senate', description: 'The supreme academic authority, responsible for academic programmes, standards, and regulations.' },
    { title: 'Management', description: 'The day-to-day leadership team led by the Vice Chancellor and Deputy Vice Chancellars.' },
  ],
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
  { name: 'Prof. David Ssali', role: 'Dean, Faculty of Business Administration & ICT', category: 'Academic', initials: 'DS', qualification: 'PhD, University of Cape Town' },
  { name: 'Dr. Esther Namaganda', role: 'Dean, Faculty of Education & Humanities', category: 'Academic', initials: 'EN', qualification: 'PhD, University of Bristol' },
  { name: 'Dr. Robert Kato', role: 'Dean, Faculty of Alternative Medicine & Health Sciences', category: 'Academic', initials: 'RK', qualification: 'MD, Mbarara University' },
  { name: 'Prof. Janet Amongi', role: 'Dean, Faculty of Nursing', category: 'Academic', initials: 'JA', qualification: 'PhD, University of Edinburgh' },
  { name: 'Dr. Samuel Wamala', role: 'Head of Department, Information Technology', category: 'Academic', initials: 'SW', qualification: 'PhD, University of Pretoria' },
  { name: 'Dr. Peter Busimba', role: 'Head of Department, Computer Science', category: 'Academic', initials: 'PB', qualification: 'PhD, University of the Witwatersrand' },
  { name: 'Ms. Ruth Achan', role: 'Head of Department, Business Management', category: 'Academic', initials: 'RA', qualification: 'MBA, Makerere University' },
  { name: 'Dr. Moses Opio', role: 'Head of Department, Education', category: 'Academic', initials: 'MO', qualification: 'PhD, University of Nairobi' },
  { name: 'Dr. Alice Nabwire', role: 'Head of Department, Health Sciences', category: 'Academic', initials: 'AN', qualification: 'PhD, Mbarara University' },
  { name: 'Ms. Harriet Nankya', role: 'Head of Department, Nursing', category: 'Academic', initials: 'HN', qualification: 'MSc Nursing, Makerere University' },
  { name: 'Mr. Brian Ssebunya', role: 'Lecturer, Multimedia & Graphic Design', category: 'Academic', initials: 'BS', qualification: 'MA, Uganda Christian University' },
  { name: 'Dr. Christine Atukunda', role: 'Lecturer, Public Health', category: 'Academic', initials: 'CA', qualification: 'PhD, University of Ghent' },
  { name: 'Mr. Felix Owino', role: 'Lecturer, Computer Networking', category: 'Academic', initials: 'FO', qualification: 'MSc, Kyambogo University' },
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
    date: '2026-09-20',
    day: '20',
    month: 'Sep',
    title: 'Faculty of Nursing Graduation Ceremony',
    time: '10:00 AM',
    location: 'Main Hall, Avance Campus',
    category: 'Ceremony',
    description: 'Celebrating the achievements of our latest cohort of nursing graduates as they enter the healthcare profession.',
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
  { programme: 'PhD Programmes', uganda: 'Coming Soon', international: 'Coming Soon', perLabel: '—' },
  { programme: 'Masters Degree Programmes', uganda: 'UGX 2,800,000', international: 'USD 950', perLabel: 'per semester' },
  { programme: 'Postgraduate Diploma Programmes', uganda: 'UGX 1,800,000', international: 'USD 600', perLabel: 'per semester' },
  { programme: 'Undergraduate Programmes', uganda: 'UGX 1,200,000', international: 'USD 400', perLabel: 'per semester' },
  { programme: 'Diploma Programmes', uganda: 'UGX 800,000', international: 'USD 270', perLabel: 'per semester' },
  { programme: 'Certificate Programmes', uganda: 'UGX 500,000', international: 'USD 170', perLabel: 'per semester' },
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
    description: 'AVIU offers merit-based scholarships and early-bird discounts for qualifying students. Contact the admissions office for current opportunities.',
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
    answer: 'Yes, merit-based scholarships and early-bird discounts are available for qualifying students. The admissions office can provide details on current scholarship opportunities and eligibility criteria.',
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
