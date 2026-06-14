// bu component styled css icin kullanildi

import styles from './Button.module.css';
import { Buttonn, Buttonnn } from './Buttonn.styled';

function Button({ variant = 'primary' }) {
      const buttonSecond = `${styles.secondary}`;
      //   const buttonSecond = `${styles.button} ${styles.secondary}`;     // soyle iki tanede class ataya bilriz.
      const primaryVariant = `${styles[variant]}`;
      return (
            <div>
                  {/* <button className={styles.button}>Button</button>
                  <button className={buttonSecond}>Button second</button>
                  <button className={primaryVariant}>Button variant</button>
                  <button className={styles['bottom-block']}>Button block style</button>
                  <Buttonn>Hello</Buttonn>
                  <Buttonn $highlighted>Highlighted button</Buttonn> */}

                  {/** $ isareti varsa DOM a gitmez uniq olur eger yoksa DOMA gider */}
                  <Buttonnn $size='small'>Small</Buttonnn>
                  <Buttonnn $size='medium'>Medium</Buttonnn>
                  <Buttonnn $size='large'>Large</Buttonnn>
            </div>
      );
}

export default Button;
