import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ChakraProvider } from '@chakra-ui/react';
import './globals.css';
import { Poppins } from 'next/font/google';
import { Navbar } from '@/components/Navbar/Navbar';
import Footer from '@/components/footer';
import { AsistenteVirtual } from '@/components/asistente-virtual/asistente';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'Peluquería Gisela',
  description: 'Donde la belleza se encuentra con la experiencia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`font-sans`} style={{ fontFamily: poppins.style.fontFamily }}>
      <UserProvider>
        <body>
          <ChakraProvider>
            <Navbar />
            {children}
            <Footer />
            <AsistenteVirtual />
          </ChakraProvider>
        </body>
      </UserProvider>
    </html>
  );
}
