
import styles from '../styles/Home.module.css'

export default function Home() {
  const toggle = async (device) => {
    const res = await fetch('/api/commandes', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ device })
    });
    const result = await res.json();
    document.getElementById(device + 'State').innerText = result.state.toUpperCase();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>🌱 SMART FARMING</h1>
        <div>Login | Password</div>
      </div>
      <div className={styles.panel}>
        <div className={styles.device}>
          <button className={styles.btn} onClick={() => toggle('pump')}>🔌 Pump</button>
          <span id="pumpState">OFF</span>
        </div>
        <div className={styles.device}>
          <button className={styles.btn} onClick={() => toggle('buzzer')}>🔊 Buzzer</button>
          <span id="buzzerState">OFF</span>
        </div>
      </div>
    </div>
  );
}
