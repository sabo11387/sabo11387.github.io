const performersTop = ["amy_innocent_","lux_angel","baby___lola","mrs_slimthug","silkencrave","cutebrutality","alettaeve","lily_lv","emma_clon","victoria_calloway","cutealexandre","eveluin_leeds","malvina_doll","kathe_littlee","sweetlittlevenus"];
  const containerTop = document.getElementById('linksTop');

  performersTop.forEach(name => {
    const a = document.createElement('a');
    a.href = `https://recu.me/performer/${name}/latest`;
    a.target = "_blank";
    a.textContent = name;
    containerTop.appendChild(a);
    containerTop.appendChild(document.createTextNode(' '));
  });

  const performers18 = ["ur_sweetgirl_clarace"];
  const container18 = document.getElementById('links18');

  performers18.forEach(name => {
    const a = document.createElement('a');
    a.href = `https://recu.me/performer/${name}/latest`;
    a.target = "_blank";
    a.textContent = name;
    container18.appendChild(a);
    container18.appendChild(document.createTextNode(' '));
  });

  const performersHot = ["jadebunnie","megan_galactica","mary_lepson","anny_leps","luucy___","katemoss70","kittyloffe","kittenmoon_","alisaa_01","michelle_swan","xiawa_xo","jumphigher","laralane_","germaine_jones","queenelia","petalpage"];
  const containerHot = document.getElementById('linksHot');

  performersHot.forEach(name => {
    const a = document.createElement('a');
    a.href = `https://recu.me/performer/${name}/latest`;
    a.target = "_blank";
    a.textContent = name;
    containerHot.appendChild(a);
    containerHot.appendChild(document.createTextNode(' '));
  });
