// --- 1. Selección de elementos (DOM) ---
const input = document.getElementById('email');
const btnCalcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

// --- 2. Función lógica (Pura y aislada) ---
const validar = (email) => {
  // Definimos el patrón de validación (Regex)
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

// --- 3. Función del manejador (Gestiona la interfaz) ---
const procesarValidacion = () => {
  const emailUsuario = input.value.trim();

  // Validación básica: comprobar si el campo está vacío
  if (!emailUsuario) {
    resultado.textContent = "Por favor, introduce un email.";
    return;
  }

  // Comprobación de la lógica
  if (validar(emailUsuario)) {
    resultado.textContent = `"${emailUsuario}" es un email válido. ✅`;
  } else {
    resultado.textContent = `"${emailUsuario}" NO es un email válido. ❌`;
  }

  // Limpiamos el input después de validar
  input.value = "";
};

// --- 4. Escuchador (Aparte, conectando ambos mundos) ---
btnCalcular.addEventListener('click', procesarValidacion);