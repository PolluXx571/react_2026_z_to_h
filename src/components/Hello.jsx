import React from 'react';

export default function Hello({ onClick, style }) {
      // ! style destuctionda yapa biliriz ama buna gerek yok !!
      // ! ornek => :
      const { fontSize, color } = style;
      return (
            <div>
                  <button style={style} onClick={onClick}>
                        {' '}
                        {/* Props kullandik*/}
                        click me i say hello
                  </button>
                  <button style={{ color: style.color, fontSize: style.fontSize }}>Props destructing</button>
                  <button style={{ color, fontSize }}>Destruction veriler</button> {/* destruct yaparak kullandik*/}
            </div>
      );
}
