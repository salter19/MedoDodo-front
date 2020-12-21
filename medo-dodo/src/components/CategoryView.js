import React from "react";
import ViewBase from "./ViewBase";
import TasksByCatTitle from "./TasksByCatTitle";

class CategoryView extends React.Component {
  render() {
    return (
      <div className="cat-view">
        <ViewBase
          date={this.props.date}
          page={this.props.page}
          onClickRight={this.props.onClickAdd}
          onClickLeft={this.props.onClickCats}
          onClickTask={this.props.onClickTask}
          catTitle={this.props.currentCategory}
          catID={this.props.catID}
          currentCatID={this.props.currentCatID}
          onCatDelete={this.props.onCatDelete}
          allTasks={this.props.allTasks}
          view={
            <TasksByCatTitle
              catTitle={this.props.currentCategory}
              catID={this.props.catID}
              onClickTask={this.props.onClickTask}
              onClickDone={this.props.onClickDone}
              currentCatID={this.props.currentCatID}
              onCatDelete={this.props.onCatDelete}
              allTasks={this.props.allTasks}
            />
          }
        />
      </div>
    );
  }
}

export default CategoryView;
