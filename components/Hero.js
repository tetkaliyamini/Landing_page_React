function Hero() {
    try {
        const { motion } = window.Motion;

        const container = {
            hidden: { opacity: 0 },
            show: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.2
                }
            }
        };

        const item = {
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 }
        };

        return (
            <section data-name="hero" id="home" className="pt-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
                <div className="container mx-auto px-4 py-16 relative z-10">
                    <motion.div 
                        className="flex flex-col md:flex-row items-center"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <div data-name="hero-content" className="md:w-1/2 text-center md:text-left">
                            <motion.h1 
                                variants={item}
                                className="text-4xl md:text-5xl font-bold mb-6 text-white"
                            >
                                Empowering Financial Growth Through Technology
                            </motion.h1>
                            <motion.p 
                                variants={item}
                                className="text-xl text-gray-300 mb-8"
                            >
                                We provide innovative fintech solutions that help businesses streamline 
                                operations, reduce costs, and drive growth in the digital era.
                            </motion.p>
                            <motion.div 
                                variants={item}
                                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                            >
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="glow bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-md font-medium"
                                >
                                    Schedule a Demo
                                </motion.button>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="glass-card px-8 py-3 text-white rounded-md border border-white/20"
                                >
                                    Learn More
                                </motion.button>
                            </motion.div>
                        </div>
                        <motion.div 
                            data-name="hero-image"
                            variants={item}
                            className="md:w-1/2 mt-12 md:mt-0"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="gradient-border p-2">
                                <img 
                                    src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf" 
                                    alt="Fintech Innovation" 
                                    className="w-full rounded-lg shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
