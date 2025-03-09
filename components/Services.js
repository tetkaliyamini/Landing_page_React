function Services() {
    try {
        const { motion } = window.Motion;
        const [activeService, setActiveService] = React.useState(null);

        const services = [
            {
                title: "Payment Solutions",
                description: "Streamline payment processing with our secure and efficient payment gateway solutions",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
                details: [
                    "Multi-currency support",
                    "Real-time payment processing",
                    "Fraud detection",
                    "Payment analytics"
                ],
                gradient: "from-blue-500 to-indigo-600"
            },
            {
                title: "Digital Banking",
                description: "Modern banking solutions for the digital age with comprehensive features",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
                details: [
                    "Mobile banking",
                    "Digital wallets",
                    "Account management",
                    "Transaction monitoring"
                ],
                gradient: "from-orange-500 to-pink-500"
            },
            {
                title: "Risk Management",
                description: "Advanced risk assessment and management tools for financial institutions",
                image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0",
                details: [
                    "Risk assessment",
                    "Compliance monitoring",
                    "Fraud prevention",
                    "Regulatory reporting"
                ],
                gradient: "from-purple-500 to-pink-500"
            }
        ];

        return (
            <section data-name="services" id="services" className="section glass-morphism">
                <div className="container mx-auto px-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-4 text-white">
                            Our Services
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Comprehensive fintech solutions tailored to your business needs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                data-name="service-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="glass-card overflow-hidden"
                                onHoverStart={() => setActiveService(index)}
                                onHoverEnd={() => setActiveService(null)}
                            >
                                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                                <motion.img 
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-48 object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                                    <p className="text-gray-300 mb-4">{service.description}</p>
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ 
                                            height: activeService === index ? "auto" : 0,
                                            opacity: activeService === index ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ul className="space-y-2 mb-4">
                                            {service.details.map((detail, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ x: -20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex items-center text-gray-300"
                                                >
                                                    <i className="fas fa-check text-green-400 mr-2"></i>
                                                    {detail}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                    <motion.button 
                                        whileHover={{ x: 10 }}
                                        className={`bg-gradient-to-r ${service.gradient} text-white px-6 py-2 rounded-md`}
                                    >
                                        Learn more <i className="fas fa-arrow-right ml-2"></i>
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Services component error:', error);
        reportError(error);
        return null;
    }
}
