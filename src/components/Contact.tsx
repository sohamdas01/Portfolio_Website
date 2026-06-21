'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import FadeIn from './FadeIn';

// Custom SVG Icon for LeetCode
const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} {...props}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392a1.38 1.38 0 0 0 0-1.954l-2.359-2.359a1.38 1.38 0 0 0-1.955 0l-.303.303a1.128 1.128 0 0 1-1.618 0l-.303-.303a1.378 1.378 0 0 1 0-1.954l2.359-2.359c.54-.54 1.415-.54 1.955 0l2.396 2.392c2.21 2.207 5.814 2.239 8.063.074l.038-.038 4.277-4.193a5.938 5.938 0 0 0 1.271-1.818a5.83 5.83 0 0 0 .349-1.017a5.527 5.527 0 0 0 .062-2.362a5.35 5.35 0 0 0-.125-.513a5.266 5.266 0 0 0-1.209-2.104L16.85 6.226l-5.406-5.788A1.374 1.374 0 0 0 10.518 0Z" />
  </svg>
);

// Custom Representation for Hugging Face
const HuggingFaceIcon = () => (
  <span className="text-[22px] leading-none select-none grayscale hover:grayscale-0 transition-all duration-200">🤗</span>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    const recipient = personalInfo.email;
    const emailSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open default mail client with pre-filled content
    window.location.href = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;

    // Success state feedback
    setShowToast(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-neutral-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Get In Touch</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Info Column */}
          <div className="md:col-span-2 flex flex-col justify-between gap-12">
            <div>
              <FadeIn delay={100}>
                <h3 className="text-xl font-bold text-white mb-4">Let&apos;s Connect</h3>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
                  I am seeking full-stack or AI-focused Job and internship opportunities. Reach out via email, phone, or connect with me on these networks.
                </p>
              </FadeIn>

              {/* Contact Information Details */}
              <div className="space-y-6">
                <FadeIn delay={200} direction="left">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 text-violet-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-neutral-500 font-medium">Email</span>
                      <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white hover:text-violet-400 transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={300} direction="left">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 text-violet-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-neutral-500 font-medium">Phone</span>
                      <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-white hover:text-violet-400 transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={400} direction="left">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 text-violet-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-neutral-500 font-medium">Location</span>
                      <span className="text-sm font-semibold text-white">
                        {personalInfo.location}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Social Links Repeating */}
            <div>
              <FadeIn delay={500}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-4">Follow Me</h4>
                <div className="flex items-center gap-4">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-neutral-900 border border-neutral-850 text-neutral-400 hover:text-white hover:border-violet-500/30 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-neutral-900 border border-neutral-850 text-neutral-400 hover:text-white hover:border-violet-500/30 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-neutral-900 border border-neutral-850 text-neutral-400 hover:text-white hover:border-violet-500/30 transition-all duration-300 flex items-center justify-center"
                    aria-label="LeetCode"
                  >
                    <LeetCodeIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.huggingface}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-neutral-900 border border-neutral-850 text-neutral-400 hover:text-white hover:border-violet-500/30 transition-all duration-300 flex items-center justify-center"
                    aria-label="Hugging Face"
                  >
                    <HuggingFaceIcon />
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-3">
            <FadeIn delay={200} direction="right">
              <form onSubmit={handleSubmit} className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl shadow-black/40">
                <div className="grid sm:grid-cols-2 gap-4.5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-neutral-400 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-850 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500/40 focus:ring-1 focus:ring-violet-500/40 transition-all"
                      placeholder="Soham Das"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-neutral-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-850 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500/40 focus:ring-1 focus:ring-violet-500/40 transition-all"
                      placeholder="sohamdas.dev@gmail.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-neutral-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-850 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500/40 focus:ring-1 focus:ring-violet-500/40 transition-all"
                    placeholder="Full-Stack Internship"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-neutral-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-850 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500/40 focus:ring-1 focus:ring-violet-500/40 transition-all resize-none"
                    placeholder="Hi Soham, I saw your portfolio and..."
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2.5 text-xs text-rose-450 font-medium bg-rose-500/5 border border-rose-500/10 p-3 rounded-lg">
                    <AlertCircle className="w-4.5 h-4.5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm py-3.5 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-200"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Success Toast Notification */}
      {/* <div
        className={`fixed bottom-8 right-8 z-50 flex items-center gap-4 bg-neutral-900 border border-emerald-500/30 text-white px-5 py-4.5 rounded-xl shadow-2xl transition-all duration-300 max-w-sm ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
          }`}
      >
        <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
        <div>
          <h4 className="text-sm font-bold">Message Sent!</h4>
          <p className="text-xs text-neutral-400 mt-0.5 leading-normal">
            Thank you for reaching out. The mock submit was successful!
          </p>
        </div>
      </div> */}
    </section>
  );
}
