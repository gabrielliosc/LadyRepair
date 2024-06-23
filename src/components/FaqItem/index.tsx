import { useState } from "react"
import { FaqItemContainer, FaqQuestion, FaqAnswer } from "./style"
import { ArrowIosDownwardOutline } from "@styled-icons/evaicons-outline/ArrowIosDownwardOutline"
import { ArrowIosUpwardOutline } from "@styled-icons/evaicons-outline/ArrowIosUpwardOutline"


export function FaqItem({ question, answer }: { question: string, answer: string }) {

        const [questionOpen, setQuestionOpen] = useState(false)

    function handleDropDownArrowClick() {
        setQuestionOpen(true)
    }

    function handleUpArrowClick() {
        setQuestionOpen(false)
    }

    return (
        <FaqItemContainer>
            <FaqQuestion>
                <span>{question}</span> 
                {questionOpen ? 
                <ArrowIosUpwardOutline className="active" onClick={handleUpArrowClick} size={24} /> 
                : 
                <ArrowIosDownwardOutline  onClick={handleDropDownArrowClick} size={24} />}
            </FaqQuestion>
            
            {questionOpen && 
            <FaqAnswer>
                <hr />
                {answer}
            </FaqAnswer>}
        </FaqItemContainer>
    )
}