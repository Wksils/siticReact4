import classes from './section2Style.module.scss'

export default function Section2(){
    return(
        <>
            <section className={classes.sect2}>
                <div className={classes.container}>
                    <div className={classes.info}>
                        <div className={classes.cont}>
                            <h2>Supplement.</h2>
                            <p>Nine powerful ingredients. One ultimate formula.</p>
                            <div>
                                <button>DISCOVER</button>
                                <button>BUY</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.info}>
                        <div className={classes.cont}>
                            <h2>Laser.</h2>
                            <p>Ultimate skin regeneration. A new dawn for beauty.</p>
                            <div>
                                <button>DISCOVER</button>
                                <button>BUY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}