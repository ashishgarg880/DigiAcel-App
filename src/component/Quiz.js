import React, { useState, useEffect } from "react";
import Api from "../Api/Api.json";
export default function Quiz() {
  const [apiCall, setApiCall] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  // const Api = JSON.parse(Api)
  console.log(Api);
  // useEffect(() => {
  //   let arr = [];
  //   arr = Api;
  //   setApiCall(arr);
  //   if(arr.length > 1){
  //     arr.map((data,idx)=>{
  //       // idx === 0 ?  setCurrentQuestion(data) : null
  //       // idx == 1 ?
  //     })
  //   }
  //   return () => {
  //     fetch(Api).then(() => {
  //       console.log();
  //     });
  //   };
  // }, []);

  onSubmit=(data)=>{

  }

  return (
    <div>
      <header>
        <h2>Welcome to Quiz Page</h2>
      </header>
      <body
        style={{ display: "block", border: "1px solid black" }}
        className="container"
      >
        <div className="col-md-12">
          <div className="col-md-6">
            {Api.length > 0
              ? Api.map((data, idx) => {
                  <>
                    <h2>{data.switch}</h2>

                    <nav>
                      {data.answer.map((ans) => {
                        <li key={ans} onClick={()=>onSubmit(ans)}>{ans}</li>;
                      })}
                    </nav>

                  </>;
                })
              : null}
          </div>
        </div>
      </body>
      <footer></footer>
    </div>
  );
}
