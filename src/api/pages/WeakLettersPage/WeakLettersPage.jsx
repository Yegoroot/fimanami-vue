import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
// import Filter_1 from '@material-ui/icons/Looks'
// import Palette from '@material-ui/icons/Palette'
// import Favorite from '@material-ui/icons/Favorite'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
// import Button from 'components/CustomButtons/Button.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import NavPills from 'components/NavPills/NavPills.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import WeakLetters from 'components/weakLetters'
import { weakLetters1, weakLetters2, weakLetters3 } from 'api/verbs/weakLetters'

class WeakLettersPage extends React.Component {
    state = {
        value: 0,
    }

    handleChange = (event, value) => {
        this.setState({ value })
    }

    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="Слабая коренная"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,

                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/mosque/mosque9.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    {/* <div className={classes.container}> */}
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                            <NavPills
                                alignCenter
                                color="primary"
                                tabs={[
                                    {
                                        tabButton: 'Первая коренная',
                                        // tabIcon: Filter_1,
                                        tabContent: <WeakLetters templates={weakLetters1} />,
                                    },
                                    {
                                        tabButton: 'Вторая коренная',
                                        // tabIcon: Palette,
                                        tabContent: <WeakLetters templates={weakLetters2} />,
                                    },
                                    {
                                        tabButton: 'Третья коренная',
                                        // tabIcon: Favorite,
                                        tabContent: <WeakLetters templates={weakLetters3} />,
                                    },
                                ]}
                            />
                        </GridItem>
                    </GridContainer>
                    {/* </div> */}
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(WeakLettersPage)
