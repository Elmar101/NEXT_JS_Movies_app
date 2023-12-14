import { HomeContainer } from '@/containers/home';
import { Metadata } from 'next'
import Movies  from '@/mocks/movies.json';
export const metadata: Metadata = {
 title: 'My Page Title',
};

interface IProps{
  params: { category: string[]};
};

const delay = async (ms: number) => {
  return new Promise((resolve)=>{
    setTimeout(() => resolve(ms), ms)
  });
};

export default async function Home({ params }: IProps) {
  await delay(4000);

  let selecetedCategory = false;
  if(params.category?.length){
    selecetedCategory = true;
  }
  return (
   <HomeContainer selectedCategory={{
    id: params.category?.[0] ?? '',
    movies:  selecetedCategory ? Movies.results.slice(0,8) : [] 
   }}/>
  );
}
