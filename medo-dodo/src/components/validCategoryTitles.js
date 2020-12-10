import TasksGetter from './TasksGetter'
const validCatTitles = async() => {
    const catObj = await TasksGetter.everyCat()
    const titlesArr = catObj.map(obj => obj.title)
    return titlesArr
}

const taskTitlesByCat = async(cat) => {
    const taskObj = await TasksGetter.byCategoryTitle(cat)
    console.log(taskObj)
}

export default { validCatTitles, taskTitlesByCat }

