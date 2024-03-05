// GRATIS is without charge or payment

import React from "react";
import SVG from 'react-inlinesvg'
import cn from 'clsx'

type proBonoSwitch = {
    isPro: boolean;
}

const freeLogo = './Tags/Free.svg';
const proLogo = './Tags/Pro.svg';

export const Gratis: React.FC<proBonoSwitch> = ({ isPro }) => {
    const src = isPro ? proLogo : freeLogo;
    const title = isPro ? 'Pro' : 'Free';

    return (
        <SVG
            src={src}
            width={55}
            height={37}
            title={title}
            className={cn('features__content__title__proBono')}
        />
    )
}
