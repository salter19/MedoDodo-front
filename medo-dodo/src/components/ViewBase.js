import React from 'react'
import Head from './Header'
import Footer from './Footer'

class View extends React.Component {
    render() {
        return (
            <div className="view">
                <Head date={this.props.date} page={this.props.page}/>
                {this.props.view}
                <Footer 
                    page={this.props.page}
                    onClickRight={this.props.onClickAdd} 
                    onClickLeft={this.props.onClickWeeks}
                />
            </div>
        )
    }
}

export default View