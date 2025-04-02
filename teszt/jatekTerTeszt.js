import Jatekter from "../Jatekter.js"
/*TEsztesete
0.Még fojik a játék de nincs nyertes
1.dontetlen
2.goztes vizszintes X
3.gyoztes fugoleges X
4.gyoztes atlos     X
5.goztes vizszintes O
6.gyoztes fugoleges O
7.gyoztes atlos     O

 */

const TESZTLISTA =[
    {   
        vart :"-",
        text: "Hiba:Nem nyert még senki nem is döntetlen",
        detailLISTA:[0,3,5],
    },
    {   
        vart :"-",
        text: "Hiba:döntetlen",
        detailLISTA:[0,2,1,3,5,4,6,7,8],
    },
    {   
        vart :"X",
        text: "Hiba:vizszintesenX Nyert",
        detailLISTA:[0,5,1,3,2],
    },
    
]

tesztGyozelemEllenorzes()


function tesztGyozelemEllenorzes() {
    /*létrehozok egy vizuáális játékteret Mock elem */
    for (let i = 0; i < TESZTLISTA.length; i++) {
        const szElem =document.createElement("div")
        const jatekter = new Jatekter(szElem)
        console.log(jatekter);
        for (let index = 0; index < TESZTLISTA[i].detailLISTA.length; index++) {
            const e  = new CustomEvent("kivalaszt",{detail:TESZTLISTA[i].detailLISTA[index]})
            window.dispatchEvent(e)        
        }
        let kapott = jatekter.gyozelemEllenorzes()
        console.assert(kapott===TESZTLISTA[i].vart,`várt:${TESZTLISTA[i].vart} kapott:${kapott}`,TESZTLISTA[i].text)
        console.log("lefutott a gyozelem teszt");
    }
    
    
}


