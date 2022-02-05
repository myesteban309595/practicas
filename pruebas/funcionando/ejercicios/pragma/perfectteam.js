

const skills = 'mppzbmbpzcbmpbmczcz'

function perfectTeam(skills) {
    // Write your code here
    
    const array = skills.split('');
    
    const  obj = {};
    
    array.forEach(a => {
        
        obj[a] = !obj[a] ? 1 : obj[a] += 1 ;
    })
    
    const valores = Object.values(obj).sort((a,b) => a - b).slice(0,1)
    return valores;

}

// no cunple para 1 caso, donde hay dos letras unicas y ambas son minimas deberia dar cero equipos
console.log(perfectTeam(skills) );