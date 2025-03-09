function App() {
    try {
        return (
            <div data-name="app">
                <ScrollProgress />
                <Header />
                <main>
                    <Hero />
                    <Features />
                    <Services />
                    <Contact />
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
