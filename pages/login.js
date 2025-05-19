
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (username === 'amalhassine' && password === 'amal123') {
      sessionStorage.setItem('auth', 'true');
      router.push('/');
    } else {
      alert('Identifiants incorrects');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2>Connexion Smart Farming</h2>
        <input placeholder="Utilisateur" onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Mot de passe" onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Se connecter</button>
      </div>
    </div>
  );
}
