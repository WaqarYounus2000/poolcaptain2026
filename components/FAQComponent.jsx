"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

import "../styles/faqComponent.css";

export default function FAQComponent({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq_section">

      <motion.div
        className="faq_header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>
          <FaQuestionCircle className="faq_main_icon" />
          Frequently Asked Questions
        </h2>

        <p>
          Find answers about swimming pool construction,
          maintenance, repair, renovation, filtration systems,
          chemical treatment and spa solutions in Karachi Pakistan.
        </p>
      </motion.div>

      <div className="faq_container">

        {Array.isArray(faqs) && faqs.map((faq, index) => (

          <motion.div
            key={index}
            className={`faq_item ${activeIndex === index ? "active" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
          >

            <button
              className="faq_question"
              onClick={() => toggleFAQ(index)}
            >

              <span>{faq.question}</span>

              <FaChevronDown
                className={`faq_icon ${
                  activeIndex === index ? "rotate" : ""
                }`}
              />

            </button>

            <AnimatePresence>

              {activeIndex === index && (

                <motion.div
                  className="faq_answer_wrapper"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >

                  <p className="faq_answer">
                    {faq.answer}
                  </p>

                </motion.div>

              )}

            </AnimatePresence>

          </motion.div>

        ))}

      </div>

    </section>
  );
}