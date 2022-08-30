import React, { useEffect } from "react";

export default function Quote(props) {
  console.log(props.quote);
  if (props.quote) {
    return <div>Hi from quote! </div>;
  } else {
    return null;
  }
}
