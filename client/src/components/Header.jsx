import {AppBar, Toolbar, makeStyles} from '@material-ui/core';
import {Menu} from '@material-ui/icons';

const useSyles = makeStyles({
    header:{
        background: '#fff',
        height: 70
    },
    image: {
        height: 55,
        margin: 'auto',
        paddingRight: 70
    },
    menu: {
        color: '#000'
    },

})

const Header = () => {
    const classes = useSyles();
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    
    return(
        <AppBar className={classes.header}>
            <Toolbar>
                <Menu className={classes.menu}/>
                <img src={url} alt="logo" className={classes.image} />
            </Toolbar>
        </AppBar>
    )   
}

export default Header;