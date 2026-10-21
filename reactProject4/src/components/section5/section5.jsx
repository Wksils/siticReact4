import classes from './section5Style.module.scss'
import {Link} from 'react-router-dom'

export default function Section5(){
    return(
        <>
            <section className={classes.section5}>
                <div className={classes.container}>
                    <div className={classes.info}>
                        <h3>Meet our founder.</h3>
                        <p>Lucy’s story is one you really need to read; it changed an industry forever.</p>
                        <Link>READ MORE</Link>
                    </div>
                </div>
            </section>
        </>
    )
}