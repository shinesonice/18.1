import classes from "./QuoteItem.module.css";
import { Link } from "react-router-dom";

const QuoteItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.content}>
        <p className={classes.text}>{props.quote.text}</p>
        <p className={classes.author}>{props.quote.author}</p>
      </div>
      <Link className={classes.btn} to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </div>
  );
};

export default QuoteItem;
