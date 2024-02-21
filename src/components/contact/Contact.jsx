import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../../styles";
import  EarthCanvas  from "../canvas/Earth";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "./Contact.scss";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_6y5vft7',
        'template_5g175sf',
        {
          from_name: form.name,
          to_name: "Nirmalkumar M",
          from_email: form.email,
          to_email: "cmnirmalkumar2000@gmail.com",
          message: form.message,
        },
        'FMQ4a1hK5NSAkumfj',
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div
    className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}
  >
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
    >
      <EarthCanvas/>
    </motion.div>

    <motion.div whileInView={{ opacity: 1 , transform : 'none'}}
      variants={slideIn("right", "tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
    >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='flex flex-col gap-8 mt-3'
      >
        <label className='flex flex-col'>
          <span className='mb-3 font-medium text-white'>Your Name</span>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="What's your good name?"
            className='px-3 py-3 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary'
          />
        </label>
        <label className='flex flex-col'>
          <span className='mb-3 font-medium text-white'>Your email</span>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="What's your web address?"
            className='px-3 py-3 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary'
          />
        </label>
        <label className='flex flex-col'>
          <span className='mb-3 font-medium text-white'>Your Message</span>
          <textarea
            rows={7}
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='What you want to say?'
            className='px-3 py-3 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary'
          />
        </label>
        <button
          type='submit'
          className='px-5 py-3 font-bold text-white shadow-md outline-none bg-tertiary rounded-xl w-fit shadow-primary'
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      <div className="mt-5 contact__options">
        <article className="contact__option">
          <MdEmail />
          <a href="mailto:cmnirmalkumar2000@gmail.com" target="_blank" className="blue-text-gradient">cmnirmalkumar2000@gmail.com</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp />
          <a href="https://api.whatsapp.com/send/?phone=919363453509&text&app_absent=0&lang=en" target="_blank" className="blue-text-gradient">
            +91 9363453509
          </a>
        </article>
      </div>
    </motion.div>
  </div>
  )
}

export default Contact
