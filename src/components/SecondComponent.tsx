import React from 'react';

type Props = {
  name: string;
};

const SecondComponent = (props: Props) => {
  return (
    <div>
      <h3>Meu segundo componente</h3>
      <p>O nome dele é {props.name}</p>
    </div>
  );
};

export default SecondComponent;
