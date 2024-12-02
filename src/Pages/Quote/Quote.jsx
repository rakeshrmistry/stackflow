import { useState, useEffect } from "react";
import tweet_icon from '../../assets/X_logo_2023_original.svg'
import load_icon from '../../assets/refresh-151.svg'
import './Quote.css'


function QuoteBox() {
  const [quotes, setQuotes] = useState([]); // State to store quotes
  const [quote, setQuote] = useState({
    text: "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
    author: "Abdul Kalam",
  });

  // Fetch quotes on component mount
  useEffect(() => {
    async function generateQuote() {
      try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        setQuotes(data.quotes || []); // Store the quotes array from API
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    }
    generateQuote();
  }, []); // Empty dependency array ensures this runs once on mount

  // Select a random quote
  const randomQuote = () => {
    if (quotes.length > 0) {
      const select = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote({
        text: select.quote, // Use `quote` for text
        author: select.author, // Use `author` for author
      });
    } else {
      console.warn("Quotes array is empty!");
    }
  };


const tweet = () =>{
  window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`)

}



  return (
    <div className="quote-box">
      <div className="quote-text">{quote.text}</div>
      <div className="border"></div>
      <div className="bottom-part">
        <div className="author">{quote.author}</div>
        <div className="social-icon-box">
          <img
            src={load_icon}
            alt="load"
            onClick={() => {
              randomQuote();
            }}
          />
          <img src={tweet_icon} alt="tweet" onClick={()=>{tweet()}} />
        </div>
      </div>
    </div>
  );
}

export default QuoteBox;
