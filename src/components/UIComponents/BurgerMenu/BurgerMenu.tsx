import classNames from 'classnames';
import React, {FC} from 'react';
import {IconButton} from '../IconButton/IconButton';

interface Props {
    onClick?: () => void;
    clicked?: boolean;
    className?: string;
}

export const BurgerMenu: FC<Props> = ({onClick, clicked, className}) => {
    return (
        <IconButton
            className={classNames('burger-menu', clicked && 'burger-menu--cross', className)}
            onClick={onClick}
            icon={
                <div className="burger-menu__icon">
                    <div className="burger-menu__icon-bar"></div>
                    <div className="burger-menu__icon-bar"></div>
                    <div className="burger-menu__icon-bar"></div>
                </div>
            }></IconButton>
    );
};
