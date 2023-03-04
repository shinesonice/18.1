import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import useInput from "../../hooks/use-input";
import { AddQuote } from "../../lib/api";
import classes from "./QuoteForm.module.css";

const validateFn = (value) => {
  return value.length > 0;
};

const QuoteForm = () => {
  const navigate = useNavigate();

  const { sendRequest, status, error } = useHttp(AddQuote);
  const {
    value: authorValue,
    hasError: authorHasError,
    inputBlurHandler: authorBlurHandler,
    inputChangeHandler: authorChangeHandler,
    inputResetHandler: authorResetHandler,
  } = useInput(validateFn);
  const {
    value: textValue,
    hasError: textHasError,
    inputBlurHandler: textBlurHandler,
    inputChangeHandler: textChangeHandler,
    inputResetHandler: textResetHandler,
  } = useInput(validateFn);
  useEffect(() => {
    if (status === "completed") {
      navigate("/");
    }
  }, [status]);
  const submitHandler = (e) => {
    e.preventDefault();

    const formIsNotValid = authorHasError || textHasError;
    if (formIsNotValid) return;
    sendRequest({ author: authorValue, text: textValue });
    console.log(error);
    if (status === "completed") navigate("/quotes");
    authorResetHandler();
    textResetHandler();
  };
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          className={authorHasError && classes["input-error"]}
          onChange={authorChangeHandler}
          onBlur={authorBlurHandler}
          value={authorValue}
        />
        {authorHasError && (
          <p className={classes["text-error"]}>author is invalid</p>
        )}
        <label htmlFor="text">Text</label>
        <textarea
          type="text"
          id="text"
          className={textHasError && classes["input-error"]}
          onChange={textChangeHandler}
          onBlur={textBlurHandler}
          value={textValue}
        />
        {textHasError && (
          <p className={classes["text-error"]}>text is invalid</p>
        )}
        <button>Add Quote</button>
      </form>
    </div>
  );
};

export default QuoteForm;
