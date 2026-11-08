// À MODIFIER : ton numéro WhatsApp, sans « + » ni espaces (509 suivi de 8 chiffres)
var WHATSAPP = "50943449848";
 
// À MODIFIER : tes produits et tes prix en gourdes
var produits = [
  {icone:"📄", nom:"CV professionnel", desc:"Un CV clair et moderne pour présenter tes compétences.", prix:500},
  {icone:"🎨", nom:"Pack d’affiches", desc:"Des modèles d’affiches pour ton commerce, ton événement ou ta promo.", prix:750},
  {icone:"✨", nom:"Logo et identité visuelle", desc:"Un logo et des couleurs pour ta marque.", prix:1500},
  {icone:"🧾", nom:"Modèle de facture", desc:"Un modèle simple à remplir pour tes clients.", prix:400},
  {icone:"📱", nom:"Pack Facebook et Instagram", desc:"10 visuels prêts à publier sur tes réseaux.", prix:1000},
  {icone:"📘", nom:"E-book et guide pratique", desc:"Un petit guide clair sur le sujet de ton choix.", prix:600}
];
 
var liste = document.getElementById("liste");
produits.forEach(function(p){
  var msg = "Bonjour, je veux commander : " + p.nom + " (" + p.prix + " gdes). Je paie par MonCash ou NatCash.";
  var c = document.createElement("article");
  c.className = "card";
  c.innerHTML = "<div class='ico'></div><h3></h3><p></p><div class='row'><span class='price'></span><a class='order' target='_blank' rel='noopener'>Commander</a></div>";
  c.querySelector(".ico").textContent = p.icone;
  c.querySelector("h3").textContent = p.nom;
  c.querySelector("p").textContent = p.desc;
  c.querySelector(".price").textContent = p.prix + " gdes";
  c.querySelector(".order").href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg);
  liste.appendChild(c);
});
 
