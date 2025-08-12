import { useState } from "react";
import type { FormEvent } from "react";
import ContainerGradient from "../../ui/Container-gradient";
import TextGradient from "../../ui/Container-text-gradient";
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
import AnimatedContainer from "../../animations/AnimatedContainer";
import { Directions } from "../../animations/types";
import { useAppSelector } from "../../../_hooks/hooks";
import BorderBlick from "../../background/borderBlick";

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
  const theme = useAppSelector((s) => s.theme.theme);

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
    <section className="contact-section-main" id="contact">
      {/* first */}
      <div className="contact-header-main-container">
        <AnimatedContainer direction={Directions.ZOOMIN} delay={0.1}>
          <TextGradient
            text="Contact Me"
            from="from-accent"
            to="to-accent/30"
            className="contact-header-main-text"
          />
        </AnimatedContainer>
        <AnimatedContainer direction={Directions.ZOOMIN} delay={0.1}>
          <p className="contact-header-text-container">
            <Sparkle className="w-4 h-4" />
            <span className="px-3 text-center">
              Get a question or want to work together? Just drop me a line!
            </span>
            <Sparkle className="w-4 h-4" />
          </p>
        </AnimatedContainer>
      </div>

      {/* second */}
      <AnimatedContainer className="mt-24 " direction={Directions.LEFT}>
        <BorderBlick className="rounded-xl">
          <div className={`contact-container`}>
            <div className="contact-title-container">
              <div>
                <TextGradient
                  text="Get In Touch"
                  from="from-accent"
                  to="to-accent/30"
                  className="contact-title"
                />
                <p className="contact-description">
                  Have something to discuss? Send me a message, and I'll get
                  back to you as soon as possible.
                </p>
              </div>
              <Contact className="w-12 h-12 text-gray-500" />
            </div>
            <form onSubmit={handleSubmit} className="full flex flex-col gap-8">
              {/* name */}
              <div className="contact-form-container">
                <AnimatedContainer direction={Directions.DOWN} delay={0.1}>
                  <div>
                    <div className="relative">
                      <User className="contact-form-icon" />
                      <input
                        type="text"
                        placeholder="Your Name"
                        id="name"
                        name="name"
                        value={formFields.name}
                        onChange={(e) =>
                          setFormFields({ ...formFields, name: e.target.value })
                        }
                        className="contact-input-field"
                      />
                    </div>
                    <label className="contact-error-lable" htmlFor="name">
                      {errors.name}
                    </label>
                  </div>
                </AnimatedContainer>

                {/* email */}
                <AnimatedContainer direction={Directions.DOWN} delay={0.1}>
                  <div>
                    <div className="relative">
                      <Mail className="contact-form-icon" />
                      <input
                        type="email"
                        placeholder="Your Email"
                        id="email"
                        name="email"
                        value={formFields.email}
                        onChange={(e) =>
                          setFormFields({
                            ...formFields,
                            email: e.target.value,
                          })
                        }
                        className="contact-input-field"
                      />
                    </div>
                    <label className="contact-error-lable" htmlFor="email">
                      {errors.email}
                    </label>
                  </div>
                </AnimatedContainer>

                {/* message */}
                <AnimatedContainer direction={Directions.DOWN} delay={0.1}>
                  <div>
                    <div className="relative">
                      <MessageCircleHeartIcon className="contact-form-icon" />
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
                        className="contact-input-message"
                      ></textarea>
                    </div>
                    <label className="contact-error-lable" htmlFor="message">
                      {errors.message}
                    </label>
                  </div>
                </AnimatedContainer>
              </div>

              {/* submit button */}
              <AnimatedContainer direction={Directions.DOWN} delay={0.1}>
                <ContainerGradient
                  isButton={true}
                  isInForm={true}
                  from="from-purple-800"
                  to="to-blue-800"
                  className="contact-submit-button"
                >
                  <Send /> Send Message
                </ContainerGradient>
              </AnimatedContainer>
            </form>
            <AnimatedContainer direction={Directions.DOWN} delay={0.1}>
              <div className="contact-under-form-container">
                <p className="contact-under-from-title">
                  <span className="break-line"></span>
                  Connect With Me
                </p>

                <div className="contact-link-grid">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      onMouseEnter={() => setSelectedSocial(index)}
                      onMouseLeave={() => setSelectedSocial(-1)}
                      className={`contact-link-bg ${
                        theme === "light" && "light"
                      }`}
                      href={social.canBeCopied ? `#` : social.link}
                      target={!social.canBeCopied ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (social.canBeCopied) {
                          e.preventDefault();
                          navigator.clipboard.writeText(social.myTag);
                          toast.success("Copied to clipboard!", {
                            position: "top-right",
                            autoClose: 1500,
                            theme: "dark",
                          });
                        }
                      }}
                    >
                      <img
                        src={social.img}
                        alt={social.alt}
                        className={`contact-link-img ${
                          selectedSocial === index ? "scale-150" : ""
                        }`}
                      />
                      <div>
                        <p>{social.name}</p>
                        <p className="contact-link-tag">{social.myTag}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedContainer>
          </div>
        </BorderBlick>
      </AnimatedContainer>

      {/* toast container */}
      <ToastContainer />
    </section>
  );
}
