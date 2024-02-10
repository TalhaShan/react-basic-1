import React, { ReactNode } from "react";

interface Props {
  //   text: string;
  //   children: string;
  children: ReactNode; //will be able to pass html content as param
}
const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
