const starWars7 = 'Start Wars: El Despertar de la Fuerza'
const pgStarWars7 = 13

const nameSacha = 'Sacha'
const ageSacha = 26

const nameSanti = 'Santi'
const ageSanti = 12

const canWatchStarWars7 = (name, age, isWithAdult = false) {
	if(age > pgStarWars7) {
		alert(`${name} puede pasar a ver ${starWars7}`)
	} else if(isWithAdult) {
		alert(`${name} puede pasar a ver ${starWars7}.
			Aunque su edad es ${age}, se encuetra acompañado/a por un adulto`);
	} else {
		alert(`${name} no puede pasar a ver ${starWars7}.
			Tiene ${age} años y necesita tener ${pgStarWars7}`)
	}
}

canWatchStarWars7(nameSacha, ageSacha)
canWatchStarWars7(nameSanti, ageSanti, true)
 