import {Navbar} from './navbar'
import {Header} from './header'
import {Products} from './products'
import {Footer} from './footer'
export const Home=()=>{
    return(
    <div className="bg-dark">
        <Navbar/>
        <Header/>
        <Products/>
        <Footer/>
    </div>
    )
}