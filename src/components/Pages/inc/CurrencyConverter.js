import React, {useState, useEffect} from "react";
import "./CurrencyConverter.css"
import CurrencyInput from "../../HCA/CurrencyInput";
import axios from "axios";

function CurrencyConverter() {

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [amount3, setAmount3] = useState(1);
  const [amount4, setAmount4] = useState(1);
  const [amount5, setAmount5] = useState(1);
  const [amount6, setAmount6] = useState(1);
  
  const [currency1, setCurrency1] = useState('KWD');
  const [currency2, setCurrency2] = useState('BHD');
  const [currency3, setCurrency3] = useState('KYD');
  const [currency4, setCurrency4] = useState('USD');
  const [currency5, setCurrency5] = useState('AED');
  const [currency6, setCurrency6] = useState('INR');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios.get('https://api.exchangerate.host/latest')
      .then(response => {
        setRates(response.data.rates);
      })
  }, []);

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates]);



  function format(number) {
    return number.toFixed(2);
  }
// first input
  function handleAmount1Change(amount1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setAmount3(format(amount1 * rates[currency3] / rates[currency1]));
    setAmount4(format(amount1 * rates[currency4] / rates[currency1])); 
    setAmount5(format(amount1 * rates[currency5] / rates[currency1])); 
    setAmount6(format(amount1 * rates[currency6] / rates[currency1])); 
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setAmount3(format(amount1 * rates[currency3] / rates[currency1]));
    setAmount4(format(amount1 * rates[currency4] / rates[currency1]));  
    setAmount5(format(amount1 * rates[currency5] / rates[currency1]));  
    setAmount6(format(amount1 * rates[currency6] / rates[currency1]));  
    setCurrency1(currency1);
}

function handleAmount2Change(amount2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setAmount3(format(amount2 * rates[currency3] / rates[currency2]));
    setAmount4(format(amount2 * rates[currency4] / rates[currency2]));
    setAmount5(format(amount2 * rates[currency5] / rates[currency2]));
    setAmount6(format(amount2 * rates[currency6] / rates[currency2]));
    setAmount2(amount2);
  }
  
  function handleCurrency2Change(currency2) {
      setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
      setAmount3(format(amount2 * rates[currency3] / rates[currency2])); 
      setAmount4(format(amount2 * rates[currency4] / rates[currency2]));
      setAmount5(format(amount2 * rates[currency5] / rates[currency2]));
      setAmount6(format(amount2 * rates[currency6] / rates[currency2]));
      setCurrency2(currency2);
    }
    
    function handleAmount3Change(amount3) {
        setAmount1(format(amount3 * rates[currency1] / rates[currency3]));
        setAmount2(format(amount3 * rates[currency2] / rates[currency3]));
        setAmount4(format(amount3 * rates[currency4] / rates[currency3])); 
        setAmount5(format(amount3 * rates[currency5] / rates[currency3])); 
        setAmount6(format(amount3 * rates[currency6] / rates[currency3])); 
        setAmount3(amount3);
    }
    
    function handleCurrency3Change(currency3) {
        setAmount1(format(amount3 * rates[currency1] / rates[currency3]));
        setAmount2(format(amount3 * rates[currency2] / rates[currency3]));
        setAmount4(format(amount3 * rates[currency4] / rates[currency3]));
        setAmount5(format(amount3 * rates[currency5] / rates[currency3]));
        setAmount6(format(amount3 * rates[currency6] / rates[currency3]));
    setCurrency3(currency3);
  }
    
    function handleAmount4Change(amount4) {
        setAmount1(format(amount4 * rates[currency1] / rates[currency4]));
        setAmount2(format(amount4 * rates[currency2] / rates[currency4]));
        setAmount3(format(amount4 * rates[currency3] / rates[currency4]));
        setAmount5(format(amount4 * rates[currency5] / rates[currency4]));
        setAmount6(format(amount4 * rates[currency6] / rates[currency4]));
        setAmount4(amount4);
    }
    
    function handleCurrency4Change(currency4) {
        setAmount1(format(amount4 * rates[currency1] / rates[currency4]));
        setAmount2(format(amount4 * rates[currency2] / rates[currency4]));
        setAmount3(format(amount4 * rates[currency3] / rates[currency4]));
        setAmount5(format(amount4 * rates[currency5] / rates[currency4]));
        setAmount6(format(amount4 * rates[currency6] / rates[currency4]));
    setCurrency4(currency4);
  }
    
    function handleAmount5Change(amount5) {
        setAmount1(format(amount5 * rates[currency1] / rates[currency5]));
        setAmount2(format(amount5 * rates[currency2] / rates[currency5]));
        setAmount3(format(amount5 * rates[currency3] / rates[currency5]));
        setAmount4(format(amount5 * rates[currency4] / rates[currency5]));
        setAmount6(format(amount5 * rates[currency6] / rates[currency5]));
        setAmount5(amount5);
    }
    
    function handleCurrency5Change(currency5) {
        setAmount1(format(amount5 * rates[currency1] / rates[currency5]));
        setAmount2(format(amount5 * rates[currency2] / rates[currency5]));
        setAmount3(format(amount5 * rates[currency3] / rates[currency5]));
        setAmount4(format(amount5 * rates[currency4] / rates[currency5]));
        setAmount6(format(amount5 * rates[currency6] / rates[currency5]));
    setCurrency5(currency5);
  }
    
    function handleAmount6Change(amount6) {
        setAmount1(format(amount6 * rates[currency1] / rates[currency6]));
        setAmount2(format(amount6 * rates[currency2] / rates[currency6]));
        setAmount3(format(amount6 * rates[currency3] / rates[currency6]));
        setAmount4(format(amount6 * rates[currency4] / rates[currency6]));
        setAmount5(format(amount6 * rates[currency5] / rates[currency6]));
        setAmount6(amount6);
    }
    
    function handleCurrency6Change(currency6) {
        setAmount1(format(amount6 * rates[currency1] / rates[currency6]));
        setAmount2(format(amount6 * rates[currency2] / rates[currency6]));
        setAmount3(format(amount6 * rates[currency3] / rates[currency6]));
        setAmount4(format(amount6 * rates[currency4] / rates[currency6]));
        setAmount5(format(amount6 * rates[currency5] / rates[currency6]));
    setCurrency6(currency6);
  }



  return (
    <div className="currency-body">
        <h1>Currency Converter</h1>
        <div className="Currency-Input">
        <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1} />
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2} />
      <CurrencyInput
        onAmountChange={handleAmount3Change}
        onCurrencyChange={handleCurrency3Change}
        currencies={Object.keys(rates)}
        amount={amount3}
        currency={currency3} />
      <CurrencyInput
        onAmountChange={handleAmount4Change}
        onCurrencyChange={handleCurrency4Change}
        currencies={Object.keys(rates)}
        amount={amount4}
        currency={currency4} />
      <CurrencyInput
        onAmountChange={handleAmount5Change}
        onCurrencyChange={handleCurrency5Change}
        currencies={Object.keys(rates)}
        amount={amount5}
        currency={currency5} />
      <CurrencyInput
        onAmountChange={handleAmount6Change}
        onCurrencyChange={handleCurrency6Change}
        currencies={Object.keys(rates)}
        amount={amount6}
        currency={currency6} />
        </div>
    </div>
  );
}

export default CurrencyConverter;