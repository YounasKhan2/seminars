import { seminars } from "../../data/seminars";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SeminarDetail() {
  const router = useRouter();
  const { id } = router.query;
  const seminar = seminars.find((s) => s.id === id);

  if (!seminar) {
    return <div className="py-12 text-center text-gray-600">Seminar not found.</div>;
  }

  // Scholarship and career guidance info by department
  const fieldScholarships = {
    "Software Engineering": [
      "DAAD Germany Scholarships for Computer Science (BS/MS)",
      "Erasmus Mundus Joint Master Degrees (Europe)",
      "Fulbright USA (STEM fields)",
      "KAIST South Korea Scholarships (Tech)"
    ],
    "Medical Sciences": [
      "Rhodes Scholarship (UK, MS/PhD)",
      "Chevening UK (Health Sciences)",
      "Chinese Government Scholarship (MBBS/MS)",
      "Erasmus+ Health Programs (Europe)"
    ],
    "Business & Economics": [
      "Erasmus Mundus (Business)",
      "Chevening UK (Business/Finance)",
      "Fulbright USA (Business)",
      "Asian Development Bank-Japan Scholarship (MS)"
    ],
    "Agricultural Sciences": [
      "VLIR-UOS Belgium (Agri MS)",
      "Erasmus+ Agri Programs (Europe)",
      "Chinese Government Scholarship (Agri)",
      "Australia Awards (Agri)"
    ],
    "Engineering": [
      "DAAD Germany (Engineering)",
      "Erasmus+ Engineering Programs (Europe)",
      "MEXT Japan (Engineering)",
      "Fulbright USA (Engineering)"
    ],
    "Law": [
      "Chevening UK (Law)",
      "Erasmus Mundus (Law/LLM)",
      "Fulbright USA (Law)",
      "Australia Awards (Law)"
    ],
    "Arts & Humanities": [
      "Erasmus Mundus (Arts)",
      "Chevening UK (Humanities)",
      "Fulbright USA (Arts)",
      "DAAD Germany (Humanities)"
    ],
    "Environmental Sciences": [
      "Erasmus+ Environmental Programs (Europe)",
      "DAAD Germany (Env. Science)",
      "Australia Awards (Env. Science)",
      "Chevening UK (Environment)"
    ],
    "Psychology": [
      "Erasmus Mundus (Psychology)",
      "Chevening UK (Psychology)",
      "Fulbright USA (Psychology)",
      "DAAD Germany (Psychology)"
    ]
  };

  // Field-specific professional content for "Why Apply for Abroad Scholarships?"
  const fieldScholarshipContent = {
    "Software Engineering": `Unlock your future in tech by studying abroad on a fully funded scholarship. Top programs offer not only tuition and stipends, but also access to cutting-edge labs, global tech mentors, and innovation hubs. You'll gain hands-on experience with the latest AI, cloud, and software tools, collaborate with international teams, and build a portfolio that stands out to employers worldwide. Scholarships often include travel, health insurance, and exclusive networking events with industry leaders. Seize this chance to become a global tech innovator!`,
    "Medical Sciences": `Pursuing medical studies abroad opens doors to world-class hospitals, research centers, and clinical training. Scholarships cover tuition, living costs, and provide mentorship from leading physicians and researchers. You'll participate in groundbreaking research, access advanced medical technology, and join a global network of healthcare professionals. These experiences prepare you for international medical exams and leadership roles in global health.`,
    "Business & Economics": `International business scholarships offer more than financial support—they immerse you in diverse markets, case competitions, and internships at multinational firms. You'll learn from top professors, build a global network, and develop the skills needed to thrive in finance, consulting, or entrepreneurship. Many programs include leadership training, travel grants, and access to exclusive business incubators.`,
    "Agricultural Sciences": `Study agriculture abroad to access advanced research in food security, agri-tech, and sustainability. Scholarships provide funding, research opportunities, and fieldwork with global organizations like FAO and CGIAR. You'll learn innovative farming techniques, contribute to food policy, and build a network of agri-leaders.`,
    "Engineering": `Engineering scholarships abroad offer access to world-class labs, industry internships, and collaborative projects. You'll work on real-world challenges, learn from top engineers, and gain skills in robotics, renewable energy, and more. Programs often include stipends, travel, and career placement support.`,
    "Law": `Law scholarships abroad enable you to study at prestigious universities, participate in moot courts, and intern with international law firms or NGOs. You'll gain expertise in comparative law, human rights, and legal tech, while building a global professional network. Funding covers tuition, living expenses, and often includes conference travel.`,
    "Arts & Humanities": `Arts and humanities scholarships support creative exploration, research, and cultural exchange. Study abroad to access world-renowned faculty, artist residencies, and international exhibitions. Funding covers tuition, living costs, and travel, empowering you to share your work on a global stage.`,
    "Environmental Sciences": `Environmental scholarships abroad connect you with sustainability leaders, research projects, and fieldwork in diverse ecosystems. You'll gain hands-on experience in climate science, conservation, and policy, with funding for research, travel, and conferences.`,
    "Psychology": `Psychology scholarships abroad offer access to leading research labs, clinical training, and international conferences. You'll collaborate with experts, participate in cross-cultural studies, and gain skills for a global career in mental health or research.`
  };

  // Field-specific professional content for "Career Guidance for Global Success"
  const fieldCareerGuidanceContent = {
    "Software Engineering": `Accelerate your tech career by building a strong portfolio, contributing to open source, and networking with global professionals. Leverage LinkedIn, GitHub, and tech communities to find internships and remote jobs. Prepare for technical interviews and stay updated with the latest trends in AI, cloud, and cybersecurity.`,
    "Medical Sciences": `Prepare for international medical exams (USMLE, PLAB), seek research internships, and connect with global health organizations. Attend medical conferences, publish research, and volunteer in global health initiatives to enhance your profile.`,
    "Business & Economics": `Pursue professional certifications (CFA, ACCA), attend business case competitions, and network with alumni in multinational firms. Develop leadership and analytical skills, and seek internships in finance, consulting, or entrepreneurship.`,
    "Agricultural Sciences": `Engage in agri-tech research, apply for international conferences, and seek internships with organizations like FAO or UN. Stay updated on sustainable practices and build a network with agri-innovators.`,
    "Engineering": `Participate in engineering competitions, publish research, and apply for global internships (Siemens, ABB, etc). Build a portfolio of projects and connect with industry mentors.`,
    "Law": `Consider pursuing an LLM abroad, join moot court competitions, and connect with international legal networks. Seek internships with law firms, NGOs, or international organizations to gain practical experience.`,
    "Arts & Humanities": `Build a creative portfolio, apply for artist residencies, and seek scholarships for cultural exchange programs. Participate in international exhibitions, workshops, and collaborate with artists worldwide.`,
    "Environmental Sciences": `Join global sustainability projects, apply for research grants, and network with NGOs. Attend international conferences and contribute to climate action initiatives.`,
    "Psychology": `Engage in research, attend international psychology conferences, and seek internships in global health organizations. Build a strong academic profile and connect with mentors in your field.`
  };

  const scholarships = fieldScholarships[seminar.department] || [];
  const scholarshipContent = fieldScholarshipContent[seminar.department] ||
    `Studying abroad on a fully funded scholarship is more than just financial support—it's a gateway to a world-class education, global exposure, and a life-changing experience. Top international scholarships for BS and MS students not only cover tuition fees and living expenses with generous monthly stipends, but also provide travel allowances, health insurance, and access to exclusive academic and professional networks. As a scholarship recipient, you will benefit from mentorship by leading experts, hands-on research opportunities, and the chance to collaborate with peers from around the world. These programs are designed to nurture future leaders and innovators, giving you a competitive edge in your field and opening doors to global career opportunities. Don’t miss your chance to transform your future—apply for these prestigious scholarships and take the first step towards an extraordinary academic journey.`;
  const careerGuidanceContent = fieldCareerGuidanceContent[seminar.department] ||
    `Our seminars are designed to empower you with the knowledge, skills, and connections needed to excel in your chosen field—both locally and internationally. Receive personalized guidance on building a standout academic and professional profile, crafting winning applications, and preparing for interviews. Learn how to secure internships, research positions, and job placements at top organizations worldwide. Through expert-led sessions and networking with successful alumni, you’ll discover proven strategies to navigate the global job market, leverage international experiences, and position yourself as a leader in your industry. Take advantage of our resources and mentorship to unlock your full potential and achieve your career aspirations on a global stage.`;

  return (
    <section className="py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">{seminar.title}</h1>
      <div className="mb-2 text-gray-700">Speaker: {seminar.speaker}</div>
      <div className="mb-4 text-gray-700">{seminar.abstract}</div>
      <div className="mb-4 text-gray-700"><strong>Speaker Bio:</strong> {seminar.bio}</div>
      <div className="mb-6">
        <strong>Schedule:</strong>
        <ul className="list-disc ml-6 mt-2">
          {seminar.schedule.map((item, idx) => (
            <li key={idx}>{item.time} – {item.activity}</li>
          ))}
        </ul>
      </div>
      <h2 className="text-xl font-semibold mb-2 text-blue-800">Abroad Scholarships for BS & MS Students</h2>
      <div className="mb-8">
        <p className="mb-3 text-gray-800 text-base">
          <strong>Why Apply for Abroad Scholarships?</strong> <br />
          {scholarshipContent}
        </p>
        <ul className="list-disc ml-6">
          {scholarships.map((sch, idx) => (
            <li key={idx}>{sch}</li>
          ))}
        </ul>
      </div>
      <h2 className="text-xl font-semibold mb-2 text-blue-800">Career Guidance</h2>
      <div className="mb-8">
        <p className="mb-3 text-gray-800 text-base">
          <strong>Career Guidance for Global Success:</strong> <br />
          {careerGuidanceContent}
        </p>
      </div>
      <Link href="/register" className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition">Register for Seminar</Link>
    </section>
  );
}
