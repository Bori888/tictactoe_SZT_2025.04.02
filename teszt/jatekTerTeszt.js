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
function tesztGyozelemEllenorzes_nincsNyertes() {
    /*létrehozok egy vizuáális játékteret Mock elem */
    const szElem =document.createElement("div")
    const jatekter = new Jatekter(szElem)
    console.log(jatekter);

    const e  = new CustomEvent("kivalaszt",{detail:0})
    window.dispatchEvent(e)

    const e2  = new CustomEvent("kivalaszt",{detail:3})
    window.dispatchEvent(e2)

    const e3  = new CustomEvent("kivalaszt",{detail:5})
    window.dispatchEvent(e3)
    let vart = "-"
    let kapott = jatekter.gyozelemEllenorzes()
    console.assert(kapott===vart,`várt:${vart} kapott:${kapott}`,"Hiba:Nem nyert még senki nem is döntetlen")
    console.log("lefutott a nincsNyertes--Teszt()");
    
    
    
}
function tesztGyozelemEllenorzes_dontetlen() {
    /*létrehozok egy vizuáális játékteret Mock elem */
    const szElem =document.createElement("div")
    const jatekter = new Jatekter(szElem)
    console.log(jatekter);

    const e1  = new CustomEvent("kivalaszt",{detail:0})
    window.dispatchEvent(e1)
    const e2  = new CustomEvent("kivalaszt",{detail:2})
    window.dispatchEvent(e2)
    const e3  = new CustomEvent("kivalaszt",{detail:1})
    window.dispatchEvent(e3)
    const e4  = new CustomEvent("kivalaszt",{detail:3})
    window.dispatchEvent(e4)
    const e5  = new CustomEvent("kivalaszt",{detail:5})
    window.dispatchEvent(e5)
    const e6  = new CustomEvent("kivalaszt",{detail:4})
    window.dispatchEvent(e6)
    const e7  = new CustomEvent("kivalaszt",{detail:6})
    window.dispatchEvent(e7)
    const e8  = new CustomEvent("kivalaszt",{detail:7})
    window.dispatchEvent(e8)
    const e9  = new CustomEvent("kivalaszt",{detail:8})
    window.dispatchEvent(e9)

    
    let vart = "-"
    let kapott = jatekter.gyozelemEllenorzes()
    console.assert(kapott===vart,`várt:${vart} kapott:${kapott}`,"Hiba:döntetlen")
    console.log("lefutott a Döntetelen --Teszt()");
    
    
    
}
tesztGyozelemEllenorzes_nincsNyertes()
tesztGyozelemEllenorzes_dontetlen()