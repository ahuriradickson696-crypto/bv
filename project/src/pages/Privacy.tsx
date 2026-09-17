import { PageHero } from '@/components/PageHero';
import { pageImages } from '@/data/pageImages';
import { universityInfo } from '@/data/university';

export function Privacy() {
  return (
    <div className="page-content">
      <PageHero
        images={pageImages.about}
        eyebrow="Legal"
        title={<>Privacy &amp; <em>Terms</em></>}
        subtitle="How Avance International University handles your personal data and the terms that apply when you use this website and our services."
      />

      <section className="section-pad">
        <div className="prose-block">
          <h2>Privacy notice</h2>
          <p>
            {universityInfo.name} (&quot;we&quot;, &quot;us&quot;) collects and processes personal information that you provide when you apply for admission, enquire about programmes, subscribe to our newsletter, or contact us. This may include your name, email, phone number, academic history, and other details needed for admissions and student support.
          </p>
          <p>
            We use this information to process applications, respond to enquiries, improve our services, and (where you have consented) send updates about admissions, events, and university news. We do not sell your personal data. We may share data with service providers who support our operations (for example email or hosting) under appropriate safeguards, and with regulators such as the National Council for Higher Education (NCHE) where required by law.
          </p>
          <p>
            You may request access to, correction of, or deletion of your personal data by contacting us at {universityInfo.email} or {universityInfo.phone}. We retain application and student records for as long as needed for academic, legal, and archival purposes.
          </p>

          <h2>Terms of use</h2>
          <p>
            This website is provided for information about {universityInfo.name}. Programme details, fees, and dates are indicative and may change; always confirm with the Admissions Office or Academic Registrar. Content on this site is owned by the university or its licensors. You may not copy or redistribute material for commercial purposes without permission.
          </p>
          <p>
            Application submissions and other forms are subject to university regulations. Providing false information may lead to rejection of an application or disciplinary action. External links (including e-learning and social media) are provided for convenience; we are not responsible for their content.
          </p>
          <p>
            For questions about privacy or these terms, contact: {universityInfo.email} · {universityInfo.phone} · {universityInfo.address}.
          </p>
        </div>
      </section>
    </div>
  );
}
