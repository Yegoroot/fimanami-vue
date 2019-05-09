import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import Pills from 'components/Pills'
import ContrastWord from 'components/Typography/ContrastWord.jsx'

import data from 'api/verbs/someVerbs/harf5'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import arabicPage from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class Harf5 extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.section} id="uridu">
                <div className={classes.container}>
                    <h2 className={classes.titleAr}>
                        5 Буквенный глагол{' '}
                        <ContrastWord inRu red>
                            اِشترَى - يَشتَري
                        </ContrastWord>{' '}
                    </h2>
                    <Pills data={data} />
                </div>

                <Clearfix />
            </div>
        )
    }
}

export default withStyles(arabicPage)(Harf5)
