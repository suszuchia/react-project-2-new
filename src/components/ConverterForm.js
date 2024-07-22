import React, { useState } from "react";
import "./ConverterForm.css";

const ConverterForm = ({ onConvert }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");

  const handleSubmit = (event) => {
    event.preventDefault();
    onConvert(amount, currency);
  };

  return (
    <form
      id="converter-form"
      className="converter-form"
      onSubmit={handleSubmit}
    >
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        min="0.01"
        step="0.01"
        required
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="form-field"
      />
      <select
        name="currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="form-field"
      >
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CHF">CHF</option>
      </select>
      <button type="submit" className="form-field convert-button">
        Convert
      </button>
    </form>
  );
};

export default ConverterForm;
