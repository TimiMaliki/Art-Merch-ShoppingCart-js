import React from "react";
import Buttons from "./Buttons";

const Form = ({ reqType, setReqType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Buttons buttonText="users" reqType={reqType} setReqType={setReqType} />

      <Buttons buttonText="posts" reqType={reqType} setReqType={setReqType} />
 
      <Buttons
        buttonText="comments"
        reqType={reqType} 
        setReqType={setReqType}
      />
    </form>
  );
};

export default Form;
