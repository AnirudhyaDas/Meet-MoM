import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      alert("Thanks for reaching out! We'll get back to you soon.");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section className="w-full py-20 px-4 bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions about MoM? Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 p-8 bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Contact Information
            </h3>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Email Us</h4>
                <p className="text-slate-600 dark:text-gray-400">support@meetmom.ai</p>
                <p className="text-slate-600 dark:text-gray-400">sales@meetmom.ai</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Call Us</h4>
                <p className="text-slate-600 dark:text-gray-400">+11-1111111</p>
                <p className="text-slate-600 dark:text-gray-400">Mon-Fri from 8am to 5pm</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Visit Us</h4>
                <p className="text-slate-600 dark:text-gray-400">
                  123 Innovation Drive<br />
                  Tech Valley, CA 94043
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="How can we help?"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all hover:scale-[1.02] shadow-lg shadow-blue-600/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}