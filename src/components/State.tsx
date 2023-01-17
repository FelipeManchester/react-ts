import { useState } from 'react';

const State = () => {
  const [text, setText] = useState('Textando o hook');

  return (
    <div>
      <p>O texto é {text}</p>
      <button
        onClick={() => {
          setText('Funcionou');
        }}
      >
        Clique para trocar o valor
      </button>
    </div>
  );
};

export default State;
