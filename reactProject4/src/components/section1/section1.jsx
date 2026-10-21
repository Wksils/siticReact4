import classes from './section1Style.module.scss'

export default function Section1(){
    return(
        <>
            <section className={classes.sect1}>
                <div className={classes.container}>
                    <h1>THE FUTURE OF WELLNESS.</h1>
                    <p>The perfect balance of science, nature and technology. Prepare to look and feel your absolute best.</p>
                    <div>
                        <button>SUPPLEMENT</button>
                        <button>LASER</button>
                    </div>
                </div>
            </section>
        </>
    )
}