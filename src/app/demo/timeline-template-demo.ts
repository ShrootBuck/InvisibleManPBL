import { Component, ChangeDetectorRef } from "@angular/core";
import { MatButtonToggleChange } from "@angular/material/button-toggle";

type EventItem = {
  header: string;
  chapter: string;
  description: string;
};

@Component({
  selector: "timeline-template-demo",
  templateUrl: "./timeline-template-demo.html",
})
export class TimelineTemplateDemo {
  events: EventItem[];

  state = "dana";

  rufusEvents: EventItem[] = [
    {
      header: "Drowning",
      chapter: "The River",
      description:
        "Rufus finds himself drowning in a river! Just as he's about to die, an unfamiliar man comes to save him. However, his father doesn't like the man, and tries to shoot him. The man magically disappears.",
    },
    {
      header: "Burning",
      chapter: "The Fire",
      description:
        "Rufus starts a fire to spite his father. Suddenly, the strange woman from years ago appears. She puts out the fire, then leaves the house on foot.",
    },
    {
      header: "Break a Leg",
      chapter: "The Fall",
      description:
        "While playing with Nigel, Rufus falls off a tree and breaks his leg. Dana suddenly appears with her owner to find help.",
    },
    {
      header: "Battery",
      chapter: "The Fight",
      description:
        "Rufus brutally rapes Alice. After finding out, Isaac beats Rufus nearly to death. All of a sudden, Dana appears. She convinces Isaac and Alice that they're better off running away and leaving Rufus alive.",
    },
    {
      header: "Capture",
      chapter: "The Fight",
      description:
        "Discovered by patrollers, Isaac and Alice are brought back to the plantation. Alice is enslaved, and Isaac's ears are cut off. Alice, previously a free woman, becomes Rufus's slave.",
    },
    {
      header: "Kevin's Return",
      chapter: "The Storm",
      description:
        "Rufus notices Kevin trying to sneak off the plantation with Dana. He tries to stop them at gunpoint, but somehow, they vanish into thin air.",
    },
    {
      header: "Death's Door",
      chapter: "The Storm",
      description:
        "Rufus is lying in the cold, wet mud. Drunk and alone, he nearly drowns. Just in time, Dana comes and saves his life once more. Hours later, Rufus's father has a heart attack and passes away.",
    },
    {
      header: "Double Suicide",
      chapter: "The Rope",
      description:
        "Rufus walks into the barn and notices alice hanging from the ceiling. Rufus contemplates suicide himself, reflecting that he pushed Alice to the edge.",
    },
    {
      header: "Rufus's Dark Twisted Fantasy",
      chapter: "The Rope",
      description:
        "Because of Dana's resemblance to Alice, Rufus develops an attraction to her. He makes repeated sexual attempts at her. Eventually, Dana and him get into a fight and Dana stabs Rufus twice. Rufus does not survive.",
    },
  ];
  danaEvents: EventItem[] = [
    {
      header: "Drowning",
      chapter: "The River",
      description:
        "All of a sudden, Dana's vision starts to blur. Suddenly, she finds herself by a river. She sees a boy drowning. Instinctively, she runs to go save him. However, the boy's father thinks suspiciously of her and raises his gun. Dana's vision fades to black.",
    },
    {
      header: "Burning",
      chapter: "The Fire",
      description:
        "Dana becomes nauseated once more. She's transported to a small bedroom with curtains in flames. She throws the curtains out of a window to prevent the fire from spreading. She then discovers that the boy is her ancestor.",
    },
    {
      header: "Patrols",
      chapter: "The Fire",
      description:
        "Dana sneaks out of the house to avoid Tom Weylin, the father. She goes to the home of Alice, a black friend of Rufus and a past member of Dana’s family. When she arrives, she sees that several white men have surrounded the home. They take out a black man, beat him, and drag him away from the house. Dana is attacked by a patroller, and teleports back to her time.",
    },
    {
      header: "Bring a Friend",
      chapter: "The Fall",
      description:
        "Dana brings Kevin back in time with her to find Rufus with a broken leg. Tom Weylin allows Dana to stay with Rufus while his leg heals. During this time, she teaches him how to read. When Weylin catches wind of this, Dana is brutally beat. She is transported back home, while Kevin is left behind in the 1830s.",
    },
    {
      header: "Escape",
      chapter: "The Fight",
      description:
        "Dana is transported back to Rufus to see that a slave is beating him. She convinces the slave, Isaac, to spare Rufus. Dana goes to patch up Rufus, and Isaac escapes with Alice.",
    },
    {
      header: "Capture",
      chapter: "The Fight",
      description:
        "Discovered by patrollers, Isaac and Alice are brought back to the plantation. Alice is enslaved, and Isaac's ears are cut off. Alice, previously a free woman, becomes Rufus's slave.",
    },
    {
      header: "Kevin's Return",
      chapter: "The Storm",
      description:
        "Kevin returns to the Weylin plantation and meets Dana. They try to sneak away, but Rufus stops them. Armed, he threatens them. Suddenly, the plantation fades away as Dana and Kevin are brought back to their normal time.",
    },
    {
      header: "Maudlin",
      chapter: "The Storm",
      description:
        "Dana teleports back to Rufus to find him lying drunk in the mud, drowning. After saving his life once more, Tom Weylin has a heart attack. Dana unsuccessfully revives him, and he dies.",
    },
    {
      header: "Suicide",
      chapter: "The Rope",
      description:
        "Dana walks in on Rufus pointing a gun to his head. Alice discovers that he sold Joe, Alice's only child with him. This causes Alice to hang herself in the barn.",
    },
    {
      header: "Rufus's Dark Twisted Fantasy",
      chapter: "The Rope",
      description:
        "Because of Dana's resemblance to Alice, Rufus develops an attraction to her. He makes repeated sexual attempts at her. Eventually, Dana and him get into a fight and Dana stabs Rufus twice. However, since Rufus grabs Dana as he is dying, her arm is amputated in the teleport back. She arrives with her arm bleeding.",
    },
    {
      header: "Coda",
      chapter: "Epilogue",
      description:
        "Dana and Kevin return to the place where the Weylin mansion once was. They find that the house has disappeared, and that Nigel had covered up his death. They fail to find any records of the past.",
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {
    this.events = this.danaEvents;
  }

  beginSort(toggleChange: MatButtonToggleChange) {
    if (toggleChange.source.value == "rufus") {
      this.events = this.rufusEvents;

      document.body.style.background = "white";
      document.getElementById("title").style.color = "black";
      document.getElementById("perspective").style.color = "black";
      document.getElementById("authors").style.color = "black";
    } else if (toggleChange.source.value == "dana") {
      this.events = this.danaEvents;

      document.body.style.background = "rgb(25, 25, 25)";
      document.getElementById("title").style.color = "white";
      document.getElementById("perspective").style.color = "white";
      document.getElementById("authors").style.color = "white";
    } else {
      // uh oh, BUG!
    }
  }

  ngOnInit() {}
}
