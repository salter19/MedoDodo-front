import React from 'react'
import ViewBase from './ViewBase'
import categoryTitles from './validCategoryTitles'
import CategoryIcon from './CategoryIcon'

class CategoriesView extends React.Component {
    state = { titles: [], tasks: [], icons: [] }

    componentDidMount() {
        this.createIcons();
    }

    createIcons = async() => {
        try {            
            const catTitles = await categoryTitles.validCatTitles(); 
            const taskObjs = await this.getTaskObjects(catTitles);
            const taskTitles = taskObjs.map(e => this.getTaskTitles(e))
         
            this.setState({ titles: catTitles, tasks: taskTitles})

            const catIcons = catTitles.map(e => {
                const items = this.getTasksPerCategoryByTitle(e)
                return (
                    <CategoryIcon key={e} title={e} data={items} onClickCat={this.props.onClickCat} />
                )
            })

            this.setState( { icons: catIcons } )
            
        } catch (error) {
            alert(`Something went wrong with title and task retrieval.\n${error}`)
        }  
    }

    getTasksPerCategoryByTitle = (e) => {
        return this.state.tasks[this.state.titles.indexOf(e)]
    }

    getTaskObjects = async(titles) => {
        try {            
            const someFunc = async(resolve, reject) => {
                let res = []
                for (let i = 0; i < titles.length; i++) {
                    const obj = await categoryTitles.taskTitlesByCat(titles[i]);

                    res.push(obj)
                }
                res.length < titles.length ? reject('tasks do not come through') : resolve(res)

            }
            return new Promise (someFunc)
        } catch (error) {
            alert(`something went wrong with the retrieval of tasks.\n${error}`)
        }

    }

    getTaskTitles = (taskObjects) => {       
        const tasks = taskObjects.map((e) => e.title)
        return tasks.length > 3 ? tasks.slice(0, 3) : tasks;
    }
    
    render() {
        const view = (
                <div className="categories">
                    <ul>
                        {this.state.icons}
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