const products = [
  {icon:"📄",name:"CV professionnel",description:"Un modèle de CV clair et moderne pour présenter tes compétences.",price:"À définir",category:"Modèle"},
  {icon:"🎨",name:"Pack d'affiches",description:"Des modèles d'affiches pour promouvoir une activité ou une entreprise.",price:"À définir",category:"Design"},
  {icon:"📱",name:"Pack réseaux sociaux",description:"Des idées et modèles de publications pour Facebook et Instagram.",price:"À définir",category:"Marketing"},
  {icon:"🧾",name:"Factures & devis",description:"Des documents simples pour mieux organiser une petite activité.",price:"À définir",category:"Business"},
  {icon:"📘",name:"Mini-guides pratiques",description:"Des guides numériques courts pour apprendre et passer à l'action.",price:"À définir",category:"Guide"},
  {icon:"✨",name:"Pack de prompts IA",description:"Des instructions prêtes à utiliser avec différents assistants IA.",price:"À définir",category:"IA"}
];
const grid=document.getElementById("product-grid");
grid.innerHTML=products.map((p,i)=>`<article class="product-card"><div class="product-icon">${p.icon}</div><h3>${p.name}</h3><p>${p.description}</p><div class="product-bottom"><span class="price">${p.price}</span><button class="demo-btn" type="button" onclick="showProduct('${p.name.replace(/'/g,"\\'")}')">Découvrir</button></div></article>`).join("");
function showProduct(name){alert("Le produit « "+name+" » sera bientôt disponible. Les commandes seront activées après configuration du paiement et de la livraison.");}
document.getElementById("year").textContent=new Date().getFullYear();
