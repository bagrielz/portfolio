import Contact from '@/components/contact/contact';
import DesignProjects from '@/components/design/projects';
import DevelopmentProjects from '@/components/development/projects';
import { Header } from '@/components/header';
import ThemeProvider from '@/providers/theme-provider';

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="w-[592px] p-4 md:p-0">
        <Header />
        <DevelopmentProjects />
        <DesignProjects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}
