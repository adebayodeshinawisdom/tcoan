import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const ScrollListener = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > 100) {
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showBanner && <Alert variant="info">You can make your Giving to our bank account directly BANK NAME: FNB. ACCOUNT NUMBER: 62759134035 . ACCOUNT NAME: Tcoan The Temple church of All Nations. SWIFT CODE:Firnzajjxxx. </Alert>}
      {/* Your React-Bootstrap component goes here */}
    </>
  );
};

export default ScrollListener;
