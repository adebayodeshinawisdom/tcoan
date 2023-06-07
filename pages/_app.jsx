<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"/>
import '../style/index.css'
import Header from './../components/Header'
import Footer from './../components/Footer'
import Head from 'next/head'
import { StoreProvider } from './../utils/Store';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';





 function MyApp({ Component, pageProps:  { session, ...pageProps } }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-out-quart', // Easing function for the animation
      once: true, // Only animate an element once
      mirror: true, // Animate on scrolling up as well as down
    });
  }, []);
  
  return( 
  <>
  
  <SessionProvider session={session}>
  <StoreProvider>
  <Header/>
  {Component.auth ? (
          <Auth adminOnly={Component.auth.adminOnly}>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
        <br/>
        <br/>
    <Footer/>
    </StoreProvider>
    </SessionProvider>
  </>
  )


function Auth({ children,  adminOnly }) {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=login required');
    },
  });
  if (status === 'loading') {
    return <div className='container'>Loading...</div>;
  }
  if (adminOnly && !session.user.isAdmin) {
    router.push('/unauthorized?message=admin login required');
  }

  return children;
}

}
export default MyApp