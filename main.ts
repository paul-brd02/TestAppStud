import HttpGateway from "./HttpGateway";
import ExampleController from "./controllers/ExampleController";

(async function main() {
    // Init Fastify router
    const http = new HttpGateway()

    // Controllers
    new ExampleController(http.router)

    
    // Fastify router start
    await http.start()

    var healthcheck = getInformation();

    console.log(healthcheck);


    
})()

/*
 * modèle de la réponose attendu
 */
interface Healthchek {
    name : string
    version : string
    time : TimerHandler
}

async function getInformation(): Promise<Healthchek>{
    return fetch('http://127.0.0.1:3000/api/healthchek')
            .then(res => res.json())
            .then(res => {
                return res as Healthchek
            })

    /*try{
        const reponse = await fetch('http://127.0.0.1:3000/api/healthchek');

        if(!reponse.ok){
            throw new Error(`Error! status: ${reponse.status}`);
        }

        const result = await reponse.json();
        return result;
    } catch(err){
        console.log(err);
    }*/
}