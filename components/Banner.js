import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const ScrollListener = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      {showBanner && <Alert variant="danger">You can make your Giving to our bank account directly BANK NAME: FNB. ACCOUNT NUMBER: 62759134035 . ACCOUNT NAME: Tcoan The Temple church of All Nations. SWIFT CODE:Firnzajjxxx. </Alert>}
      {/* Your React-Bootstrap component goes here */}
    </>
  );
};

export default ScrollListener;
