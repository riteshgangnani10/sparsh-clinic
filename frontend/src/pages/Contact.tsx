import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiUser, FiMessageSquare, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { contactAPI } from '../api';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      await contactAPI.submit(data);
      toast.success('Your message has been sent! We will contact you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            We're here to help your child reach their full potential
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-2xl shadow-large p-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="label">Your Name *</label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="input pl-10"
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="label">Email *</label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        {...register('email', { required: 'Email is required' })}
                        className="input pl-10"
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
                    )}
                  </div>

                  <div>
                    <label className="label">Phone *</label>
                    <div className="relative">
                      <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        {...register('phone', { required: 'Phone is required' })}
                        className="input pl-10"
                        placeholder="+91-9876543210"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message as string}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="label">Subject</label>
                  <input
                    type="text"
                    {...register('subject')}
                    className="input"
                    placeholder="Appointment Request"
                  />
                </div>

                <div>
                  <label className="label">Message *</label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      className="textarea pl-10 min-h-[150px]"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-full"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-large p-8">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiMapPin className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Our Location</h4>
                      <p className="text-gray-600">
                        1st Floor, Soham-2, Opp- Ramji Mandir,<br />
                        Ishwar Bhuvan Road, Navarangpura,<br />
                        Ahmedabad-380014, Gujarat, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiPhone className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone Numbers</h4>
                      <div className="space-y-1 text-gray-600">
                        <a href="tel:+919426284419" className="block hover:text-primary-600">
                          Dr. Tejas Patel: +91-9426284419
                        </a>
                        <a href="tel:+919426038646" className="block hover:text-primary-600">
                          Dr. Mona Patel: +91-9426038646
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiMail className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href="mailto:sparshprc@gmail.com" className="text-gray-600 hover:text-primary-600">
                        sparshprc@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold mb-4">Operating Hours</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium text-red-500">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="https://wa.me/919426284419"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-full !bg-green-500 !text-white hover:!bg-green-600 flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp size={24} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-large p-4">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                  🗺️ Google Maps Embed<br />
                  (Add Google Maps iframe here)
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

