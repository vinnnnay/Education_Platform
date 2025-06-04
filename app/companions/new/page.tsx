import React from 'react';
import CompanionFrom from '@/components/CompanionForm';
const NewCompanion = () => {
  return (
    <main className='min-lg:w-1/3 max-md:w-2/3  items-center justify-center '> 
      <article className='w-full  gap-4 flex flex-col'>
        <h1>Companion Builder</h1>
        <CompanionFrom/>
        
      </article>
      
    </main>
  );
}

export default NewCompanion;
