import React from "react";

interface Props {
  title: string;
}

const MyComponent: React.FC<Props> = (props) => {
  return (
    <div>
      <p>Component {props.title}</p>
    </div>
  );
};

export default MyComponent;
