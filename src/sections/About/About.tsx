import { motion } from 'framer-motion'

import MemePanel from '../../components/ui/MemePanel'

import './About.css'

const facts = [
    {
        label: 'ORIGINAL',
        value: 'FATSO',
    },
    {
        label: 'LEGACY',
        value: 'BENTO',
    },
    {
        label: 'NEXT ERA',
        value: 'SKINNY',
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
                                    THE KEYBOARD CAT LEGACY
                                </span>
                            </h2>

                            <p className="about__subtitle">
                                THREE CATS. ONE LEGEND.
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
                                        Keyboard Cat is an internet icon.
                                    </p>

                                    <p>
                                        The legend started with Fatso, the original
                                        Keyboard Cat, whose paws-on keyboard
                                        performance became one of the internet&apos;s
                                        most recognizable early memes.
                                    </p>

                                    <p>
                                        With a keyboard, a simple performance and
                                        unmistakable internet charm, Fatso helped
                                        create a meme that would live far beyond
                                        its original video.
                                    </p>

                                    <p className="about__story-highlight">
                                        The legacy didn&apos;t stop there.
                                    </p>

                                    <p>
                                        Bento carried the keyboard forward,
                                        continuing the Keyboard Cat tradition and
                                        introducing the meme to another generation
                                        of internet culture.
                                    </p>

                                    <p>
                                        Skinny later joined the legacy, keeping the
                                        paws-on performances alive and extending
                                        the story of one of the internet&apos;s most
                                        recognizable cats.
                                    </p>

                                    <p className="about__story-final">
                                        FATSO → BENTO → SKINNY
                                    </p>

                                    <p>
                                        Three feline performers. One keyboard.
                                        One legendary internet meme.
                                    </p>

                                    <p>
                                        Together, they became part of meme culture,
                                        inspiring laughter, remixes, parodies and
                                        countless moments across the internet.
                                    </p>

                                    <p className="about__story-highlight">
                                        Now the legacy has a new stage.
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
                                    THREE CATS.
                                </span>

                                <strong>
                                    ONE KEYBOARD.
                                    <span> ONE LEGENDARY MEME.</span>
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
                                    alt="Keyboard Cat legacy featuring Fatso, Bento and Skinny"
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