const loaderOut = document.querySelector("#loader-out");
function fadeOut(element) {
  let opacity = 1;
  const timer = setInterval(function () {
    if (opacity <= 0.1) {
      clearInterval(timer);
      element.style.display = "none";
    }
    element.style.opacity = opacity;
    opacity -= opacity * 0.1;
  }, 50);
}
fadeOut(loaderOut);

function eliminarEmpleado(id_empleado, foto_empleado) {
  if (confirm("¿Estas seguro que deseas Eliminar el Paciente?")) {
    let url = `/borrar-empleado/${id_empleado}/${foto_empleado}`;
    if (url) {
      window.location.href = url;
    }
  }
}

document.getElementById("togglePassVisibility").addEventListener("click", function() {
  var passwordInput = document.getElementById("pass_user");
  var icon = this.querySelector("i");

  // Si el tipo es 'password', cambiar a 'text' para mostrar el texto
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.className = "bx bx-show"; // Cambiar icono para indicar que está visible
  } else {
    passwordInput.type = "password"; // Cambiar de vuelta a 'password'
    icon.className = "bx bx-hide";  // Cambiar icono para indicar que está oculto
  }
});
