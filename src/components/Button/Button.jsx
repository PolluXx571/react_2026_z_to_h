import styles from './Button.module.css';

function Button({variant = "primary"}) {
      const buttonSecond = `${styles.secondary}`;
    //   const buttonSecond = `${styles.button} ${styles.secondary}`;     // soyle iki tanede class ataya bilriz.
    const primaryVariant = `${styles[variant]}`
      return (
            <div>
                  <button className={styles.button}>Button</button>
                  <button className={buttonSecond}>Button second</button>
                  <button className={primaryVariant}>Button variant</button>
                  <button className={styles['bottom-block']}>Button block style</button>
            </div>
      );
}

export default Button;
