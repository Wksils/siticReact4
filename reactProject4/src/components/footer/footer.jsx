import classes from './footer.module.scss'
import { Photo } from '../../Photo'

export default function Footer(){
    return(
        <>
            <footer>
                <div className={classes.container}>
                    <div className={classes.right}>
                        <div>
                            <p>SUPPLEMENT</p>
                            <ul className={classes.asd}>
                                <li>Benefits</li>
                                <li>Formula</li>
                                <li>Immunity</li>
                                <li>Journal</li>
                                <li>Reviews</li>
                                <li>Buy</li>
                            </ul>
                        </div>
                        <div>
                            <p>LYMA LASER</p>
                            <ul className={classes.asd}>
                                <li>LYMA Laser</li>
                                <li>Active Mist</li>
                                <li>Priming Serum</li>
                                <li>Technology</li>
                                <li>Results</li>
                                <li>Journal</li>
                                <li>Reviews</li>
                                <li>Buy</li>
                            </ul>
                        </div>
                        <div>
                            <p>ABOUT</p>
                            <ul>
                                <li>About</li>
                                <li>Journal</li>
                                <li>FAQs</li>
                                <li>Contact</li>
                                <li>Terms</li>
                                <li>Privacy</li>
                                <li>Warranty</li>
                            </ul>
                        </div>
                        <div>
                            <p>ACCOUNT</p>
                            <ul>
                                <li>Activate</li>
                                <li>My subscription</li>
                                <li>Add extras</li>
                                <li>My orders</li>
                                <li>Account details</li>
                                <li>Payment method</li>
                                <li>Login details</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.left}>
                        <p className={classes.txt}>NEWSLETTER</p>
                        <div className={classes.top}>
                            <p>Subscribe to our newsletter.</p>
                            <div>
                                <input type="text" placeholder='LYMA Newsletter'/>
                                <button>SIGN UP</button>
                            </div>
                        </div>
                        <div className={classes.niz}>
                            <div>
                                <img src={Photo.yt} alt="" />
                                <img src={Photo.inl} alt="" />
                                <img src={Photo.fb} alt="" />
                                <img src={Photo.insta} alt="" />
                                <img src={Photo.pin} alt="" />
                            </div>
                            <p>© LYMA Life Ltd. 2021</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}