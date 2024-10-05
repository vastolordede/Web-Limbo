import React from "react";
import './App.css';
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
        <ul className="nav navbar-nav d-flex flex-row flex-item w-100 " >
          {/*Home Dropdown*/}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
              <div className="dropdown-menu navbg" aria-labelledby="navbarDropdown">
              <a className="dropdown-item font" href="#">Wiki Home</a>
              <a className="dropdown-item font" href="#">Community & Social</a>
              <a className="dropdown-item font" href="#">Wiki Forums</a>
              <a className="dropdown-item font" href="#">Wiki To-Do</a>
              </div>
          </li>
          {/*General */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">General</a>
              <div className="dropdown-menu navbg" aria-labelledby="navbarDropdown">
              <a className="dropdown-item font" href="#">General Information</a>
              <a className="dropdown-item font" href="#">DLC & Expansion</a>
              <a className="dropdown-item font" href="#">About Bloodborne</a>
              <a className="dropdown-item font" href="#">Online Play</a>
              </div>
          </li>
          {/*Character*/}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Character</a>
              <div className="dropdown-menu navbg " aria-labelledby="navbarDropdown">
              <a className="dropdown-item font" href="#">Character Information</a>
              <a className="dropdown-item font" href="#">Classes (Origins)</a>
              <a className="dropdown-item font" href="#">Calculators</a>
              <a className="dropdown-item font" href="#">Stats</a>
              </div>
          </li>
          {/*Equipment*/}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Equipment</a>
              <div className="dropdown-menu navbg" aria-labelledby="navbarDropdown">
              <a className="dropdown-item font" href="#">Equipments</a>
              <a className="dropdown-item font" href="#">Attire (Armors)</a>
              <a className="dropdown-item font" href="#">Weapons</a>
              <a className="dropdown-item font" href="#">FireArms</a>
              </div>
          </li>
          {/*World*/}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">World</a>
              <div className="dropdown-menu navbg" aria-labelledby="navbarDropdown">
              <a className="dropdown-item font" href="#">World Information</a>
              <a className="dropdown-item font" href="#">Locations Overview</a>
              <a className="dropdown-item font" href="#">Covenants</a>
              <a className="dropdown-item font" href="#">Chalice Dungeon</a>
              </div>
          </li>
          {/*Guilde*/}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Guilde</a>
              <div className="dropdown-menu navbg" aria-labelledby="navbarDropdown">
              <a className="dropdown-item font" href="#">Guildes Walkthoughs</a>
              <a className="dropdown-item font" href="#">Chalice Dungeon</a>
              <a className="dropdown-item font" href="#">NewPlayer Helps</a>
              <a className="dropdown-item font" href="#">Walkthoughs</a>
              </div>
          </li>
          {/*Tools*/}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tools</a>
              <div className="dropdown-menu navbg" aria-labelledby="navbarDropdown">
              <a className="dropdown-item font" href="#">Tools & Calculators</a>
              <a className="dropdown-item font" href="#">Summon Range Calculator</a>
              <a className="dropdown-item font" href="#">Build Calculator</a>
              <a className="dropdown-item font " href="#">Weapon AR & Scaling Calculator</a>
              </div>
          </li>
        </ul>
      </nav>
      <div>
        <div className="box">
      <p className="title atextcolor">Lore of Bloodborne as interpreted by the community. This page houses facts and interpretations relating to the game, but you may also visit the newly launched<br></br> Bloodborne Lore Forums. You can also find pre-release information from trailers and interviews from before the game was launched.<br></br></p>
      <p className="title atextcolor headnote">See Lore Notes for transcriptions of in-game notes scattered across its areas.<br></br>
            See Lore glossary for a recopilation of all the relevant in-game facts associated to each lore concept.<br></br>
            See Theoretical - Player thoughts and research concerning the Bloodborne lore.<br></br>
            Warning: Massive spoilers ahead, don't keep reading if you want to deduce things by yourself or haven't beaten the game yet.<br></br>
            Everything that is speculation will be tagged under theory or written with words that express uncertainty.</p>
        <h2 className="head margin">
        I. MAIN STORY CONCEPTS
        </h2>
          <div>
            <h3 className="littlehead">
            The Hunters and The Hunt
              <p className="psize atextcolor margin">
               The hunters are a group of warriors who are dedicated to keeping their regions safe by hunting down beasts - or anything other than beasts if need be - that pose a threat. Hunters are agile fighters armed with a trick weapon, a transforming melee weapon in the right hand, and a firearm in the left. They do not employ shields, but rather take advantage of their mobility in order to avoid attacks. Hunters exist throughout the world and are not exclusive to Yharnam, since a number of characters such as the protagonist and Eileen come from the outside world and are yet still recognized as hunters. However, it is believed that the Hunters started out as a branch of the Healing Church very much like The Choir. This would mean that, at least in Yharnam, Hunters were recruited by either Gehrman or the Church itself. 
              </p>
            </h3>
            <h3 className="littlehead">
            The City of Yharnam
              <p className="psize atextcolor margin">
              Yharnam is a towering, labyrinthine gothic city, home to both the Healing Church and the Blood Ministrations. As no evidence of the existence of a ruling body is provided in the game, one may presume that the Healing Church controls the city (at least indirectly). The Church focuses around healing by infusions of blood. Miraculously, blood healing can repair wounds and cure or hinder diseases. Yharnam's whole culture became focused on blood, even to the point of blood-based drinks surpassing alcoholic beverages as the most commonly consumed. Yharnam's populace is apparently viewed as insane or degenerate by the wider world, and the citizens have become extremely distrustful of non-natives as a result.
              </p>
            </h3>
            <h3 className="littlehead">
            The Red Moon
              <p className="psize atextcolor margin">
              The Red Moon is a nightmare revealed after slaying Rom, the Vacuous Spider who had placed a veil over the world to keep the secret of the true nature of the world from its residents. The servants of Amygdala become fully powered, the beasts become more ravenous, and the children of Amygdala are visible at last. In this nightmare, the world reveals the Eldritch abominations it has been truly hiding. As a result, everything gets worse, and the character sees the world as they would if they had amassed 40 insight. Unfortunately, by killing Rom, you usher in the Red Moon, which is believed by some to be the coming of Oedon. It is not clear that Oedon is the Moon Presence, but he very well could be.
              </p>
            </h3>
            <h3 className="littlehead">
            The Umbilical Cords
              <p className="psize atextcolor margin">
              While this presents a weird part of the story, it is a known fact that 75% of the game’s umbilical cords can be found on women or children. During the Red Moon, Iosefka’s dialogue suggests that she has become pregnant, and Arianna gets pregnant as well. You also find a cord from defeating Mergo’s Wet Nurse. This suggests that  Oedon impregnates women on the Red Moon. The criteria of these women who are impregnated has not been determined. It also seems to be that the Great Ones impregnate women to have surrogate children.
              It is worth noting that one of the four umbilical cords is in the abandoned Workshop, very near the doll.
              </p>
            </h3>
            <h3 className="littlehead">
            The Scourge of the Beast
              <p className="psize atextcolor margin">
              The most common form of the blood sickness appears to be lycanthropy: Humans slowly turning into wolves. Those in the early stages of the sickness have lengthened canine teeth and grow more hair. As they progress, their arms and legs lengthen and the spine hunches over and the face begins to elongate. Eventually, they grow fur and their body finishes the change into a Scourge Beast. Along with the physical transformation comes a mental degradation: At first the victim assumes all people they don't know are hostile and they'll attack on sight. As the alterations progress, the victim becomes more and more savage and hostile, until it can only stand to be around others exactly like it as "regular" humans appear to be beasts through their own blood-addled eyes. Sometimes individuals react strangely to the blood; some become unique beasts, and it's rumored that infected Clerics of the Healing Church become the largest of the monsters when they succumbed to the madness. (As seen in Laurence, Ludwig, the Vicar Amelia, etc.)
              The blood sickness seems to be endemic to Yharnam, requiring periodic hunts for those very far gone. The hunters are both respected and feared: They bring down the worst of the beasts, but are at risk of contamination themselves.
              </p>
            </h3>
            <h3 className="littlehead">
            Old Yharnam, Ashen Blood, and The Powder Kegs  
              <p className="psize atextcolor margin">
              Eventually, Old Yharnam was founded (obviously just “Yharnam” at the time), but it was brought low by a strange (the text says “baffling”) illness known as Ashen Blood, which was a worse form of slow/fast poison. The antidote description cites it as being a more severe case, and in the case of Ashen Blood, the antidotes only provided temporary relief. Eventually, the disease (likely spread due to blood ministrations) took over, and those infected turned into beasts. This is why the beasts in Old Yharnam are poisonous, particularly the red-eyed werewolf near the boss, and why the Blood-Starved Beast is coated with poison. After the fall of Old Yharnam, it was closed up, and Central Yharnam was built, along with the Grand Cathedral. This is perhaps the first instance of “hunters” as we know them now being formed.
              The Powder Kegs were a group of hunters that tried to make explosive weapons, to varying degrees of success. A few prided creations of the Powdered Kegs are the Stake Driver, the Rifle Spear, and the Cannon. However, due to differences in designs, they were banned from the Workshop, becoming known as Workshop Heretics 
              </p>
            </h3>
            <h3 className="littlehead">
            Blood Ministration and The Healing Church
              <p className="psize atextcolor margin">
              Perhaps the most influential of the organizations, the Healing Church was founded in the wake of the Choir. There were three echelons to the church: black-garbed hunters, white-garbed “doctors,” and the Choir. Though they did not spring from Byrgenwerth directly, they were explorers who found the labyrinth in the wake of that place and discovered the same remnants of the Truth, and used the research done there already to kick off their own research. However, their form of metamorphosis began with Blood Ministrations and their research/experiments with the blood.
              Master Laurence, the founder of the Healing Church, and one of Master Willem's apprentices believed that in order to transcend humanity they had to research blood healing using Old Blood. During the times of Byrgenwerth, Master Willem taught all of his student to blindfold themselves so that they can "look into oneself" and that they needed to "line their brain with eyes" in order to see what the Great Ones see and acquire more eldritch knowledge, also known as insight, to further evolve into greater beings. With insight, they were able to see the world for what it is, beyond human comprehension. One of the most important of Willem's teachings is the Byrgenwerth adage "Fear the Old Blood". For only Willem respects and fears the true nature of the Old Blood in the beginning.
              According to the memory shown by the skull in the altar of the Grand Cathedral. Master Laurence strayed from Master Willem's teachings and their paths eventually diverged. Laurence chose a different path to use the Old Blood for his experiments in order to move forward, disregarding the adage "Fear the Old Blood". He then founded the Healing Church and spread the teachings of the art of Blood Ministration. Later on, as blood healing became more common among the citizens of Yharnam, some citizens began transforming into beasts. At this point, Master Laurence discovered his mistake of using Old Blood for when it is mixed with human blood, it transforms subjects into beast. This is where Yharnam's plague of beast started.
              We can tell that Master Laurence deeply regrets his decision of using Old Blood through his notes around the Lecture Building. These notes also leave clues what one must do to transcend the hunt, which he later found out after realizing his mistakes. "Master Willem was right. Evolution without courage will be the ruin of our race". "Hunt the Great ones. Hunt the Great ones". "Three third Umbilical cords"
              From the Caryll Rune Beast: "Beast" is one of the early Caryll Runes. as well as one of the first to be deemed forbidden. "The discovery of blood entailed the discovery of undesirable beasts". 
              </p>
            </h3>
            <h3 className="littlehead">
            The Choir, The Cosmos and Ebrietas
              <p className="psize atextcolor margin">
              The leaders of the healing church, the Choir differentiate themselves from the rest of the members of the church as they received teachings directly from Ebrietas. Ebrietas, daughter of the cosmos  is a celestial being who emerged from the depth of the Old Labyrinth and acted as a source of knowledge to the healing church with seemingly no ill-will thus furthering the notion that the Great Ones are sympathetic to humans. Not only did Ebrietas grant members of the Choir profound knowledge, but she also further convinced them that they could commune with the Great Ones and learn the Eldritch Truth. They believed they could ascend to the Cosmos (or at least make contact with it), and it came in a sudden and unexpected realization that perhaps while their feet were rooted to the ground, the cosmos was not immeasurably far away, but right above their heads. Together with Ebrietas, the Choir worked tirelessly to understand the Great One’s Truth.
              </p>
            </h3>
            <h3 className="littlehead">
            The School of Mensis and the Mensis Ritual
              <p className="psize atextcolor margin">
              Members of the School of Mensis desperately seek communion with the Great Ones, to the point of near (if not) insanity. Typically found wearing Mensis cages, a follower of the School of Mensis could be distinguished from a normal person from a mile away. But they certainly don't care about other humans' opinions as much as they do the Great Ones'.
              Despite sharing the same goal with the Healing Church, the School of Mensis and the Healing Church do not seem to get along - this is indicated by the corpse of a Choir member locked away in the Unseen Village, which happens to be founded and controlled by the School of Mensis.
              The founder of the School of Mensis, Micolash  seems to have telepathic powers, being able to plant nightmares and illusions into the minds of his victims. This might indicate the School of Mensis having foul intent if they succeed in communicating with the Great Ones. They may have turned the knowledge and power they obtained onto the people, which would explain the tension between them and the Healing Church.
              The pertinent Umbilical Cord for the School of Mensis' description reads as follows after obtaining it from Murgo's Wet Nurse in the Nightmare: "Every Great One loses its child, and then yearns for a surrogate. This Cord granted Mensis audience with Mergo, but resulted in the stillbirth of their brains." When Micolash and his ilk used this cord to commune with The Infant Great One, they discovered that the power was too much and it killed the whole School of Mensis, locking the survivors in the Nightmare Realm that Micolash controls and driving them all insane. Whether or not this was intended by Mergo is up for debate
              </p>
            </h3>
            <h3 className="littlehead">
            Cainhurst, The Vilebloods, and the Executioners
              <p className="psize atextcolor margin">
              In Cainhurst Castle, Queen Annalise was a ruler over many nobles and dandies, the first Vileblood that partook in corrupted blood from Byrgenwerth. Having the ability to extract the essence of hunters' blood, Queen Annalise ordered her followers to hunt down hunters without scruple, and gained notoriety for her insatiable hunger for blood.
              Annalise consumed the blood offerings brought back by her servants, and eventually became immortal due to her vile predations. A timeless society of vampire-like entities was formed in Cainhurst Castle thereafter. It was a place of refinement and sophistication, and the occasional beast that arose from the foul practice was dispatched discreetly as well as gracefully - such is the Cainhurst way. Those who served the queen did so out of loyalty, fear, and an unending desire to taste her blood, and settled with various Caryll runes that improved Visceral Attacks as a cheap substitute (as described in the rune’s texts). Queen Annalise hoped desperately one day to bear a true heir, and dubbed this the Child of Blood, which she sought to have at all costs. She sent her Vilebloods to hunt for her, and all hoped that, with enough blood dregs, she could birth a Child of Blood.
              However, the justice-seeking knight commander known as master Logarius took these practices as an affront, and founded the Executioners: blood-thirsty zealots looking to kill Vilebloods at all costs. Eventually they stormed Cainhurst castle, eliminating everyone inside with extreme prejudice. Ironically, the executioners slew all the maids they could find, who likely had nothing to do with Annalise's malevolence, but could not harm Annalise due to her immortality. Seeing no other option, master Logarius sent his Executioners away and martyred himself in order to prevent Annalise from ever escaping. He stands guard in front of Annalise's tower forever, sealed off with the Crown of Illusion, so that none could enter again.
              </p>
            </h3>
            <h3 className="littlehead">
            The Great Ones
              <p className="psize atextcolor margin">
              The Healing Church has pursued a strange goal for a long, long time; a goal that has been hidden from all but the highest of rank among them: to summon or harness the power of the Great Ones, beings not of this world, powerful enough to be seen as gods. They were here, in the labyrinth, long ago. They appear to be much closer than you'd think at Byrgenwerth, men were sent into the labyrinth, and an academy was built to understand the strange discoveries inside, generally called the Truth. It seems the Truth is a terrible thing, slowly breaking the mind of anyone who delves too deeply. Awful things happened at Bygenwerth, and as a result, the church closed off not only the academy, but the entire forest, calling it "forbidden".
              Whether or not the Great Ones are actually gods or just higher levels of beings is inconsequential, the question itself is entirely academic. The important thing is: They exist. They have an influence on the world. They appear to be ageless, but they can be killed. Their powers are strange things, often involving teleportation or energy or things that the human world cannot do. Even perceiving the Great Ones properly requires great amounts of Insight--something Master Willem tried to do, at his own cost. The strongest of the Great Ones appears to be the Moon Presence, the creator of the Nightmare the Hunter is trapped within. Others are Oedon, Rom, Mergo's Wet Nurse, Amygdala, the Celestial Emissary, the Brain of Mensis, and Ebrietas.
              Oedon, one of their number, has transcended even the others, to the point that he no longer has a physical body but instead is just a voice and an influence. He is very powerful and has become sort of "timeless", thus potentially making him the most powerful, yet the most indirect, of the Great Ones. He is also the only Great One explicitly referred to as male, with all the others' genders either female or undefined (assuming the Great Ones even have humanly-definable genders)
              Some items' descriptions tell about Great Ones living in "The Dream" and others living in "The Nightmare" (Which is the case of Amygdala whose function is still to be defined, and Mergo's Wet Nurse). Humans have been able to contact them through the use of Phantasm, little invertebrates found in the Labyrinth.
              Interestingly, Mergo's Wet Nurse and the Moon Presence are themselves never directly identified as Great Ones. Whether this is merely an oversight or an indication that they are indeed a different class of being is unknown.
              </p>
            </h3>
            <h3 className="littlehead">
            Pthumerian civilization
              <p className="psize atextcolor margin">
              Pthumeria was an ancient civilization ruled by Queen Yharnam. It was populated by Pthumerians, an ancient race of people who truly understood the Truth of the Great Ones and gained supernatural powers as a result. Queen Yharnam was a medium for the Great Ones, as cited by an item (saying the Choir discovered a medium, though she’s the only likely candidate). Eventually the Pthumerians retreated into a deep labyrinth, with their holy chalices being the only remnants of their ancient rituals to break the seals. Some chalices (such as the ailing Loran chalice) led to other lands, and the Isz Chalice was in particular used in holy communion with the Great Ones.
              </p>
            </h3>
          </div>
        </div>
      </div> 
    </div>       
  );
}

export default App;