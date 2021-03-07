function change_pictures(index){
   
    if(index ==0){
        document.getElementById("slidechangek1").src = "./assets/images/1-a.png";	  
        document.getElementById("slidechangek2").src = "./assets/images/1-b.png";
        document.getElementById("slidechangek3").src = "./assets/images/1-c.png";		  
        document.getElementById("titre1").innerText = "Night City";
        document.getElementById("titre2").innerText = "Jour de la Terre";
        document.getElementById("titre3").innerText = "Amélie";
        document.getElementById("desc1").innerText = "Night City est un montage vidéo réalisé entièrement sur After Effects, il représente une scène d'introduction à une série entièrement fictive.";
        document.getElementById("desc2").innerText = "Le montage Jour de la Terre est un montage entièrement filmé et monté sur Premiere Pro, le message derrière ce montage est de sensibiliser le monde à ne pas poluer son environnement.";
        document.getElementById("desc3").innerText = "Amélie est un projet dont le but est de recréer une bande d'annonce d'un film avec certains clip de celui-ci.";
        
    }else if (index ==1){
        document.getElementById("slidechangek1").src = "./assets/images/2-a.jpg";	  
        document.getElementById("slidechangek2").src = "./assets/images/2-b.png";
        document.getElementById("slidechangek3").src = "./assets/images/2-c.png";
        document.getElementById("titre1").innerText = "L'art Fictif";
        document.getElementById("titre2").innerText = "Eventbrite";
        document.getElementById("titre3").innerText = "Le Visionnaire";
        document.getElementById("desc1").innerText = "Le Projet de l'art Fictif est un projet dont l'imagination et la créativité sont très mise en valeur. Ce projet à été entièrement construit sur Photoshop.";
        document.getElementById("desc2").innerText = "Le projet Eventbrite est un projet dont j'ai du refaire une maquette d'un site web qui n'étais pas mis à jour depuis plusieurs mois. Ce projet à été entièrement réalisé sur Pohotshop.";
        document.getElementById("desc3").innerText = "Le Visionnaire est un Logo d'une clinique optométrie entièrement faite sur Illustrator.";
    } else if (index ==2){
        document.getElementById("slidechangek1").src = "./assets/images/3-a.jpg";	  
        document.getElementById("slidechangek2").src = "./assets/images/3-b.jpg";
        document.getElementById("slidechangek3").src = "./assets/images/3-c.jpg";
        document.getElementById("titre1").innerText = "Carcade";
        document.getElementById("titre2").innerText = "Frontière";
        document.getElementById("titre3").innerText = "Chutes";
        document.getElementById("desc1").innerText = "Ce projet est un des contrat que j'ai recu de la part d'une compagnie d'auto de location de luxe à montréal sous le nom de Carcade. J'ai du prendre plusieurs photo de leurs inventaires de voitures et ensuite les retoucher sur Photoshop pour les publier sur leurs site web.";
        document.getElementById("desc2").innerText = "Ce projet est un projet personnel que je me suis fixé pour agrandir la diversificatrion des photo profesionnels que je prend.";
        document.getElementById("desc3").innerText = "Ce projet est un projet personnel que je me suis fixé pour agrandir la diversificatrion des photo profesionnels que je prend.";
    }
    
  }  