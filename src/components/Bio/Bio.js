import React from 'react'
import kid from '../../assets/kid.png'
import './Bio.css'

function Bio() {
    return (
        <div className="bio">
            <img src={kid} height='300' width='500'  alt="" />
            <div>
                <h4 className="bioDesc" style={{color: 'white'}}>La relación de Flama con la música inició en Alajuela, Costa Rica, a principios de los años 90. Rodeade de amantes de la música e intérpretes de calle, se vio influenciade en su infancia por su familia de cantores, por los boleros, las rancheras, los tangos y la balada clásica. Su distintiva voz se hizo escuchar desde temprana edad, y continuó madurando conforme se halló en un mundo donde reinaban las opresiones, la intolerancia, las imposiciones de género y sexualidad, y la guerra contra aquelles que son diferentes. 

En un ambiente de escasos recursos y colmado de problemas intrafamiliares, Flama encontró en la escritura y la música los medios por los cuales se sentía segure y libre de expresarse. A través de los años continuó coleccionando música, aprendiendo instrumentos como autodidacta, y desarrollando un eje común en sus exploraciones del sonido: la rabia, la melancolía, la pasión y la audaz expresión de su identidad. A los 17 años, al salir a la luz como queer dentro de un ambiente religioso y conservador, se enfrentó a aún más situaciones traumáticas que le llevaron a dejar su tierra natal, rumbo a Los Ángeles, California, donde inició su nuevo camino de sanación y auto exploración. Es ahí donde se presenta a una audiencia de desconocidos por primera vez para cantar covers de rancheras, baladas, cumbias y otros ritmos de baile, en las calles y los bares de la ciudad. Su presencia escénica e inigualable talento se hicieron ver en la recepción del público y es entonces cuando Flama decide dedicar su tiempo libre en los próximos años a desarrollarse más como intérprete. 
</h4>
            </div>
        </div>
    )
}

export default Bio
