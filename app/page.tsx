import React from 'react'
import {Button} from '@/components/ui/button'
import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'

import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
       <h1>Popular companions </h1>
       <section className='home-section'>
        <CompanionCard
          id= "123" 
          name = "new companion" 
          topic = "new topic" 
          subject = "new subject" 
          description = "new description" 
          duration = {45} 
          color = "lightyellow"


          />
        <CompanionCard  id= "456"
          name = "new companion"
          topic = "new topic"
          description = "new description"
          subject = "new subject" 
          duration = {45} 
          color = "lightgreen"/>
        <CompanionCard
          id= "456" 
          name = "new companion" 
          topic = "new topic" 
          description = "new description" 
          subject = "new subject" 
          duration = {45} 
          color = "lightblue"
        />

       </section>

       <section className='home-section'>
        <CompanionList  
        title="Recent sessions"
        companions = {recentSessions}

        classNames = "w-2/3 max-lg:w-full"
        />
        
        <CTA/>

       </section>





    </main>


  )
}

export default Page