import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { } from "@remixicon/react";
import SocialMedia from "./SocialMedia";
import emailjs from "@emailjs/browser";
import SuccessMsg from "./SuccessMsg";
import { div } from "motion/react-client";
// import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
        "service_g78fuku",
        "template_aieha9x",
        form.current,
        "XUKqDT8iPHi64PCv8"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();

          setTimeout(() => setSuccess(false), 3000);
        },
        () => {
          setLoading(false);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section className="w-full py-20 px-6 flex justify-center items-center">
      
      <motion.div
        className="w-full max-w-5xl grid md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center justify-center  ">
           <h2
        className="text-sm md:text-3xl px-4 py-2 mt-5 font-mono border-2 rounded-2xl text-center  "
        style={{
          color: "var(--text-primary)",
          border: "2px solid var(--border) ",
        }}
      >
        Get In Touch
      </h2>
          <h3 className="text-lg md:text-3xl px-4 py-2 mt-5 play-fair rounded-2xl text-center  "
        style={{
          color: "var(--text-primary)",
         
        }}>Have a <span className="roboto text-blue-500">Project</span> Idea In Mind.?</h3>

         <h4 className="text-lg md:text-3xl px-2 py-2 play-fair rounded-2xl text-center  "
        style={{
          color: "var(--text-primary)",
         
        }}>Let's Work Togeather</h4>

          <p className=" mb-6 mt-5 text-center font-mono" 
          style={{color:"var(--text-secondary)"}}
          >
            I’m open to opportunities, collaborations, or just a chat. Feel free to reach out!
          </p>
      <SocialMedia />
          
        </div>


        {/* RIGHT SIDE FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className={`bg-white/5 backdrop-blur-md p-8 rounded-2xl border realtive border-white/10 space-y-4 `}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-white/10 outline-none focus:ring-2 focus:ring-blue-500 font-mono " style={{color:"var(--text-secondary)"}}
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-white/10 outline-none focus:ring-2 focus:ring-blue-500 font-mono"  style={{color:"var(--text-secondary)"}}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-white/10 outline-none h-32 focus:ring-2 focus:ring-blue-500 font-mono"  style={{color:"var(--text-secondary)"}}
          />

          <button
            type="submit"
            disabled={loading}
           
            className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition disabled:opacity-50 font-mono"  style={{color:"var(--text-secondary)"}}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success Message */}
          {success && (
            <div className={`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `}>
               <SuccessMsg  />
            </div>
           
          )}
        </form>

      </motion.div>
    </section>
  );
};

export default Contact;