import classNames from 'classnames';
import React, {FC, ReactNode, useEffect, useRef, useState} from 'react';
import {useKeyPress} from '@/hooks/useKeyPress';
import useOnClickOutside from 'use-onclickoutside';

interface IProps {
    head: ReactNode;
    menu: ReactNode;
    className?: string;
    transition?: 'fade' | 'collapse';
    toggle?: boolean;
    menuOpen?: boolean;
    setMenu?: (val: boolean) => void;
}

export const Select: FC<IProps> = ({
    head,
    menu,
    menuOpen,
    setMenu,
    transition = 'fade',
    className = '',
    toggle = true,
}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const ref = useRef(null);
    useOnClickOutside(ref, () => setOpenMenu(false));
    useKeyPress('Escape', () => setOpenMenu(false));

    useEffect(() => {
        setMenu?.(openMenu);
    }, [openMenu]);

    useEffect(() => {
        menuOpen !== undefined && setOpenMenu?.(menuOpen);
    }, [menuOpen]);
    return (
        <div className={classNames('dropdown', className, transition, {open: openMenu && menuOpen})} ref={ref}>
            <button className="dropdown__head" type="button" onClick={() => setOpenMenu(toggle ? !openMenu : true)}>
                {head}
            </button>
            <div className={classNames('dropdown__menu', {open: openMenu && menuOpen})}>{menu}</div>
        </div>
    );
};
