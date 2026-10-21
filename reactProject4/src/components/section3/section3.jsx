import classes from './section3Style.module.scss'
import {Photo} from '../../Photo'

export default function Section3(){
    return(
        <>
            <section className={classes.section3}>
                <div className={classes.container}>
                    <div className={classes.info}>
                        <h2>THE QUEST FOR BETTER.</h2>
                        <img src={Photo.cosmetics} alt="" />
                        <p>At LYMA, we’re always searching for the perfect balance of science, nature and technology. Every LYMA product has been designed to work together. We know that when we discover the best, you’ll discover yours.</p>
                    </div>
                </div>
            </section>
        </>
    )
}