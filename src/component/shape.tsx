import * as joint from "jointjs";

const Shape = new joint.shapes.devs.Model({
  position: { x: 190, y: 50 },
  size: { width: 90, height: 130 },
  inPorts: [],
  outPorts: [],
  ports: {
    groups: {
      in: {
        attrs: {
          ".port-body": {
            fill: "#333",
          },
        },
      },
      out: {
        attrs: {
          ".port-body": {
            fill: "#E74C3C",
          },
        },
      },
    },
  },
  attrs: {
    ".label": { text: "Model", "ref-x": 0.5, "ref-y": 0.2 },
    rect: { fill: "#2ECC71" },
  },
});

export default Shape;
