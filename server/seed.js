const fs = require('fs');
const path = require('path');
const faker = require('faker');
const md5 = require('md5');

function createBadges(limit = 50){
    const result = [];
    
    for(let i=0; i<limit; i++){
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email(); 
        /*
        const nombreContenedor = faker.name.nombreContenedor();
        const ubicacionInt = faker.name.ubicacionInt();

        result.push({
        id: faker.random.uuid(),
        nombreContenedor,,
        ubicacionInt,
        id_Punto: faker.random.uuid();,
        });
        */

        /* empresa 
        const nombrePunto = faker.name.nombrePunto();
        const barrio = faker.name.barrio();
        const direccion = faker.name.direccion();
        const email = faker.internet.email();
        const celular = faker.internet.celular();

        result.push({
        id: faker.random.uuid(),
        nombrePunto,
        barrio,
        direccion,
        email,
        celular,
        });
        
        // Recoleccion

            const idRecoleccion = faker.id.idRecoleccion();
            const idContenedor = faker.id.idContenedor();
            const idEmpresa = faker.id.idEmpresa();

        */
        result.push({
            id: faker.random.uuid(),
            firstName,
            lastName,
            email,
            jobTitle: faker.name.jobTitle(),
            twitter: `${firstName}${lastName}${faker.address.zipCode()}`,
            avatarUrl: `https://www.gravatar.com/avatar/${md5(email)}?d=identicon`,
        });
    }
    return result;
}

function main() {
    const data = {
      badges: createBadges(),
    };
  
    fs.writeFileSync(
      path.resolve(__dirname, 'db.json'),
      JSON.stringify(data, null, 4)
    );
  }
  
main();