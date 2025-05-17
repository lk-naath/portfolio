'use client';

import Layout from '@/components/layout/Layout';
import RootLayout from '@/components/layout/RootLayout';
import Overview from '@/components/sections/Overview';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <RootLayout>
      <Layout>
        <div className="relative animate-stagger-fade">
          {/* Background gradient animation */}
          <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

          {/* Animated sections */}
          <AnimatedSection direction="up">
            <Overview />
          </AnimatedSection>

          <AnimatedSection direction="up">
            <Skills />
          </AnimatedSection>

          <AnimatedSection direction="up">
            <Experience />
          </AnimatedSection>

          <AnimatedSection direction="up">
            <Contact />
          </AnimatedSection>

          {/* Floating elements */}
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
            />
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
            />
          </div>
        </div>
      </Layout>
    </RootLayout>
  );
}
