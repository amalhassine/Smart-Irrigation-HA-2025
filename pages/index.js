
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem('auth') !== 'true') {
      router.push('/login');
    }
  }, []);

  const togglePump = async () => {
    const res = await fetch('/api/commandes', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ device: 'pump' })
    });
    const result = await res.json();
    document.getElementById("pumpState").innerText = result.state.toUpperCase();
  };

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <h1>🌱 Contrôle Pompe</h1>
        <button className={styles.btn} onClick={togglePump}>🔌 Activer/Désactiver Pompe</button>
        <span id="pumpState">OFF</span>
      </div>
    </div>
  );
}
