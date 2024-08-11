
In CSS, selectors are used to target the HTML elements on our web pages that we want to style.
Element Selectors
    Element selectors are used for styling elements.


Id Selector
    Id selectors are used for styling an element specifically


Class Selectors
    Class selectors are used for providing the same styling for multiple elements.


Contextual Selectors
    Contextual selectors are used when we want selectors to match elements that appear in a context.
    Context is referred to as a parent/child relationship between HTML elements.
    We separate the parent and child elements using space while writing the style rules using contextual selectors.
    
    Descendant Selector (ancestor descendant):
        Targets elements that are descendants of a specified ancestor element.

        /* Selects all <p> elements that are inside a <div> element */
        div p {
            color: blue;
        }
    
    Child Selector (parent > child):
        Targets direct children of a specified element.

        /* Selects <li> elements that are direct children of a <ul> element */
        ul > li {
            font-weight: bold;
        }

    Adjacent Sibling Selector (previous + next):
        Targets an element that immediately follows a specified element.

        /* Selects the <p> element that directly follows a <h2> element */
        h2 + p {
            margin-top: 0;
        }

    General Sibling Selector (previous ~ siblings):
        Targets all sibling elements that follow a specified element, not just the immediate next one.

        /* Selects all <p> elements that are siblings of an <h2> element */
        h2 ~ p {
            color: green;
        }



Grouping of selectors
    Grouping selectors in CSS is a technique used to apply the same style rules to multiple elements by combining them into a single CSS rule. 
    This approach helps to keep your stylesheet more concise and manageable. 
    Here’s how it works and why it’s useful:
    
    /* Grouping selectors */
    h1, h2, h3 {
        font-family: Arial, sans-serif;
        color: navy;    
    }



Inheritance:
    How Inheritance Works
    
    Automatic Inheritance: By default, some CSS properties are inherited from parent elements to child elements. 
        This means if a parent element has a specific style, its children will inherit that style unless overridden.

    Explicit Inheritance: Some properties do not inherit by default but can be set to inherit explicitly using the inherit value.

    Non-Inheritable Properties: Many properties do not inherit by default, such as margin, border, padding, and width. 
        These properties need to be set explicitly on child elements if you want them to be styled in a specific way.


pseudo classes
    Pseudo-classes in CSS are keywords added to selectors that specify a special state of an element. 
    They allow you to apply styles based on user interactions, element states, or document structure without needing additional classes or JavaScript.

    Common Pseudo-Classes

    :hover

        Description: Applies styles when the user hovers over an element.
        Example:
        css
        Copy code
        a:hover {
        color: red;
        }

    :active

        Description: Applies styles when an element is being activated (e.g., a button being clicked).
        Example:
        css
        Copy code
        button:active {
        background-color: darkgray;
        }

    :focus

        Description: Applies styles when an element has focus (e.g., a form field is selected).
        Example:
        css
        Copy code
        input:focus {
        border-color: blue;
        }

    :visited

        Description: Applies styles to links that the user has visited.
        Example:
        css
        Copy code
        a:visited {
        color: purple;
        }

    :link

        Description: Applies styles to links that have not yet been visited.
        Example:
        css
        Copy code
        a:link {
        color: blue;
        }