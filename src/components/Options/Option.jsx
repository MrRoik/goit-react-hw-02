import css from "./Options.module.css"

export const Options = ({onUpdate, isHidden, onReset}) => {
    return (
        <div className={css.containerOptions}>
            <button onClick={() => onUpdate("good")} name="good" className={css.btnGood}>Good</button>
            <button onClick={() => onUpdate("neutral")} name="neutral" className={css.btnNeutral}>Neutral</button>
            <button onClick={() => onUpdate("bad")} name="bad" className={css.btnBad}>Bad</button>
            {!isHidden && <button onClick={onReset}>Reset</button>}
        </div>
    )
}