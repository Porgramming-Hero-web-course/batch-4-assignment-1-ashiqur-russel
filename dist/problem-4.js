"use strict";
const calculateShapeArea = (params) => {
    if (params.shape === "circle") {
        return Math.round(Math.PI * Math.pow(params.radius, 2) * 100) / 100;
    }
    else if (params.shape === "rectangle") {
        return params.width * params.height;
    }
    return 0;
};
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
