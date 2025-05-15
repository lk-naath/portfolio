import Layout from '@/components/layout/Layout';
import Overview from '@/components/sections/Overview';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <Layout>
      <Overview />
      <Skills />
      <Experience />
      <Contact />
    </Layout>
  );
}
