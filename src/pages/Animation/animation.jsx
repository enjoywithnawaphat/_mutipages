import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./animation.css";

function Animation() {
  const fieldWidth = 700;
  const fieldHeight = 400;
  const ballDiameter = 100;
  const maxLeft = fieldWidth - ballDiameter - 6;
  const maxTop = fieldHeight - ballDiameter - 6;

  const vy = 5;
  const vs = 5;

  const [running, setRunning] = useState(false);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [left, setLeft] = useState(0);
  const [top_, setTop] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [random, setRandom] = useState(Math.random() * 10);

  useEffect(() => {
    initial();
    const interval = setInterval(() => {
      if (running) {
        calculate();
        render();
      }
    }, 25);

    return () => clearInterval(interval); // Clear interval on unmount
  }, [running, left, top_]); // add dependencies

  function initial() {
    document.getElementById("field").style.width = fieldWidth + "px";
    document.getElementById("field").style.height = fieldHeight + "px";
    document.getElementById("ball").style.width = ballDiameter + "px";
    document.getElementById("ball").style.height = ballDiameter + "px";
  }

  function runClick() {
    setRunning((prev) => !prev);
  }

  function calculate() {
    if (goRight) {
      setLeft((prev) => {
        if (prev + vs >= maxLeft) {
          setGoRight(false);
          setRandom(Math.floor(Math.random() * 10) + 2);
        }
        return prev + vs;
      });
      setRotation((prev) => prev + random);
    } else {
      setLeft((prev) => {
        if (prev - vs <= 0) {
          setGoRight(true);
          setRandom(Math.floor(Math.random() * 10) + 2);
        }
        return prev - vs;
      });
      setRotation((prev) => prev - random);
    }

    if (goDown) {
      setTop((prev) => {
        if (prev + vy >= maxTop) {
          setGoDown(false);
        }
        return prev + vy;
      });
    } else {
      setTop((prev) => {
        if (prev - vy <= 0) {
          setGoDown(true);
        }
        return prev - vy;
      });
    }
  }

  function render() {
    const ball = document.getElementById("ball");
    ball.style.left = left + "px";
    ball.style.top = top_ + "px";
    ball.style.transform = `rotate(${rotation}deg)`;
  }

  const [none, setNone] = useState(false);
  const [basketball, setBasketball] = useState(false);
  const [football, setFootball] = useState(false);
  const [volleyball, setVolleyball] = useState(false);
  const [human, setHuman] = useState(false);
  const [cartoon, setCartoon] = useState(false);
  const [logo, setLogo] = useState(false);
  function chanceBall() {
    // Logic to change ball to None
    document.getElementById("ball").style.background = "black";
    document.getElementById("ball").style.borderRadius = "50%";

    setNone(!none);
    setBasketball(false);
    setFootball(false);
    setVolleyball(false);
    setHuman(false);
    setCartoon(false);
    setLogo(false);
  }

  function basketBall() {
    document.getElementById("ball").style.background = "url(./basketball.png)";
    document.getElementById("ball").style.backgroundSize = "100%";

    setNone(false);
    setBasketball(!basketball);
    setFootball(false);
    setVolleyball(false);
    setHuman(false);
    setCartoon(false);
    setLogo(false);
  }

  function footBall() {
    document.getElementById("ball").style.background = "url(./football.png)";
    document.getElementById("ball").style.backgroundSize = "100%";

    setNone(false);
    setBasketball(false);
    setFootball(!football);
    setVolleyball(false);
    setHuman(false);
    setCartoon(false);
    setLogo(false);
  }

  function volleyBall() {
    document.getElementById("ball").style.background = "url(./volleyball.png)";
    document.getElementById("ball").style.backgroundSize = "100%";

    setNone(false);
    setBasketball(false);
    setFootball(false);
    setVolleyball(!volleyball);
    setHuman(false);
    setCartoon(false);
    setLogo(false);
  }

  function humanBall() {
    document.getElementById("ball").style.background = "url(./human.jpg)";
    document.getElementById("ball").style.backgroundSize = "100%";

    setNone(false);
    setBasketball(false);
    setFootball(false);
    setVolleyball(false);
    setHuman(!human);
    setCartoon(false);
    setLogo(false);
  }

  function cartoonBall() {
    document.getElementById("ball").style.background = "url(./cartoonjp.jpg)";
    document.getElementById("ball").style.backgroundSize = "100%";

    setNone(false);
    setBasketball(false);
    setFootball(false);
    setVolleyball(false);
    setHuman(false);
    setCartoon(!cartoon);
    setLogo(false);
  }

  function logoBall() {
    document.getElementById("ball").style.background = "url(./logo.png)";
    document.getElementById("ball").style.backgroundSize = "100%";

    setNone(false);
    setBasketball(false);
    setFootball(false);
    setVolleyball(false);
    setHuman(false);
    setCartoon(false);
    setLogo(!logo);
  }

  useEffect(() => {
    chanceBall();
    setRunning(true);
  }, []);

  useEffect(() => {
    const num = Math.floor(Math.random() * 7);
    console.log(num);

    switch (num) {
      case 0:
        chanceBall();
        break;
      case 1:
        basketBall();
        break;
      case 2:
        footBall();
        break;
      case 3:
        volleyBall();
        break;
      case 4:
        humanBall();
        break;
      case 5:
        cartoonBall();
        break;
      case 6:
        logoBall();
        break;
    }
  }, []);

  return (
    <div id="container">
      <div id="field" style={{ position: "relative" }}>
        <div
          id="ball"
          className="ball"
          style={{ position: "absolute", backgroundColor: "white" }}
        ></div>
      </div>
      <div id="control" style={{ marginTop: "20px" }}>
        <button
          id="run"
          className={`btn ${running ? "btn-danger" : "btn-success"}`}
          onClick={runClick}
        >
          <span className={`bi ${running ? "bi-pause" : "bi-play"}`}></span>
          &nbsp;
          {running ? "PAUSE" : "RUN"}
        </button>
        <button
          id="none"
          className={none ? "btn btn-secondary" : "btn border border-secondary"}
          onClick={chanceBall}
          style={{ marginLeft: "20px" }}
        >
          None
        </button>
        &nbsp;
        <span>
          <button
            id="basketball"
            className={
              basketball ? "btn btn-primary" : "btn border border-primary"
            }
            onClick={basketBall}
          >
            Basketball
          </button>
          &nbsp;
          <button
            id="football"
            className={
              football ? "btn btn-primary" : "btn border border-primary"
            }
            onClick={footBall}
          >
            Football
          </button>
          &nbsp;
          <button
            id="volleyball"
            className={
              volleyball ? "btn btn-primary" : "btn border border-primary"
            }
            onClick={volleyBall}
          >
            Volleyball
          </button>
          &nbsp;
          <button
            id="human"
            className={human ? "btn btn-primary" : "btn border border-primary"}
            onClick={humanBall}
          >
            Human
          </button>
          &nbsp;
          <button
            id="cartoon"
            className={
              cartoon ? "btn btn-primary" : "btn border border-primary"
            }
            onClick={cartoonBall}
          >
            Cartoon
          </button>
          &nbsp;
          <button
            id="logo"
            className={logo ? "btn btn-primary" : "btn border border-primary"}
            onClick={logoBall}
          >
            Logo
          </button>
          &nbsp;
        </span>
      </div>
    </div>
  );
}

export default Animation;
