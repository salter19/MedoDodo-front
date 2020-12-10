import React from 'react'
import ViewBase from './ViewBase'
import categoryTitles from './validCategoryTitles'
import CategoryIcon from './CategoryIcon'

class CategoriesView extends React.Component {
    state = { tasklist: [], cards: [] }

    componentDidMount() {
        this.createCards();
    }

    createCards = async() => {
        const titles = await categoryTitles.validCatTitles(); 
        titles.map(e => this.setDataForIcon(e)) 
        let taskCards = []

      
        /*
        let i = 0;
        const taskCards = titles.map((e) => {
            return <CategoryIcon key={i++} title={e} onClickCat={this.props.onClickCat} />;
        });*/

        this.setState({ cards: taskCards });
    }

    setDataForIcon = async(e) => {
        const taskObjects = await categoryTitles.taskTitlesByCat(e)
        this.setTasksPerIcon(taskObjects); 
    }

    setTasksPerIcon = (taskObjects) => {       
        const tasks = taskObjects.map((e) => e.title)
        const tasks_max_three = tasks.length > 3 ? tasks.slice(0, 3) : tasks;        
        this.setState({ tasklist: tasks_max_three })
    }
    
    render() {
        const view = (
                <div className="categories">
                    <ul>
                        {this.state.cards}
                    </ul>
                </div>
            )
        
        return (
            <div className="categories-view">

                <ViewBase 
                    date={this.props.date} 
                    page={this.props.page}
                    onClickRight={this.props.onClickAdd} 
                    onClickLeft={this.props.onClickWeeks}
                    
                    view={view}
                />
                
            </div>
        )
    }
}

export default CategoriesView