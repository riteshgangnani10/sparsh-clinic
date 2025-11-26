import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Button from '../common/Button';

export default function CTASection() {
  return (
    <section className="section bg-gradient-to-br from-primary-600 to-secondary-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Child's Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book a consultation with our expert team and take the first step towards helping your child reach their full potential.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button to="/contact" variant="outline" size="lg" className="!text-white !border-white hover:!bg-white hover:!text-primary-600">
                Book Appointment
              </Button>
              <a
                href="https://wa.me/919426284419"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg !bg-green-500 !text-white hover:!bg-green-600 flex items-center gap-2"
              >
                <FaWhatsapp size={24} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <FiPhone className="mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <div className="text-sm space-y-1">
                <a href="tel:+919426284419" className="block hover:underline">
                  Dr. Tejas: +91-9426284419
                </a>
                <a href="tel:+919426038646" className="block hover:underline">
                  Dr. Mona: +91-9426038646
                </a>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <FiMail className="mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <a href="mailto:sparshprc@gmail.com" className="text-sm hover:underline">
                sparshprc@gmail.com
              </a>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <FiMapPin className="mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-sm">
                Soham-2, Navarangpura, <br />
                Ahmedabad-380014
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

