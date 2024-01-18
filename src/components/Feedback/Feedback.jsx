import css from "./Feedback.module.css"

export const Feedback = ({values: {good, neutral, bad}, totalFeedback, positiveFeedback}) => {
    return (
            <ul className={css.itemFeedback}>
                <li className={css.listItemFeedback}>Good: {good}</li>
                <li className={css.listItemFeedback}>Neutral: {neutral}</li>
                <li className={css.listItemFeedback}>Bad: {bad}</li>
                <li className={css.listItemFeedback}>Total: {totalFeedback}</li>
                <li className={css.listItemFeedback}>Positive: {positiveFeedback}&#37;</li>
            </ul>
    )
}