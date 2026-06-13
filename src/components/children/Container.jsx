import React from 'react';

function Container(props) {
      // ({children}) yada boylede yapa bilirdir
      return (
            <div>
                  <div>{props.children}</div>
                  {/* <div>{children}</div> */}
            </div>
      );
}

export default Container;
