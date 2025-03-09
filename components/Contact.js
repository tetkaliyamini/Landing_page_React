function Contact() {
    try {
        const { motion } = window.Motion;
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            message: ''
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Form submitted:', formData);
        };

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        };

        return (
            <section data-name="contact" id="contact" className="section glass-morphism">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl font-bold mb-4 text-white">Get in Touch</h2>
                            <p className="text-gray-300">
                                Have questions? We'd love to hear from you.
                            </p>
                        </motion.div>

                        <motion.form 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            onSubmit={handleSubmit} 
                            className="space-y-6"
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                                    placeholder="Your message"
                                    required
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <motion.button 
                                    type="submit" 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="glow bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-md font-medium"
                                >
                                    Send Message
                                </motion.button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return null;
    }
}
