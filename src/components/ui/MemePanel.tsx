import type { PropsWithChildren } from 'react'

import './MemePanel.css'

type MemePanelVariant = 'default' | 'yellow' | 'green'

interface MemePanelProps extends PropsWithChildren {
    variant?: MemePanelVariant
    className?: string
}

function MemePanel({
    children,
    variant = 'default',
    className = '',
}: MemePanelProps) {
    const classes = [
        'meme-panel',
        `meme-panel--${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <section className={classes}>
            <div className="meme-panel__content">{children}</div>
        </section>
    )
}

export default MemePanel