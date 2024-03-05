import Link from "next/link";

export default function CustomButton(
{ hrefLink, title, colour, svgStr } : {
    hrefLink: string,
    title: string,
    colour: string,
    svgStr: string,
}
) {
    type colourVariants = {
        [key: string]: string
    }
    let colourVariants : any = {
        'blue': 'bg-blue-400 hover:bg-blue-500 border-blue-500 hover:border-blue-700',
        'rose': 'bg-rose-400 hover:bg-rose-500 border-rose-500 hover:border-rose-700',
        'purple': 'bg-purple-400 hover:bg-purple-500 border-purple-500 hover:border-purple-700',
    }


    const buttonStyle = `${colourVariants[colour]} flex gap-2 self-center text-white font-bold py-2 px-4 border-b-4 rounded`;
    return (
        <Link href={hrefLink}>
            <div className={buttonStyle}>
                <svg fill='#ffffff' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d={svgStr}/></svg>
                {title}
            </div>
        </Link>
    );
    
} 