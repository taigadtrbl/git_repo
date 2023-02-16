function count() {
    counter++;
    documentqueryselector('h1').innerHTML=count;
    if(counter% 10 === 0)
     alert(`count is now ${counter}`);
}