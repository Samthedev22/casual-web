// src/app/layout.js (or root layout depending on your Next.js version)
import './global.css';
import Header from './components/header';
import Footer from './components/footer';
import CallToAct from './components/calltoaction';
import ScrollToTopButton from './components/scroll';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" size="any" />
        <title>Casuals Barber Salon</title>
        <meta name="description" content="casuals - Best barber and salon shop in Ottawa" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
          {children}
        </main>
        <CallToAct />
        <ScrollToTopButton/>
        <Footer/>
      </body>
      
    </html>
  );
}
