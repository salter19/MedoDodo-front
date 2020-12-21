import React from "react";
import Head from "./Header";
import Footer from "./Footer";

class ViewBase extends React.Component {
  render() {
    return (
      <div className="view-base">
        <Head
          date={this.props.date}
          page={this.props.page}
          catTitle={this.props.catTitle}
        />
        {this.props.view}
        <Footer
          page={this.props.page}
          onClickRight={this.props.onClickRight}
          onClickLeft={this.props.onClickLeft}
          onSave={this.props.onSave}
          onDelete={this.props.onDelete}
          goBack={this.props.goBack}
        />
      </div>
    );
  }
}

export default ViewBase;
