import Link from "next/link";

export default function CustomButton(
{ hrefLink, title, colour, svgStr } : {
    hrefLink: string,
    title: string,
    colour: string,
    svgStr: string,
}
) {
    let buttoncolor = `bg-${colour}-400`;
    let hovercolor = `hover:bg-${colour}-500`;

    let bordercolor = `border-${colour}-500`;
    let hoverbordercolor = `hover:border-${colour}-700`;

    let buttonStyle = `flex gap-2 self-center ${buttoncolor} ${hovercolor} text-white font-bold py-2 px-4 border-b-4 ${bordercolor} ${hoverbordercolor} rounded`;
    return (
        <Link href={hrefLink}>
            <div className={buttonStyle}>
            <svg fill='#ffffff' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d={svgStr}/></svg>
            {title}
            </div>
        </Link>
    );
    
} 

// flex gap-2 self-center bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-700 rounded