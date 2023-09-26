import Link from 'next/link';

export default function Navigation() {
    return( 
    <div className="flex space-x-32 justify-between items-center gap-56 text-2xl mt-3">
        <div className="flex ml-10 gap-2 items-center">
            <span className="rounded-lg bg-neutral-700 pl-2 pr-2">
                <h1 className='text-3xl text-slate-50 p-1'>Lee</h1>
            </span>
            <h1 className='text-3xl font-bold '>Maneclang</h1>
        </div>
        <nav className="flex sm:justify-center ">
            <div className="text-xl mr-7">
            {[
                ['Home', '/'],
                ['About','/about'],
                ['Projects', '/projects'],
                ['Qualifications','/qualifications'],
            ].map(([title,url]) => (
                <Link href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-300 hover:text-slate-900">{title}</Link>
            ))}
            </div>
        </nav>
    </div>
    )
}