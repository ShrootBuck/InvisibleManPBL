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

  state = "book";

  irlEvents: EventItem[] = [
    {
      header: "Brown v. Board of Education (1954)",
      chapter: "Judicial Breakthrough",
      description:
        'In 1954, the U.S. Supreme Court delivered a landmark decision in Brown v. Board of Education, declaring that segregated public schools are inherently unequal. This ruling shattered the longstanding "separate but equal" doctrine established by Plessy v. Ferguson and set the precedent for dismantling institutionalized racism. The decision not only transformed education but also gave momentum for the broader civil rights movement, challenging deeply rooted social and legal norms. It\'s impact continues to resonate in the fight for equality.',
    },
    {
      header: "Montgomery Bus Boycott (1955-1956)",
      chapter: "Grassroots Uprising",
      description:
        "The Montgomery Bus Boycott was sparked by Rosa Parks' courageous refusal to give up her seat, igniting a year-long protest that showcased the power of nonviolent resistance. African-Americans in Montgomery united to cripple the economic engine of segregation by boycotting the buses, forcing authorities to fix their unjust system. This act of defiance not only propelled figures like Dr. Martin Luther King Jr. into the national spotlight but also demonstrated that collective action can, indeed, break discriminatory practices. The boycott remains an example of how grassroots mobilization can drive monumental change.",
    },
    {
      header: "Little Rock Nine (1957)",
      chapter: "School Integration",
      description:
        "In 1957, nine African American students, later known as the Little Rock Nine, stepped into Central High School in Little Rock, Arkansas, to racially integrate the institution (amid fierce local resistance). Facing hostility and violence, their determined presence highlighted both the brutality of segregation and the high stakes of desegregation in public education. Their struggle forced the nation to confront the deep-seated opposition to integration and resulted in federal intervention and a renewed focus on enforcing civil rights. This pivotal event underscored the profound personal risks taken in the pursuit of equal educational opportunities.",
    },
    {
      header: "Greensboro Sit-ins (1960)",
      chapter: "Direct Action",
      description:
        "The Greensboro Sit-ins began when four college students sat at a segregated lunch counter in 1960, refusing to leave until they were served. Their peaceful yet powerful act of defiance quickly spread across the country, challenging the legitimacy of segregation in public spaces. By maintaining their nonviolent stance amid hostility, these young activists exposed the absurdity of racial discrimination and inspired a wave of similar protests. Their efforts not only disrupted the status quo but also underscored the potential of direct action to mobilize public opinion and foster social change.",
    },
    {
      header: "Freedom Rides (1961)",
      chapter: "Interracial Solidarity",
      description:
        "In 1961, the Freedom Rides marked a daring challenge to the segregationist practices of interstate travel in the American South. Mixed groups of activists boarded buses and rode together into hostile territories, directly confronting discriminatory policies at bus terminals. Despite facing brutal attacks, arrests, and severe harassment, these riders persisted in their quest for equality, revealing the stark realities of institutional racism. Their sacrifice and unwavering determination compelled the federal government to take action, ultimately reshaping the landscape of civil rights enforcement.",
    },
    {
      header: "Birmingham Campaign (1963)",
      chapter: "Urban Confrontation",
      description:
        "The Birmingham Campaign of 1963 was a critical confrontation in one of America\'s most segregated cities, orchestrated by Dr. Martin Luther King Jr. Through a series of nonviolent protests, the campaign aimed to expose the harsh realities of racial segregation and the brutal tactics employed by local law enforcement officials. The use of fire hoses, police dogs, and mass arrests, of course captured vividly by the media, shocked the nation and strengthened public support for the civil rights movement. This confrontation not only forced a national reckoning with racial injustice but also paved the way for landmark legislative reforms.",
    },
    {
      header: "March on Washington (1963)",
      chapter: "Mass Mobilization",
      description:
        "The 1963 March on Washington for Jobs and Freedom was a historic gathering of over 200,000 people demanding comprehensive civil rights reforms and economic justice. Held on the steps of the Lincoln Memorial, the march provided a platform for the struggle against racial discrimination. The event is forever etched in history through Dr. Martin Luther King Jr.'s famous 'I Have a Dream' speech, which captured the aspirations of millions and ignited a renewed push for equality. This massive mobilization highlighted the power of peaceful protest to effect systematic change and unite the nation.",
    },
    {
      header: "Civil Rights Act of 1964",
      chapter: "Legislative Milestone",
      description:
        "The Civil Rights Act of 1964 was a groundbreaking piece of legislation that outlawed segregation in public facilities and banned employment discrimination on the basis of race, color, religion, sex, or national origin. The law emerged from relentless advocacy/protest and political negotiation, symbolizing a commitment by the federal government to dismantle institutional racism. By eliminating legal barriers to equality, the Act paved the way for a more inclusive society and set the precedent for future civil rights reforms. It's passing marked a turning point in American history, reinforcing the idea that legislative action is essential to secure civil rights for all citizens.",
    },
    {
      header: "Selma to Montgomery March (1965)",
      chapter: "Voting Rights Struggle",
      description:
        "The Selma to Montgomery March in 1965 was a historic demonstration of the fight for voting rights. Protesters, many of whom faced brutal violence and intimidation, marched over 50 miles to demand an end to the discriminatory practices that had long suppressed African-American votes. Their unwavering determination in the face of adversity brought national attention to the urgent need for electoral reform and spurred public demand for change. The march played a crucial role in the passage of voting rights legislation, marking a significant victory in the struggle for democracy.",
    },
    {
      header: "Voting Rights Act of 1965",
      chapter: "Electoral Breakthrough",
      description:
        "The Voting Rights Act of 1965 was a law designed to eliminate racial barriers to voting and ensure that every citizen had a fair opportunity to participate in the democratic process. Enacted in response to the injustices revealed during the Selma marches, the Act outlawed practices such as literacy tests and poll taxes that had long disenfranchised African-American voters. By imposing federal oversight in jurisdictions with a history of discrimination, the law empowered millions of previously marginalized citizens and redefined American democracy. This legislation remains a landmark achievement in the ongoing quest for electoral equality.",
    },
    {
      header: "Assassination of MLK (1968)",
      chapter: "Nation in Mourning",
      description:
        "The assassination of Dr. Martin Luther King Jr. in 1968 was a tragic and defining moment in the history of the civil rights movement. As one of the most influential advocates for nonviolent resistance and social justice, King's murder plunged the nation into grief and ignited a surge of anger. The loss of this leader underscored the struggle faced by those who dared to challenge entrenched systems of oppression, while also furthering demands for equality and reform. His legacy continues to inspire generations to confront injustice and work toward a more equitable society.",
    },
    {
      header: "Civil Rights Act of 1968 (Fair Housing Act)",
      chapter: "Housing Equality",
      description:
        "Also known as the Fair Housing Act, the Civil Rights Act of 1968 addressed the discrimination in housing that had long reinforced racial segregation and economic disparity. By prohibiting discrimination in the sale, rental, and financing of housing, the act sought to dismantle the barriers that prevented minority communities from accessing higher-quality living conditions. This legislation extended the momentum of earlier civil rights victories into a new arena, emphasizing that equality must be comprehensive and far-reaching. Its passage represented a critical step in the ongoing effort to create a more just and inclusive society for all.",
    },
    {
      header: "Legacy and Ongoing Struggles",
      chapter: "Continuing Battle",
      description:
        "The legacy of the civil rights movement is a powerful reminder of the impact of collective action and the ongoing fight for equality. While the historic victories of desegregation, voting rights, and legislative reforms have reshaped American society, systematic racism and social inequities persist in many forms. The lessons learned from the struggles of the past continue to inspire new generations to challenge injustice and work toward a fairer, more inclusive future.",
    },
  ];
  bookEvents: EventItem[] = [
    {
      header: "Prologue: I Am Invisible (Aura)",
      chapter: "Identity Unseen",
      description:
        "The narrator opens the novel by declaring his invisibility - not a literal absence, but a profound sense of being unseen by a society that refuses to acknowledge his humanity. This sets the tone for his journey into the depths of racial prejudice, identity, and self-discovery, establishing that his   struggle is both personal and emblematic of a larger societal blindness.",
    },
    {
      header: "Battle Royal and Early Humiliation",
      chapter: "The Debut of Dehumanization",
      description:
        "The narrator is forced to participate in a brutal 'battle royal' where he and other black men are humiliated and degraded for the amusement of white onlookers. This degrading spectacle not only shatters any naive illusions of racial equality but also plants the seeds of his lifelong internal conflict, setting him on a path marked by both ambition and a deep-seated disillusionment.",
    },
    {
      header: "The Scholarship and College Experience",
      chapter: "Ambition & Adversity",
      description:
        "Despite the bitter taste of his early humiliation, the narrator's intelligence earns him a scholarship to a historically black college. Here, his academic pursuits are intertwined with the heavy expectations imposed by a segregated society: an environment where progress is tainted by the constant reminder of racial subservience, forcing him to navigate between his ambition and the weight of his conformity.",
    },
    {
      header: "The Betrayal by Dr. Bledsoe",
      chapter: "Institutional Corruption",
      description:
        "While still in college, the narrator encounters a painful betrayal at the hands of Dr. Bledsoe, the college president whose self-serving maneuvers reveal the compromises required to maintain power. This moment of institutional treachery shatters the narrator\'s trust in established (black) authority figures, underscoring how even those within his own community can perpetuate the oppressive dynamics of a racist society.",
    },
    {
      header: "Journey to New York City",
      chapter: "Escape and Expectation",
      description:
        "Leaving behind the oppression of the South, the narrator ventures to New York City in search for a new beginning and a chance to redefine himself. The city, with its promise of anonymity and opportunity, initially seems like the perfect backdrop for reinvention, only to reveal that urban modernity carries its own set of dehumanizing forces and systemic exploitation.",
    },
    {
      header: "Encounter with the Brotherhood",
      chapter: "Political Awakening",
      description:
        "In the heart of New York, the narrator is drawn into the orbit of the Brotherhood, a politically charged organization that champions social justice. At first, his involvement feels like an opportunity to finally be seen and to contribute to a cause larger than himself. However, he soon discovers that the Brotherhood\'s grand rhetoric masks their manipulative agenda that reduces his personal identity to a mere cog in a machine.",
    },
    {
      header: "Rise as a Public Speaker for the Brotherhood",
      chapter: "The Power of Voice",
      description:
        "Embracing his role within the Brotherhood, the narrator finds himself thrust into the spotlight as a charismatic public speaker. His eloquent addresses stir hope and mobilize the masses, yet this newfound prominence comes at a steep cost: his individuality is steadily eclipsed by the collective narrative of the organization, leaving him conflicted about whether he is truly in control of his own voice.",
    },
    {
      header: "Tod Clifton's Radicalism and Tragic Death",
      chapter: "A Catalyst for Crisis",
      description:
        "A pivotal momvent unfolds with the rise and subsequent tragic death of Tod Clifton, a radical member of the Brotherhood. Clifton\'s martyrdom forces the narrator to confront the brutal realities underlying the struggle for racial justice, exposing the raw and uncompromising costs of a movement that, despite its very lofty ideals, often fails to protect those who dare challenge the status quo.",
    },
    {
      header: "Confrontation with Radical Ideologies",
      chapter: "Collision of Visions",
      description:
        "In the aftermath of Clifton\'s death, the narrator is forced to grapple with competing ideologies embodied by more militant voices (like Ras the Exhorter) challenging the Brotherhood\'s moderate stance. This ideological collision deepens his internal conflict as he struggles to reconcile his personal identity with the polarized visions of resistance, leaving him questioning whether true liberation can ever be achieved through prescribed political movements.",
    },
    {
      header: "Disillusionment and Identity Crisis",
      chapter: "The Shattering Illusion",
      description:
        "Over time, the cumulative betrayals and contradictions inherent in the organizations around him shatter the narrator's illusions about progress. As he confronts the reality that he has been reduced to a pawn in a political game, his identity begins to fracture, plunging him into a crisis of self-worth and forcing him to question the very nature of authenticity.",
    },
    {
      header: "The Riot and Urban Chaos",
      chapter: "The Price of Rebellion",
      description:
        "Amid the simmering tensions of the urban landscape, riots break out in New York, serving as a reminder of the pent-up fury and systematic neglect endured by marginalized communities. The chaotic scene of protest and violence not only exposes the raw and unfiltered anger of those pushed to the margins but also complicates the narrator\'s understanding of whether collective action can ever truly mend the fractures of a racist American society.",
    },
    {
      header: "Break with the Brotherhood",
      chapter: "Rejection of False Promises",
      description:
        "Realizing that the Brotherhood's promises were nothing more than a facade for political manipulation, the narrator makes the choice to sever his ties with the organization. This act of defiance marks a critical point of reclaiming his autonomy and rejecting the imposed identities and ideologies in favor of forging his own path that reflects his multifaceted self.",
    },
    {
      header: "The Underground Retreat and Embrace of Invisibility",
      chapter: "Solitude and Self-Discovery",
      description:
        "In the novel\'s final chapters, the narrator retreats into an underground hideout - a symbolic sanctuary from a society that has continually refused to see him for who he truly is. In this isolation, he confronts the paradox of his invisibility, coming to understand that the very trait that rendered him marginalized can also serve as a source of radical freedom and self-definition, ultimately charting a path toward genuine (if solitary) empowerment.",
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {
    this.events = this.bookEvents;
  }

  beginSort(toggleChange: MatButtonToggleChange) {
    if (toggleChange.source.value == "irl") {
      this.events = this.irlEvents;
    } else if (toggleChange.source.value == "book") {
      this.events = this.bookEvents;
    } else {
      // uh oh, BUG!
    }
  }

  ngOnInit() {}
}
