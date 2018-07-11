const anioCumple = 1993
const mesCumple = 10
const fechaCumple = 28
const nacimiento = new Date(anioCumple, mesCumple-1, fechaCumple) //El mes siempre se le resta 1
const hoy = new Date()
const dias = 'Domingo,Lunes,Martes,Miércoles,Jueves,Viernes,Sábado'.split(',')
const meses = 'Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre'.split(',')
const proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
const diaVerbal = dias[proximoCumple.getDay()]
const mesVerbal = meses[proximoCumple.getMonth()]

console.log(`Tu próximo cumpleaños es: ${diaVerbal}, ${proximoCumple.getDate()} de ${mesVerbal}`)
