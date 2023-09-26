import React from 'react';

interface ExperienceContent {
  date: string;
  startMonth: string;
  endMonth: string;
  positionLabel: string;
  position: string;
  companyName: string;
  content: Array<string>;
  firstChild?: boolean;
  lastChild?: boolean;
}

export default function ExperienceItemComponent({
  date,
  startMonth,
  endMonth,
  positionLabel,
  position,
  companyName,
  content,
  firstChild,
  lastChild }: ExperienceContent) {
  let componentToRender;

  const defaultLayout = (
    <div className='flex flex-row justify-between'>
      <div className='flex flex-col text-center border-r-2 w-96 h-auto gap-4'>
        {/*  left side */}
        <div className='mt-4 text-7xl font-bold font-serif text-zinc-700'>
          {date}
        </div>
        <div className='text-base font-medium text-zinc-600'>
          {startMonth} - {endMonth}
        </div>
      </div>
      <div className='flex flex-col ml-16 w-full mt-4'>
        {/* right side */}
        <div className='flex justify-end mr-5 text-2xl font-semibold italic text-zinc-400'>
          {positionLabel}
        </div>
        <div className='text-4xl font-bold text-zinc-800'>
          {position}
        </div>
        <div className='text-base font-normal text-zinc-700'>
          {companyName}
        </div>
        <div className='mb-10 mt-4 text-sm font-light text-zinc-600'>
          {content.map((data, index) => {
            return (
              <ul className='list-disc list-inside'>
                <li className='text-left' key={index}>{data}</li>
              </ul>
            )
          })}
        </div>
      </div>
    </div>
  )

  switch (true) {
    case firstChild || lastChild:
      componentToRender = (
        <div className='border-t-2 border-b-2'>
          {defaultLayout}
        </div>
      )
      break;

    default:
      componentToRender = defaultLayout
      break;
  }
  return <div>{componentToRender}</div>
}