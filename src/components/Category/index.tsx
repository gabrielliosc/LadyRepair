
interface CategoryProps {
    src: string,
    title: string
}


export function Category({ src, title }: CategoryProps) {
    return (
        <div>
            <img src={src} alt="" />
            <p>{title}</p>
        </div>
    )
}