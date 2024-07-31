import logo from './logo.svg';
import './App.css';
import MyApp291 from './componets/MyApp29-1';

import {MyApp292} from "../src/componets/MyApp29-2"

import {MyApp1,MyApp2} from "../src/componets/30FunVsClassCompont/functionalComponent"
import { MyAppClass } from './componets/30FunVsClassCompont/classComponent';
import ClassComponentInfo from './componets/31ClassComonent/classComponentInfo';
import FunComponntInfo from './componets/31ClassComonent/funComponntInfo';


function App() {
  return (
    <div className="App">
      {/* <p>Hi</p> */}
      {/* <MyApp290 /> */}
      {/* <MyApp291 /> */}
      {/* <MyApp292 /> */}
      {/* <MyApp1 /> */}
      {/* <MyApp2 /> */}
      {/* <MyAppClass/> */}
      {/* <MyApp1/> */}
      < ClassComponentInfo />
      <br/>
      <br/>
      <FunComponntInfo />
    </div>
  );
}

export default App;
