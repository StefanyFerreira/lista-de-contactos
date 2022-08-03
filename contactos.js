let contactos = [];
let contactoOne = {
  nombre: "Stefany Torres",
  edad: 19,
  correo: "Stefany-torres@gmail.com",
  telefono: 3008076248,
  ciudad: "Barranquilla",
  dirreccion: "Carrera 112d #78-66",
};

let contactoTwo = {
  nombre: "Alexandra Torres",
  edad: 22,
  correo: "Alexandra-torres@gmail.com",
  telefono: 321456789,
  ciudad: "Bogotá",
  dirreccion: "Carrera 113d #75-66",
};

let contactoThree = {
  nombre: "Paula Lemos",
  edad: 12,
  correo: "Paula-lemos@gmail.com",
  telefono: 3123614588,
  ciudad: "Chia-Cundinamarca",
  dirreccion: "Diagonal 77b #116-51",
};

let contactoFour = {
  nombre: "Santiago Rodriguez",
  edad: 34,
  correo: "Santiago-Rodriguez@gmail.com",
  telefono: 3148526028,
  ciudad: "Medellin",
  dirreccion: "Calle 113d #78-36",
};

function adicionarContacto(contacto) {
  contactos.push(contacto);
  return contacto;
}
adicionarContacto(contactoOne);
adicionarContacto(contactoTwo);
adicionarContacto(contactoThree);
adicionarContacto(contactoFour);
console.log(contactos);

function eliminarContacto(contactos) {
  contactos.pop(contactos);
  return contactos;
}
eliminarContacto(contactos);
console.log(contactos);

console.log(contactoTwo.ciudad);

function actualizarContacto(contactos) {
  contactoOne.dirreccion = "Carrera 2";
  contactoTwo.correo = "ALEXANDRA123";
  return contactos;
}

actualizarContacto(contactos);
console.log(contactos);

contactos[2].edad = 14;
contactos[1].ciudad = "Medellin";
contactos[0].dirreccion = "Andalucia";
contactos[2].ciudad = "Cali";
console.log(contactos);
