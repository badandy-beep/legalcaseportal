import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'In The Fight Before You Called | Autism Justice Foundation',
  description: 'A documented record of the Kompothecras family and AJF legal team advocacy — decades of fighting for autism families before they ever opened a law firm.',
}

const articles = [
  {
    slug: 'medical-freedom-act-2026',
    category: 'Legislative Record',
    date: 'March 12, 2026',
    title: 'Florida Just Passed What Dr. Gary Fought For in 2008. He Was Right All Along.',
    deck: 'Fifteen years ago, a Sarasota father spent millions, leveraged every political connection he had, and got called a bully for it. On March 10, 2026, the Florida Senate proved him right.',
    image: '/gary-senate-sb1756-feb2026.jpg',
    imageCaption: 'Dr. Gary Kompothecras (left, blue suit) at the Florida Senate Appropriations Committee hearing on SB 1756, February 24, 2026, Tallahassee. Photo: Florida Phoenix.',
    author: 'AJF Editorial Staff',
    body: [
      {
        type: 'p',
        text: 'There is a specific kind of vindication that only comes after a very long time. It does not arrive with fanfare or an apology from the people who called you wrong. It arrives quietly — in the form of a Senate roll call vote in Tallahassee, on a Tuesday, fifteen years after everyone told you to sit down.',
      },
      {
        type: 'p',
        text: 'That is where Dr. Gary Kompothecras stands today.',
      },
      {
        type: 'p',
        text: 'On March 10, 2026, the Florida Senate passed SB 1756 — the Medical Freedom Act — a Governor DeSantis priority bill that gives Florida parents a conscience-based right to opt their children out of school vaccine mandates, and requires health care practitioners to provide full CDC disclosure before vaccinating a child. This is, in its essential form, what Dr. Gary Kompothecras has been fighting for since 2008.',
      },
      {
        type: 'h2',
        text: 'The Fight Nobody Wanted to Cover',
      },
      {
        type: 'p',
        text: "In 2008, Governor Charlie Crist appointed Gary Kompothecras to the Florida Governor's Task Force on Autism Spectrum Disorders, where he served alongside former NFL quarterback Dan Marino. His two children — Bronson and Sarah Alice — had been diagnosed with severe autism as toddlers. He championed what would have been the nation's strictest thimerosal vaccine restriction law. He produced a 46-minute documentary of the September 2008 legislative hearing and distributed it to every legislator who would watch.",
      },
      {
        type: 'p',
        text: 'He traveled to Washington for the Congressional autism oversight hearing. He funded Vaxxed screenings across Sarasota. He and his wife Beth filed both Bronson and Sarah Alice as petitioners in the federal Vaccine Injury Compensation Program. Beth made her own political contributions to legislators who supported autism accountability. This was never a solo mission — it was a family operation, funded out of pocket, sustained by conviction.',
      },
      {
        type: 'p',
        text: 'The political establishment pushed back. The medical establishment pushed back. The media either ignored the story or framed Gary as a fringe figure with too much money and not enough credibility. None of that stopped him.',
      },
      {
        type: 'h2',
        text: 'What SB 1756 Actually Does',
      },
      {
        type: 'p',
        text: "The Medical Freedom Act establishes a conscience-based exemption for childhood vaccine mandates in Florida's public and private schools. It requires that before any vaccine is administered to a child, the health care practitioner must provide written disclosure of the CDC's full list of known side effects and adverse reactions. It codifies the right of Florida parents to make informed medical decisions for their children — the same right Gary Kompothecras has been demanding for nearly two decades.",
      },
      {
        type: 'p',
        text: "Governor DeSantis made the bill an administration priority. The Senate Appropriations Committee heard testimony on February 24, 2026 — and Dr. Gary Kompothecras was there, seated at the committee table, the same man who had been shouting into the void since his children's diagnoses.",
      },
      {
        type: 'h2',
        text: 'From 1-800-ASK-GARY to the Governor\'s Board',
      },
      {
        type: 'p',
        text: "Gary built 1-800-ASK-GARY from his first chiropractic clinic in 1995 into one of the most recognized attorney referral services in Florida. That same entrepreneurial intensity fueled his advocacy. He spent millions of his own money. He leveraged every political connection. He didn't wait for permission.",
      },
      {
        type: 'p',
        text: "In January 2026, Governor DeSantis appointed Dr. Gary to the Florida Board of Chiropractic Medicine — a recognition of both his professional standing and his years of health freedom advocacy. That same legislative session, SB 1756 advanced through committee. The timing was not a coincidence. Gary had spent years building the relationships and the record that made this moment possible.",
      },
      {
        type: 'h2',
        text: 'The Foundation',
      },
      {
        type: 'p',
        text: "In September 2025, Gary and Beth co-founded the Autism Justice Foundation — a 501(c)(4) nonprofit working alongside Children's Health Defense and the Autism Society of Florida to push for transparency, accountability, and reform. Their son Alex, a Sarasota attorney, launched Justice for Autism as the legal arm — connecting families to VICP resources and representation.",
      },
      {
        type: 'p',
        text: "The moment the country finally caught up to what the Kompothecras family had been saying for fifteen years, they were ready. Not with talking points — with infrastructure. A foundation. A legal team. A national intake system. And a twenty-year record that no one can dispute.",
      },
      {
        type: 'h2',
        text: 'What This Means for You',
      },
      {
        type: 'p',
        text: 'If your child was injured by a vaccine, you may be entitled to compensation through the federal Vaccine Injury Compensation Program. The VICP has paid out over $5 billion to families since 1988 — but most eligible families have never been told their rights. Filing deadlines are strict. The statute of limitations can be as short as three years.',
      },
      {
        type: 'p',
        text: "The Kompothecras family did not start this fight last year. They started it when Bronson couldn't say the name of his favorite toy. Everything since then — the task force, the legislation, the documentary, the foundation, the legal team — has been building toward this moment. The question is whether you'll let them fight for your family too.",
      },
    ],
  },
  {
    slug: 'andrew-wakefield-the-doctor-who-asked',
    category: 'The Science Debate',
    date: 'March 12, 2026',
    title: 'The Doctor Who Asked the Question They Didn\'t Want Asked — and Paid Everything for It',
    deck: 'Andrew Wakefield was a respected gastroenterologist at one of Britain\'s top hospitals when he published a study that changed the trajectory of autism science. What happened next became one of the most disputed chapters in modern medical history.',
    image: '/andrew-wakefield-portrait.webp',
    imageCaption: 'Dr. Andrew Wakefield, gastroenterologist and director of VAXXED: From Cover-Up to Catastrophe (2016).',
    author: 'AJF Editorial Staff',
    body: [
      { type: 'photogallery', photos: [{ src: '/andrew-wakefield-hd.webp', caption: 'Dr. Andrew Wakefield speaking about his research. He has maintained since 1998 that the questions his team raised deserve a full, transparent scientific answer.' }] },
      { type: 'p', text: 'There is a version of Andrew Wakefield that the medical establishment wants you to know: a disgraced former doctor, struck off the British medical register, whose 1998 study linking the MMR vaccine to autism was retracted and whose claims were formally condemned by a General Medical Council tribunal. That version exists, and those are facts.' },
      { type: 'p', text: 'There is another version — the one held by tens of thousands of autism families across the United States and United Kingdom — of a physician who listened to parents when no one else would, who documented what those parents were telling him, who asked a question the medical industrial complex was not prepared to answer, and who was systematically destroyed for asking it. That version also exists. Both are part of the record. The Autism Justice Foundation presents both, because the families we serve deserve the full picture — not the sanitized institutional one.' },
      { type: 'h2', text: 'Who Andrew Wakefield Was Before 1998' },
      { type: 'p', text: 'Andrew Jeremy Wakefield was born in 1957 in Britain. His father was a neurologist. His mother was a general practitioner. He studied medicine at St. Mary\'s Hospital Medical School, qualified in 1981, and became a Fellow of the Royal College of Surgeons in 1985. He spent time at the University of Toronto researching small intestine transplantation, then returned to the UK to work on the liver transplant programme at the Royal Free Hospital in London. By the mid-1990s he was a senior lecturer and honorary consultant in experimental gastroenterology — a serious academic physician with a legitimate research record. He was not a fringe figure. He was not an outsider. He was inside the institution, with a career built on peer-reviewed work, when a parent named Rosemary Kessick walked into his clinic in 1995.' },
      { type: 'p', text: 'Kessick\'s son had autism and bowel disease. She believed the two were connected to his MMR vaccination. She was not the only one. In the years that followed, Wakefield began hearing the same story from parent after parent: a child who was developing normally, received the MMR vaccine at 12 to 15 months, and then regressed — losing language, losing eye contact, withdrawing from the world. The parents were not random conspiracy theorists. They were mothers and fathers watching something happen to their children that their pediatricians refused to acknowledge. Wakefield listened.' },
      { type: 'h2', text: 'The 1998 Lancet Study' },
      { type: 'p', text: 'In February 1998, Wakefield and twelve co-authors published a case series in The Lancet involving twelve children with developmental disorders, intestinal symptoms, and a reported temporal relationship between MMR vaccination and the onset of their symptoms. The paper carefully noted that it did not "prove" a causal connection between the vaccine and autism. What Wakefield stated at the press conference accompanying the publication — that he believed single vaccines should be used instead of the combined MMR until the question could be definitively resolved — was a recommendation that went beyond the paper itself, and it ignited a firestorm.' },
      { type: 'p', text: 'MMR vaccination rates in the UK fell from over 90 percent to 79 percent. Measles outbreaks followed. The medical establishment mobilized. The study was scrutinized in a way that few papers in scientific history had been. Multiple subsequent large-scale studies found no link between MMR vaccination and autism. In 2004, journalist Brian Deer reported that Wakefield had undisclosed financial relationships with lawyers representing parents in lawsuits against vaccine manufacturers, and that he had received significant funding from the UK\'s Legal Aid Board that was not declared in the Lancet paper. Ten of the twelve co-authors withdrew their support for the paper\'s interpretation. The Lancet fully retracted the study in January 2010. In May 2010, the General Medical Council struck Wakefield off the UK medical register, citing dishonest conduct, ethical violations, and the deliberate mistreatment of developmentally delayed children in the course of his research.' },
      { type: 'h2', text: 'What Wakefield Has Always Said' },
      { type: 'p', text: 'Wakefield has never recanted. He has denied fraud, denied falsification, and denied that financial relationships drove his conclusions. He maintains that his clinical findings were real — that the children in his study had both gastrointestinal disease and autism, that the parental reports of post-vaccination regression were genuine, and that the institutional response to his work was a campaign of suppression rather than a refutation. "I don\'t put any of the blame on anybody else," he said in a 2024 Epoch Times interview with his colleagues. "I followed the science where it led." That position has not moved in twenty-five years.' },
      { type: 'p', text: 'He moved to Austin, Texas after his resignation from Royal Free Hospital, co-founded the Thoughtful House research centre to study autism, and has continued working with autism families through advocacy, speaking, and film. In 2016, he directed VAXXED: From Cover-Up to Catastrophe, a documentary centered on CDC senior scientist William Thompson\'s recorded claims that he and his co-authors had omitted a correlation between the MMR vaccine and autism in African-American boys from a 2004 CDC study. Thompson later issued a statement insisting he believed vaccines saved lives and should not be avoided — but his admission that data had been handled in ways he found troubling was enough to reignite the debate in the autism community worldwide.' },
      { type: 'vaxxedpromo', posterSrc: '/vaxxed-poster.jpg' },
      { type: 'vimeo', videoId: '194188493', title: 'VAXXED: From Cover-Up to Catastrophe — Gary Kompothecras Producer Version' },
      { type: 'h2', text: 'Why This Film Matters to Autism Families' },
      { type: 'p', text: 'The version of VAXXED embedded above is the producer version made available by Dr. Gary Kompothecras — a Sarasota physician, long-time autism advocate, and co-founder of the Autism Justice Foundation who has been fighting this battle since 2008. Gary was in those Florida legislative hearings, pressuring state health officials when no one in mainstream medicine would engage the question. He produced this film because he believed the story in it needed to reach more families. The medical establishment has a version of the Andrew Wakefield story that is neat, finalized, and designed to end the conversation. VAXXED is the other version — the one the parents tell.' },
      { type: 'p', text: 'The Autism Justice Foundation takes no institutional position on the MMR-autism question as a matter of scientific consensus. The scientific establishment has reached its conclusion. We note, however, that the federal Vaccine Injury Compensation Program — the very legal mechanism through which we help families seek accountability — exists precisely because Congress acknowledged in 1986 that vaccines can and do cause injury in some individuals, and that those families deserve a path to compensation. The debate is not whether vaccines can injure. The VICP is proof that they can. The debate is always about which injuries, in which children, with which biological vulnerabilities.' },
      { type: 'h2', text: 'The Question That Has Never Gone Away' },
      { type: 'p', text: 'In the United States, autism now affects approximately 1 in 36 children — a figure that has risen steadily and dramatically since the early 1990s. The cause of that rise remains, officially, "largely unknown." The families who come to the Autism Justice Foundation are not asking us to resolve the science. They are asking us to help them navigate a legal system that Congress designed specifically to compensate vaccine-injured children — a system that the government funds and operates, and that exists because the question Andrew Wakefield asked in 1998 has an answer that some families already know.' },
      { type: 'p', text: 'Whatever you believe about Andrew Wakefield — and thoughtful, informed people believe very different things — the question he raised has not been silenced. It has been amplified. The MAHA movement now operates at the federal level. The CDC\'s vaccine safety data is under formal review. The Medical Freedom Act passed the Florida Senate in March 2026. The families who were told for twenty-five years that their children\'s regression was coincidental are no longer being told to sit down and accept it. Whether Wakefield was right, wrong, or somewhere in between, the movement he helped catalyze has arrived at the center of American health policy. The children in his 1998 study are now adults. Their parents are still asking the same question.' },
      { type: 'warning', text: 'If your child was diagnosed with autism and you believe vaccine injury played a role, the Vaccine Injury Compensation Program may provide a path to accountability. VICP claims must generally be filed within 3 years of the first symptom. Free consultation — no obligation.' },
    ],
  },
  {
    slug: 'alex-5k-asf-honorary-board',
    category: 'Community Advocacy',
    date: 'March 12, 2026',
    title: 'He Founded a 5K, Joined the Autism Society Board, and Calls Himself a Big Brother. Meet Alex Kompothecras.',
    deck: "Before Alex Kompothecras became the managing attorney of the Autism Justice Foundation's legal partner, he built one of Sarasota's most visible autism advocacy events from scratch — and earned a board seat at Florida's leading autism organization.",
    image: '/Alex-Kompothecras.webp',
    imageCaption: 'Alex J. Kompothecras, Managing Attorney, Alpha Law Group. Honorary Board Member, Autism Society of Florida.',
    author: 'AJF Editorial Staff',
    body: [
      {
        type: 'p',
        text: 'There is a phrase attorneys in mass-tort and personal injury work know well: any lawyer can file the paperwork. What separates the ones worth hiring is what they knew before you called them. For Alex Kompothecras, that knowledge was not acquired in a law school classroom or a continuing legal education seminar on vaccine injury. It was acquired at home — watching his younger siblings Bronson and Sarah Alice navigate a world that was not built for them.',
      },
      {
        type: 'p',
        text: "Alex grew up as the older brother of two children with severe autism. He watched his parents, Gary and Beth Kompothecras, fight legislative battles in Tallahassee, travel to congressional hearings in Washington, and file his siblings as petitioners in the federal Vaccine Injury Compensation Program. By the time Alex graduated from law school and opened Alpha Law Group in Sarasota, autism advocacy was not a practice area he chose. It was the air he had breathed for twenty years.",
      },
      {
        type: 'h2',
        text: 'Building the 5K From Scratch',
      },
      {
        type: 'p',
        text: "One of Alex's first major acts as a practicing attorney was to create the annual Alpha Law Group Autism 5K Run — a community fundraising event that benefits the Autism Society of Florida and The Haven, funding programs including first responder training, community education, and drowning prevention for children with autism. He did not sponsor an existing event. He built one. The 2nd Annual Alpha Law Group Autism 5K Run was held on March 7, 2026, at Nathan Benderson Park in Sarasota — one of the most competitive racing venues in the country — drawing runners, families, and autism advocates from across the region.",
      },
      {
        type: 'p',
        text: "Drowning prevention is not a minor line item in autism advocacy. Children with autism are fourteen times more likely to die from drowning than their neurotypical peers. The 5K's funding of these specific programs reflects a depth of issue knowledge that does not come from Google. It comes from living it.",
      },
      {
        type: 'h2',
        text: 'Honorary Board Member, Autism Society of Florida',
      },
      {
        type: 'p',
        text: 'The Autism Society of Florida has been Florida\'s leading autism advocacy organization since 1988. Its board is composed entirely of parents and family members of people with autism, and adults with autism themselves. In 2026, Alex was named an Honorary Board Member — a recognition extended to individuals whose advocacy record and community commitment warrant it. The ASF\'s own description of Alex captures something that no legal credential can: "He often describes himself not just as an advocate, but as a \'big brother\' to individuals with autism and the families who love them — an approach grounded in compassion, connection, and reassurance that no family stands alone."',
      },
      {
        type: 'p',
        text: 'That is not a marketing line. That is the standard the Autism Society of Florida applied when they gave him a seat at their table.',
      },
      {
        type: 'h2',
        text: 'What This Means for Your Case',
      },
      {
        type: 'p',
        text: 'When you hire an attorney to pursue a VICP claim for your child, you are trusting them with something that took years to understand and years of heartbreak to confirm. You deserve someone who already understands what autism looks like in a household at 6am on a Tuesday — not someone who read about it in a medical summary. Alex Kompothecras has been that person his entire life. The Autism Justice Foundation is what that life built.',
      },
      {
        type: 'warning',
        text: "VICP claims for vaccine-related autism injuries must generally be filed within 3 years of the first symptom or diagnosis. The window does not pause. If you are unsure whether your family's window is still open, a free consultation will tell you exactly where you stand.",
      },
      {
        type: 'instagram',
        shortcode: 'DVesjeoAOkg',
        caption: 'Alex Kompothecras on the Alpha Law Group Autism 5K and the mission behind it.',
      },
    ],
  },
  {
    slug: 'alex-kompothecras-hb365-florida-house-testimony',
    title: 'Alex Kompothecras Testifies Before Florida House on HB365 — Passes Unanimously',
    deck: 'Representing the Autism Society of Florida before the Florida House of Representatives, Alex Kompothecras delivered a direct message: in-person officer training for autism interactions is non-negotiable. The committee agreed unanimously.',
    date: 'March 2026',
    author: 'Autism Justice Foundation',
    image: '/Alex-Kompothecras.webp',
    imageCaption: 'Alex Kompothecras, Managing Attorney at Alpha Law Group and Honorary Board Member of the Autism Society of Florida.',
    category: 'Advocacy',
    body: [
      {
        type: 'p',
        text: 'Alex Kompothecras appeared before the Florida House of Representatives on behalf of the Autism Society of Florida to testify in support of HB365 — legislation mandating in-person law enforcement training for interactions with individuals on the autism spectrum.',
      },
      {
        type: 'quote',
        text: '"In-person" officer training is a non-negotiable requirement for the safety of our loved ones.',
        cite: '— Alex Kompothecras, Florida House Committee testimony, March 2026',
      },
      {
        type: 'p',
        text: 'The committee passed HB365 by a unanimous vote. For Alex, this was not a professional milestone — it was personal. He grew up protecting younger siblings on the autism spectrum, and that experience shapes both his legal practice at Alpha Law Group and his advocacy at the state level.',
      },
      {
        type: 'p',
        text: 'HB365 addresses a documented gap: law enforcement agencies across Florida have inconsistently implemented autism awareness training, with much of existing training delivered online. The bill mandates in-person interaction — ensuring officers build the situational awareness needed when responding to autism-related calls. Mishandled encounters have resulted in injury, trauma, and worse for autism families who had every reason to expect protection.',
      },
      {
        type: 'p',
        text: 'Alpha Law Group has made legislative advocacy a core part of its mission alongside direct legal representation for autism families. The unanimous vote on HB365 is among the most significant autism-related legislative wins in Florida in recent years.',
      },
      {
        type: 'instagram',
        shortcode: 'DVMn_tpFEYS',
        caption: 'Alex Kompothecras addresses the Florida House Committee on HB365. The bill passed unanimously.',
      },
      {
        type: 'warning',
        text: 'If your family has experienced harm due to inadequate law enforcement training in an autism-related incident, Alpha Law Group may be able to help.',
      },
    ],
  },
  {
    slug: 'desantis-appoints-gary-chiropractic-board-2026',
    category: 'Official Appointment',
    date: 'January 2026',
    title: 'Governor DeSantis Appoints Dr. Gary Kompothecras to the Florida Board of Chiropractic Medicine',
    deck: "The same man who spent fifteen years fighting Florida's public health bureaucracy for autism accountability has now been appointed by Governor DeSantis to oversee one of the state's key medical licensing boards. It is not a coincidence.",
    image: '/gary-kompothecras-formal.webp',
    imageCaption: 'Dr. Gary Kompothecras, founder of 1-800-ASK-GARY and co-founder of the Autism Justice Foundation. Appointed by Governor DeSantis to the Florida Board of Chiropractic Medicine, January 2026.',
    author: 'AJF Editorial Staff',
    body: [
      {
        type: 'p',
        text: "In January 2026, Governor Ron DeSantis appointed Dr. Gary Kompothecras to the Florida Board of Chiropractic Medicine — the state regulatory body that oversees licensure, discipline, and professional standards for chiropractic practitioners across Florida. It is a formal position. It carries real authority. And for anyone who has followed Gary Kompothecras's history with Florida state government, the appointment carries a particular weight.",
      },
      {
        type: 'p',
        text: "This is the same man who, beginning in 2008, used every political and financial tool at his disposal to pressure Florida's public health establishment into investigating the connection between thimerosal-containing vaccines and autism. He was appointed to the Governor's Task Force on Autism Spectrum Disorders by Governor Charlie Crist. He championed legislation the Florida Department of Health resisted at every turn. He emailed agency directors demanding accountability and signed those emails with the phrase: \"Govern yourselves accordingly.\" He was called a bully. He was called politically motivated. The system stonewalled him for years. And he kept going.",
      },
      {
        type: 'h2',
        text: 'Why the Appointment Matters',
      },
      {
        type: 'p',
        text: "Governor DeSantis did not appoint Gary Kompothecras despite his history of confronting Florida's medical bureaucracy. He appointed him because of it. The DeSantis administration has made vaccine transparency and medical freedom central pillars of Florida health policy — the same positions Gary has held publicly for nearly two decades. When DeSantis and Surgeon General Joseph Ladapo announced their intention to eliminate vaccine mandates from Florida statutes, they were adopting a platform that Gary Kompothecras had been running on since before most people had heard of either of them.",
      },
      {
        type: 'p',
        text: "The appointment is not an honorary title. The Florida Board of Chiropractic Medicine has the authority to investigate complaints, impose discipline, and set professional standards. Dr. Gary now sits on a board with genuine regulatory reach — in the same state where, fifteen years ago, bureaucrats hoped he would simply get tired and stop.",
      },
      {
        type: 'quote',
        text: '"I will not wait any longer. I want a clear, precise timeline now. Govern yourselves accordingly."',
        cite: '— Dr. Gary Kompothecras, email to Florida Department of Health Director, August 2010',
      },
      {
        type: 'h2',
        text: 'What Does Not Change',
      },
      {
        type: 'p',
        text: "The DeSantis appointment is a public confirmation of something Gary and Beth Kompothecras have always known: they were right. The political and scientific landscape has shifted decisively toward the positions they held when it was professionally costly to hold them. RFK Jr. is now Secretary of Health and Human Services. The Florida Senate passed the Medical Freedom Act in March 2026. The MAHA movement is federal policy.",
      },
      {
        type: 'p',
        text: "What does not change is the urgency for the thousands of autism families whose VICP filing windows have already closed, or are closing now. Political victories do not reopen statute of limitations deadlines. They do not recover compensation for families who waited. That is the work the Autism Justice Foundation exists to do — not celebrating that the moment has arrived, but making sure every eligible family acts before their window closes.",
      },
      {
        type: 'warning',
        text: "The VICP 3-year statute of limitations is strict and rarely waived. Whether the political moment is favorable or not has no bearing on whether your family's filing window is open. Find out now — before it isn't.",
      },
    ],
  },
  {
    slug: 'bronson-sarah-alice-vicp-petitioners',
    category: 'Personal Record',
    date: 'March 12, 2026',
    title: 'Before They Built the Autism Justice Foundation, Gary and Beth Filed Their Own Children in Vaccine Court',
    deck: "The federal VICP system denied Bronson and Sarah Alice Kompothecras. Their parents spent the next fifteen years making sure no other family had to navigate that system alone — or unprepared.",
    image: '/gary-beth-family.webp',
    imageCaption: "The Kompothecras family — Alex (in the tree), Sarah Alice (center), and Bronson (right, in blue). Two of Gary and Beth's six children were diagnosed with severe autism as toddlers.",
    author: 'AJF Editorial Staff',
    body: [
      {
        type: 'p',
        text: "There is no credential more relevant to navigating the federal Vaccine Injury Compensation Program than having personally filed a claim in it — and having that claim denied. Gary and Beth Kompothecras know the VICP system not from law review articles or expert witnesses. They know it because they put their own children's names on the petition, hired attorneys, waited through the administrative process, and received a denial.",
      },
      {
        type: 'p',
        text: "Bronson and Sarah Alice Kompothecras were filed as petitioners in the federal Vaccine Injury Compensation Program — the so-called Vaccine Court — by their parents, who believed their children's severe autism was connected to thimerosal-containing vaccines administered in infancy. Both cases were ultimately closed without compensation.",
      },
      {
        type: 'h2',
        text: 'What the VICP System Actually Is',
      },
      {
        type: 'p',
        text: 'The Vaccine Injury Compensation Program was created by Congress in 1986 under the National Childhood Vaccine Injury Act. Its stated purpose was to provide a no-fault, non-adversarial compensation system for families of children injured by vaccines — a faster, simpler alternative to suing vaccine manufacturers directly. In practice, the VICP has become one of the most technically complex administrative law proceedings in the federal system. Claims are decided by Special Masters in the U.S. Court of Federal Claims. The burden of proof, the evidentiary standards, and the statute of limitations rules are stringent. Most autism-related claims — which were briefly recognized under a provisional theory during the "Omnibus Autism Proceeding" in the late 2000s — were eventually denied en masse.',
      },
      {
        type: 'p',
        text: 'The Kompothecras family was not an outlier. They were part of a generation of autism families who believed the system was built to help them — and discovered, after years of waiting, that it was built to resist them. Their cases were denied. Their fight did not end there.',
      },
      {
        type: 'h2',
        text: 'Why the Denials Made Them Stronger',
      },
      {
        type: 'p',
        text: "Gary Kompothecras responded to the VICP experience the way he responds to every wall: he studied the wall. He learned the system's pressure points — the statute of limitations traps, the evidentiary bottlenecks, the political leverage points where family advocacy could move the needle. He went to legislative hearings. He went to congressional testimony rooms. He funded research. He built relationships with the attorneys, the scientists, and the legislators who were actually trying to change outcomes for autism families.",
      },
      {
        type: 'p',
        text: "When Gary and Beth co-founded the Autism Justice Foundation in September 2025, they were not entering a field they had read about. They were formalizing thirty years of accumulated knowledge about a system they had been fighting from the inside — as petitioners, as advocates, as parents who had been told no, and who refused to accept that as the final answer.",
      },
      {
        type: 'h2',
        text: 'What This Means for Your Family',
      },
      {
        type: 'p',
        text: "The difference between an attorney who understands the VICP and one who merely practices in it is the difference between someone who reads about a maze and someone who has walked it. The Autism Justice Foundation was built by people who walked it — with their own children's cases, over the course of two decades. They know where the system fails. They know the arguments that work and the ones that don't. And they know that the statute of limitations is not an abstraction. It is a hard wall that closes families out permanently.",
      },
      {
        type: 'p',
        text: 'If your child has been diagnosed with autism and you believe vaccines played a role, the question is not whether the political moment is right. The question is whether your filing window is still open. The Autism Justice Foundation will tell you the answer — at no charge, with no obligation.',
      },
      {
        type: 'warning',
        text: 'VICP petitions must generally be filed within 3 years of the first symptom or autism diagnosis. If your child was diagnosed years ago and you have not yet filed, your window may be narrowing or already closed. A free consultation is the only way to know for certain.',
      },
    ],
  },
  {
    slug: 'david-nino-rodriguez-never-give-up',
    category: 'Advisory Board',
    date: 'March 12, 2026',
    title: 'He Beat Mike Tyson\'s Record, Survived Having His Throat Slit, and Built a Media Empire From the Wreckage. Meet David "Nino" Rodriguez.',
    deck: 'Before he became one of the most trusted independent voices in American media, Nino Rodriguez went 36–0 with a knockout record that rewrote heavyweight history — and then survived an attempted murder that should have ended everything.',
    image: '/nino-red-carpet-hd.webp',
    imageCaption: 'David "Nino" Rodriguez at the 2012 NCLR ALMA Awards, Pasadena, California. Photo: Kevin Winter/Getty Images for NCLR.',
    author: 'AJF Editorial Staff',
    body: [
      { type: 'knockout', tysonSrc: '/nino-tyson-hd.webp' },
      { type: 'p', text: 'There is a phrase that David "Nino" Rodriguez has used in front of thousands of school kids, in detention facilities, in gymnasiums, and on his podcast: "Never give up and always show up." It sounds simple. Coming from Nino, it lands like a fist, because the man saying it has been tested at levels that most motivational speakers have not.' },
      { type: 'p', text: 'Born September 18, 1977 in El Paso, Texas, Nino grew up being bullied. He got into boxing at around six years old, didn\'t truly commit to it until he was thirteen or fourteen, and when he did, what followed was historic. He turned professional in 1998 and the results were immediate — 18 straight knockouts to open his career, 17 of them in the first round. By the time his record reached 36–0 with 34 knockouts, boxing historians had to acknowledge what the numbers said plainly: his 24 first-round knockouts had surpassed the legendary first-round KO record of Mike Tyson. He was ranked #10 in the world by the WBC and #12 by the WBA, listed among ESPN\'s top 25 pound-for-pound prospects, and widely believed to be on trajectory to become the first Mexican Heavyweight Champion of the World.' },
      { type: 'youtube', videoId: 'ZPRZS0UELnk', title: 'David "Nino" Rodriguez — Full Interview' },
      {
        type: 'photogallery',
        photos: [
          { src: '/nino-ring-punch-hd.webp', caption: 'Nino Rodriguez in the ring — 36 professional fights, 34 KOs, 24 first-round knockouts.' },
          { src: '/david-nino-rodriguez-main.webp', caption: 'At the 2012 NCLR ALMA Awards — Photo: Kevin Winter/Getty Images for NCLR' },
          { src: '/david-nino-rodriguez-bullying.jpg', caption: 'David "Nino" Rodriguez — anti-bullying campaign. Courtesy of David Nino Rodriguez.' },
          { src: '/david-nino-rodriguez-ring.jpg', caption: 'Rodriguez raises his fist in victory — a pose the ring knew well for 36 consecutive wins.' },
          { src: '/david-nino-rodriguez-thumb.png', caption: '"Nino" Rodriguez — WBC/WBA world-ranked heavyweight, El Paso, Texas.' },
        ],
      },
      { type: 'h2', text: 'The Night Everything Changed' },
      { type: 'p', text: 'On December 30, 2011, outside a restaurant in Scottsdale, Arizona, a man with a knife nearly ended all of it. The attack left Nino with 369 stitches and a scar running the full length of his face. He fell into a coma for over a day. "They slit my throat," he later said, turning to show the scar etched along his jawline. "I saw the blood gush out of my body." He lost so much blood he doesn\'t remember being put in the ambulance. He blacked out repeatedly before waking up in a hospital bed, asking only one thing: "Did you get the guys?"' },
      { type: 'p', text: 'The psychological toll was harder to suture than the physical wound. He forced himself back into training. He returned to the ring. He lost — twice. "I went from hero to zero," he said, "in a matter of two fights." Back surgery eventually ended his career for good. A back injury that could not be undone finished what the knife had started.' },
      { type: 'h2', text: 'The Harder Fight' },
      { type: 'p', text: 'What followed was a period Nino has never tried to hide. Alcohol dependency tightened its grip after his boxing identity was gone. There were moments of genuine darkness — suicidal ideation that he has spoken about publicly and directly. "I was really at that point where I was just putting a gun to my head and just trying to think of a reason." He had already lost his sister to alcoholism. The thought of his parents burying another child is what stopped him.' },
      { type: 'p', text: 'His faith, rooted in a Catholic childhood where he served as an altar boy, became the anchor. He walked into a bar in El Paso one last time, looked at the drink in front of him, and made a decision. "I took one last drink," he said, "and I put it down. I said, \'I\'m done.\'" He publicly announced one year of sobriety on December 26, 2020. On December 28, 2024, he announced his baptism.' },
      { type: 'h2', text: 'The Schools. The Kids. The Book.' },
      { type: 'p', text: 'Nino discovered his post-boxing mission in an unlikely place: the same schools and detention facilities where the bullied kids he had once been sat waiting for someone to tell them the truth. He began speaking — not from a prepared corporate script, but from his own unfiltered record of being bullied as a child, becoming a bully in return, climbing to the top of the world\'s most brutal sport, surviving an attempted murder, and coming back anyway. "Some of these kids don\'t have parents," he observed. "Many come from drug-addicted or dysfunctional homes. A lot of these kids don\'t have a father figure. And that\'s what\'s really so troubling about this country."' },
      { type: 'p', text: 'He prioritizes time with the kids after his talks — signing autographs, staying until every person who wants a moment with him gets one. His bestselling book, When The Lights Go Out: From Survivor to Champion, documents the full arc. He describes it as "a manual for anyone who is struggling." The Epoch Times called his advocacy campaign a mission — not a program, not a brand initiative, a mission.' },
      { type: 'h2', text: 'Nino\'s Corner' },
      { type: 'p', text: 'Today, David "Nino" Rodriguez is the founder and CEO of Nino\'s Corner TV — a subscription media platform and podcast that airs live Monday, Wednesday, and Friday, reaching upwards of 50 million people per month across all platforms, with 510,000 YouTube subscribers as of December 2025. He has appeared on national television as a boxing commentator, he runs a clothing line called Patriot Wear, and he has built one of the most loyal independent media audiences in the country — not because of a network deal or a PR firm, but because the man on screen is exactly who he says he is.' },
      { type: 'p', text: '"I don\'t worry about it," he said when asked about his future. "I know God\'s got my back. I\'m following God, and I\'m growing organically." That is not a talking point. For Nino Rodriguez, it is a documented, hard-won truth — one purchased at considerable cost, and shared freely with anyone willing to listen.' },
      { type: 'warning', text: 'The Autism Justice Foundation exists because every family dealing with a vaccine-injured child deserves someone in their corner who has been tested and didn\'t quit. Learn whether your family has a VICP claim — free consultation, no obligation.' },
    ],
  },
]

export default function InTheFightPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-white border-b border-[#E2E8F0] py-14">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-xs font-bold tracking-widest uppercase text-[#0a1628] mb-3">Advocacy Record</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            In The Fight
          </h1>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Before the foundation. Before the law firm. Before the phone rang. The Kompothecras family was already in the fight.
          </p>
        </div>
      </section>

      {/* Articles */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        {articles.map((article) => (
          <article key={article.slug} className="mb-16">
            {/* Category + Date */}
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#0a1628] text-[#d4a843] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="text-sm text-[#475569]">{article.date}</span>
            </div>

            {/* Title + Deck */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              {article.title}
            </h2>
            <p className="text-lg text-[#475569] mb-6 leading-relaxed italic">
              {article.deck}
            </p>

            {/* Author */}
            <p className="text-sm text-[#94a3b8] mb-8">By {article.author}</p>

            {/* Hero Image */}
            {article.image && (
              <figure className="mb-10 rounded-xl overflow-hidden shadow-md border border-[#E2E8F0]">
                <img
                  src={article.image}
                  alt={article.imageCaption}
                  className="w-full object-cover max-h-[480px]"
                  style={article.image === '/nino-red-carpet-hd.webp' ? { objectPosition: 'center 15%' } : undefined}
                />
                <figcaption className="text-xs text-[#475569] italic text-center px-4 py-3 bg-[#F8F9FA] border-t border-[#E2E8F0]">
                  {article.imageCaption}
                </figcaption>
              </figure>
            )}

            {/* Body */}
            <div className="space-y-5">
              {article.body.map((block: { type: string; text?: string; cite?: string; videoId?: string; title?: string; photos?: { src: string; caption: string }[]; posterSrc?: string; tysonSrc?: string; shortcode?: string; caption?: string }, i: number) => {
                if (block.type === 'youtube' && block.videoId) {
                  return (
                    <div key={i} className="my-8">
                      <a
                        href={`https://www.youtube.com/watch?v=${block.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="bg-[#0a1628] px-4 py-3 flex items-center justify-between">
                          <p className="text-[#d4a843] text-xs font-bold tracking-widest uppercase font-sans">
                            ▶ Watch: {block.title || 'Video'}
                          </p>
                          <span className="text-[#94a3b8] text-xs font-sans">Opens on YouTube →</span>
                        </div>
                        <div className="relative bg-black">
                          <img
                            src={`https://img.youtube.com/vi/${block.videoId}/hqdefault.jpg`}
                            alt={block.title || 'Watch video'}
                            className="w-full object-cover"
                            style={{ maxHeight: '400px' }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                              <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  )
                }
                if (block.type === 'vimeo' && block.videoId) {
                  return (
                    <div key={i} className="my-8 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-md">
                      <div className="bg-[#0a1628] px-4 py-3 flex items-center justify-between">
                        <p className="text-[#d4a843] text-xs font-bold tracking-widest uppercase font-sans">
                          ▶ {block.title || 'Watch Documentary'}
                        </p>
                        <span className="text-[#94a3b8] text-xs font-sans italic">Producer Version</span>
                      </div>
                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={`https://player.vimeo.com/video/${block.videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=0`}
                          title={block.title || 'Documentary'}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )
                }
                if (block.type === 'photogallery' && block.photos) {
                  return (
                    <div key={i} className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {block.photos.map((photo, j) => (
                        <figure key={j} className="rounded-xl overflow-hidden border border-[#E2E8F0]">
                          <img src={photo.src} alt={photo.caption} className="w-full object-cover" style={{ maxHeight: '320px' }} />
                          <figcaption className="bg-[#F8F9FA] px-3 py-2 text-xs text-[#475569] font-sans italic">{photo.caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  )
                }
                if (block.type === 'h2') {
                  return (
                    <h3
                      key={i}
                      className="text-2xl font-bold text-[#111827] mt-10 mb-2"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {block.text}
                    </h3>
                  )
                }
                if (block.type === 'warning') {
                  return (
                    <div key={i} className="bg-[#fdf8ee] border border-[#d4a843]/40 rounded-lg p-5 mt-6">
                      <p className="text-sm font-semibold text-[#0a1628] mb-1">Important Deadline Notice</p>
                      <p className="text-sm text-[#475569]">{block.text}</p>
                      <a
                        href="/intake/phase-1"
                        className="inline-block mt-3 bg-[#d4a843] text-[#0a1628] font-bold text-xs tracking-widest uppercase px-5 py-2.5 rounded-lg hover:bg-[#b8902e] transition-colors"
                      >
                        Free Case Review →
                      </a>
                    </div>
                  )
                }
                if (block.type === 'quote') {
                  return (
                    <blockquote key={i} className="border-l-4 border-[#d4a843] pl-6 my-8 italic text-[#111827]">
                      <p className="leading-relaxed">{block.text}</p>
                      {block.cite && (
                        <span className="block mt-2 text-sm font-semibold not-italic text-[#0a1628]">
                          {block.cite}
                        </span>
                      )}
                    </blockquote>
                  )
                }
                if (block.type === 'instagram') {
                  return (
                    <div key={i} className="my-8 flex justify-center">
                      <div className="w-full max-w-xl">
                        {block.caption && (
                          <p className="text-sm font-semibold text-[#0a1628] font-sans mb-3 text-center italic">
                            {block.caption}
                          </p>
                        )}
                        <div className="rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm bg-white p-4 text-center">
                          <p className="text-[#475569] text-sm mb-3">Watch on Instagram</p>
                          <a
                            href={`https://www.instagram.com/reel/${block.shortcode}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#0a1628] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#d4a843] hover:text-[#0a1628] transition-colors"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                            Watch Video on Instagram
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                }
                if (block.type === 'knockout') {
                  return (
                    <div key={i} className="my-10 rounded-2xl overflow-hidden border-2 border-[#d4a843] shadow-xl">
                      {/* Navy header — KO headline */}
                      <div className="bg-[#0a1628] px-8 py-6 text-center">
                        <p className="text-[#d4a843] text-xs font-bold tracking-widest uppercase font-sans mb-2">
                          Advisory Board · Autism Justice Foundation
                        </p>
                        <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight" style={{fontFamily:'Georgia,serif'}}>
                          Nino Joins the Fight to<br />
                          <span className="text-[#d4a843]">Knock Out Autism.</span>
                        </h3>
                        <p className="text-[#94a3b8] text-sm font-sans mt-3 max-w-xl mx-auto">
                          36–0. 34 KOs. WBC &amp; WBA Ranked. Now fighting the most important battle of his life — for autism families who need a champion in their corner.
                        </p>
                      </div>

                      {/* Tyson photo — full width cinematic */}
                      <div className="relative">
                        <img
                          src={block.tysonSrc}
                          alt="David 'Nino' Rodriguez with Mike Tyson — two heavyweight legends"
                          className="w-full object-cover"
                          style={{maxHeight:'480px', objectPosition:'center top'}}
                        />
                        {/* Gold caption bar */}
                        <div className="absolute bottom-0 left-0 right-0 bg-[#0a1628]/85 px-6 py-3">
                          <p className="text-[#d4a843] text-xs font-bold font-sans tracking-wide">
                            David &ldquo;Nino&rdquo; Rodriguez with Mike Tyson — two champions who know what it means to fight through the impossible.
                          </p>
                        </div>
                      </div>

                      {/* Gold bottom rule */}
                      <div className="h-1 bg-[#d4a843]" />
                    </div>
                  )
                }
                if (block.type === 'vaxxedpromo') {
                  return (
                    <div key={i} className="my-10 rounded-2xl overflow-hidden border-2 border-[#d4a843] shadow-xl">
                      {/* Dark cinematic header */}
                      <div className="bg-black px-8 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex-1">
                          <p className="text-[#d4a843] text-xs font-bold tracking-widest uppercase font-sans mb-1">
                            The Film That Started It All
                          </p>
                          <h3 className="text-white text-2xl font-bold leading-tight" style={{fontFamily:'Georgia,serif'}}>
                            VAXXED: From Cover-Up to Catastrophe
                          </h3>
                          <p className="text-[#94a3b8] text-sm font-sans mt-1">
                            Award-Winning Documentary · Directed by Dr. Andrew Wakefield · 2016
                          </p>
                        </div>
                      </div>

                      {/* Poster + CTA row */}
                      <div className="bg-[#0a1628] flex flex-col sm:flex-row items-stretch">
                        {/* Movie poster */}
                        <div className="sm:w-48 flex-shrink-0">
                          <img
                            src={block.posterSrc}
                            alt="VAXXED: From Cover-Up to Catastrophe — Official Movie Poster"
                            className="w-full h-full object-cover"
                            style={{minHeight:'200px', maxHeight:'300px'}}
                          />
                        </div>
                        {/* CTA copy */}
                        <div className="flex-1 p-6 flex flex-col justify-center">
                          <p className="text-white font-sans text-lg font-bold mb-3 leading-snug">
                            &ldquo;The film they don&rsquo;t want you to see.&rdquo;
                          </p>
                          <p className="text-[#94a3b8] font-sans text-sm leading-relaxed mb-5">
                            When CDC whistleblower Dr. William Thompson came forward with evidence that the agency had concealed data linking the MMR vaccine to autism in African American boys, filmmaker Del Bigtree and Dr. Wakefield documented it. The result was VAXXED — banned from film festivals, attacked by the press, and seen by millions. Watch the full-length documentary below, presented in the producer version made possible by Dr. Gary Kompothecras.
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#d4a843] flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-[#0a1628] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                            <p className="text-[#d4a843] font-bold font-sans text-sm tracking-wide uppercase">
                              Full Documentary — Streaming Below ↓
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Gold bottom rule */}
                      <div className="h-1 bg-[#d4a843]" />
                    </div>
                  )
                }
                return (
                  <p key={i} className="text-[#475569] leading-relaxed text-base">
                    {block.text}
                  </p>
                )
              })}
            </div>

            {/* Bottom Divider */}
            <hr className="border-[#d4a843]/30 mt-12" />
          </article>
        ))}

        {/* Bottom CTA */}
        <div className="text-center pt-8">
          <h3 className="text-xl font-bold text-[#111827] mb-4">Ready to take the first step?</h3>
          <Link
            href="/intake/phase-1"
            className="inline-block bg-[#d4a843] text-[#0a1628] font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#b8902e] transition"
          >
            Start My Claim &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
