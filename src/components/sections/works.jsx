import React, { useState } from "react";

const workExperiences = [
  {
    company: "Apple",
    logo: "/vercel.svg",
    role: "Senior Software Engineer",
    period: "Jan 2021 - Jun 2021",
    location: "Cupertino, CA",
    achievements: [
      "Worked on the Apple Music team",
      "Increased the revenue of the company from $80 billion to $1 Trillion",
      "Built a new feature that allowed users to listen to music while they were sleeping",
    ],
  },
  {
    company: "Google",
    logo: "/vercel.svg",
    role: "Software Engineer",
    period: "Jul 2020 - Dec 2020",
    location: "Mountain View, CA",
    achievements: [
      "Worked on the Google Search team",
      "Improved search algorithm efficiency by 15%",
      "Developed new features for Google Maps",
    ],
  },
  {
    company: "Microsoft",
    logo: "/vercel.svg",
    role: "Junior Developer",
    period: "Jan 2020 - Jun 2020",
    location: "Redmond, WA",
    achievements: [
      "Contributed to the development of Windows 11",
      "Implemented new security features for Microsoft 365",
      "Collaborated on Azure cloud services improvements",
    ],
  },
  {
    company: "Netflix",
    logo: "/vercel.svg",
    role: "Intern",
    period: "Jun 2019 - Dec 2019",
    location: "Los Gatos, CA",
    achievements: [
      "Assisted in developing the recommendation algorithm",
      "Worked on improving streaming quality for mobile devices",
      "Participated in A/B testing of new user interface designs",
    ],
  },
];

const Works = () => {
  const [selectedCompany, setSelectedCompany] = useState(
    workExperiences[0].company
  );

  const selectedExperience = workExperiences.find(
    (exp) => exp.company === selectedCompany
  );

  return (
    <div className=" text-white max-w-5xl mx-auto -translate-y-10">
      <h2 className="text-4xl font-bold mb-2">Work Experience</h2>
      <p className="text-gray-400 mb-8">
        I switch a lot of companies. It's mostly about the culture.
      </p>

      <div className="flex flex-col md:flex-row max-w-4xl mx-auto">
        <div className="w-full md:w-1/4 pr-4 mb-4 md:mb-0">
          {workExperiences.map((exp) => (
            <button
              key={exp.company}
              className={`flex items-center mb-4 p-2 rounded-md w-full ${
                selectedCompany === exp.company ? "bg-gray-700" : ""
              }`}
              onClick={() => setSelectedCompany(exp.company)}
            >
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-6 h-6 mr-2"
              />
              <span>{exp.company}</span>
            </button>
          ))}
        </div>

        <div className="w-full md:w-3/4  p-6 rounded-md">
          <h3 className="text-2xl font-semibold mb-2">
            {selectedExperience.role}
            <span className="text-cyan-400">
              {" "}
              @ {selectedExperience.company}
            </span>
          </h3>
          <p className="text-gray-400 mb-2">{selectedExperience.period}</p>
          <p className="text-gray-400 mb-4">{selectedExperience.location}</p>
          <ul className="list-none">
            {selectedExperience.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start mb-2">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Works;
