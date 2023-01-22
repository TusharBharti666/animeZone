function fillDataUsingId(id){
    animeName = "";
    animeImage = "images/";
    animeInfo = "";
    animeVideo = "";

    switch (id) {
        case 1:
            animeName = "Naruto Shippuden";
            animeImage += "naruto.jpg";
            animeInfo = "Naruto: Shippuden is an anime series adapted from Part II of Masashi Kishimoto's manga series, with exactly 500 episodes. It is set two and a half years after Part I in the Naruto universe, following the ninja teenager Naruto Uzumaki and his allies. The series is directed by Hayato Date, and produced by Pierrot and TV Tokyo. It began broadcasting on February 15, 2007 on TV Tokyo, and concluded on March 23, 2017.[1][2] On January 2, 2009, Viz Media and Crunchyroll provided eight uncut English subtitled Naruto: Shippuden episodes on the official Naruto website.[3] Later on January 15, Viz began providing subtitled versions of the latest Naruto: Shippuden episodes a week after they first aired in Japan, with a new episode being added to the Naruto website each subsequent Thursday.[3] The English dub of Naruto: Shippuden made its US premiere on Disney XD on October 28, 2009.[4][5][6] On July 24, 2009, Viz Media announced that the series would be released on the iTunes Store.[7] The first DVD release of the series in North America was released on September 29, 2009.[8]";
            animeVideo = "https://www.youtube.com/embed/thh7bVCgDHs";
            break;
        case 2:
            animeName = "Death Note";
            animeImage += "deathnote.jpg";
            animeInfo = "Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius who discovers a mysterious notebook: the Death Note, which belonged to the Shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages. The series centers around Light's subsequent attempts to use the Death Note to carry out a worldwide massacre of individuals whom he deems immoral and to create a crime-free society, using the alias of a god-like vigilante named Kira, and the subsequent efforts of an elite Japanese police task force, led by enigmatic detective L, to apprehend him. Death Note ran in Shueisha's manga magazine Weekly Shōnen Jump from December 2003 to May 2006. Its 108 chapters were collected in 12 tankōbon volumes.";
            animeVideo = "https://www.youtube.com/embed/tJZtOrm-WPk";
            break;
        case 3:
            animeName = "One Piece";
            animeImage += "one.jpg";
            animeInfo = "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since July 1997, with its individual chapters compiled into 98 tankōbon volumes as of February 2021. The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his crew of pirates, named the Straw Hat Pirates, Luffy explores the Grand Line in search of the world's ultimate treasure known as One Piece in order to become the next King of the Pirates";
            animeVideo = "https://www.youtube.com/embed/Jvkq7akLDiA";
            break;
        case 4:
            animeName = "Black Clover";
            animeImage += "black.jpg";
            animeInfo = "Black Clover (Japanese: ブラッククローバー, Hepburn: Burakku Kurōbā) is a Japanese manga series written and illustrated by Yūki Tabata. The story centers around Asta, a young boy seemingly born without any magic power, something that is unknown in the world he lives in. With his fellow mages from the Black Bulls, Asta plans to become the next Wizard King. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since February 2015, with its chapters collected in 28 tankōbon volumes as of April 2021.";
            animeVideo = "https://www.youtube.com/embed/MH4pWlX4LqI";
            break;
        case 5:
            animeName = "Cowboy Bebop";
            animeImage += "cowboy.jpg";
            animeInfo = "Cowboy Bebop (Japanese: カウボーイビバップ, Hepburn: Kaubōi Bibappu) is a Japanese science fiction anime[12] television series animated by Sunrise featuring a production team led by director Shinichirō Watanabe, screenwriter Keiko Nobumoto, character designer Toshihiro Kawamoto, mechanical designer Kimitoshi Yamane, and composer Yoko Kanno. The twenty-six episodes (sessions) of the series are set in the year 2071, and follow the lives of a bounty hunter crew traveling in their spaceship called the Bebop. Although it covers a wide range of genres throughout its run, Cowboy Bebop draws most heavily from science fiction, western and noir films, and its most recurring thematic focal points include adult existential ennui, loneliness and the difficulties of trying to escape one's past.";
            animeVideo = "https://www.youtube.com/embed/QCaEJZqLeTU";
            break;
        case 6:
            animeName = "Dragon Ball Super";
            animeImage += "dragon.jpg";
            animeInfo = "Dragon Ball Super (Japanese: ドラゴンボール超スーパー, Hepburn: Doragon Bōru Sūpā) is a Japanese manga and television series, which serves as a sequel to the original Dragon Ball manga, with its overall plot outline written by franchise creator Akira Toriyama. The manga is illustrated by Toyotarou, with story and editing by Toriyama, and began serialization in Shueisha's shōnen manga magazine V Jump in June 2015. The anime television series was produced by Toei Animation, with individual episodes written by different screenwriters, and aired on Fuji TV from July 2015 to March 2018. A theatrical film instalment titled Dragon Ball Super: Broly was released in December 2018.";
            animeVideo = "https://www.youtube.com/embed/sxoQvb6jH1I";
            break;
        case 7:
            animeName = "Fullmetal Alchemist Brotherhood";
            animeImage += "fmab.jpg";
            animeInfo = "Fullmetal Alchemist: Brotherhood (Japanese: 鋼の錬金術師 FULLMETAL ALCHEMIST, Hepburn: Hagane no Renkinjutsushi) is a Japanese anime television series adapted from the Fullmetal Alchemist manga by Hiromu Arakawa. Produced by Bones, the series is directed by Yasuhiro Irie, written by Hiroshi Ōnogi and composed by Akira Senju. Fullmetal Alchemist: Brotherhood is the second anime television series based on Fullmetal Alchemist, the first being 2003's Fullmetal Alchemist. Unlike the previous adaptation, Brotherhood is a faithful adaptation directly following the original events of the manga. The series ran for 64 episodes on MBS–TBS from April 2009 to July 2010.";
            animeVideo = "https://www.youtube.com/embed/KPmrcnlFdcI";
            break;
        case 8:
            animeName = "Jujutsu Kaisen";
            animeImage += "kaisen.png";
            animeInfo = "Jujutsu Kaisen is an anime television series based on the manga series of the same name by Gege Akutami. The series adaptation was announced in the 52nd issue of Weekly Shōnen Jump published on November 25, 2019.[1] The series was produced by MAPPA and directed by Sunghoo Park. Hiroshi Seko was in charge of the scripts, Tadashi Hiramatsu designed the characters, and Hiroaki Tsutsumi, Yoshimasa Terui and Arisa Okehazama composed the music. While the anime had an advanced streaming debut on September 19, 2020,[2] it officially aired on MBS and TBS's Super Animeism block from October 3, 2020 to March 27, 2021.[3][4][5][a] The series ran for 24 episodes.[6]";
            animeVideo = "https://www.youtube.com/embed/f7R6NA4Yo00";
            break;
        case 9:
            animeName = "Attack On Titan";
            animeImage += "aot.png";
            animeInfo = "Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin) is a Japanese dark fantasy anime television series adapted from the manga of the same name by Hajime Isayama that premiered on April 7, 2013. It used to air on NHK General TV in Japan,[e] Aniplus Asia in various Asia-Pacific countries,[f] and Crunchyroll, Funimation, Prime Video, and Hulu in Canada and the United States.The story begins in a world where the remains of humanity live inside three concentric cities, each protected by enormous walls against attacks by Titans, gigantic humanoid beings who devour humans without any apparent reason. It follows the adventures of Eren Jaeger, his friends Mikasa Ackerman and Armin Arlert, whose lives are changed forever after a Colossal Titan breaches the wall of their home town. Vowing revenge and to reclaim the world from the Titans, Eren and his friends join the Scout Regiment, an elite group of soldiers who fight against Titans.";
            animeVideo = "https://www.youtube.com/embed/MGRm4IzK1SQ";
            break;
        case 10:
            animeName = "My Hero Academia";
            animeImage += "mha.png";
            animeInfo = "My Hero Academia (Japanese: 僕のヒーローアカデミア, Hepburn: Boku no Hīrō Akademia) is a Japanese superhero manga series written and illustrated by Kōhei Horikoshi. The story follows Izuku Midoriya, a boy born without superpowers (called Quirks) in a world where they have become commonplace, but who still dreams of becoming a superhero himself. He is scouted by All Might, Japan's greatest hero, who chooses Midoriya as his successor and shares his Quirk with him after recognizing his potential, and later helps to enroll him in a prestigious high school for heroes in training.";
            animeVideo = "https://www.youtube.com/embed/EPVkcwyLQQ8";
            break;
        case 11:
            animeName = "One Punch Man";
            animeImage += "punch.png";
            animeInfo = "One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman) is a Japanese superhero franchise created by the artist ONE. It tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge due to his overwhelming strength. ONE wrote the original webcomic version in early 2009. A digital manga remake began publication on Shueisha's Tonari no Young Jump website in June 2012. The manga is illustrated by Yusuke Murata, and its chapters are periodically compiled and published into individual tankōbon volumes. As of January 2021, 23 volumes have been released. In North America, Viz Media has licensed the remake manga for English language release and was serialized in its Weekly Shonen Jump digital magazine.";
            animeVideo = "https://www.youtube.com/embed/2JAElThbKrI";
            break;
        case 12:
            animeName = "Demon Slayer";
            animeImage += "demon.jpg";
            animeInfo = "Demon Slayer: Kimetsu no Yaiba (鬼滅の刃, Kimetsu no Yaiba, lit. Blade of Demon Destruction is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows Tanjiro Kamado, a young boy who wants to become a demon slayer after his family is slaughtered and his younger sister Nezuko is turned into a demon. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from February 2016 to May 2020, with its chapters collected in 23 tankōbon volumes. It has been published in English by Viz Media and simulpublished by Shueisha on their Manga Plus platform.";
            animeVideo = "https://www.youtube.com/embed/xcTxh4Mmasg";
            break;
        case 13:
            animeName = "Castlevania";
            animeImage += "dracula.jpg";
            animeInfo = "Castlevania is an American adult animated streaming television series on Netflix produced by Frederator Studios. Based on the Japanese video game series of the same name by Konami, the first two seasons adapt the 1989 entry Castlevania III: Dracula's Curse and follow Trevor Belmont, Alucard and Sypha Belnades as they defend the nation of Wallachia from Dracula and his minions. The second and third seasons borrow characters and elements from the 2005 entry Castlevania: Curse of Darkness. The series was originally planned as a film, developed by producer Kevin Kolde and his company Project 51. Kolde had a contract for a script with writer Warren Ellis in 2007; the project entered development hell until about 2015, when Adi Shankar boarded the project and it was picked up by streaming service Netflix. Powerhouse Animation Studios joined the team and production commenced. Its art style is heavily influenced by Japanese anime and Ayami Kojima's artwork in Castlevania: Symphony of the Night with the production team including staff members who worked in the Japanese anime industry.";
            animeVideo = "https://www.youtube.com/embed/m3jNb7IdJHQ";
            break;
        case 14:
            animeName = "Fate/Stay Night";
            animeImage += "fate.jpg";
            animeInfo = "Fate/stay night is a Japanese adult visual novel developed by Type-Moon and originally released for Windows on January 30, 2004. A version of Fate/stay night rated for ages 15 and up titled Fate/stay night Réalta Nua (Irish for new stars), which features the Japanese voice actors from the anime series, was released in 2007 for the PlayStation 2 and later for download on Windows as a trilogy covering the three main story lines. Réalta Nua was also ported to the PlayStation Vita, iOS and Android. The plot focuses on a young mage named Shirou Emiya who becomes a warrior in a battle between Servants known as the Holy Grail War. Through each route, Shirou bonds with a heroine and confronts different mages who participate in the war.";
            animeVideo = "https://www.youtube.com/embed/NPItqNsCXM4";
            break;
        case 15:
            animeName = "The Millionaire Detective";
            animeImage += "balance.jpg";
            animeInfo = "The Millionaire Detective Balance: Unlimited (Japanese: 富豪刑事 Balance:UNLIMITED, Hepburn: Fugō Keiji Baransu Anrimiteddo) is a Japanese anime television series produced by CloverWorks,[2] directed by Tomohiko Itō and inspired by the novel The Millionaire Detective written by Yasutaka Tsutsui.[3] It premiered on April 9, 2020, on Fuji TV's Noitamina anime programming block, but postponed programming after the second episode due to the COVID-19 pandemic. The series restarted its broadcasting from July 16 to September 24, 2020.";
            animeVideo = "https://www.youtube.com/embed/CBHeA3WNedU";
            break;
        case 16:
            animeName = "Inuyasha";
            animeImage += "inu.jpg";
            animeInfo = "Inuyasha (犬夜叉, lit. Dog Yaksha is a Japanese manga series written and illustrated by Rumiko Takahashi. The series begins with Kagome Higurashi, a fifteen-year-old middle school girl from modern-day Tokyo who is transported to the Sengoku period after falling into a well in her family shrine, where she meets the half-dog demon, half-human Inuyasha. After the sacred Shikon Jewel re-emerges from deep inside Kagome's body, she accidentally shatters it into dozens of fragments that scatter across Japan. Inuyasha and Kagome set to recover the Jewel's fragments, and through their quest they are joined by the lecherous monk Miroku, the demon slayer Sango, and the fox demon Shippo. Together, they journey to restore the Shikon Jewel before it falls into the hands of the evil half-demon Naraku.";
            animeVideo = "https://www.youtube.com/embed/UCFBsLagBPk";
            break;
        case 17:
            animeName = "Code Geass";
            animeImage += "geass.jpg";
            animeInfo = "Code Geass: Lelouch of the Rebellion (Japanese: コードギアス 反逆のルルーシュ, Hepburn: Kōdo Giasu: Hangyaku no Rurūshu), often referred to simply as Code Geass, is a Japanese anime series produced by Sunrise. It was directed by Gorō Taniguchi and written by Ichirō Ōkouchi, with original character designs by Clamp. Set in an alternate timeline, the series follows the exiled prince Lelouch vi Britannia, who obtains the power of absolute obedience from a mysterious woman named C.C. Using this supernatural power, known as Geass, he leads a rebellion against the rule of the Holy Britannian Empire, commanding a series of mecha battles.";
            animeVideo = "https://www.youtube.com/embed/ulQGo6X7kFo";
            break;
        case 18:
            animeName = "Steins;Gate";
            animeImage += "steins.png";
            animeInfo = "Steins;Gate is a 2011 anime television series created by the animation studio White Fox based on 5pb. and Nitroplus's 2009 visual novel of the same name, and is part of the Science Adventure franchise along with Chaos;Head and Robotics;Notes. It is set in 2010, and follows Rintaro Okabe, who together with his friends accidentally discovers a method of time travel through which they can send text messages to the past, thereby changing the present. The series was directed by Hiroshi Hamasaki and Takuya Satō, and written by Jukki Hanada, with animation direction and character design by Kyuuta Sakai, and music by Takeshi Abo. It aired for 24 episodes, and was simulcast in North and South America, Africa, the Middle East and parts of Europe by Crunchyroll and in the United Kingdom by Anime on Demand.";
            animeVideo = "https://www.youtube.com/embed/uMYhjVwp0Fk";
            break;
        case 19:
            animeName = "Detective Conan";
            animeImage += "det.png";
            animeInfo = "Case Closed, also known as Detective Conan (Japanese: 名探偵コナン, Hepburn: Meitantei Konan), is a Japanese detective manga series written and illustrated by Gosho Aoyama. It has been serialized in Shogakukan's Weekly Shōnen Sunday since January 1994, and has been collected into 98 tankōbon volumes as of April 2020. Due to legal problems with the name Detective Conan, the English language releases from Funimation and Viz were renamed to Case Closed. The story follows the high school detective Shinichi Kudo (renamed as Jimmy Kudo in several English translations) who was transformed into a child while investigating a mysterious organization and solves a multitude of cases while impersonating his childhood best friend's father and other characters.";
            animeVideo = "https://www.youtube.com/embed/1Mz9orl7bDw";
            break;
        case 20:
            animeName = "Berserk";
            animeImage += "berserk.jpg";
            animeInfo = "Berserk (Japanese: ベルセルク, Hepburn: Beruseruku) is a 2016 anime television series based on Kentaro Miura's Berserk manga and a sequel to the Golden Age Arc film trilogy. This is a second television adaptation of the manga after the 1997 anime of the same name, covering the Conviction arc from the manga. A second season, covering the first half of the Hawk of the Millennium Empire arc, aired in 2017.[6]"
            animeVideo = "https://www.youtube.com/embed/QcT9N-0xDEg";
            break;
                   
    }

    document.getElementById('popUpTitleId').innerHTML = animeName;
    document.getElementById('popUpImageId').src = animeImage;
    document.getElementById('popUpInfoId').innerHTML = animeInfo;
    document.getElementById('popUpVideoId').src = animeVideo;
    document.getElementById('popUpId').style.display = "block";
}

function closeModel(){
    document.getElementById('popUpId').style.display = 'none';
    document.getElementById('popUpTitleId').innerHTML = "";
    document.getElementById('popUpImageId').src = "";
    document.getElementById('popUpInfoId').innerHTML = "";
    document.getElementById('popUpVideoId').src = "";
}

var i = 0;
var j = 0;
var messages = ["Hey, Do you like Anime ?", "Yes, then its a place for you.", "If no, then you will like soon."];
var speed = 100;
var id = 0;

function autoWrite(){
    if (j < messages[id].length) {
        document.getElementById("titleText").innerHTML += messages[id].charAt(j);
        j++;
        setTimeout(autoWrite, speed);
    }
    else{
        autoDelete();
    }
}

function autoDelete(){
    if (j > 0) {
        document.getElementById("titleText").innerHTML = document.getElementById("titleText").innerHTML.substring(0, j);
        j--;
        setTimeout(autoDelete, speed);
    }
    else{
        switch(id){
            case 0: id = 1;
            break;
            case 1: id = 2;
            break;
            case 2: id = 0;
            break;
        }
        autoWrite();
    }
}

var soundStatus = false;

function startSound(){
    document.getElementById("sound").play();
    soundStatus = true;
    document.getElementById("soundIcon").innerHTML = "<i class='fa fa-volume-up'></i>";
}

function stopSound(){
    document.getElementById("sound").pause();
    soundStatus = false;
    document.getElementById("soundIcon").innerHTML = "<i class='fa fa-volume-off'></i>";
}