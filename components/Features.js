function Features() {
    try {
        const { motion } = window.Motion;

        const features = [
            {
                icon: "fa-chart-pie",
                title: "Financial Analytics",
                description: "Advanced analytics and reporting tools for better financial decision-making",
                gradient: "from-blue-500 to-indigo-600"
            },
            {
                icon: "fa-shield-alt",
                title: "Secure Transactions",
                description: "Bank-grade security measures ensuring safe and reliable transactions",
                gradient: "from-indigo-500 to-purple-600"
            },
            {
                icon: "fa-code",
                title: "API Integration",
                description: "Seamless integration with existing banking and payment systems",
                gradient: "from-orange-500 to-pink-500"
            },
            {
                icon: "fa-robot",
                title: "AI-Powered",
                description: "Smart automation and predictive analytics for financial processes",
                gradient: "from-pink-500 to-purple-600"
            }
        ];

        return (
            <section data-name="features" id="features" className="section glass-morphism">
                <div className="container mx-auto px-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-4 text-white">
                            Why Choose Finolity
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Leading financial institutions trust our innovative solutions to drive their digital transformation
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                data-name="feature-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                                }}
                                className="glass-card p-6"
                            >
                                <motion.div 
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-gradient-to-r ${feature.gradient}`}
                                >
                                    <i className={`fas ${feature.icon} text-white text-xl`}></i>
                                </motion.div>
                                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features component error:', error);
        reportError(error);
        return null;
    }
}
