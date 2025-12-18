import { motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';

function Maintenance() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage({ type: 'success', text: 'Message sent! We\'ll be in touch.' });
        setFormData({ name: '', company: '', email: '', whatsapp: '', message: '' });
      } else {
        setSubmitMessage({ type: 'error', text: 'Failed to send. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage({ type: 'error', text: 'Something went wrong. Try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white text-black font-geist flex flex-col relative overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Header */}
      <header className="relative z-10 p-6 md:p-8">
        <img 
          src="/images/logo.png" 
          alt="Nauli Consultants" 
          className=" opacity-80"
        />
      </header>

      {/* Main Content - Two Columns */}
      <main className="flex-1 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 px-6 md:px-12 lg:px-20 py-8 md:py-0 items-center max-w-[1400px] mx-auto w-full -mt-8 md:-mt-16">
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            UNDER
            <br />
            <span>MAINTENANCE</span>
          </h1>
          
          <p className="text-black text-sm md:text-base max-w-md leading-relaxed">
            We're crafting something extraordinary. Leave your details and be the first to know when we back.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col gap-2 text-black text-xs uppercase tracking-wider mt-4">
            <a href="mailto:hello@nauliconsultants.com" className="hover:opacity-70 transition-opacity">
              hello@nauliconsultants.com
            </a>
            <a href="https://www.instagram.com/nauliconsultants/" className="hover:opacity-70 transition-opacity">
              @nauliconsultants
            </a>
            <span>+62 822 3084 6505</span>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full bg-black/5 border border-black/10 px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-black/30 transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="company"
                placeholder="Company / Project"
                value={formData.company}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full bg-black/5 border border-black/10 px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-black/30 transition-colors disabled:opacity-50"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full bg-black/5 border border-black/10 px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-black/30 transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="whatsapp"
                placeholder="WhatsApp Number *"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full bg-black/5 border border-black/10 px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-black/30 transition-colors disabled:opacity-50"
              />
            </div>
            
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              rows={4}
              className="w-full bg-black/5 border border-black/10 px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-black/30 transition-colors resize-none disabled:opacity-50"
            />

            {submitMessage && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-sm ${
                  submitMessage.type === 'success' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {submitMessage.text}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-3 text-sm font-medium tracking-wider uppercase hover:bg-black/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Get Notified'}
            </button>
          </form>
        </motion.div>
      </main>

      {/* Corner Decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-black/[0.02] to-transparent" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-black/[0.02] to-transparent" />
    </div>
  );
}

export default Maintenance;
