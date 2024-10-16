import React from "react";
import './App.css';
import img from './png-clipart-bloodborne-the-old-hunters-t-shirt-dark-souls-iii-tattoo-playstation-4-t-shirt-hand-playstation-4.png';
import img1 from './snapedit_1728183909852.png';
import img2 from './Remove-bg.ai_1728213878151.png';
function App() {
  return (
    <div>
      {/*navbar*/}
      <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
        <ul className="nav navbar-nav d-flex flex-row flex-item w-100 " >
          {/*Home Dropdown*/}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
              <div className="dropdown-menu navbg" aria-labelledby="navbarDropdown">
              <a className="dropdown-item font  " href="#"><img src={img} className="imgnavsize"></img>Wiki Home</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Community & Social</a>
                <a className="dropdown-item font navcontentmargin subsize" href="#">Bloodborne Forums</a>
                <a className="dropdown-item font navcontentmargin subsize" href="#">Bloodborne Chatroom</a>
                <a className="dropdown-item font navcontentmargin subsize" href="#">Player IDs</a>
                <a className="dropdown-item font navcontentmargin subsize" href="#">Community Events</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Wiki Forums</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Wiki To-Do</a>
              </div>
          </li>
          {/*General */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">General</a>
              <div className="dropdown-menu navbg" aria-labelledby="navbarDropdown">
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>General Information</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>DLC & Expansion</a>
                <a className="dropdown-item font navcontentmargin subsize" href="#">The Old Hunters Information</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>About Bloodborne</a>
                <a className="dropdown-item font navcontentmargin subsize" href="#">Patch Notes</a>
                <a className="dropdown-item font navcontentmargin subsize" href="#">Tutorials</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Online Play</a>
              </div>
          </li>
          {/*Character*/}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Character</a>
              <div className="dropdown-menu navbg " aria-labelledby="navbarDropdown">
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Character Information</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Classes (Origins)</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Calculators</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Stats</a>
                <a className="dropdown-item font navcontentmargin subsize" href="#">Status Effects</a>
                <a className="dropdown-item font navcontentmargin subsize" href="#">Buffs</a>
              </div>
          </li>
          {/*Equipment*/}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Equipment</a>
              <div className="dropdown-menu navbg" aria-labelledby="navbarDropdown">
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Equipments</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Attire (Armors)</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Weapons</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>FireArms</a>
              </div>
          </li>
          {/*World*/}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">World</a>
              <div className="dropdown-menu navbg" aria-labelledby="navbarDropdown">
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>World Information</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Locations Overview</a>
                <a className="dropdown-item font navcontentmargin subsize" href="#">Maps</a>
                <a className="dropdown-item font navcontentmargin subsize" href="#">Secrecs</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Covenants</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Chalice Dungeon</a>
              </div>
          </li>
          {/*Guilde*/}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Guilde</a>
              <div className="dropdown-menu navbg" aria-labelledby="navbarDropdown">
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Guildes Walkthoughs</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Chalice Dungeon</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>NewPlayer Helps</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Walkthoughs</a>
              </div>
          </li>
          {/*Tools*/}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tools</a>
              <div className="dropdown-menu navbg" aria-labelledby="navbarDropdown">
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Tools & Calculators</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Summon Range Calculator</a>
              <a className="dropdown-item font " href="#"><img src={img} className="imgnavsize"></img>Build Calculator</a>
              <a className="dropdown-item font  " href="#"><img src={img} className="imgnavsize"></img>Weapon AR & Scaling Calculator</a>
              </div>
          </li>
        </ul>
      </nav>
        <a href="#"><img src={img2} className="logosize"></img></a>
        <div className="box">
          <div className="headborder"></div><br></br>
          <h1 className="head1font">
            <a className="headno-underline font head" href="# ">Lore | Bloodborne</a>
            <hr className="headline"></hr>
            <hr className="headline2"></hr>
          </h1>
            <p className="title atextcolor head-margin ">Lore of Bloodborne as interpreted by the community. This page houses facts and interpretations relating to the game, but you may also visit the newly launched<br></br> Bloodborne Lore Forums. You can also find pre-release information from trailers and interviews from before the game was launched.<br></br></p>
            <p className="title atextcolor headnote">
            <li>See <a href="#" className="no-underline">Lore Notes</a> for transcriptions of in-game notes scattered across its areas.<br></br></li>
            <li>See <a href="#" className="no-underline">Lore glossary</a> for a recopilation of all the relevant in-game facts associated to each lore concept.<br></br></li> 
            <li>See <a href="#" className="no-underline">Theoretical</a> - Player thoughts and research concerning the Bloodborne lore.<br></br></li>
            <li>Warning: Massive spoilers ahead, don't keep reading if you want to deduce things by yourself or haven't beaten the game yet.<br></br></li>
            <li>Everything that is speculation will be tagged under theory or written with words that express uncertainty.</li></p>
        <h2 className="head scroll1" id="concepts" >
          <div className="margin">
          <hr class="line"></hr><img src={img1} className="imgheadsize" ></img>
            I. MAIN STORY CONCEPTS
          <hr class="line"></hr>
          </div>
        </h2>
        {/*info box*/}
          <div className="inforbox">
            <h2 className="font text-white">
              Lore Index
            </h2>
            <h4><a className="font no-underline">1.Story Concepts</a></h4>
            <h4><a className="font no-underline" href="#noablehunters">2.Notable Hunters and NPCs</a></h4>
            <h4><a className="font no-underline" href="#SecondaryCharacters">3.Sencondary Characters</a></h4>
          </div>
          {/*Main Content*/}
          <div>
            <h3 className="littlehead firstp">
            The Hunters and The Hunt
              <p className="psize atextcolor tmargin">
               The hunters are a group of warriors who are dedicated to keeping their regions safe by hunting down beasts - or anything other than beasts if need be - that pose a threat. Hunters are agile fighters armed with a trick weapon, a transforming melee weapon in the right hand, and a firearm in the left. They do not employ shields, but rather take advantage of their mobility in order to avoid attacks. Hunters exist throughout the world and are not exclusive to Yharnam, since a number of characters such as the protagonist and Eileen come from the outside world and are yet still recognized as hunters. However, it is believed that the Hunters started out as a branch of the Healing Church very much like The Choir. This would mean that, at least in Yharnam, Hunters were recruited by either Gehrman or the Church itself. 
              </p>
            </h3>
            <h3 className="littlehead">
            The City of Yharnam
              <p className="psize atextcolor tmargin">
              Yharnam is a towering, labyrinthine gothic city, home to both the Healing Church and the Blood Ministrations. As no evidence of the existence of a ruling body is provided in the game, one may presume that the Healing Church controls the city (at least indirectly). The Church focuses around healing by infusions of blood. Miraculously, blood healing can repair wounds and cure or hinder diseases. Yharnam's whole culture became focused on blood, even to the point of blood-based drinks surpassing alcoholic beverages as the most commonly consumed. Yharnam's populace is apparently viewed as insane or degenerate by the wider world, and the citizens have become extremely distrustful of non-natives as a result.
              </p>
            </h3>
            <h3 className="littlehead">
            The Red Moon
              <p className="psize atextcolor tmargin">
              The Red Moon is a nightmare revealed after slaying Rom, the Vacuous Spider who had placed a veil over the world to keep the secret of the true nature of the world from its residents. The servants of Amygdala become fully powered, the beasts become more ravenous, and the children of Amygdala are visible at last. In this nightmare, the world reveals the Eldritch abominations it has been truly hiding. As a result, everything gets worse, and the character sees the world as they would if they had amassed 40 insight. Unfortunately, by killing Rom, you usher in the Red Moon, which is believed by some to be the coming of Oedon. It is not clear that Oedon is the Moon Presence, but he very well could be.
              </p>
            </h3>
            <h3 className="littlehead">
            The Umbilical Cords
              <p className="psize atextcolor tmargin">
              While this presents a weird part of the story, it is a known fact that 75% of the game’s umbilical cords can be found on women or children. During the Red Moon, Iosefka’s dialogue suggests that she has become pregnant, and Arianna gets pregnant as well. You also find a cord from defeating Mergo’s Wet Nurse. This suggests that  Oedon impregnates women on the Red Moon. The criteria of these women who are impregnated has not been determined. It also seems to be that the Great Ones impregnate women to have surrogate children.
              It is worth noting that one of the four umbilical cords is in the abandoned Workshop, very near the doll.
              </p>
            </h3>
            <h3 className="littlehead">
            The Scourge of the Beast
              <p className="psize atextcolor tmargin">
              The most common form of the blood sickness appears to be lycanthropy: Humans slowly turning into wolves. Those in the early stages of the sickness have lengthened canine teeth and grow more hair. As they progress, their arms and legs lengthen and the spine hunches over and the face begins to elongate. Eventually, they grow fur and their body finishes the change into a <a href="#" className="no-underline">Scourge Beast</a>. Along with the physical transformation comes a mental degradation: At first the victim assumes all people they don't know are hostile and they'll attack on sight. As the alterations progress, the victim becomes more and more savage and hostile, until it can only stand to be around others exactly like it as "regular" humans appear to be beasts through their own blood-addled eyes. Sometimes individuals react strangely to the blood; some become unique beasts, and it's rumored that infected Clerics of the Healing Church become the largest of the monsters when they succumbed to the madness. (As seen in Laurence, Ludwig, the Vicar Amelia, etc.)
              The blood sickness seems to be endemic to Yharnam, requiring periodic hunts for those very far gone. The hunters are both respected and feared: They bring down the worst of the beasts, but are at risk of contamination themselves.
              </p>
            </h3>
            <h3 className="littlehead">
            Old Yharnam, Ashen Blood, and The Powder Kegs  
              <p className="psize atextcolor tmargin">
              Eventually, <a href="#" className="no-underline">Old Yharnam</a> was founded (obviously just “Yharnam” at the time), but it was brought low by a strange (the text says “baffling”) illness known as Ashen Blood, which was a worse form of slow/fast poison. The antidote description cites it as being a more severe case, and in the case of Ashen Blood, the antidotes only provided temporary relief. Eventually, the disease (likely spread due to blood ministrations) took over, and those infected turned into beasts. This is why the <a href="#" className="no-underline">beasts</a> in Old Yharnam are poisonous, particularly the red-eyed werewolf near the boss, and why the <a href="#" className="no-underline">Blood-Starved Beast</a> is coated with poison. After the fall of Old Yharnam, it was closed up, and Central Yharnam was built, along with the Grand Cathedral. This is perhaps the first instance of “hunters” as we know them now being formed.
              The Powder Kegs were a group of hunters that tried to make explosive weapons, to varying degrees of success. A few prided creations of the Powdered Kegs are the <a href="#" className="no-underline">Stake Driver</a>, <a href="#" className="no-underline">the Rifle Spear</a>, and the <a href="#" className="no-underline">Cannon</a>. However, due to differences in designs, they were banned from the Workshop, becoming known as Workshop Heretics 
              </p>
            </h3>
            <h3 className="littlehead">
            Blood Ministration and The Healing Church
              <p className="psize atextcolor tmargin">
              Perhaps the most influential of the organizations, the Healing Church was founded in the wake of the Choir. There were three echelons to the church: black-garbed hunters, white-garbed “doctors,” and the Choir. Though they did not spring from Byrgenwerth directly, they were explorers who found the labyrinth in the wake of that place and discovered the same remnants of the Truth, and used the research done there already to kick off their own research. However, their form of metamorphosis began with Blood Ministrations and their research/experiments with the blood.
              Master Laurence, the founder of the Healing Church, and one of Master Willem's apprentices believed that in order to transcend humanity they had to research blood healing using Old Blood. During the times of Byrgenwerth, Master Willem taught all of his student to blindfold themselves so that they can "look into oneself" and that they needed to "line their brain with eyes" in order to see what the Great Ones see and acquire more eldritch knowledge, also known as insight, to further evolve into greater beings. With insight, they were able to see the world for what it is, beyond human comprehension. One of the most important of Willem's teachings is the Byrgenwerth adage "Fear the Old Blood". For only Willem respects and fears the true nature of the Old Blood in the beginning.
              According to the memory shown by the skull in the altar of the Grand Cathedral. Master Laurence strayed from Master Willem's teachings and their paths eventually diverged. Laurence chose a different path to use the Old Blood for his experiments in order to move forward, disregarding the adage "Fear the Old Blood". He then founded the Healing Church and spread the teachings of the art of Blood Ministration. Later on, as blood healing became more common among the citizens of Yharnam, some citizens began transforming into beasts. At this point, Master Laurence discovered his mistake of using Old Blood for when it is mixed with human blood, it transforms subjects into beast. This is where Yharnam's plague of beast started.
              We can tell that Master Laurence deeply regrets his decision of using Old Blood through his notes around the Lecture Building. These notes also leave clues what one must do to transcend the hunt, which he later found out after realizing his mistakes. "Master Willem was right. Evolution without courage will be the ruin of our race". "Hunt the Great ones. Hunt the Great ones". "Three third Umbilical cords"
              From the Caryll Rune Beast: "Beast" is one of the early Caryll Runes. as well as one of the first to be deemed forbidden. "The discovery of blood entailed the discovery of undesirable beasts". 
              </p>
            </h3>
            <h3 className="littlehead">
            The Choir, The Cosmos and Ebrietas
              <p className="psize atextcolor tmargin">
              The leaders of the healing church, the Choir differentiate themselves from the rest of the members of the church as they received teachings directly from Ebrietas. <a href="#" className="no-underline">Ebrietas, daughter of the cosmos</a>  is a celestial being who emerged from the depth of the Old Labyrinth and acted as a source of knowledge to the healing church with seemingly no ill-will thus furthering the notion that the Great Ones are sympathetic to humans. Not only did Ebrietas grant members of the Choir profound knowledge, but she also further convinced them that they could commune with the Great Ones and learn the Eldritch Truth. They believed they could ascend to the Cosmos (or at least make contact with it), and it came in a sudden and unexpected realization that perhaps while their feet were rooted to the ground, the cosmos was not immeasurably far away, but right above their heads. Together with Ebrietas, the Choir worked tirelessly to understand the Great One’s Truth.
              </p>
            </h3>
            <h3 className="littlehead">
            The School of Mensis and the Mensis Ritual
              <p className="psize atextcolor tmargin">
              Members of the School of Mensis desperately seek communion with the Great Ones, to the point of near (if not) insanity. Typically found wearing Mensis cages, a follower of the School of Mensis could be distinguished from a normal person from a mile away. But they certainly don't care about other humans' opinions as much as they do the Great Ones'.
              Despite sharing the same goal with the Healing Church, the School of Mensis and the Healing Church do not seem to get along - this is indicated by the corpse of a Choir member locked away in the Unseen Village, which happens to be founded and controlled by the School of Mensis.
              The founder of the School of Mensis, <a href="#" className="no-underline">Micolash</a>  seems to have telepathic powers, being able to plant nightmares and illusions into the minds of his victims. This might indicate the School of Mensis having foul intent if they succeed in communicating with the Great Ones. They may have turned the knowledge and power they obtained onto the people, which would explain the tension between them and the Healing Church.
              The pertinent Umbilical Cord for the School of Mensis' description reads as follows after obtaining it from Murgo's Wet Nurse in the Nightmare: "Every Great One loses its child, and then yearns for a surrogate. This Cord granted Mensis audience with Mergo, but resulted in the stillbirth of their brains." When Micolash and his ilk used this cord to commune with The Infant Great One, they discovered that the power was too much and it killed the whole School of Mensis, locking the survivors in the Nightmare Realm that Micolash controls and driving them all insane. Whether or not this was intended by Mergo is up for debate
              </p>
            </h3>
            <h3 className="littlehead">
            Cainhurst, The Vilebloods, and the Executioners
              <p className="psize atextcolor tmargin">
              In Cainhurst Castle, Queen Annalise was a ruler over many nobles and dandies, the first Vileblood that partook in corrupted blood from Byrgenwerth. Having the ability to extract the essence of hunters' blood, Queen Annalise ordered her followers to hunt down hunters without scruple, and gained notoriety for her insatiable hunger for blood.
              Annalise consumed the blood offerings brought back by her servants, and eventually became immortal due to her vile predations. A timeless society of vampire-like entities was formed in Cainhurst Castle thereafter. It was a place of refinement and sophistication, and the occasional beast that arose from the foul practice was dispatched discreetly as well as gracefully - such is the Cainhurst way. Those who served the queen did so out of loyalty, fear, and an unending desire to taste her blood, and settled with various Caryll runes that improved Visceral Attacks as a cheap substitute (as described in the rune’s texts). Queen Annalise hoped desperately one day to bear a true heir, and dubbed this the Child of Blood, which she sought to have at all costs. She sent her Vilebloods to hunt for her, and all hoped that, with enough blood dregs, she could birth a Child of Blood.
              However, the justice-seeking knight commander known as master Logarius took these practices as an affront, and founded the Executioners: blood-thirsty zealots looking to kill Vilebloods at all costs. Eventually they stormed Cainhurst castle, eliminating everyone inside with extreme prejudice. Ironically, the executioners slew all the maids they could find, who likely had nothing to do with Annalise's malevolence, but could not harm Annalise due to her immortality. Seeing no other option, master Logarius sent his Executioners away and martyred himself in order to prevent Annalise from ever escaping. He stands guard in front of Annalise's tower forever, sealed off with the Crown of Illusion, so that none could enter again.
              </p>
            </h3>
            <h3 className="littlehead">
            The Great Ones
              <p className="psize atextcolor tmargin">
              The Healing Church has pursued a strange goal for a long, long time; a goal that has been hidden from all but the highest of rank among them: to summon or harness the power of the Great Ones, beings not of this world, powerful enough to be seen as gods. They were here, in the labyrinth, long ago. They appear to be much closer than you'd think at Byrgenwerth, men were sent into the labyrinth, and an academy was built to understand the strange discoveries inside, generally called the Truth. It seems the Truth is a terrible thing, slowly breaking the mind of anyone who delves too deeply. Awful things happened at Bygenwerth, and as a result, the church closed off not only the academy, but the entire forest, calling it "forbidden".
              Whether or not the Great Ones are actually gods or just higher levels of beings is inconsequential, the question itself is entirely academic. The important thing is: They exist. They have an influence on the world. They appear to be ageless, but they can be killed. Their powers are strange things, often involving teleportation or energy or things that the human world cannot do. Even perceiving the Great Ones properly requires great amounts of Insight--something Master Willem tried to do, at his own cost. The strongest of the Great Ones appears to be the Moon Presence, the creator of the Nightmare the Hunter is trapped within. Others are Oedon, Rom, Mergo's Wet Nurse, Amygdala, the Celestial Emissary, the Brain of Mensis, and Ebrietas.
              Oedon, one of their number, has transcended even the others, to the point that he no longer has a physical body but instead is just a voice and an influence. He is very powerful and has become sort of "timeless", thus potentially making him the most powerful, yet the most indirect, of the Great Ones. He is also the only Great One explicitly referred to as male, with all the others' genders either female or undefined (assuming the Great Ones even have humanly-definable genders)
              Some items' descriptions tell about Great Ones living in "The Dream" and others living in "The Nightmare" (Which is the case of Amygdala whose function is still to be defined, and Mergo's Wet Nurse). Humans have been able to contact them through the use of Phantasm, little invertebrates found in the Labyrinth.
              Interestingly, Mergo's Wet Nurse and the Moon Presence are themselves never directly identified as Great Ones. Whether this is merely an oversight or an indication that they are indeed a different class of being is unknown.
              </p>
            </h3>
            <h3 className="littlehead">
            Pthumerian civilization
              <p className="psize atextcolor tmargin">
              Pthumeria was an ancient civilization ruled by Queen Yharnam. It was populated by Pthumerians, an ancient race of people who truly understood the Truth of the Great Ones and gained supernatural powers as a result. Queen Yharnam was a medium for the Great Ones, as cited by an item (saying the Choir discovered a medium, though she’s the only likely candidate). Eventually the Pthumerians retreated into a deep labyrinth, with their holy chalices being the only remnants of their ancient rituals to break the seals. Some chalices (such as the ailing Loran chalice) led to other lands, and the Isz Chalice was in particular used in holy communion with the Great Ones.
              </p>
            </h3>
            {/*NOTABLE HUNTERS AND NPCS*/}
            <h2 className="head scroll1" id="noablehunters" >
          <div className="margin">
          <hr class="line"></hr><img src={img1} className="imgheadsize" ></img>
              II. NOTABLE HUNTERS AND NPCS
          <hr class="line"></hr>
          </div>
          </h2> 
            <div>
            <h3 className="littlehead firstp">
            Gehrman, the First Hunter
              <p className="psize atextcolor tmargin">In time, a man named Gehrman would rise to the task of the Beast problem. Gehrman redesigned common clothing to provide better defense against the beasts' claws, and also created the Burial Blade, a unique weapon capable of transforming during battle to cater to Gehrman's need for a short or long weapon. Gehrman’s work was so admired as well as effective that his Burial Blade would become the basis for all hunter armament technology, later known as trick weapons. Gehrman was also a formidable fighter whose school of thought would become mandatory in any hunter's fighting style when facing the horrors of the hunt.
                While it doesn’t say specifically, there is a heavy implication that Gehrman was hired by the Healing Church to work in the Workshop due to his role as an inventor, since his work place is directly beneath the Healing Church’s Oedon Chapel. Gehrman worked in the Workshop presumably until his death. He took many apprentices, who all did his duty in his honor, and may well have died long ago. The bone in the workshop graveyard was one of such apprentices, who had mastered the art of Quickening, allowing him to move at incredible speeds. Periodically, The Doll can be seen mourning at the same grave from which the bone is retrieved, leading some to speculate that this hunter was incredibly powerful and was one of the few to get close to defeating the Moon Presence making it possible that he was a viable replacement surrogate to take Gehrman's place in the Dream.
                The description of the Umbilical cord found in the Old Abandoned Workshop states "Every Great One loses its child, and then yearns for a surrogate. The Third Umbilical Cord precipitated the encounter with the pale moon, which beckoned the hunters and conceived the hunter's dream." According to this umbilical cord we can infer that Gehrman became the substitute child of the Moon Presence or that Gehrman was the one who summoned the Moon Presence itself and was then chosen (There are a few ways this could go depending on who summoned the Moon Presence. There just hasn't been enough lore discovered to fit any one claim of the creation of the Hunter's Dream.) For what purpose does the surrogate child exist? Could this mean that they possess some emotions or is it for a entirely different reason? We may never know for sure.
                Secret Dialogue of Gehrman that strongly suggests that he is trapped in the Hunter's Dream for far too long and wants someone to free him. It also seems that he knows Master Willem and Laurence during times of Byrgenwerth from this dialogue.</p>
            </h3>
            <h3 className="littlehead">
            Ludwig, First Hunter of the Church
              <p className="psize atextcolor tmargin">Ludwig was acknowledged as the first hunter of the Healing Church. Ludwig fought with heavy weapons that were meant to mortally wound his enemies, an irony since the Healing Church is normally dedicated to saving lives. Nonetheless, this became a tradition among Church hunters, who employed heavy weapons just like Ludwig did. Moreover, Ludwig is also likely the first to recruit normal Yharnamites to join the hunter's rank, since the beasts are many. Eventually he fell victim to the Old Blood and changed into a monstrous beast wielding the Holy Moonlight Blade.</p>
            </h3>
            <h3 className="littlehead">
            Eileen the Crow
              <p className="psize atextcolor tmargin">In time, hunters needed to receive blood ministrations in order to compete with the beasts they hunted, as a kind of all-or-nothing gamble. However, many hunters would fail, and become obsessed with, infected by, and eventually overcome by the blood, becoming beasts themselves. For this, the Hunter of Hunters did their duty, ending the lives of these madmen with grace and dignity. Eileen’s set says that they were buried in a foreign and respectful way, rather than the vile way of Yharnam (which I assume is cremation on a pyre or cross), and references a sky burial (which is a practice in which a body is dismembered and left out for the carrion birds, such as a crow, to eat). However, there is one interesting note: it says that the hope for the sky burial is that the hunters would find rest and solace in “a hunter’s dream.” This leads to some fairly open-ended speculation on what "The Dream" actually is or means.</p>
            </h3>
            <h3 className="littlehead">
            The Player
              <p className="psize atextcolor tmargin">The Player is a foreigner who has journeyed to Yharnam in search of curing an unspecified disease with Yharnam's famous Blood Ministration. Seeking 'Paleblood' the protagonist signs a contract with a man in a wheelchair (Who some speculate is Caryll the rune-smith) vowing to serve the city of Yharnam as a Hunter.</p>
            </h3>
            <h3 className="littlehead">
            Djura, retired hunter
              <p className="psize atextcolor tmargin">A member of the Powdered Kegs, Djura renounced his title of hunter when he failed to protect Old Yharnam. Stubborn as always, Djura remained in Old Yharnam as he watched the inhabitants of his town slowly decayed into beasts, but insists on protecting them nonetheless. Since the Powdered Kegs are rejected from the Workshop, Djura does not have much mercy or respect for the workshop conformists, and wouldn't mind shedding the blood of a few trespassers who will raise their blade against what used to be his friends.</p>
            </h3>
            <h3 className="littlehead">
            Alfred
              <p className="psize atextcolor tmargin">Alfred is a hunter as well as an executioner, he has sworn to slay beasts as well as the Vilebloods of Cainhurst Castle sworn to Queen Annalise. Although the executioners are better known for their resolution, their ferocious penchant for killing, and their "merciless" nature, Alfred is surprisingly jolly and asks to befriend the player and to be comrades in arms against the scourge of the Vilebloods and the beasts alike.</p>
            </h3>
            <h3 className="littlehead">
            Father Gascoigne and Henryk
              <p className="psize atextcolor tmargin">Father Gascoigne came from a foreign land where he was referred to as "Father" leading to the belief that he was a cleric or a priest in his former home. No rank or title in Yharnam is referred to as Father, which implies he obtained this title before coming to Yharnam. Gascoigne had been living with the blood sickness for quite some time, which may have had something to do with his relocation to Yharnam and the joining of the Healing Church. It is unclear weather he had the sickness before coming to Yharnam, but he had the sickness long before he met the Player. As a powerful hunter, he is able to contain his beastly form even though he is infected. He seems to have set aside his affiliation with the Healing Church to become a hunter, seen by his Hunter Axe and "Pistol"; on the other hand, he seems to be eliminating everyone who tries to enter the Tomb of Oedon, and is in possession of the key to the Tomb's gate that leads to Cathedral Ward, so it might be that the Church has employed him to protect their headquarters from the scourge. He is (or once was) a black cleric, which is apparent by his garb. Church hunters who wear black garb are notorious for targeting "potential victims, before signs of sickness manifest themselves". This can explain his paranoid behaviour towards you before the battle, saying "you'll be one of them, sooner or later". His mania may have been a result of his progressive transformation taking a toll on his mind, or of him succumbing to the bloodlust of the hunt.
            After helping the Player defeat the Cleric Beast, it seems Father Gascoigne made his way to the Tomb of Oedon. It seems either his condition started to worsen and dramatically reduce his sanity, or he had a change of heart. Either way, at that point he saw all people infected by the plague as beasts his is more closely related to the curse having a toll on his mind due to the fact that the townsfolk view you in the same manner. Though once his mind became warped like this his wife Viola would always play the music box to somehow restore his sanity and humanity. Notice this time you find her you do not find the music box near. Thus, Gascoigne attacked his own wife killing her and in turn allowing the curse to fully overtake his body. Once you've obtained the music box Gascoigne is far too gone to return back to himself. Though the box still has effects on him, it cannot impede the ailment any longer, this is why he transforms into a lycan-like beast once he is near death or much faster if exposed to the music box's now haunting melody.
            Henryk is an old hunter, partner of Gascoigne. The duo fought together for a long time, but very little is known about him otherwise unfortunately making him a basic cliffnote in the history of Yharnam, though his garb mentions that something happened as a result of Henryk's partnership with Gascoigne leading Henryk to have a "tragically long life."</p>
            </h3>
            <h3 className="littlehead">
            Willem, Head Scholar of Byrgenwerth
              <p className="psize atextcolor tmargin">Whereas it is unknown what exactly did master Willem uncover, one thing is clear: he is a crucial figure whose wisdom heavily influenced the teachings of the Healing Church, and everyone is grateful for his contributions. Even members of the Choir are required to pay tribute to him. His teachings eventually branched out to organizations such as The Choir and The School of Mensis which continued his research and many of their experiments made progress. Master Willem's most important teaching is the adage "Fear the Old Blood". He encourages all the scholars of his college to seek enlightenment and ascension through other methods except using the Old Blood. We know that Laurence used Old Blood because he thinks that it is key for humanity's ascension. Which is why Master Willem felt betrayed, since Laurence didn't follow the "Fear the Old Blood" adage. So Laurence found the Healing Church and made blood ministration the cornerstone of the church.
                Master Willem is acquainted with Gehrman, and likely lived in the same age as him. How exactly does he manage to live this long remains a mystery.
                The Umbilical Cord Third that is found on the corpse of the impostor Iosefka reads as such "Provost Willem sought the Cord in order to elevate his being and thoughts to those of a Great One, by lining his brain with eyes. The only choice, he knew, if man were to ever match Their greatness." So it is possible he communed with a Great One just like the Pthumerians of old and was able to obtain his long life through the secrets of whichever Great One he spoke with (Rom?)</p>
            </h3>
            <h3 className="littlehead">
            Caryll, The Runesmith
              <p className="psize atextcolor tmargin">Caryll was a member of the Workshop that was able to hear the voice of Oedon, and managed to inscribe his words into runes, which (according to item descriptions) would have made Willem proud because it was power without using blood. While the runes themselves are a singular thing, their descriptions are incredibly varied and more so tend to tinge the lore here and there with extra information.</p>
            </h3>
            </div>
            {/*Secondary character*/}
            <h2 className="head scroll1" id="SecondaryCharacters" >
          <div className="margin ">
          <hr class="line"></hr><img src={img1} className="imgheadsize" ></img>
              III. SECONDARY CHARACTERS
          <hr class="line"></hr>
          </div>
          </h2> 
            <div>
            <h3 className="littlehead firstp">
            Tomb Prospectors
              <p className="psize atextcolor tmargin">The tomb prospectors are adventurers sent by the healing church to explore the depth of the Old Labyrinth. They believe the vast labyrinth contains invaluable information of the Truth of the Old Ones. Since Ebrietas came from the depth of the Old Labyrinth, the Choir became fascinated with dungeon exploration, directly leading to these brave souls being sent to where no man has set foot since the fall of the Pthumerians. Whereas many of them returned victorious, bringing along precious artifacts, equally many were lost, perished or gone mad due to the treachery of the deep. The failures bodies are littered throughout the depths of the Chalice Dungeons like a trail of crumbs like warning signs of death of all those who tread carelessly in the depths.</p>
            </h3>
            <h3 className="littlehead">
            Black-Garbed Hunters
              <p className="psize atextcolor tmargin">Though amateur doctors, the black-garbed hunters were an extermination force and a prevention, not a cure. Their goal was to kill those who were infected, turned, and those who may be infected. They wielded large weapons and powerful firearms due to the fact they were expecting to fight very large and monstrous beasts. Soon after the Black Church Hunters were formed "their black attire became synonymous with fear, and that peculiar Yharnam madness." Their robes have their philosophy stated as follows "...When a cancer is discovered. one must pinpoint its location, reach in, and wrench it from the host's bosom."</p>
            </h3>
            <h3 className="littlehead  ">
            White-Garbed Doctors
              <p className="psize atextcolor tmargin">The White Church Doctors performed the bidding of the Choir, applying blood ministrations with the intent of experimentation, rather than healing. Many of the twisted things the church produced were a result of this experimentation such as the great giants (with axes and wrecking balls) as well as the grave keepers near them are products of these experiments and are legendary beasts that would join the church on the hunt. The White Church set gives great insight into their particular thoughts on the experiments
            "They (The Choir Doctors) believe that medicine is not a means of treatment but rather a method for research. and that some knowledge can only be obtained by exposing oneself to sickness."
            </p>
            </h3>
            </div>
            </div>
         {/*Footer*/}   
        <div className="footborder"></div><br></br>
        </div>
        <footer>
        <div className="bgfooter">
         <ul className="d-flex flex-row flex-item w-100 justify-content-center align-items-center ulfoot">
          <li className="footer-item footerli"><a className="no-underline footer-item " href="#">Wiki Home</a></li>
          <li className="footer-item footerli"><a className="no-underline footer-item " href="#">Gaming Wikis</a></li>
          <li className="footer-item footerli"><a className="no-underline footer-item " href="#">Gaming Forums</a></li>
          <li className="footer-item footerli"><a className="no-underline footer-item " href="#">Privacy Policy</a></li>
          <li className="footer-item footerli"><a className="no-underline footer-item " href="#">Terms of Use</a></li>
          <li className="footer-item footerli"><a className="no-underline footer-item " href="#">Copyright Policy</a></li>
          <li className="footer-item footerli"><a className="no-underline footer-item " href="#">Advertise on</a></li>
         </ul>
        </div>
        </footer>
      </div>       
  );
}

export default App;