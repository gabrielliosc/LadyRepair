import { useState } from "react";
import { CategoryTag, CategoryTagActive } from "./style";
import { Close } from "@styled-icons/material-rounded/Close";

export function Tag({title}: {title: string}) {

    const [tagActive, setTagActive] = useState(false);

    const handleTagClick = () => setTagActive(!tagActive)

    return (
        <>
            {tagActive ? 
                <CategoryTagActive onClick={handleTagClick}>
                    {title}<Close size={15} />
                </CategoryTagActive> 
                : 
                <CategoryTag onClick={handleTagClick}>{title}</CategoryTag>
            }
        </>        
    )
}