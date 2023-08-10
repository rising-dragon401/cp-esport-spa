import { ApplicationValues } from "@/components/types";
import { Option } from "@/providers/types";

export const privacyPolicies = [
  {
    subTitle: "Last updated: [Date]",
    descriptions: [
      `This Privacy Policy outlines how [Your Website Name] ("we," "us," or "our") collects, uses, and protects the personal information of visitors to our website. We are committed to ensuring the privacy and security of your personal information and complying with all applicable data protection laws and regulations.`,
      `By accessing or using our website, you agree to the terms and practices described in this Privacy Policy. If you do not agree with any aspect of this policy, please refrain from using our website.`,
    ],
  },
  {
    subTitle: "Information We Collect",
    descriptions: [
      `When you visit our website, we may collect certain personally identifiable information ("Personal Information") that you voluntarily provide through online forms, including but not limited to:`,
      `- Full name <br/>
    - Email address <br/>
    - Contact number <br/>
    - Educational background <br/>
    `,
      `Additionally, we may collect non-personally identifiable information ("Non-Personal Information") such as your IP address, browser type, operating system, and browsing behavior. This information is collected automatically through cookies or other tracking technologies and helps us improve our website and provide a better user experience.`,
    ],
  },
  {
    subTitle: "Use of Information",
    descriptions: [
      `We will use the Personal Information you provide to contact you regarding scholarship opportunities for online degree programs in the fields of Associates, Bachelors, or Masters. We may use your contact information to send you relevant updates, promotional materials, or other communications related to these opportunities.`,
      `The Non-Personal Information we collect is used for statistical analysis, website optimization, and marketing purposes. This information helps us understand how users interact with our website and improve its content and functionality.`,
    ],
  },
  {
    subTitle: "Data Security",
    descriptions: [
      `We have implemented appropriate technical and organizational measures to safeguard your Personal Information and protect it against unauthorized access, loss, or misuse. We regularly review our security procedures to ensure your data is protected to the best of our ability. However, please note that no method of transmission or storage over the Internet is 100% secure, and we cannot guarantee absolute security of your data.`,
    ],
  },
  {
    subTitle: "Disclosure of Information",
    descriptions: [
      `We will not disclose your Personal Information to third parties without your explicit consent unless required by law or as necessary to fulfill the purpose for which it was provided. However, we may share your Non-Personal Information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, as long as they agree to keep your information confidential.`,
    ],
  },
  {
    subTitle: "Your Rights",
    descriptions: [
      `You have the right to access, update, or delete your Personal Information that we hold. If you wish to exercise any of these rights, please contact us using the contact information provided below.`,
    ],
  },
  {
    subTitle: "Third-Party Links",
    descriptions: [
      `Our website may contain links to third-party websites. Please note that we are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party websites you visit.`,
    ],
  },
  {
    subTitle: "Updates to Privacy Policy",
    descriptions: [
      `We reserve the right to update or modify this Privacy Policy at any time, and such changes will be effective immediately upon posting the updated policy on our website. It is your responsibility to review this policy periodically to stay informed about our privacy practices.`,
    ],
  },
  {
    subTitle: "Contact Us",
    descriptions: [
      `If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at [Contact Email/Phone Number].`,
      `By using our website, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your personal information as described herein.`,
    ],
  },
];

export const requirements = [
  {
    subTitle: "College Requirements for Online Programs",
    descriptions: [
      `To ensure a smooth application process for our online undergraduate and graduate programs, it is essential for students to have certain documents and meet specific requirements. Please review the following guidelines to understand what you need to have ready:`,
    ],
  },
  {
    subTitle: "High School or College Transcript or G.E.D.",
    descriptions: [
      `- Proof of high school completion or equivalent (GED) is required.`,
      `- College transcripts from any previously attended colleges must be provided.`,
      `- Students who have completed an associate degree do not need to submit high school transcripts.`,
      `- Official transcripts are required prior to starting classes.`,
    ],
  },
  {
    subTitle: "Undergraduate Online Admissions Requirements",
    descriptions: [``],
  },
  {
    subTitle: "",
    descriptions: [
      `To apply for an online undergraduate program, students must:`,
      `1. Complete an Online Undergraduate Application.`,
      `2. Provide proof of high school completion or equivalent (GED).`,
      `3. Submit college transcripts from any previously attended colleges.`,
      `  - Note: Students who have completed an associate degree do not need to submit high school transcripts.`,
      `4. Official transcripts are required prior to starting classes.`,
    ],
  },
  {
    subTitle: "Graduate Admissions Requirements",
    descriptions: [
      `To apply for a graduate program, students must:`,
      `1. Complete an Online Graduate Application.`,
      `2. Meet program-specific requirements, as outlined below:`,
      `   - Provide unofficial transcripts demonstrating the completion of a bachelor's degree.`,
      `  - Official transcripts are required prior to starting classes.`,
      `   - Submit a personal essay or Statement of Purpose addressing one of the specified topics:`,
      `     - Describe and articulate how obtaining this degree will help further your career, and how your career and experiences to date have prepared you for this degree or career path (300-500 words).`,
      `     - For 60-credit Counseling Psychology program only: Describe and articulate how obtaining this degree will help further your career, how your career and experiences have prepared you for this career path, and identify the populations you hope to work with and those with whom you think you would work successfully (400-600 words).`,
      `   - Provide two current (not more than 1 year old) letters of recommendation from individuals with whom you have closely worked in a professional or academic setting, supporting your admission.`,
    ],
  },
  {
    subTitle: "Transfer Credits",
    descriptions: [
      `For graduate programs, students may transfer up to 9 graduate credits from another regionally accredited graduate program. A minimum grade of B- is required.`,
      `Please note that this is a summary of the requirements. `,
    ],
  },
];

export const bannerDescriptions = [
  `We were once gamers just like you. Every button push, every tactical choice, and every move was in tune with the game. We flourished in the exciting realm of Esports, discovering virtual worlds and showcasing our prowess in
  constantly changing arenas. But as time went on, we became patrons instead than participants.`,
  `We hoped for a opportunity that would combine our love of gaming and professional development throughout our gaming adventure. But as Esports was still in its infancy, no such path had yet been created.`,
  `Now that we are in a position to do so, we can provide gamers like you the chance to channel their abilities and
  enthusiasm into entering the world of Esports.
  `,
  `Please fill out this intake form. We will reach out to you as soon as we can to discuss this opportunity with you.`,
];

export const navItems = [
  {
    label: "Scholarship Opportunities",
    slug: "",
  },
  {
    label: "About Us",
    slug: "about-us",
  },
  {
    label: "Our Offer",
    slug: "our-offer",
  },
];

export const defaultApplicationValues: ApplicationValues = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  age: "",
  phoneNumber: "",
  homeState: "",
  anticipatedStartingSemester: "",
  bachelorOfArt: "",
  bachelorOfScience: "",
  associateOfArt: "",
  certificateProgram: "",
  masterProgram: "",
  graduateCertificate: "",
  levelOfEducation: "",
  priorCollegeAttendance: "",
  financialAid: "",
  veteran: "",
  heardAboutUs: "",
  comments: "",
};

export const errorLabels = {
  firstName: "First Name",
  lastName: "Last Name",
  emailAddress: "Email Address",
  age: "Age",
  phoneNumber: "Phone Number",
  homeState: "Home State",
  anticipatedStartingSemester: "Anticipated Starting Semester",
  // bachelorOfArt: "Bachelor of Art",
  // bachelorOfScience: "Bachelor of Science",
  // associateOfArt: "Associate of Art",
  // certificateProgram: "Certificate Program",
  // masterProgram: "Master Program",
  // graduateCertificate: "Graduate Certificate",
  levelOfEducation: "Level of Education",
  // priorCollegeAttendance: "Prior College Attendance",
  financialAid: "Financial Aid",
  veteran: "Veteran",
  heardAboutUs: "Heard About Us",
  comments: "Comments",
};

export const anticipatedStartingSemesterOptions: Option[] = [
  {
    label: "Sept 2023",
    value: "Sept 2023",
  },
  {
    label: "November 2023",
    value: "November 2023",
  },
  {
    label: "Jan 2024",
    value: "Jan 2024",
  },
  {
    label: "March 2024",
    value: "March 2024",
  },
  {
    label: "May 2024",
    value: "May 2024",
  },
];

export const bachelorOfArtOptions: Option[] = [
  "Communication and Media Studies",
  "Early Childhood Education and Care",
  "English",
  "Liberal Arts",
  "Psychology",
  "Sociology",
].map((item) => ({ label: item, value: item }));

export const bachelorOfScienceOptions: Option[] = [
  "Human Resource Management",
  "Criminal Justice, Human Services",
  "Early Childhood Education and Early Intervention",
  "Information Technology",
  "Cybersecurity",
  "Game Development",
  "Software Engineering",
  "Management",
  "Healthcare",
  "Health Information",
  "Project Management",
  "Marketing",
  "Digital Marketing",
  "RN to BSN",
].map((item) => ({ label: item, value: item }));

export const associateOfArtOptions: Option[] = [
  "Early Childhood Education",
  "Early Childhood Education Director Concentration",
  "Psychology",
  "Business Administration",
  "Computer Technology Cybersecurity",
  "Computer Technology Web Development",
  "Criminal Justice",
  "General Studies",
  "Health Information Technology",
].map((item) => ({ label: item, value: item }));

export const certificateProgramOptions: Option[] = [
  "Computer Technology Cybersecurity",
  "Computer Technology Web Development",
  "Early Childhood Education",
  "Medical Coding",
].map((item) => ({ label: item, value: item }));

export const masterProgramOptions: Option[] = [
  "Business Administration (MBA)",
  "Cybersecurity",
  "Healthcare Management",
  "Arts in Counseling Psychology",
  "Arts in Psychology",
  "Science in Criminal Justice",
].map((item) => ({ label: item, value: item }));

export const graduateCertificateOptions: Option[] = [
  "Addictions Counseling",
  "Financial Management",
  "Healthcare Management",
  "Organizational Leadership",
].map((item) => ({ label: item, value: item }));

export const levelOfEducationOptions: Option[] = [
  "G.E.D.",
  "High School",
  "High School Grad",
  "Transfer from other college",
].map((item) => ({ label: item, value: item }));

export const financialAidOptions: Option[] = ["Yes", "No"].map((item) => ({
  label: item,
  value: item,
}));

export const veteranOptions: Option[] = ["Yes", "No"].map((item) => ({
  label: item,
  value: item,
}));
