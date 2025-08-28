1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
->getElementById --> Works with a single element
->getElementsByClassName --> Works with all elements of a specific class
->querySelector --> Works with the first matching element using a CSS selector
->querySelectorAll --> Works with all elements using a CSS selector

2.How do you create and insert a new element into the DOM?
-->Elements are created using document.createElement(). Inserted into the DOM using appendChild(), prepend().

3.What is Event Bubbling and how does it work?
-->When an event occurs on a child element, it is first executed on the child, then propagates upwards through parent ,grandparent.

4.What is Event Delegation in JavaScript? Why is it useful?
-->Event Delegation Catch the child's event through bubbling by setting a single listener on the parent.

--Why is it useful?

You don't have to set a separate listener for each child, so the code is smaller and faster.
Later, if a new child element is added to the DOM, the parent's listener will already work, you don't have to do anything else.


5.What is the difference between preventDefault() and stopPropagation() methods?
-->preventDefault() - stops the default action of the element (such as form submit, link redirect, etc.).
-->stopPropagation() - stops event bubbling/capturing, meaning the event no longer goes to the parent element.
