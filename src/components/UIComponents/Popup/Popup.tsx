import classNames from 'classnames';
import React, {FC, ReactNode, useRef} from 'react';
import {useKeyPress} from '@/hooks/useKeyPress';
import useOnClickOutside from 'use-onclickoutside';
import {Backdrop} from '../Backdrop/Backdrop';
import {IconButton} from '../IconButton/IconButton';
import {CrossIcon} from '../SvgIcons/SvgIcons';
import {LocalizedHeading} from '../LocalizedHeading';

interface IProps {
    heading?: string;
    onClose?: () => void;
    theme?: 'default' | 'pointed' | 'highlight';
    showCloseIcon?: boolean;
    className?: string;
    children?: ReactNode;
}

export const Popup: FC<IProps> = ({
    className,
    heading,
    onClose,
    theme = 'highlight',
    showCloseIcon = true,
    children,
}) => {
    const ref = useRef(null);
    useKeyPress('Escape', onClose);
    useOnClickOutside(ref, onClose || null);
    return (
        <Backdrop active={true}>
            <div className={classNames('popup', theme, className)} onClick={(evt) => evt.stopPropagation()}>
                <div ref={ref} className="popup__container">
                    <div className="border-bottom pd-b-4">
                        {heading && <LocalizedHeading heading="h3" t={heading} />}
                        {showCloseIcon && onClose && (
                            <IconButton className="popup__close-button" icon={<CrossIcon />} onClick={onClose} />
                        )}
                    </div>
                    {children}
                </div>
            </div>
        </Backdrop>
    );
};
