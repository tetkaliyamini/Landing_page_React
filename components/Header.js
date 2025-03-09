function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        const { motion } = window.Motion;

        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };

        return (
            <header data-name="header" className="fixed w-full glass-card z-50 border-b border-white/10">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <motion.div 
                            data-name="logo" 
                            className="flex items-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mr-2">
                                <span className="text-xl font-bold text-white">I</span>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Intelion
                            </span>
                        </motion.div>
                        
                        <nav data-name="desktop-nav" className="hidden md:flex space-x-8">
                            <motion.a 
                                href="#home" 
                                className="text-gray-300 hover:text-white transition-colors"
                                whileHover={{ scale: 1.1 }}
                            >
                                Home
                            </motion.a>
                            <motion.a 
                                href="#features" 
                                className="text-gray-300 hover:text-white transition-colors"
                                whileHover={{ scale: 1.1 }}
                            >
                                Features
                            </motion.a>
                            <motion.a 
                                href="#services" 
                                className="text-gray-300 hover:text-white transition-colors"
                                whileHover={{ scale: 1.1 }}
                            >
                                Services
                            </motion.a>
                            <motion.a 
                                href="#contact" 
                                className="text-gray-300 hover:text-white transition-colors"
                                whileHover={{ scale: 1.1 }}
                            >
                                Contact
                            </motion.a>
                        </nav>

                        <motion.button 
                            data-name="mobile-menu-button" 
                            className="md:hidden text-white"
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleMenu}
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </motion.button>
                    </div>

                    {isMenuOpen && (
                        <motion.div 
                            data-name="mobile-menu" 
                            className="md:hidden"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white">Home</a>
                                <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white">Features</a>
                                <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-white">Services</a>
                                <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white">Contact</a>
                            </div>
                        </motion.div>
                    )}
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
