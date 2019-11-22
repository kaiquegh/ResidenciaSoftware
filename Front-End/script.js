function loadData() {
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("demo").innerHTML =
      var resposta = JSON.parse(this.responseText);
      document.getElementById("demo").innerHTML = resposta.logradouro;
    }
  };
  xhttp.open("GET", "https://viacep.com.br/ws/25645111/json/", true);
  xhttp.send(); 
  }
  