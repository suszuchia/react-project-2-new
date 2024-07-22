import React from "react";
import Header from "./components/Header";
import ConverterForm from "./components/ConverterForm";
import Result from "./components/Result";
import Loader from "./components/Loader";

function App() {
  const [result, setResult] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleConvert = async (amount, currency) => {
    setLoading(true);
    setResult("");

    try {
      const response = await fetch(
        `https://api.nbp.pl/api/exchangerates/rates/A/${currency}/?format=json`
      );
      const data = await response.json();
      const rate = data.rates[0].mid;
      const convertedAmount = (amount * rate).toFixed(2);
      setResult(`TO ${convertedAmount} PLN`);
    } catch (error) {
      setResult("Error fetching exchange rate");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Header />
      <main>
        <ConverterForm onConvert={handleConvert} />
        {loading ? <Loader /> : <Result result={result} />}
      </main>
    </div>
  );
}

export default App;
