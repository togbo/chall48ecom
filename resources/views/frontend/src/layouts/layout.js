import { Header } from "./Header";
import { Footer } from "./Footer";


const Layout = ({children}) => {
    if (children.type.name === 'Connexion' || children.type.name === 'createAccount'|| children.type.name ==='createAccountCommercent' ) {
    
    return ( 
        <div className="content">
            {children}
        </div>
    );
    } else {
        return ( 
            <div className="content">
                <Header />
                {children}
                <Footer />
            </div>
        );
    }
}

export default Layout;