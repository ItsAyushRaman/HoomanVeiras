import { useState } from "react";
import { plus } from "../AllAssets";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is PRISM?",
    answer:
      "PRISM is the flagship technical fest of the UoL, featuring hackathons, coding, robotics, and more, providing a platform to showcase technical skills and creativity",
  },
  {
    question: "Who can participate?",
    answer:
      "Students and tech enthusiasts of all skill levels. Check the rules for eligibility details.",
  },
  {
    question: "How do I register?",
    answer:
      "Visit the PRISM website, fill out the form, choose your events , and submit before the deadline.",
  },
  {
    question: "Can I join multiple events?",
    answer:
      "Yes, you can participate in multiple events, provided their timings don’t overlap.",
  },
  {
    question: "Are there prizes for winners",
    answer:
      "Yes! Top 3 rankers get prizes, along with trophies, certificates, and recognition.",
  },
  {
    question: "Do I need prior experience to participate?",
    answer:
      "No! PRISM welcomes all skill levels, offering events for beginners and experts alike.",
  },
  {
    question: "Who do I contact for more details?",
    answer:
      "Email us at prism2025.contact@gmail.com or call us at +91 9170739909 for assistance.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-[800px] sm:min-h-[680px] md:min-h-[660px] lg:min-h-[625px] max-w-full mx-0 flex flex-col gap-6 py-5 md:flex-row md:justify-between">
      <div className="desc flex flex-col gap-4 md:max-w-[35%]">
        <div className="header font-sephora text-white text-3xl md:text-4xl font-normal leading-[34px] tracking-[2px] text-left">
          Got Questions
        </div>
        <div className="para font-sans text-white text-base md:text-lg font-normal leading-6 md:leading-[27.28px] tracking-[1px] text-left">
          Find answers to common questions about the event, including event
          times, parking information, and accommodation options.
        </div>
      </div>
      <div className="min-w-full md:min-w-[60%] md:max-w-xs lg:min-w-[678px] flex flex-col gap-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF10] px-4 py-3 rounded-lg border-transparent border-t-[1px] bg-clip-border [border-image-source:linear-gradient(91.45deg,#9747FF_2.05%,#D1AEFF_76.2%,#EADAFF_107.98%)] [border-image-slice:1]"
          >
            <div
              className="question-bar flex justify-between items-center hover:cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="text-white font-medium text-base md:text-xl">
                {faq.question}
              </div>
              <img
                src={plus}
                alt="toggle icon"
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                }`}
              />
            </div>
            <div
              className={`answer-bar text-white text-sm md:text-lg font-light 
                overflow-hidden transition-all duration-500 ease-in-out
                ${
                  openIndex === index
                    ? "max-h-96 mt-2 opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
