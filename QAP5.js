fetch('./Animal.json')
   .then(response => response.json())
   .then(Animal => {
     Animal.forEach(Species => {
        Enclosure(Species);
     });
   })
   .catch(error => {
     console.error(error);
   });

   function Enclosure(Species) {
     switch(Species.Nature){
       case "Aggressive": 
         console.log(`${Species.Name} Must be isolated from other species.`);
         break;
       case "Mild": 
         console.log(`${Species.Name} Be aware of behaveural habbits around other species.`);
         break;
       case "Tame":
         console.log(`${Species.Name} Can be enclosed with species of similar temperment.`);
         break;
       default:
         console.log(`${Species.Name} Know your animals.`);
     }
   };