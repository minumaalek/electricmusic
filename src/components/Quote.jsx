import { quotes } from "../js/quotes";
const Quote = (WrappedComponent) => {
  let quote = quotes[Math.floor(Math.random() * 3)];
  return (props) => {
    return (
      <div>
        <WrappedComponent {...props} />
        <span>{quote.Text}</span>
      </div>
    );
  };
};

export default Quote;
