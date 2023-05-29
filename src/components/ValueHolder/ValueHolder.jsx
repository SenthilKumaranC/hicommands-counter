import React, { useMemo } from "react";

const ValueHolder = (props) => {

  const stars = useMemo(() => {
    //This is used to create derived data
    //You should not call set , dont start timer , dont call
    //2
    //3
    //5
    //7
    return "*".repeat(props.x);
  }, [props.x]);

  return (
    <React.Fragment>
      <span id="valueholder">{props.x}</span>
      <span>{stars}</span>
    </React.Fragment>
  );
};

export default React.memo(ValueHolder);
