import JRRTSeal from "../../assets/Seal.png";
import RingText from "../../assets/RingText.png";

import "./Seal.css";

export default function Seal() {
  return (
    <div className="Seal">
      <img className="RingText" src={RingText} alt="Ring Text" />
      <img className="JRRTSeal" src={JRRTSeal} alt="JRRTSeal" />
    </div>
  );
}
