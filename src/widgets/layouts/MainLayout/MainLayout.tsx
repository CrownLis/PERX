import { FC, PropsWithChildren, ReactNode } from 'react';
import { Footer } from '../../footer/footer';
import { Header } from '../../header/header';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
