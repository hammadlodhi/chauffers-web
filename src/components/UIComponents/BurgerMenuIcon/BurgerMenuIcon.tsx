import React, {FC} from 'react';
import classNames from 'classnames';

interface IProps {
    onClick: () => void;
    toggle: boolean;
}

export const BurgerMenuIcon: FC<IProps> = ({onClick, toggle}) => {
    return (
        <div className={classNames('burger-menu-icon', {'burger-menu-close-icon': toggle})} onClick={onClick}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    );
};
