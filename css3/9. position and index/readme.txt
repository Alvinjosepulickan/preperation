
static (default):
    Elements are positioned according to the normal flow of the document.
    top, right, bottom, and left properties have no effect.
    Used as the default value for all elements.

relative:
    The element is positioned relative to its normal position.
    top, right, bottom, and left properties offset the element from its original position.
    The element still takes up space in the document flow.

absolute:
    The element is positioned relative to its nearest positioned ancestor (an ancestor with position set to anything other than static).
    If there is no such ancestor, it positions itself relative to the initial containing block (usually the viewport).
    top, right, bottom, and left properties are used to offset the element from its positioned ancestor.
    The element is removed from the document flow, so it doesn’t affect the position of other elements.

fixed:
    The element is positioned relative to the viewport, which means it stays in the same place even when the page is scrolled.
    top, right, bottom, and left properties define the offset from the edges of the viewport.
    Like absolute, the element is removed from the document flow.

sticky:
    The element switches between relative and fixed positioning depending on the scroll position.
    It is treated as relative until it crosses a specified threshold, after which it behaves like fixed.
    You need to specify top, right, bottom, or left to define the threshold at which it becomes fixed.