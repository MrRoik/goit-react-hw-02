import css from "./Options.module.css"
import { BsEmojiHeartEyes } from "react-icons/bs";
import { BsEmojiNeutral } from "react-icons/bs";
import { BsEmojiFrown } from "react-icons/bs";

export const Options = ({onUpdate, isHidden, onReset}) => {
    return (
        <div className={css.containerOptions}>
            <button onClick={() => onUpdate("good")} className={css.btnGood}><BsEmojiHeartEyes />  Good</button>
            <button onClick={() => onUpdate("neutral")} className={css.btnNeutral}><BsEmojiNeutral />  Neutral</button>
            <button onClick={() => onUpdate("bad")} className={css.btnBad}><BsEmojiFrown /> Bad</button>
            {!isHidden && <button onClick={onReset}>Reset</button>}
        </div>
    )
}