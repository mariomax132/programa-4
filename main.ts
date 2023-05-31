let Velocidad = 35
let tiempo_de_espera = 2000
let tiempo_de_giro = 1950
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
basic.pause(tiempo_de_espera)
maqueen.motorStop(maqueen.Motors.All)
basic.pause(200)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Velocidad)
maqueen.motorStop(maqueen.Motors.M2)
basic.pause(tiempo_de_espera)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
basic.pause(4000)
