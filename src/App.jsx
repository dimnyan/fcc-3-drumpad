import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setClicked, setPower, setVolume } from "./features/power/powerSlicer";
import { useEffect } from "react";

function App() {
  const power = useSelector((state) => state.power.value);
  const volume = useSelector((state) => state.power.volume) / 100;
  const clicked = useSelector((state) => state.power.clicked);
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("keydown", handlePlayAudio);
    return () => {
      document.removeEventListener("keydown", handlePlayAudio);
    };
  }, [volume, power]);

  const changeVolume = (e) => {
    dispatch(setVolume(e.target.value));
  };

  const handlePower = () => {
    dispatch(setPower(!power));
  };

  const handlePlayAudio = (e) => {
    if (power) {
      switch (e?.target?.id || e.key) {
        case "q": {
          let file = "/Heater-1.mp3";
          dispatch(setClicked(file));
          let audio = new Audio(file);
          audio.volume = volume;
          audio.play();
          break;
        }
        case "w": {
          let file = "/Heater-2.mp3";
          dispatch(setClicked(file));
          let audio = new Audio(file);
          audio.volume = volume;
          audio.play();
          break;
        }
        case "e": {
          let file = "/Heater-3.mp3";
          dispatch(setClicked(file));
          let audio = new Audio(file);
          audio.volume = volume;
          audio.play();
          break;
        }
        case "a": {
          let file = "/Heater-4_1.mp3";
          dispatch(setClicked(file));
          let audio = new Audio(file);
          audio.volume = volume;
          audio.play();
          break;
        }
        case "s": {
          let file = "/Heater-6.mp3";
          dispatch(setClicked(file));
          let audio = new Audio(file);
          audio.volume = volume;
          audio.play();
          break;
        }
        case "d": {
          let file = "/Dsc_Oh.mp3";
          dispatch(setClicked(file));
          let audio = new Audio(file);
          audio.volume = volume;
          audio.play();
          break;
        }
        case "z": {
          let file = "/Kick_n_Hat.mp3";
          dispatch(setClicked(file));
          let audio = new Audio(file);
          audio.volume = volume;
          audio.play();
          break;
        }
        case "x": {
          let file = "/RP4_KICK_1.mp3";
          dispatch(setClicked(file));
          let audio = new Audio(file);
          audio.volume = volume;
          audio.play();
          break;
        }
        case "c": {
          let file = "/Cev_H2.mp3";
          dispatch(setClicked(file));
          let audio = new Audio(file);
          audio.volume = volume;
          audio.play();
          break;
        }
      }
    }
  };

  const display = (file) => {
    let f = file
      .replace("/", "")
      .replace(".mp3", "")
      .replace("_", " ")
      .replace("_", " ")
      .replace("-", " ");
    return f;
  };

  return (
    <div id="drum-machine">
      <div id="drumpad">
        <div className="drum-pad" id="q" onClick={handlePlayAudio}>
          q
        </div>
        <div className="drum-pad" id="w" onClick={handlePlayAudio}>
          w
        </div>
        <div className="drum-pad" id="e" onClick={handlePlayAudio}>
          e
        </div>
        <div className="drum-pad" id="a" onClick={handlePlayAudio}>
          a
        </div>
        <div className="drum-pad" id="s" onClick={handlePlayAudio}>
          s
        </div>
        <div className="drum-pad" id="d" onClick={handlePlayAudio}>
          d
        </div>
        <div className="drum-pad" id="z" onClick={handlePlayAudio}>
          z
        </div>
        <div className="drum-pad" id="x" onClick={handlePlayAudio}>
          x
        </div>
        <div className="drum-pad" id="c" onClick={handlePlayAudio}>
          c
        </div>
      </div>
      <div id="control-container">
        <div className="control">
          <p>Power</p>
          <div
            className="outer-box"
            style={{
              justifyContent: power ? "start" : "end",
            }}
            onClick={handlePower}
          >
            <div
              className="selector-box"
              style={{ backgroundColor: power ? "rgb(71, 206, 71)" : "red" }}
            ></div>
          </div>
        </div>
        <p id="display">{display(clicked)}</p>
        <div id="volume-slider">
          <p>Volume</p>
          <input type="range" min="0" max="100" onChange={changeVolume} />
        </div>
        {/* <div className="control">
          <p>Bank</p>
          <div className="outer-box" style={{ justifyContent: "end" }}>
            <div className="selector-box"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
