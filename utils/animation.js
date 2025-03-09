function useIntersectionObserver() {
    try {
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        };

        React.useEffect(() => {
            const observer = new IntersectionObserver(observerCallback, {
                threshold: 0.1
            });

            const elements = document.querySelectorAll('.fade-in, .scale-in, .slide-in');
            elements.forEach(el => observer.observe(el));

            return () => observer.disconnect();
        }, []);
    } catch (error) {
        console.error('Animation observer error:', error);
        reportError(error);
    }
}
