Transition property can give a dynamic effect on web pages.
But there are a few disadvantages with transitions.
    Transition starts only when some event like hover, focus occurs.
    We can specify only the initial state and final state for transitions, but we cannot specify an intermediate state.
To overcome these disadvantages we use animations of CSS3.



@keyframes anim
{
     to {color: white;background:black;}
     from {color: black;background:white;}
}

@keyframes anim
{
     0% {color: white;background:black;}
     100% {color: black;background:white;}
}
