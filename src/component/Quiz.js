import React, { useState, useEffect } from "react";
import Api from "../Api/Api.json";
export default function Quiz() {
  const [apiCall, setApiCall] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [count, setCount] = useState(0);
  // const Api = JSON.parse(Api)
  useEffect(() => {
    setApiCall(Api);
  }, []);
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

  const onSubmit = (data, ans) => {
    let letCount = 0;
    apiCall.map((api, index) => {
      if (api.id === data.id) {
        api.answer.map((an, idx) => {
          if (idx === data.finalAnswer && ans === an) {
            letCount = 1;
          }
        });
      }
    });
    if (letCount === 1) {
      setCount(count + 1);
      apiCall.map((api) => {
        if (api.switch === "hard") {
          setCurrentQuestion(api);
        }
      });
    } else {
      setCount(count - 1);
      apiCall.map((api) => {
        if (api.switch === "easy") {
          setCurrentQuestion(api);
        }
      });
    }
  };

  return (
    <div style={{ boxShadow: "5px 5px 5px 5px", padding: "5px" }}>
      <header>
        <h2>Welcome to Quiz Page</h2>
      </header>
      <body
        style={{
          zIndex: "2",
          borderRadius: "5px",
          padding: "10px",
        }}
        className="container"
      >
        <div className="col-md-12">
          <div className="col-md-12">
            {Api.length > 0
              ? Api.map((data, idx) => (
                  <div>
                    <h2 >{data.question}</h2>
                    <nav>
                      {data.answer.map((ans) => (
                        <li
                          key={ans}
                          onClick={() => onSubmit(data, ans)}
                          style={{
                            display: "inline-flex",
                            border: "1px solid black",
                            position: "relative",
                            margin: "5px",
                            padding: "5px",
                            borderRadius: "4px",
                            justifyContent:"space-between",
                            cursor:"pointer"
                          }}
                          
                        >
                          {ans}
                        </li>
                      ))}
                    </nav>
                  </div>
                ))
              : null}
          </div>
        </div>
      </body>
      <footer></footer>
    </div>
  );
}
