import classes from './headerStyle.module.scss'
import {Link} from 'react-router-dom'
import {Photo} from '../../Photo.js'

export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <div className={classes.links}>
                        <Link>SUPPLEMENT</Link>
                        <Link>LASER</Link>
                        <Link>REVIEWS</Link>
                        <Link>JOURNAL</Link>
                        <Link>ABOUT</Link>
                        <img src={Photo.poloski} alt="" className={classes.poloski}/>
                    </div>
                    <img src={Photo.Logo} alt="" className={classes.logo}/>
                    <div className={classes.btns}>
                        <button>HELP & SUPPORT</button>
                        <button>ACTIVATE</button>
                        <button>ACCOUNT</button>
                        <button>BUY</button>
                    </div>
                </nav>
            </header>
        </>
    )
}