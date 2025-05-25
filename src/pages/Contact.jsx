import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-16 overflow-hidden">
      {/* Floating Shapes */}
      <div className="absolute top-10 left-5 w-6 h-6 bg-indigo-300 rounded-full animate-floatSlow opacity-40"></div>
      <div className="absolute top-24 right-10 w-4 h-4 bg-pink-400 rounded-sm animate-floatMedium opacity-50"></div>
      <div className="absolute bottom-20 left-20 w-5 h-5 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-12 border-b-indigo-400 animate-floatFast opacity-30 rotate-45"></div>
      <div className="absolute bottom-10 right-16 w-8 h-8 bg-yellow-300 rounded-full animate-floatMedium opacity-30"></div>
      <div className="absolute top-32 left-1/2 w-3 h-3 bg-green-400 rounded-sm animate-floatSlow opacity-60"></div>

      {/* Added more floating shapes */}
      <div className="absolute top-5 right-1/4 w-5 h-5 bg-red-400 rounded-full animate-floatSlow opacity-50"></div>
      <div className="absolute top-40 right-1/3 w-7 h-7 bg-purple-400 rounded-sm animate-floatMedium opacity-45"></div>
      <div className="absolute bottom-28 right-1/5 w-4 h-4 border-l-6 border-l-transparent border-r-6 border-r-transparent border-b-10 border-b-pink-500 animate-floatFast opacity-40 rotate-12"></div>
      <div className="absolute bottom-5 left-1/3 w-6 h-6 bg-cyan-300 rounded-md animate-floatSlow opacity-55"></div>
      <div className="absolute top-16 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-floatMedium opacity-50"></div>
      <div className="absolute top-24 left-3/4 w-5 h-5 bg-green-500 rounded-sm animate-floatFast opacity-35"></div>
      <div className="absolute bottom-12 left-1/5 w-8 h-8 bg-orange-300 rounded-full animate-floatSlow opacity-40"></div>
      <div className="absolute bottom-36 right-2/3 w-4 h-4 border-l-6 border-l-transparent border-r-6 border-r-transparent border-b-10 border-b-indigo-600 animate-floatMedium opacity-45 rotate-25"></div>
      <div className="absolute top-12 right-2/3 w-5 h-5 bg-pink-300 rounded-md animate-floatFast opacity-50"></div>
      <div className="absolute top-40 left-3/5 w-3 h-3 bg-red-300 rounded-full animate-floatSlow opacity-30"></div>

      <h2 className="relative text-4xl font-extrabold mb-12 text-center text-indigo-700 z-10">Get In Touch</h2>

      <div className="relative flex flex-col md:flex-row gap-12 z-10">
        {/* Contact Form */}
        <div className="flex-1 max-w-md mx-auto">
          {submitted ? (
            <div className="text-center text-green-600 font-semibold space-y-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-16 w-16 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p>Thanks for reaching out! We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 w-4/5 mx-auto">
              {['name', 'email', 'message'].map((field) => (
                <div key={field} className="relative">
                  {field !== 'message' ? (
                    <>
                      <input
                        id={field}
                        name={field}
                        type={field === 'email' ? 'email' : 'text'}
                        required
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full border-2 border-gray-300 rounded-md focus:border-indigo-600 outline-none py-2 text-sm transition"
                      />
                      <label
                        htmlFor={field}
                        className="absolute left-3 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-indigo-600 peer-focus:text-xs cursor-text bg-white px-1"
                      >
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                    </>
                  ) : (
                    <>
                      <textarea
                        id={field}
                        name={field}
                        rows="4"
                        required
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full border-2 border-gray-300 rounded-md focus:border-indigo-600 outline-none py-2 text-sm resize-none transition"
                      />
                      <label
                        htmlFor={field}
                        className="absolute left-3 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-indigo-600 peer-focus:text-xs cursor-text bg-white px-1"
                      >
                        Message
                      </label>
                    </>
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="relative inline-block px-10 py-2 overflow-hidden font-medium text-white transition duration-300 bg-indigo-600 rounded-full shadow-md group hover:bg-indigo-700 focus:outline-none text-sm"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 transform -translate-x-full bg-indigo-700 group-hover:translate-x-0 ease">
                  Send Message
                </span>
                <span className="relative">Send Message</span>
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & Socials */}
        <div className="flex-1 max-w-xs mx-auto text-gray-700 space-y-6 text-sm">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">Contact Information</h3>
            <p className="mb-1"><strong>Phone:</strong> <a href="tel:+911234567890" className="text-indigo-600 hover:underline">+91 12345 67890</a></p>
            <p className="mb-1"><strong>Email:</strong> <a href="mailto:contact@rudrafilmsgfx.com" className="text-indigo-600 hover:underline">contact@rudrafilmsgfx.com</a></p>
            <p><strong>Address:</strong> 123 Film Studio Lane, Mumbai, India</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">Follow Us</h3>
            <div className="flex space-x-5 text-indigo-700 text-lg">
              <a
                href="https://www.facebook.com/rudrafilmsgfx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-indigo-900 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/rudrafilmsgfx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/rudrafilmsgfx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-indigo-900 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://twitter.com/rudrafilmsgfx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-blue-500 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating shapes animations */}
      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-35px); }
        }
        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-floatMedium {
          animation: floatMedium 4s ease-in-out infinite;
        }
        .animate-floatFast {
          animation: floatFast 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
