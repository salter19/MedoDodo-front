import TasksGetter from './TasksGetter'
const validCatTitles = async() => {
    const catObj = await TasksGetter.everyCat()
    const titlesArr = catObj.map(obj => obj.title)
    console.log(titlesArr)
}

export default validCatTitles

