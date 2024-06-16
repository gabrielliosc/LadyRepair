import { CategoryTag } from "./style";


export function Tag({title}: {title: string}) {
    return (
        <CategoryTag>
            {title}
        </CategoryTag>
    )
}