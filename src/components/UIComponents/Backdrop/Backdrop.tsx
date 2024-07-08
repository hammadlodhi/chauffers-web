import React from "react";
import classNames from "classnames";

interface IProps extends React.PropsWithChildren<{}> {
  active?: boolean;
}

export const Backdrop: React.FC<IProps> = ({ active = false, children }) => {
  return (
    <div className={classNames("backdrop", { "backdrop--active": active })}>
      {children}
    </div>
  );
};
