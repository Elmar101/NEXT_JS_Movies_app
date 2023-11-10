import { HomeContainer } from '@/containers/home';
import { Metadata } from 'next'

export const metadata: Metadata = {
 title: 'My Page Title',
};

export default function Home() {
  return (
   <HomeContainer />
  );
}
