import classes from "./Quotes.module.css";
import QuoteList from "./QuoteList/QuoteList";
import { useLocation, useNavigate } from "react-router-dom";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const Quotes = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.data, isSortingAscending);

  const changeSortingHandler = () => {
    navigate(
      `${location.pathname}?sort=${isSortingAscending ? "desc" : "asc"}`
    );
  };

  return (
    <div className={classes.container}>
      <button className={classes.btn} onClick={changeSortingHandler}>
        Sort {isSortingAscending ? "Descending" : "Ascending"}
      </button>
      <QuoteList data={sortedQuotes} />
    </div>
  );
};

export default Quotes;
