import type { Metadata } from 'next';
import './globals.css';
import { font_body } from './functions/font';

export const metadata: Metadata = {
  title: 'Gabriel Stênio | Desenvolvedor',
  description: 'Sinta-se à vontade para agendarmos uma conversa.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${font_body.className} bg-neutral-50 dark:bg-dark-100 flex justify-center text-sm`}
      >
        {children}
      </body>
    </html>
  );
}
