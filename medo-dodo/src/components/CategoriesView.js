import "./styles/CategoriesView.css";
import React from "react";
import ViewBase from "./ViewBase";
import categoryTitles from "./validCategoryTitles";
import CategoryIcon from "./CategoryIcon";
import TasksGetter from "./ConnectToBackend";

class CategoriesView extends React.Component {
  state = { categories: [], titles: [], tasks: [], icons: [] };

  componentDidMount() {
    this.createIcons();
  }

  createIcons = async () => {
    try {
      const catData = await TasksGetter.everyCategory();
      console.log("categoryData:" + JSON.stringify(catData));
      const catTitles = await categoryTitles.validCatTitles();
      const taskObjs = await this.getTaskObjects(catTitles);
      const taskTitles = taskObjs.map((e) => this.getTaskTitles(e));

      this.setState({
        categories: catData,
        titles: catTitles,
        tasks: taskTitles,
      });

      let i = 0;
      const catIcons = catData.map((e) => {
        const items = this.getTasksPerCategoryByTitle(e.title);
        return (
          <div key={i++} className="eight wide column">
            <CategoryIcon
              catID={e.id}
              title={e.title}
              data={items}
              onClickCat={this.props.onClickCat}
            />
          </div>
        );
      });

      /*
      const catIcons = catTitles.map((e) => {
        const items = this.getTasksPerCategoryByTitle(e);
        return (
          <div key={i++} className="eight wide column">
            <CategoryIcon
              title={e}
              data={items}
              onClickCat={this.props.onClickCat}
            />
          </div>
        );
      });
      */

      this.setState({ icons: catIcons });
    } catch (error) {
      alert(`Something went wrong with title and task retrieval.\n${error}`);
    }
  };

  getTasksPerCategoryByTitle = (e) => {
    return this.state.tasks[this.state.titles.indexOf(e)];
  };

  getTaskObjects = async (titles) => {
    try {
      const someFunc = async (resolve, reject) => {
        let res = [];
        for (let i = 0; i < titles.length; i++) {
          const obj = await categoryTitles.taskTitlesByCat(titles[i]);

          res.push(obj);
        }
        res.length < titles.length
          ? reject("tasks do not come through")
          : resolve(res);
      };
      return new Promise(someFunc);
    } catch (error) {
      alert(`something went wrong with the retrieval of tasks.\n${error}`);
    }
  };

  getTaskTitles = (taskObjects) => {
    const tasks = taskObjects.map((e) => e.title);
    return tasks.length > 3 ? tasks.slice(0, 3) : tasks;
  };

  render() {
    const view = (
      <div className="categories-grid">
        <div className="ui grid container">
          <div className="ui two column centred grid">{this.state.icons}</div>
        </div>
        <ul></ul>
      </div>
    );

    return (
      <div className="categories-view">
        <ViewBase
          date={this.props.date}
          page={this.props.page}
          onClickRight={this.props.onClickAdd}
          onClickLeft={this.props.onClickWeeks}
          currentCatID={this.props.currentCatID}
          onCatDelete={this.props.onCatDelete}
          view={view}
        />
      </div>
    );
  }
}

export default CategoriesView;
