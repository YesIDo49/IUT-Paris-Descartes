function counter(element) {
    const max =parseInt(element.innerHTML);
    var i = 0;
    var funcNameHere = function() {
      element.innerHTML = `${i}`
      if (i == max) clearInterval(this);
      else console.log('Currently at ' + (i++));
    };
   
    setInterval(funcNameHere, 10 / (max * 10));
    funcNameHere();
  }

window.addEventListener("load", () => {
    document.querySelectorAll(".valeur").forEach(element => counter(element));
});