export function createElement(type, props, ...children) {
    return { type, props: props || {}, children };
}

export function render(element, container) {
    console.log(element, container)
    const dom = typeof element === "string"//checks if element is just a string
        ? document.createTextNode(element)
        : document.createElement(element.type);

    const isProperty = key => key !== "children";
    if (element.props) {
        Object.keys(element.props)
            .filter(isProperty)
            .forEach(name => {
                console.log(name, element.props[name], dom)
                dom[name] = element.props[name];
            });
    }
    if (element.children) {
        element.children.forEach(child =>
            render(child, dom)
        );
    }
    console.log(dom)
    container.appendChild(dom);
}
