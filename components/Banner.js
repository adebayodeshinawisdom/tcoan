const YourComponent = () => {
    const [showBanner, setShowBanner] = useState(true);
    const [showNavbar, setShowNavbar] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setShowNavbar(currentScrollPos > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <>
        {showBanner && (
          <div className="container"> {/* Apply custom styles if desired */}
            <p>This is your banner</p>
            <button onClick={() => setShowBanner(false)}>Hide Banner</button>
          </div>
        )}
        
      </>
    );
  };
  