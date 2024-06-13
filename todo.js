function newElement() {
    const input = document.getElementById("text");
    const text = input.value;

    if (!input.value) return alert('Please enter a task');

    const newElement = document.createElement("li");
    const x = document.createElement('span');
    const xnode = document.createTextNode('x');
    x.appendChild(xnode);
    x.setAttribute('class', 'remove');

    const textNode = document.createTextNode(text);
    newElement.appendChild(textNode);
    newElement.setAttribute('class', 'attributes');

    const parent = document.querySelector(".container");
    parent.appendChild(newElement);
    parent.appendChild(x);
    input.value = '';

    x.addEventListener('click', function() {
        newElement.remove(); // Remove the clicked element
        x.remove(); // Remove the 'x' button associated with the clicked element
    });
}
