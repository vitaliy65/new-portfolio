import { useState } from "react";
import type { FormEvent } from "react";
import ContainerGradient from "../../custom-containers/Container-gradient";
import TextGradient from "../../custom-containers/Container-text-gradient";
import {
  Contact,
  Mail,
  MessageCircleHeartIcon,
  Send,
  Sparkle,
  User,
} from "lucide-react";
import { socials } from "../../../_data/socials";
import { ToastContainer, toast } from "react-toastify";
import AnimatedContainer from "../../animated/AnimatedContainer";

interface FormErrors {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    message: "",
  });
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [selectedSocial, setSelectedSocial] = useState<number>(-1);

  const handleErrors = (field: string, message: string) => {
    setErrors((prev: FormErrors) => ({
      ...prev,
      [field]: message,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({
      name: "",
      email: "",
      message: "",
    });

    const name = formFields.name.trim();
    const email = formFields.email.trim();
    const message = formFields.message.trim();

    if (!name) handleErrors("name", "You need to fill this field");
    if (!email) handleErrors("email", "You need email to contact me");
    if (!message) handleErrors("message", "Dont forget to write your message");

    if (name && email && message) {
      const mailtoLink = `mailto:vitalii.posvistak@gmail.com?subject=Message from ${name} (${email})&body=${encodeURIComponent(
        message
      )}`;
      window.location.href = mailtoLink;

      toast.success("Opening your email client...", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });

      // Reset form fields after successful submission
      setFormFields({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section
      className="center flex-col lg:mx-32 md:mx-24 sm:mx-12 mx-6 my-68"
      id="contact"
    >
      {/* first */}
      <div className="full-center flex-col gap-4">
        <AnimatedContainer direction="zoomIn" delay={0.1}>
          <TextGradient
            text="Contact Me"
            from="from-purple-800"
            to="to-blue-800"
            className="sm:text-8xl text-6xl font-bold"
          />
        </AnimatedContainer>
        <AnimatedContainer direction="zoomIn" delay={0.15}>
          <p className="center lg:text-xl sm:text-base text-xs text-gray-500">
            <Sparkle className="w-4 h-4" />
            <span className="px-3 text-center">
              Get a question or want to work together? Just drop me a line!
            </span>
            <Sparkle className="w-4 h-4" />
          </p>
        </AnimatedContainer>
      </div>

      {/* second */}
      <AnimatedContainer direction="left">
        <div className="full mt-24 p-6 gap-8 bg-white/15 max-w-2xl rounded-xl">
          <div className="full flex top flex-row gap-4 mb-8">
            <div>
              <TextGradient
                text="Get In Touch"
                from="from-purple-800"
                to="to-blue-800"
                className="sm:text-6xl text-4xl font-bold mb-2"
              />
              <p className="text-gray-400">
                Have something to discuss? Send me a message, and I'll get back
                to you as soon as possible.
              </p>
            </div>
            <Contact className="w-12 h-12 text-gray-500" />
          </div>
          <form onSubmit={handleSubmit} className="full flex flex-col gap-8">
            {/* name */}
            <div className="flex flex-col gap-4">
              <AnimatedContainer direction="down" delay={0.1}>
                <div>
                  <div className="relative">
                    <User className="absolute left-2 top-3 w-8 h-8 text-stone-400" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      id="name"
                      name="name"
                      value={formFields.name}
                      onChange={(e) =>
                        setFormFields({ ...formFields, name: e.target.value })
                      }
                      className="p-4 pl-12 bg-white/10 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    />
                  </div>
                  <label className="text-red-400 text-sm mb-2" htmlFor="name">
                    {errors.name}
                  </label>
                </div>
              </AnimatedContainer>

              {/* email */}
              <AnimatedContainer direction="down" delay={0.2}>
                <div>
                  <div className="relative">
                    <Mail className="absolute left-2 top-3 w-8 h-8 text-stone-400" />
                    <input
                      type="email"
                      placeholder="Your Email"
                      id="email"
                      name="email"
                      value={formFields.email}
                      onChange={(e) =>
                        setFormFields({ ...formFields, email: e.target.value })
                      }
                      className="p-4 pl-12 bg-white/10 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    />
                  </div>
                  <label className="text-red-400 text-sm mb-2" htmlFor="email">
                    {errors.email}
                  </label>
                </div>
              </AnimatedContainer>
              {/* message */}
              <AnimatedContainer direction="down" delay={0.3}>
                <div>
                  <div className="relative">
                    <MessageCircleHeartIcon className="absolute left-2 top-4 w-8 h-8 text-stone-400" />
                    <textarea
                      placeholder="Your Message"
                      id="message"
                      name="message"
                      value={formFields.message}
                      onChange={(e) =>
                        setFormFields({
                          ...formFields,
                          message: e.target.value,
                        })
                      }
                      className="p-4 pl-12 bg-white/10 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 w-full"
                    ></textarea>
                  </div>
                  <label
                    className="text-red-400 text-sm mb-2"
                    htmlFor="message"
                  >
                    {errors.message}
                  </label>
                </div>
              </AnimatedContainer>
            </div>
            {/* submit button */}
            <AnimatedContainer direction="down" delay={0.4}>
              <ContainerGradient
                isButton={true}
                isInForm={true}
                from="from-purple-800"
                to="to-blue-800"
                className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
            transition-all duration-200 hover:scale-102 full-center text-lg font-semibold active:scale-97 gap-2"
              >
                <Send /> Send Message
              </ContainerGradient>
            </AnimatedContainer>
          </form>
          <AnimatedContainer direction="down" delay={0.5}>
            <div className="flex flex-col gap-4 mt-8">
              <p className="left gap-2">
                <span className="w-12 h-0 border-2 border-indigo-500"></span>
                Connect With Me
              </p>

              <div className="grid sm:grid-rows-2 grid-rows-4 sm:grid-cols-2 grid-cols-1 gap-4">
                {socials.map((s, index) => (
                  <a
                    key={index}
                    onMouseEnter={() => setSelectedSocial(index)}
                    onMouseLeave={() => setSelectedSocial(-1)}
                    className="flex items-center gap-4 bg-white/15 p-4 sm:p-6 rounded-xl"
                    href={s.canBeCopied ? `#` : s.link}
                    target={!s.canBeCopied ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (s.canBeCopied) {
                        e.preventDefault();
                        navigator.clipboard.writeText(s.myTag);
                        toast.success("Copied to clipboard!", {
                          position: "top-right",
                          autoClose: 1500,
                          theme: "dark",
                        });
                      }
                    }}
                  >
                    <img
                      src={s.img}
                      className={`w-12 h-12 object-contain ${
                        selectedSocial === index ? "scale-150" : ""
                      } transition-all duration-200`}
                      loading="lazy"
                    />
                    <div>
                      <p>{s.name}</p>
                      <p className="text-stone-400">{s.myTag}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </AnimatedContainer>

      {/* toast container */}
      <ToastContainer />
    </section>
  );
}
