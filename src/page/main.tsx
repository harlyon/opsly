import React, { Component, FormEvent } from "react";
import * as joint from "jointjs";
import Shape from "../component/shape";

class Main extends Component {
  state = {
    port: "",
  };

  constructor(props: any) {
    super(props);
    this.initializeGraph = new joint.dia.Graph();
    this.shape = Shape;
  }

  shape: joint.shapes.devs.Model;
  initializeGraph: joint.dia.Graph;
  paper!: joint.dia.Paper;
  paperElement: React.RefObject<HTMLDivElement> = React.createRef();

  componentDidMount() {
    this.paper = new joint.dia.Paper({
      ...({
        el: this.paperElement.current,
        width: 800,
        height: 300,
        model: this.initializeGraph,
      } as joint.dia.Paper.Options),
    });
    this.addNode(this.shape);
  }

  addNode(element: joint.shapes.devs.Model) {
    this.initializeGraph.addCells([element]);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddPort = (e: FormEvent) => {
    e.preventDefault();
    const { port } = this.state;
    const id = Math.floor(Math.random() * 10);
    if (port === "inPort") return this.shape.addInPort(`in_${id}`);
    if (port === "outPort") return this.shape.addOutPort(`out_${id}`);
  };
  render() {
    return (
      <>
        <form className="search__container" onSubmit={this.handleAddPort}>
          <p className="search__title"> Port Type</p>
          <input
            className="search__input"
            name="port"
            type="text"
            placeholder="PORT TYPE"
            onChange={(e) => this.handleChange(e)}
          />
        </form>
        <div className="credits__container">
          <p className="credits__text">
            NB : Port Type can be either inPort or outPort <br />
          </p>
        </div>
        <div id="playground" ref={this.paperElement}></div>
      </>
    );
  }
}

export default Main;
