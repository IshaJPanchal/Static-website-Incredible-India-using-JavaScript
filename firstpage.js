 function Success() {
    let hero = localStorage.getItem("choice");
    console.log(hero);
    if (hero == 11) {
        //   this is region-> north   
        // this is monument name
        document.getElementById("heading").innerHTML = "North";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "North India is a loosely defined region consisting of the northern part of India.Several sources consider sizeable Muslim populations and deep-seated Islamic, Central Asian and Afghan influences to be defining characteristics of North Indian culture, both linguistically and culturally. North India lies mainly in the north temperate zone of the Earth.[27] Though cool or cold winters, hot summers and moderate monsoons are the general pattern. North India is one of the most climatically diverse regions on Earth. Hinduism is the dominant religion in North India. Dance of North India too has diverse folk and classical forms. Among the well-known folk dances are the bhangra of the Punjab, Ghoomar of Rajasthan, Nati of Himachal Pradesh and rouf and bhand pather of Kashmir.";
        // this is background image
        document.getElementById("bg").src = "/north.jpeg";
        document.getElementById("vanish").innerHTML = "";
        // This is to change the infremation link 
        document.getElementById("wiki").href = "https://en.wikipedia.org/wiki/North";
    }
    if (hero == 12) {
        //   this is region-> north-east   
        // this is monument name
        document.getElementById("heading").innerHTML = "North-East";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "The Northeast region can be physio graphically categorised into the Eastern Himalaya, the Patkai and the Brahmaputra and the Barak valley plains. Kangchenjunga, the third highest mountain peak in the world rising to an altitude of 8,586 m (28,169 ft), lies in-between the state Sikkim and adjacent country Nepal is located here. Northeast India has a subtropical climate that is influenced by its relief and influences from the southwest and northeast monsoons. Temperatures vary by altitude with the warmest places being in the Brahmaputra and Barak River plains and the coldest at the highest altitudes.";
        // this is background image
        document.getElementById("bg").src = "north east.jpg";
        document.getElementById("vanish").innerHTML = "";
        document.getElementById("wiki").href = "https://en.wikipedia.org/wiki/Northeast_India";
    }
    if (hero == 13) {
        //   this is region-> east   
        // this is monument name
        document.getElementById("heading").innerHTML = "East";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "About 80% of the population of East India is Hindu with significant Muslim and small Christian, Buddhist and tribal minorities. The region lies in the humid-subtropical zone, and experiences hot summers from March to June, the monsoon from July to October and mild winters from November to February. Odissi (Odissi) is a classical dance in Eastern India. It originates from the state of Odisha, in Eastern India. It is the oldest surviving dance form of India on the basis of archaeological evidences. Rabindra Sangeet, also known as Tagore Songs, are songs written and composed by Rabindranath Tagore. They have distinctive characteristics in the music of Bengal, popular in India and Bangladesh";
        // this is background image
        document.getElementById("bg").src = "east.jpeg";
        document.getElementById("vanish").innerHTML = "";
        document.getElementById("wiki").href = "https://en.wikipedia.org/wiki/East_India";
    }
    if (hero == 14) {
        //   this is region-> west   
        // this is monument name
        document.getElementById("heading").innerHTML = "West";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "The climate varies between tropical wet, tropical wet and dry, and semi arid. The coastal regions experience little seasonal variations although the temperatures range between 20 °C to 38 °C. The majority follow Hinduism and there are significant minority who follow Islam and smaller number who follow Christianity. The states of Maharashtra, Gujarat and Goa are culturally varied and distinct. The cuisine of Western India is diverse. Surat City Of Gujarat is Worldwide Known For Food, Maharashtrian cuisine is diverse and ranges from bland to fiery hot. The region generates 24.00% of the national GDP of the country, with an annual growth rate of 14.5% as of 2006.";
        // this is background image
        document.getElementById("bg").src = "west.jpg";
        document.getElementById("vanish").innerHTML = "";
        document.getElementById("wiki").href = "https://en.wikipedia.org/wiki/Western_India";
    }
    if (hero == 15) {
        //   this is region-> south   
        // this is monument name
        document.getElementById("heading").innerHTML = "South";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "The region has a tropical climate and depends on monsoons for rainfall. According to the Köppen climate classification, it has a non-arid climate with minimum mean temperatures of 18 °C (64 °F). As per the 2011 census of India, the estimated population of South India is 252 million, around one fifth of the total population of India. The largest linguistic group in South India is the Dravidian family of languages, a family of approximately 73 languages. Hinduism is the major religion with about 80% of the population adhering to it. About 11% of the population follow Islam and 8% follow Christianity. Rice is the staple diet, while fish is an integral component of coastal South Indian meal. Coconut and spices are used extensively in South Indian cuisine.";
        // this is background image
        document.getElementById("bg").src = "south.jpeg";
        document.getElementById("vanish").innerHTML = "";
        document.getElementById("wiki").href = "https://en.wikipedia.org/wiki/South_India";
    }
    if (hero == 21) {
        //   this is Popular Destinations-> Leh-Ladakh  
        // this is monument name
        document.getElementById("heading").innerHTML = "Leh-Ldakh";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "Leh  is the joint capital and largest town of the union territory of Ladakh in India.Mountains dominate the landscape around the Leh as it is at an altitude of 3,500m . Leh has a cold desert climate (Köppen climate classification BWk) with long, cold ";
        
        // this is background image
        document.getElementById("bg").src = "leh ladakh.jpg";
        // this contains map information 
        document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105638.92573700479!2d77.49669716074004!3d34.1663837979501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdeb21445fed85%3A0xd1bb09975086f710!2sLeh!5e0!3m2!1sen!2sin!4v1600011806027!5m2!1sen!2sin";
    }
    if (hero == 22) {
        //   this is Popular Destinations-> Varanasi   
        // this is monument name
        document.getElementById("heading").innerHTML = "Varanasi";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Varanasi";
        // this is background image
        document.getElementById("bg").src = "varanasi.jpg";
        // this contains map information 
        document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.0919404825!2d82.9210676471758!3d25.320901276325955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1600011890512!5m2!1sen!2sin";
    }
    if (hero == 23) {
        //   this is rPopular Destinations-> Jaipur   
        // this is monument name
        document.getElementById("heading").innerHTML = "Jaipur";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Jaipur";
        // this is background image
        document.getElementById("bg").src = "/jaipur.jpg";
        // this contains map information 
        document.getElementById("map").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825594261!2d75.65046845676245!3d26.88544791946675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1600011942957!5m2!1sen!2sin";
    }
    if (hero == 24) {
        //   this is Popular Destinations-> New-Delhi   
        // this is monument name
        document.getElementById("heading").innerHTML = "New-Delhi";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on New-Delhi";
        // this is background image
        document.getElementById("bg").src = "delhi.jpg";
        // this contains map information 
        document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83922796056!2d77.06889589372088!3d28.5275820080404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1600011569559!5m2!1sen!2sin";

    }
    if (hero == 25) {
        //   this is Popular Destinations-> Konkan   
        // this is monument name
        document.getElementById("heading").innerHTML = "Konkan";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Konkan";
        // this is background image
        document.getElementById("bg").src = "konkan.jpg";
        // this contains map information 
        document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893030.7201347603!2d71.2510545685854!3d17.660205979755155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9d9ec326412ed%3A0xe18572087843a001!2sKoukan%20Division%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1600011999135!5m2!1sen!2sin";
    }
    if (hero == 26) {
        //   this is Popular Destinations-> Dudh-Sagar   
        // this is monument name
        document.getElementById("heading").innerHTML = "Dudh-sagar";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Dudh-Sagar";
        // this is background image
        document.getElementById("bg").src = "dudhsagar.jpg";
        // this contains map information 
        document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123126.99610960486!2d74.14201010053121!3d15.337518835792007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfa91956dc0acb%3A0xe4715ecca41454a4!2sDudhsagar!5e0!3m2!1sen!2sin!4v1600012061788!5m2!1sen!2sin";
    }
    if (hero == 27) {
        //   this is Popular Destinations-> Dhanushkhodi   
        // this is monument name
        document.getElementById("heading").innerHTML = "Dhanushkhodi";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Dhanushkhodi";
        // this is background image
        document.getElementById("bg").src = "dhanushkodi.jpg";
        // this contains map information 
        document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31510.384099948285!2d79.40355755764351!3d9.172685346072727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe02ef6ac9962f%3A0x412246047441aaba!2sDhanushkodi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1600012121130!5m2!1sen!2sin";
    }
    if (hero == 31) {
        //   this is Nature-> Mountain-Ranges   
        // this is monument name
        document.getElementById("heading").innerHTML = "Mountain-Ranges ";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Mountain-Ranges ";
        // this is background image
        document.getElementById("bg").src = "mountain.jpg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 32) {
        //   this is Nature-> Rivers   
        // this is monument name
        document.getElementById("heading").innerHTML = "Rivers";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Rivers";
        // this is background image
        document.getElementById("bg").src = "river.jpg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 33) {
        //   this is Nature-> Desserts   
        // this is monument name
        document.getElementById("heading").innerHTML = "Desserts";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Desserts";
        // this is background image
        document.getElementById("bg").src = "desert.jpeg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 34) {
        //   this is Nature-> Beaches   
        // this is monument name
        document.getElementById("heading").innerHTML = "Beaches";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Beaches";
        // this is background image
        document.getElementById("bg").src = "beach.jpg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 35) {
        //   this is Nature-> Hill-Station  
        // this is monument name
        document.getElementById("heading").innerHTML = "Hill-Station ";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Hill-Station ";
        // this is background image
        document.getElementById("bg").src = "hillst.jpg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 36) {
        //   this is Nature-> Lake   
        // this is monument name
        document.getElementById("heading").innerHTML = "Lake";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Lake ";
        // this is background image
        document.getElementById("bg").src = "lake.jpg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 37) {
        //   this is Nature-> National-Park   
        // this is monument name
        document.getElementById("heading").innerHTML = "National-Park";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on National-Park";
        // this is background image
        document.getElementById("bg").src = "national park.jpg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 41) {
        //   this is Adventure-> Sky-Diving   
        // this is monument name
        document.getElementById("heading").innerHTML = "Sky-Diving";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Sky-Diving";
        // this is background image
        document.getElementById("bg").src = "skydiving.jpeg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 42) {
        //   this is Adventure-> Hiking   
        // this is monument name
        document.getElementById("heading").innerHTML = "Hiking";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Hiking";
        // this is background image
        document.getElementById("bg").src = "hiking.jpeg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 43) {
        //   this is Adventure-> Trekking   
        // this is monument name
        document.getElementById("heading").innerHTML = "Trekking";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Trekking";
        // this is background image
        document.getElementById("bg").src = "trekking.jpeg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 44) {
        //   this is Adventure-> Rock-Climbing   
        // this is monument name
        document.getElementById("heading").innerHTML = "Rock-Climbing";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Rock-Climbing";
        // this is background image
        document.getElementById("bg").src = "Rock Climbing.jpg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 45) {
        //   this is Adventure-> Scuba   
        // this is monument name
        document.getElementById("heading").innerHTML = "Scuba";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Scuba";
        // this is background image
        document.getElementById("bg").src = "scuba diving.jpeg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 46) {
        //   this is Adventure-> Water-Surfing   
        // this is monument name
        document.getElementById("heading").innerHTML = "Water-Surfing";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Water-Surfing";
        // this is background image
        document.getElementById("bg").src = "water surfing.jpeg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 47) {
        //   this is Adventure-> Snorkeling   
        // this is monument name
        document.getElementById("heading").innerHTML = "Snorkeling";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Snorkeling";
        // this is background image
        document.getElementById("bg").src = "snorkeling.jpeg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 51) {
        //   this is Arts-> Dance-Forms   
        // this is monument name
        document.getElementById("heading").innerHTML = "Dance-Forms";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Dance-Forms";
        // this is background image
        document.getElementById("bg").src = "Kathakali.jpeg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 52) {
        //   this is Arts-> Painting   
        // this is monument name
        document.getElementById("heading").innerHTML = "Painting ";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Painting ";
        // this is background image
        document.getElementById("bg").src = "painting.jpg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 53) {
        //   this is Arts-> Musicals   
        // this is monument name
        document.getElementById("heading").innerHTML = "Musical";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Musical";
        // this is background image
        document.getElementById("bg").src = "music.jpg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 54) {
        //   this is Arts-> Textiles   
        // this is monument name
        document.getElementById("heading").innerHTML = "Textiles";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Textiles";
        // this is background image
        document.getElementById("bg").src = "textile.jpeg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 55) {
        //   this is Arts-> Cinema   
        // this is monument name
        document.getElementById("heading").innerHTML = "Cinema";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Cinema";
        // this is background image
        document.getElementById("bg").src = "cinema.jpg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 61) {
        //   this is Festivals-> Diwali   
        // this is monument name
        document.getElementById("heading").innerHTML = "Diwali";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Diwali";
        // this is background image
        document.getElementById("bg").src = "diwali.jpeg"; 
         document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 62) {
        //   this is Festivals-> Holi   
        // this is monument name
        document.getElementById("heading").innerHTML = "Holi";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Holi";
        // this is background image
        document.getElementById("bg").src = "holi.jpeg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 63) {
        //   this is Festivals-> NavDurga-Puja   
        // this is monument name
        document.getElementById("heading").innerHTML = "NavDurga-Puja";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on NavDurga-Puja";
        // this is background image
        document.getElementById("bg").src = "dandiya.jpg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 64) {
        //   this is Festivals-> Durga-Puja   
        // this is monument name
        document.getElementById("heading").innerHTML = "Durga-Puja";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Durga-Puja";
        // this is background image
        document.getElementById("bg").src = "durga puja.jpg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 65) {
        //   this is Festivals-> Lori   
        // this is monument name
        document.getElementById("heading").innerHTML = "Lohri";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Lori";
        // this is background image
        document.getElementById("bg").src = "lohri.jpeg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 66) {
        //   this is Festivals-> Onam   
        // this is monument name
        document.getElementById("heading").innerHTML = "Onam";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Onam";
        // this is background image
        document.getElementById("bg").src = "onam.jpg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 67) {
        //   this is FestDiwali-> Dusshera   
        // this is monument name
        document.getElementById("heading").innerHTML = "Dussehra";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Dusshera";
        // this is background image
        document.getElementById("bg").src = "dussehra.jpg"; 
         document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 68) {
        //   this is FestDiwali-> Eid   
        // this is monument name
        document.getElementById("heading").innerHTML = "Eid";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Eid";
        // this is background image
        document.getElementById("bg").src = "eid Mubarak.jpeg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 71) {
        //   this is WildLife-> White-Tiger   
        // this is monument name
        document.getElementById("heading").innerHTML = "White-Tiger";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on White-Tiger";
        // this is background image
        document.getElementById("bg").src = "white tiger.jpg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 72) {
        //   this is WildLife-> Bengal-Tiger   
        // this is monument name
        document.getElementById("heading").innerHTML = "Bengal-Tiger";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Bengal-Tiger";
        // this is background image
        document.getElementById("bg").src = "Bengal Tiger.jpg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 73) {
        //   this is WildLife-> Indian-Tiger   
        // this is monument name
        document.getElementById("heading").innerHTML = "Indian-Tiger";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Indian-Tiger";
        // this is background image
        document.getElementById("bg").src = "indian tiger.jpg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 74) {
        //   this is WildLife-> Peacock   
        // this is monument name
        document.getElementById("heading").innerHTML = "Peacock";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Peacock";
        // this is background image
        document.getElementById("bg").src = "peacock.jpg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 75) {
        //   this is WildLife-> Cheetah   
        // this is monument name
        document.getElementById("heading").innerHTML = "Cheetah";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Cheetah";
        // this is background image
        document.getElementById("bg").src = "Cheeta.jpeg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 76) {
        //   this is WildLife-> Red-Panda   
        // this is monument name
        document.getElementById("heading").innerHTML = "Red-Panda";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Red-Panda";
        // this is background image
        document.getElementById("bg").src = "red panda.jpeg";
        document.getElementById("vanish").innerHTML = "";

    }
    if (hero == 77) {
        //   this is WilWhite-Tiger-> Elephant   
        // this is monument name
        document.getElementById("heading").innerHTML = "Elephant";
        // this conntains of information of monument
        document.getElementById("para").innerHTML = "This is Information on Elephant";
        // this is background image
        document.getElementById("bg").src = "elephant.jpg";
        document.getElementById("vanish").innerHTML = "";

    }




    localStorage.removeItem("choice");
}//ending