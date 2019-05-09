import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import LiWithVerb from './Sections/LiWithVerb'
import Admiration from './Sections/Admiration'
import DualIsm from './Sections/DualIsm'
import StartHamza from './Sections/StartHamza'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class TricksWithVerbsPage extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="Tricks with verb"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/mosque/mosque6.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1 className={classes.title}>Трюки с глаголами</h1>
                            <LiWithVerb />
                            <Admiration />
                            <DualIsm />
                            <StartHamza />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(TricksWithVerbsPage)
