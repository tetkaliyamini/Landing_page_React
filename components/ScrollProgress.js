function ScrollProgress() {
    try {
        const { motion, useScroll } = window.Motion;
        const { scrollYProgress } = useScroll();

        return (
            <motion.div
                data-name="scroll-progress"
                className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
                style={{ scaleX: scrollYProgress }}
            />
        );
    } catch (error) {
        console.error('ScrollProgress component error:', error);
        reportError(error);
        return null;
    }
}
