type Props= {
    children: string | JSX.Element | JSX.Element[]
}

export default function Subheading({children}: Props) {
    return(
        <h2 className="text-3xl text-bluedark font-bold">{children}</h2>
        
    );
}