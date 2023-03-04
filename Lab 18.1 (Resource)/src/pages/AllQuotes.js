import { useEffect } from "react";
import { GetAllQuotes } from "../lib/api";
import useHttp from "../hooks/use-http";
import Quotes from "../component/Quotes/Quotes";

const AllQuotes = () => {
  const { sendRequest, status, data, error } = useHttp(GetAllQuotes);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  return status === "completed" && error === null && <Quotes data={data} />;
};

export default AllQuotes;
