import { useState } from 'react';

function Formik() {
      const [value, setValue] = useState('');

      const handleSubmit = (event) => {
            event.preventDefault();
            console.log(value);
            alert('form submitted');
      };

      const handleChange = (event) => {
            setValue(event.target.value);
      };

      // 👉 Tek handler (event.type ile ayırt ediyoruz)
      const handleMouse = (event) => {
            if (event.type === 'mouseenter') {
                  console.log('mouse on text');
            } else if (event.type === 'mouseleave') {
                  console.log('mouse out of text');
            }
      };

      // 👉 state içinde function referansı
      const [mouseHandler, setMouseHandler] = useState(() => handleMouse);

      const toggleMouseHandler = () => {
            setMouseHandler((prev) => (prev === handleMouse ? () => console.log('TOGGLE MODE') : handleMouse));
      };

      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        <input type='text' value={value} onChange={handleChange} />

                        <button type='submit'>Submit Button</button>

                        {/* Normal kullanım */}
                        <p onMouseEnter={handleMouse} onMouseLeave={handleMouse}>
                              Normal hover
                        </p>

                        {/* State ile handler değiştirme */}
                        <p onMouseEnter={mouseHandler} onMouseLeave={mouseHandler} onClick={toggleMouseHandler}>
                              State ile mouse enter and leave
                        </p>
                  </form>
            </div>
      );
}

export default Formik;
