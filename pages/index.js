
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [pumpOn, setPumpOn] = useState(false);
  const [buzzerOn, setBuzzerOn] = useState(false);

  const handleCommand = async (device, state) => {
    const res = await fetch(`/api/commandes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ device, state }),
    });
    if (res.ok) {
      if (device === "pump") setPumpOn(state === "on");
      if (device === "buzzer") setBuzzerOn(state === "on");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="/img.png" className={styles.logo} alt="Logo" />
        <h1>SMART FARMING</h1>
        <div className={styles.auth}>
          <span>Login</span> | <span>Password</span>
        </div>
      </div>
      <div className={styles.controls}>
        <div className={styles.controlBox}>
          <button
            className={styles.button}
            onClick={() => handleCommand("pump", pumpOn ? "off" : "on")}
          >
            🔌 Pump
          </button>
          <span>{pumpOn ? "ON" : "OFF"}</span>
        </div>
        <div className={styles.controlBox}>
          <button
            className={styles.buttonOff}
            onClick={() => handleCommand("buzzer", buzzerOn ? "off" : "on")}
          >
            🔊 Buzzer
          </button>
          <span>{buzzerOn ? "ON" : "OFF"}</span>
        </div>
      </div>
    </div>
  );
}
