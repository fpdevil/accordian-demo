import {AnimatePresence, motion} from "framer-motion";
import PropTypes from 'prop-types';
import {useState} from "react";

export const Accordian = ({id, question, answer}) => {
  const [active, setActive] = useState(null);

  return (
          <div key={id} className="mb-4 last:mb-0">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-xl border border-b-1 border-slate-200 bg-slate-50 p-5 text-left font-medium text-slate-500 hover:bg-blue-100 focus:ring-4 focus:ring-blue-200 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-gray-800 dark:focus:ring-blue-800"
              onClick={() => setActive(active === id ? null : id)}
            >
              <span>{question}</span>
              <svg
                data-accordion-icon
                className={`h-3 w-3 shrink-0 ${active === id ? 'rotate-180' : 'rotate-0'}`}
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
              {active === id && (
                <motion.div
                  initial={{opacity: 0, height: 0}}
                  animate={{opacity: 1, height: "auto "}}
                  exit={{opacity: 0, height: 0}}
                  className="mt-4 text-slate-600 mx-4 font-serif tracking-wide"
                >
                  {answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
  );
}

Accordian.propTypes = {
  id: PropTypes.number,
  question: PropTypes.string,
  answer: PropTypes.string,
};

