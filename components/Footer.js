function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 text-white">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div data-name="footer-about">
                            <h3 className="text-xl font-bold mb-4">Intelion</h3>
                            <p className="text-gray-400">
                                Empowering businesses with intelligent AI solutions for a smarter future.
                            </p>
                        </div>

                        <div data-name="footer-links">
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>

                        <div data-name="footer-contact">
                            <h4 className="text-lg font-semibold mb-4">Contact</h4>
                            <ul className="space-y-2">
                                <li className="text-gray-400">
                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                    R-7 Street, Yamuna Nagar, Haryana
                                </li>
                                <li className="text-gray-400">
                                    <i className="fas fa-phone mr-2"></i>
                                    +0612-2500-971
                                </li>
                                <li className="text-gray-400">
                                    <i className="fas fa-envelope mr-2"></i>
                                    connect@intelion.com
                                </li>
                            </ul>
                        </div>

                        <div data-name="footer-social">
                            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-twitter text-xl"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/yaminitetakali/" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-linkedin text-xl"></i>
                                </a>
                                <a href="https://github.com/tetkaliyamini" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-github text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 Intelion. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
