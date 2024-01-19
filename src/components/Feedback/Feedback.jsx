import css from "./Feedback.module.css"
import { BsEmojiHeartEyes } from "react-icons/bs";
import { BsEmojiNeutral } from "react-icons/bs";
import { BsEmojiFrown } from "react-icons/bs";
import { BsFileSpreadsheet } from "react-icons/bs";
import { BsPercent } from "react-icons/bs";

export const Feedback = ({values: {good, neutral, bad}, totalFeedback, positiveFeedback}) => {
    return (
            <ul className={css.itemFeedback}>
                <li className={`${css.listItemFeedback} ${css.listItemGood}`}><BsEmojiHeartEyes />  Good: {good}</li>
                <li className={`${css.listItemFeedback} ${css.listItemNeutral}`}><BsEmojiNeutral />  Neutral: {neutral}</li>
                <li className={`${css.listItemFeedback} ${css.listItemBad}`}><BsEmojiFrown />  Bad: {bad}</li>
                <li className={`${css.listItemFeedback} ${css.listItemTotal}`}><BsFileSpreadsheet />  Total: {totalFeedback}</li>
                <li className={`${css.listItemFeedback} ${css.listItemPositive}`}><BsPercent />  Positive: {positiveFeedback}&#37;</li>
            </ul>
    )
}