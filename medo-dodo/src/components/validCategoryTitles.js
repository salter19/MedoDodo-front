import TasksGetter from './TasksGetter'
const validCatTitles = async() => {
    const catObj = await TasksGetter.everyCat()
    const titlesArr = catObj.map(obj => obj.title)
    return titlesArr
}

export default validCatTitles

