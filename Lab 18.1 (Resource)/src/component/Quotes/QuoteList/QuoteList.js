import QuoteItem from "../QuoteItem/QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  return (
    <div className={classes.container}>
      <ul>
        {props.data.map((quote) => (
          <QuoteItem quote={quote} key={quote.id} />
        ))}
      </ul>
    </div>
  );
};

export default QuoteList;
