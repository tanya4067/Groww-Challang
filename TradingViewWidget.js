// TradingViewWidget.jsx
import React, { useEffect, useRef, memo,useState } from 'react';

function TradingViewWidget() {
  const container = useRef();
  const [search,setSearch]=useState("");
  fetch("http://127.0.0.1:8000/getStocks")
            .then(resp => {
                return resp.json();
            }).then(results => {
                var a=(results.data.length);
                setSearch(results.data[a-1].search);

        })
   console.log(search);
  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      const a="";
      if(search=="Microsoft")
      {
        a="MSFT|1D";
        console.log('Hihih');
      }
      script.innerHTML = 
        {
          "symbols": [
            [
              {search},
              {a}
            ]
          ],
          "chartOnly": false,
          "width": 550,
          "height": 400,
          "locale": "en",
          "colorTheme": "dark",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        };
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text"></span></a></div>
      <div>
        Current Price : 100000 rs
        <br></br>
        Stock P/E :
        <br></br>
        ROCE :
        <br></br>
        Book Values :
        <br></br>
        High/Low: 
        <br></br>
        Dividend Yield :
        <br></br>
        Face Value:
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);