import classNames from 'classnames';
import React, {FC} from 'react';

interface Props {
    onClick?: () => void;
    clicked?: boolean;
}
export const BurgerMenu: FC<Props> = ({onClick, clicked}) => {
    return (
        <button className={classNames('burger-menu', clicked && 'cross')} onClick={onClick}>
            <div className="burger-menu__icon">
                <div className="burger-menu__icon__bar"></div>
                <div className="burger-menu__icon__bar"></div>
                <div className="burger-menu__icon__bar"></div>
            </div>
        </button>
    );
};
