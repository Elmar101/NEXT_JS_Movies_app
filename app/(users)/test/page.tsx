import { notFound } from 'next/navigation';
import React from 'react'

const delay = async (ms: number) => {
  return new Promise((resolve)=>{
    setTimeout(() => resolve(ms), ms)
  });
};

const Test = async ( {searchParams}:{searchParams: { error?: string, notFound?: string}} ) => {

  await delay(2000);

  if(searchParams.error === 'true') throw new Error("THIS IS ERROR")
  
  if(searchParams.notFound === 'true') notFound();
  

  return (
    <div>Test page</div>
  )
}

export default Test