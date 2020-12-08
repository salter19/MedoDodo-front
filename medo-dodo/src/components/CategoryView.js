import React from 'react'
import CatecoryIcon from './CategoryIcon'
import Head from './Header'

class CategoryView extends React.Component {
    render() {
        return (
            <div className="category-view">
                <Head date={this.props.date} page={this.props.page}/>
                CAT view
                <CatecoryIcon />
            </div>
        )
    }
}

export default CategoryView