import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";

function App() {
  const [active, setActive] = useState(null);

  var faq = [
    {
      id: 1,
      question: "What is Theoretical Astronomy?",
      answer:
        "It is an area of astronomy where scientists use mathematical models to better describe what is observed and even to describe events we cannot observe with our current technology.",
    },
    {
      id: 2,
      question: "What is Solar Astronomy?",
      answer:
        "It is an area where scientists focus on the sun. This can be an important field of science as sun activity can have a major impact on the Earth.",
    },
    {
      id: 3,
      question: "What is Planetary Astronomy?",
      answer:
        "It is an area of science focused on learning more about planets, moons, asteroids, and comets. From this we can learn how planets and other objects were formed and what they are made of.",
    },
    {
      id: 4,
      question: "What is Stellar Astronomy?",
      answer:
        "It is the study of stars including how they are formed, what they are made of, and their life cycle. This includes various types of stars and their final state including interesting objects like red giants, black holes, supernovas, and neutron stars.",
    },
    {
      id: 5,
      question: " Why is gravity important?",
      answer:
        "Gravity is very important to our everyday lives. Without Earth's gravity we would fly right off it. We'd all have to be strapped down. If you kicked a ball, it would fly off forever. While it might be fun to try for a few minutes, we certainly couldn't live without gravity.",
    },
    {
      id: 6,
      question: "How can you find equivalent fractions?",
      answer:
        "Equivalent fractions can be found by multiplying or dividing both the numerator and the denominator by the same number.",
    },
    {
      id: 7,
      question: "What are Atoms?",
      answer:
        "The atom is the basic building block for all matter in the universe. Atoms are extremely small and are made up of a few even smaller particles. The basic particles that make up an atom are electrons, protons, and neutrons.",
    },
    {
      id: 8,
      question: "What are Protons?",
      answer:
        "The proton is a positively charged particle that is located at the center of the atom in the nucleus. The hydrogen atom is unique in that it only has a single proton and no neutron in its nucleus.",
    },
    {
      id: 9,
      question: "What are Electrons?",
      answer:
        " The electron is a negatively charged particle that spins around the outside of the nucleus. Electrons spin so fast around the nucleus, scientists can never be 100% sure where they are located, but scientists can make estimates of where electrons should be. If there are the same number of electrons and protons in an atom, then the atom is said to have a neutral charge. Electrons are attracted to the nucleus by the positive charge of the protons. Electrons are much smaller than neutrons and protons. About 1800 times smaller!",
    },
    {
      id: 10,
      question: "What are Neutrons?",
      answer:
        "The neutron doesn't have any charge. The number of neutrons affects the mass and the radioactivity of the atom.",
    },
    {
      id: 11,
      question: "What is a Black Hole?",
      answer:
        "Black holes are one of the most mysterious and powerful forces in the universe. A black hole is where gravity has become so strong that nothing around it can escape, not even light. The mass of a black hole is so compact, or dense, that the force of gravity is too strong for even light to escape.",
    },
    {
      id: 12,
      question: "What is a Constellation?",
      answer:
        "A constellation is a group of visible stars that form a pattern when viewed from Earth. The pattern they form may take the shape of an animal, a mythological creature, a man, a woman, or an inanimate object such as a microscope, a compass, or a crown.",
    },
    {
      id: 13,
      question: "What is Nuclear Fission?",
      answer:
        "Nuclear fission is the process of splitting of a large atom into two or more smaller atoms. When an atom is split a huge amount of energy is released. When the energy is released in a slow controlled manner, it can be used to generate electricity to power our homes. When the energy is released all at once, a chain reaction occurs causing a nuclear explosion.",
    },
    {
      id: 14,
      question: "What is Nuclear Fusion?",
      answer:
        "Another form of nuclear energy is nuclear fusion. Fusion occurs when two or more atoms are joined together to make a larger atom. Stars get their power from nuclear fusion. Deep inside a star, hydrogen atoms are constantly being converted by fusion into helium atoms. It's this process that generates the light and heat energy given off by the stars including the Sun.",
    },
    {
      id: 15,
      question: "What is a Comet?",
      answer:
        "Comets are lumps of ice, dust, and rock that orbit the Sun. The typical comet has a core that is a few kilometers in diameter. Comets are often called the dirty snowballs of the Solar System.",
    },
  ];

  return (
    <div className="h-full w-screen bg-slate-800 flex justify-center items-center">
      <div className="w-[85%] max-w-7xl m-auto bg-slate-300 p-10 rounded-md shadow-md">
        <h2 className="mb-10 text-2xl font-semibold font-serif text-purple-600">
          Frequently Asked Questions
        </h2>

        {faq.map((item) => (
          <div key={item.id} className="mb-4 last:mb-0">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-xl border border-b-0 border-gray-200 bg-slate-100 p-5 text-left font-medium text-slate-500 hover:bg-blue-100 focus:ring-4 focus:ring-blue-200 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-gray-800 dark:focus:ring-blue-800"
              onClick={() => setActive(active === item.id ? null : item.id)}
            >
              <span>{item.question}</span>
              <svg
                data-accordion-icon
                className={`h-3 w-3 shrink-0 ${active === item.id ? 'rotate-180' : 'rotate-0'}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
            <AnimatePresence>
              {active === item.id && (
                <motion.div
                  initial={{opacity: 0, height: 0}}
                  animate={{opacity: 1, height: "auto "}}
                  exit={{opacity: 0, height: 0}}
                  className="mt-4 text-slate-600 mx-4"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
