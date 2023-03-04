import { useParams } from "react-router-dom";
import { Fragment, useEffect } from "react";
import HighlightedQuote from "../component/Quotes/QuoteItem/HighlightQuote/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { GetSingleQuotes } from "../lib/api";

const QuoteDetail = () => {
  const param = useParams();
  const { quoteId } = param;
  const {
    sendRequest,
    status,
    error,
    data: loadedQuote,
  } = useHttp(GetSingleQuotes);
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  return (
    <Fragment>
      {status === "completed" && loadedQuote !== null && (
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      )}
    </Fragment>
  );
};

export default QuoteDetail;
