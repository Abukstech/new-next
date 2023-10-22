"use client";
import React from "react";
interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  return;
  <>
    <div>An Unexpected Error Occured</div>;
    <button className="btn" onClick={() => reset()}>
      Retry
    </button>
  </>;
};

export default ErrorPage;
