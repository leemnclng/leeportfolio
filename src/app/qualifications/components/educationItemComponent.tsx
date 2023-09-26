import React from 'react';

interface EducationContent {
  date: string;
  startMonth: string;
  endMonth: string;
  course: string;
  school: string;
  location: string;
  firstChild?: boolean;
  lastChild?: boolean;
}

export default function EducationItemComponent({
  date,
  startMonth,
  endMonth,
  course,
  school,
  location,
  firstChild,
  lastChild }: EducationContent) {
  // let componentToRender;

  const defaultLayout = (
    <div className='flex flex-row justify-between items-center'>
      <div className='flex flex-col ml-16 w-full mt-4 '>
        {/*  left side */}
        <div className='flex justify-start mr-5 text-4xl font-semibold italic text-zinc-400'>
          {course}
        </div>
        <div className='text-3xl font-bold text-zinc-800'>
          {school}
        </div>
        <div className='text-base font-normal text-zinc-700'>
          {location}
        </div>
      </div>
      <div className='flex flex-col text-center w-96 h-auto gap-4'>
        {/* right side */}
        <div className='mt-4 text-7xl font-bold font-serif text-zinc-700'>
          {date}
        </div>
        <div className='text-base font-medium text-zinc-600'>
          {startMonth} - {endMonth}
        </div>
      </div>
    </div>
  )

  // switch (true) {
  //   case firstChild || lastChild:
  //     componentToRender = (
  //       <div className='border-t-2 border-b-2'>
  //         {defaultLayout}
  //       </div>
  //     )
  //     break;

  //   default:
  //     componentToRender = defaultLayout
  //     break;
  // }
  return <div>{defaultLayout}</div>
}