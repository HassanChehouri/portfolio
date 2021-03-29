//la fonction change_pictures viens du index.html dans chaque div de projet
//if index=0 vien du premier element de mon projet de 0-5 pour les 6 elements de portfolio
//document get element by id prend directement mes images dans mon dossier et le splace dans les boite appropries pour mon caroussel
//la meme chose pour la section titre mais en inner text cest cest du texte specifique et non un fichier du dossier, il remplace le titre en dessous de chaque projet dans le caroussel
//la meme chose que la section titre mais cest la description du projet en question
//ces etapes se repete pour chaque section du portfolio



function change_pictures(index){

    // section montage video
    if(index ==0){
        document.getElementById("slidechangek1").src = "./assets/images/1-a.png";	  
        document.getElementById("slidechangek2").src = "./assets/images/1-b.png";
        document.getElementById("slidechangek3").src = "./assets/images/1-c.png";		  
        document.getElementById("titre1").innerText = "Night City";
        document.getElementById("titre2").innerText = "Jour de la Terre";
        document.getElementById("titre3").innerText = "Amélie";
        document.getElementById("desc1").innerText = "Night City est un montage vidéo réalisé entièrement sur After Effects, il représente une scène d'introduction à une série entièrement fictive.";
        document.getElementById("desc2").innerText = "Le montage Jour de la Terre est un montage entièrement filmé et monté sur Premiere Pro, le message derrière ce montage est de sensibiliser le monde à ne pas poluer son environnement.";
        document.getElementById("desc3").innerText = "Amélie est un projet dont le but est de recréer une bande annonce d'un film avec certains clips de celui-ci.";

    //section design   
    }else if (index ==1){
        document.getElementById("slidechangek1").src = "./assets/images/2-a.jpg";	  
        document.getElementById("slidechangek2").src = "./assets/images/2-b.png";
        document.getElementById("slidechangek3").src = "./assets/images/2-c.png";
        document.getElementById("titre1").innerText = "L'art Fictif";
        document.getElementById("titre2").innerText = "Eventbrite";
        document.getElementById("titre3").innerText = "Le Visionnaire";
        document.getElementById("desc1").innerText = "Le Projet de l'art Fictif est un projet dont l'imagination et la créativité sont très mise en valeur. Ce projet à été entièrement construite sur Photoshop.";
        document.getElementById("desc2").innerText = "Le projet Eventbrite est un projet dont j'ai du refaire une maquette d'un site web qui n'était pas mis à jour depuis plusieurs mois. Ce projet à été entièrement réalisé sur Photoshop.";
        document.getElementById("desc3").innerText = "Le Visionnaire est un Logo d'une clinique optométrie entièrement fait sur Illustrator.";

    //section photographie
    } else if (index ==2){
        document.getElementById("slidechangek1").src = "./assets/images/3-a.jpg";	  
        document.getElementById("slidechangek2").src = "./assets/images/3-b.jpg";
        document.getElementById("slidechangek3").src = "./assets/images/3-c.jpg";
        document.getElementById("titre1").innerText = "Carcade";
        document.getElementById("titre2").innerText = "Frontière";
        document.getElementById("titre3").innerText = "Chutes";
        document.getElementById("desc1").innerText = "Ce projet est un des contrats que j'ai recu de la part d'une compagnie d'auto de location de luxe à montréal sous le nom de Carcade. J'ai du prendre plusieurs photos de leurs inventaire de voitures et ensuite les retoucher sur Photoshop pour les publier sur leur site web.";
        document.getElementById("desc2").innerText = "Ce projet est un projet personnel que je me suis fixé pour agrandir la diversificatrion des photo profesionnels que je prend.";
        document.getElementById("desc3").innerText = "Ce projet est un projet personnel que je me suis fixé pour agrandir la diversificatrion des photo profesionnels que je prend.";
    }

    //section 3D
	else if (index ==3){
        document.getElementById("slidechangek1").src = "./assets/images/4-a.png";	  
        document.getElementById("slidechangek2").src = "./assets/images/4-b.png";
        document.getElementById("slidechangek3").src = "./assets/images/4-c.png";
        document.getElementById("titre1").innerText = "TIM Explosion";
        document.getElementById("titre2").innerText = "TIM Explosion";
        document.getElementById("titre3").innerText = "TIM Explosion";
        document.getElementById("desc1").innerText = "Travail fait en équipe avec Omar Abdirahamn, création et animation d'un logo TIM animé complètement sur  Autodesk Maya ";
        document.getElementById("desc2").innerText = "Prise 2";
        document.getElementById("desc3").innerText = "Prise 3";
    }

    //section jeu
	else if (index ==4){
        document.getElementById("slidechangek1").src = "./assets/images/5-a.png";	  
        document.getElementById("slidechangek2").src = "./assets/images/5-b.png";
        document.getElementById("slidechangek3").src = "./assets/images/5-c.png";
        document.getElementById("titre1").innerText = "Kidnapp Class";
        document.getElementById("titre2").innerText = "Kidnapp Class";
        document.getElementById("titre3").innerText = "Kidnapp Class";
        document.getElementById("desc1").innerText = "Jeu fait en équipe avec Christopher, Valentyn, Cedrick réalisé complétement sur Unity en Collab Kidnapp Class est un jeu de Escape Room 3D qui met le joueur dans une immersion intensive.";
        document.getElementById("desc2").innerText = "Prise 2";
        document.getElementById("desc3").innerText = "Prise 3";
    }

    //section programmation
	else if (index ==5){
        document.getElementById("slidechangek1").src = "./assets/images/6-a.png";	  
        document.getElementById("slidechangek2").src = "./assets/images/6-b.png";
        document.getElementById("slidechangek3").src = "./assets/images/6-c.png";
        document.getElementById("titre1").innerText = "Site TIM";
        document.getElementById("titre2").innerText = "Site TIM";
        document.getElementById("titre3").innerText = "Site TIM";
        document.getElementById("desc1").innerText = "Travail fait en équipe dont le but est de refaire le site web du programme complètement du début à la Fin. Voici les prises finales du site Réalisée sur vscode et Github.";
        document.getElementById("desc2").innerText = "Prise 2";
        document.getElementById("desc3").innerText = "Prise 3";
    }
    
  }  