import { motion } from 'framer-motion'

import MemePanel from '../../components/ui/MemePanel'

import './About.css'

const facts = [
    {
        label: 'ORIGIN',
        value: '1984 VHS',
    },
    {
        label: 'INTERNET',
        value: 'ICON',
    },
    {
        label: 'ON-CHAIN',
        value: 'BASE → RH',
    },
]

function About() {
    return (
        <section
            className="about"
            id="about"
            aria-labelledby="about-title"
        >
            <div className="about__inner">
                <div className="about__layout">
                    <div className="about__content">
                        <motion.div
                            className="about__heading"
                            initial={{
                                opacity: 0,
                                y: 24,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <p className="about__eyebrow">
                                THE LORE
                            </p>

                            <h2
                                className="about__title"
                                id="about-title"
                            >
                                KEYCAT
                                <span>
                                    THE LEGEND PLAYS ON
                                </span>
                            </h2>

                            <p className="about__subtitle">
                                BEFORE MEMECOINS, THERE WAS KEYBOARD CAT.
                            </p>
                        </motion.div>

                        <motion.div
                            className="about__story"
                            initial={{
                                opacity: 0,
                                y: 28,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.12,
                            }}
                            transition={{
                                delay: 0.08,
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <MemePanel variant="yellow">
                                <div className="about__story-copy">
                                    <p className="about__story-highlight">
                                        Before memecoins, there was Keyboard Cat.
                                    </p>

                                    <p>
                                        Born from a 1984 VHS recording, Keyboard Cat
                                        went on to become one of the internet&apos;s
                                        most iconic early memes — playing people off
                                        the internet for decades.
                                    </p>

                                    <p className="about__story-highlight">
                                        The legend eventually made its way on-chain
                                        through Base.
                                    </p>

                                    <p>
                                        But every legend needs a new stage.
                                    </p>

                                    <p className="about__story-highlight">
                                        Now, the keyboard has landed on Robinhood Chain.
                                    </p>

                                    <p>
                                        A new chain.
                                        <br />
                                        A new community.
                                        <br />
                                        The same legendary cat.
                                    </p>

                                    <p className="about__story-final">
                                        VHS → INTERNET → BASE → ROBINHOOD
                                    </p>

                                    <p>
                                        The cat never stopped playing.
                                    </p>

                                    <p className="about__story-highlight">
                                        Now it&apos;s Robinhood&apos;s turn to hear
                                        the music.
                                    </p>

                                    <p className="about__story-final">
                                        $KEYCAT — PLAY THEM OFF. 🎹🐱
                                    </p>
                                </div>
                            </MemePanel>
                        </motion.div>
                    </div>

                    <aside className="about__aside">
                        <motion.div
                            className="about__facts"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1,
                                    },
                                },
                            }}
                        >
                            {facts.map((fact, index) => (
                                <motion.div
                                    className="about__fact-motion"
                                    key={fact.label}
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                            x: 24,
                                        },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                duration: 0.5,
                                                ease: [0.22, 1, 0.36, 1],
                                            },
                                        },
                                    }}
                                >
                                    <div
                                        className={`about__fact about__fact--${index + 1}`}
                                    >
                                        <span className="about__fact-label">
                                            {fact.label}
                                        </span>

                                        <span className="about__fact-value">
                                            {fact.value}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="about__quote-motion"
                            initial={{
                                opacity: 0,
                                y: 18,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.4,
                            }}
                            transition={{
                                duration: 0.55,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className="about__quote">
                                <span className="about__quote-small">
                                    FROM VHS.
                                </span>

                                <strong>
                                    TO THE INTERNET.
                                    <span>
                                        TO ROBINHOOD.
                                    </span>
                                </strong>
                            </div>
                        </motion.div>

                        <motion.div
                            className="about__visual"
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.65,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className="about__visual-frame">
                                <img
                                    className="about__visual-image"
                                    src="/images/keycat-lore.png"
                                    alt="Keyboard Cat continuing its legendary journey from the internet to Robinhood Chain"
                                />
                            </div>
                        </motion.div>
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default About