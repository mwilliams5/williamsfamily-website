export interface RWWDocument {
  slug: string;
  title: string;
  author: string;
  role: string;
  type: "Eulogy" | "Letter" | "Poem" | "Notes";
  service: string;
  content: string; // paragraphs separated by \n\n, lines within a paragraph by \n
  note?: string;
}

export const rwwDocuments: RWWDocument[] = [
  // ── Rosary – November 9, 2005 ──────────────────────────────────────────
  {
    slug: "eulogy-damian",
    title: "Eulogy at the Rosary",
    author: "Damian Williams (#4)",
    role: "Son",
    type: "Eulogy",
    service: "Rosary Service – November 9, 2005",
    content: `Some of my most vivid memories of Dad are of him reciting one of his many sayings. For example, any given day you could ask Dad "How's it going" and he would almost always reply "shitty." Other memories include family gatherings which usually included some sort of barbeques, designing the family ring, working on a project such as building the addition, plumbing, rebuilding the engine in Kathi's Camero, and of course him helping the children with their math homework.

Math homework was the worst. It usually entailed me sitting at the table, tears streaming down my cheeks and Dad frustrated that I was not grasping the concept. Who can forget the famous question "What part of the problem don't you understand?" I can remember sitting at the table, working a problem out for the third time and thinking this man was once a teacher? I could picture a class with some 30 children, all crying, and Dad at a chalk board writing out more algebraic equations. I always thought it was a fantastic move for him to get out of the classroom and move into aerospace at Douglas. I mean, how could he ever get a concept through to anyone, much less a room full of kids?

When I reflect on these times I am reminded of the time Michael and I, with the help of many of our siblings, put a new roof on Michael's house, the time Jeanie and Chuck had an addition built mostly by family and friends, and the many times we have all done auto work from brake jobs to engine rebuilds. I don't recall a single time being frustrated or upset as I worked with Dad on these projects as a child, and yet all of this must have sunk in as all the children learned these skills at Dad's knee.

I now understand what a great teacher he actually was. This brings to mind one of his sayings — or pearls of wisdom as the children had started calling them — "If I can teach you anything, it is that you should be aware of what is going on around you." He had later named this lesson Path Finding. If you stopped by the house while Dad was out you would most certainly receive a call later that day with Dad saying he had read the signs and knew you had stopped by. The children would chide each other if one of them missed an obvious sign — we would take their Path Finding badge away.

As I look around today I am keenly aware of many friends Dad has. He talked about them all the time. He felt so close to so many people that our family had grown way beyond the family tree that would print out from his genealogy software. There were several children who joined our family and lived with us as they finished high school. These extended siblings would argue about who is number 11, 12, and on and on. I laugh when I think of the many nurses who would come in to his room and say "Immediate family only" and the response was always "We are immediate family!" If Sam was there it was a little tougher to sell but no one ever questioned us.

That is where Dad liked to be — surrounded by family. He would coordinate many stealth barbeques. He would call the children on the phone and set a time for everyone to just stop by. When you would show up you would be handed your assignment. There would be a large piece of meat that needed to be cooked, side dishes and desserts that needed to be prepared and drinks that needed to be iced down. I would normally end up in front of the barbeque cooking the roast beast looking towards the heater to find Dad sitting, drink in hand, with his family all around him. This was exactly where he wanted to be.

Last week, I found out Dad was given an assignment of his own from one of the grandchildren who obviously learned well from him. As Dad explained it to me he was going to be a Guardian Angel. I understand he is taking requests and if anybody from the extended family needs guidance please feel free to put in the request. I just suggest you don't ask for help with any math homework.`,
  },
  {
    slug: "letter-jakob",
    title: "Letter from Grandson Jakob",
    author: "Jakob (grandson)",
    role: "Grandson",
    type: "Letter",
    service: "Rosary Service – November 9, 2005",
    content: `About My Papa

I remember whenever I heard the ice-cream man I would go to Papa's house and there he would be with a new dollar. I remember when my mom and I would go eat over at Papa's house, Papa would say he's the meanest guy he knows, but the next day we came over and he would say he's the nicest guy he knows — and he is the nicest guy I know. That's why I would always want to be with him forever, because he always stuck to my side. When he would watch me he would never let anything happen to me. That's why I love him with all my heart. Also, whenever he would watch me he would give me a walky-talky so he could call me if he needed anything. Sometimes when I visited he would do the bear trap. That's why I would want him to be here — because we would always do stuff together.

I love you Papa, love your grandson,
Jake the Snake

November 9, 2005`,
  },
  {
    slug: "eulogy-mary-elizabeth",
    title: "Eulogy at the Rosary",
    author: "Mary Elizabeth Williams (#9)",
    role: "Daughter",
    type: "Eulogy",
    service: "Rosary Service – November 9, 2005",
    content: `In Loving Memory of My Father
Robert Rambo Williams
May 16, 1936 – November 6, 2005

Blessed
By Mary Elizabeth Williams

As your daughter I feel truly blessed
As a father you were the utmost best
To have had you in my life this long
I'm thankful, but I'm sad you're gone

Bestowing traits and values too
I'm hopeful to be just like you
Self reliant and head strong
Willing to admit you're wrong (sometimes)

Building friendships that we all admire
As a parent you were one to inspire

Your generosity cannot be matched
Faith a trait you didn't lack
Dedicated to your loving kids
Recognizing all the small things we did

You always opened up your home
It was hard for us to feel alone
A well loved Papa like no other
A devoted husband and stubborn brother

Helping me raise my son without reserve
Giving me so much more than I deserve

Filling my life with love and with bliss
Dad, there's so much of you I'm going to miss
Our chats before I went to work
Consoling me when I was hurt
I miss the phone calls galore I received each day
Even the pointless ones where we had nothing to say
Cooking and eating and watching TV
All the times that you said that you're so proud of me
Your laughter when I'd say I was the favorite
We both know that I am, Dad — you didn't have to admit it
I miss hearing you say how much you loved my son
And your daily complaints about pretty much everyone
The way that you hugged me when the end was so near
And telling me daily what I needed to hear
I miss all your bear hugs — and of course your love too
But most of all Daddy — I just miss the company of you
Being your daughter was absolutely a treat
I yearn for the next time we'll be able to meet
And yet, although you are gone — there's still so much of you I see
In all the faces that still surround me.

Jean — in you I see Dad's strong will to make things happen.

Kathi — your ability to listen and give advice — as well as your gift of chatting on the phone for hours on end.

Robbie — you are his namesake — who could ask for a better gift.

Damian — you are Dad's strength — just know it is okay to be weak — we are here for you too.

Mike — you are the bond that brings us together — you give meaning to the word family.

Tom — your gift of humor is definitely from Dad.

Trish-Ann — your compassion for others and selflessness are gifts from Dad.

Joe — your ability to whip up a cheesecake in minutes for a special occasion — if that's not Dad, I don't know what is. And you're a bit stubborn too.

Heather — you are Daddy's little girl and always will be — you are a true reflection of what he stood for — who he was — and who he is in our hearts.

Mom — your unconditional love for your children coincides with the love Dad has for us.

Jakob — your good nature and devotion to Papa makes it evident why he was so proud of us!

Mr. Armor, Doc, Ralph, Rocky, and Mr. & Mrs. Schwenk (as well as so many others) — in you all I see the devoted friend my father was — and I thank you for being a part of his life.

Dad, we are honored to celebrate the distinguished individual you were in our lives — to recognize the united family that you created — to acknowledge your accomplishments as a father, brother, uncle, Papa, and friend — and to let you know you were loved so deeply by so many. Know that your legacy will live on in us.`,
  },

  // ── Funeral – November 10, 2005 ────────────────────────────────────────
  {
    slug: "eulogy-michael",
    title: "Eulogy at the Funeral",
    author: "Michael Williams (#5)",
    role: "Son",
    type: "Eulogy",
    service: "Funeral Service – November 10, 2005",
    content: `Always take roll when you get in the car.

This is one of the many things my father taught me over the years. This was a lesson taught not only with words but also with examples. For those of you who followed the Williams Family Christmas letter, I was the one who, as a child, was left at the park, in Tennessee and at Disneyland. But he always made sure I made it home in the end — and the Disneyland incident may have been partially my fault.

Dad would have told everyone here not to cry for him. Not to waste time on the funeral but to have a party instead. Celebrate his life and have a drink for him. Make sure we break out the last bottle of Christian Brothers brandy made by the monks before they sold the goose. The one signed by Brother Timothy, and have a drink with Doc and the guys. He definitely would not have been on board with the Rosary held yesterday at 7:00 pm. Everyone knows that seven o'clock on a weeknight is for Jeopardy. But I know he would want to see the impact he had on our lives. To know our lives were better when he was with us.

Being from the South, he also taught us that times like this should be met with comfort foods. When tragedy struck a friend or neighbor we would be making fried chicken, biscuits and of course, banana pudding. A simple gesture to let them know that you care, you understand their pain and maybe some pudding could help take it away for a moment.

If you paid attention you would find small gestures showing how much he cared every day. He would walk through a store and see an item he felt would make your life a little better and he would pick it up just because he was thinking of you. Tools, baseball cards, postage stamps and calling cards would find their way into your hands the next time you saw him.

You would go to visit and he would shuffle through the treasures he had found recently that were set out on his coffee table and hand you an assortment of items. This table was originally used for him to work on his coin collection but he had come to refer to it as the MAGNET. He referred to it that way because everything seemed to collect on it. It would gather items from everyone who passed through the house.

Dad was our magnet. He drew us to himself and made reasons for us to get together as a family. Once again, just simple gestures to get family and friends together. He would fly home from South Carolina and call to say let's meet at Silky's when my plane arrives. Buffalo wings, nachos and eight tables moved together as one meant a good time was starting. If you were with him around eleven you would hear him say "let's go get some lunch, you gotta eat lunch!" I would always make the reach for my wallet but I knew he would never let me pay. Calling his sons to tell us "boys, why don't you stop by tonight, your sister has a date and I think you should meet the fella."

In winter he would don his Santa cap and a red shirt of some type. He would walk through Mile Square Park and through the grocery stores to the awe of all the children. They would all whisper to each other "he's here." He would give them a knowing nod and a point of the finger to confirm their suspicions that it was indeed the real Santa out for a stroll. He always had a pocket full of candy canes and he would hand them out and tell the kids "Listen to your parents, because I'm coming soon."

I miss all of this and so much more. He has changed my world so much that I see him every day in the things I do and the actions of others.

When someone takes time to make sure all the kids have money for the ice cream man, I see my father.

When a child asks to play outside and you tell them "take a walky talky with you," I see him.

When you're making strawberry jam — especially on Mother's Day.

When you wrap chili dogs in foil to take them to the baseball game, because that's when they are best.

When someone rings a bell to call all the children home.

When the weight of a Christmas letter requires additional postage.

When my family gathers together I will definitely see my father.

I will not wake from this nightmare and I struggle to find sense in what has happened. The tragedy that unfolded over the last few months did not cause me to question my faith but it did cause me to have some very candid discussions with God. The morning of his passing I spoke to my brother about having the same conversation with Jesus as he had. I prayed to Jesus that he should cure my father or take him home, but do not let him linger in his current state. Jesus called him home and with his passing I found my father had left me everything I needed to move on. He left me my family. There is great love in my family and in my father's final months he took the time to teach us a final lesson. Express our love for one another. Tell your family you love them. Bring them close in your arms, hold them tight and let them feel the love in your hearts. Come together often and enjoy the company of one another.

This is the legacy of my father.

Now when my time comes to be with God I will go with less fear in my heart. I will know my father will be waiting for me with a big bear hug, and of course, some banana pudding.`,
  },
  {
    slug: "eulogy-thomas",
    title: "Eulogy at the Funeral",
    author: "Thomas Williams (#6)",
    role: "Son",
    type: "Notes",
    service: "Funeral Service – November 10, 2005",
    note: "Tom spoke largely from the heart — these are his written notes.",
    content: `BLESSED

How do you write a eulogy for your dad's funeral? Not a question I wanted to ask for a long time. I guess you try to define the man and his life. So how do you describe a man bigger than life? If you asked Dad who he is/was you would have gotten one of two answers:

1) I am the meanest man on Earth

Or

2) Shoot Tom, I am the nicest guy you will ever know.

To understand who Dad was is to understand his family. How many people watched Mom and Dad walk ten kids into eight o'clock mass and say "I wonder what it is like in that house!" Ten kids! Dad, were you CRAZY!

We lived in a house of love. A warm place we will always call home.

Single income and home for dinner
New Year's Eve dinner dances and carnivals
Always eight o'clock mass
Up at seven a.m. and home by eight a.m. from slumber parties
Christmas one at a time

DADISMS

Never have ten kids.
What are you doing inside? It's a beautiful day outside.
Let me tell you about your friend.

Dad was full of love for others. He taught me to love and that everyone needs strokes. He loved November — to be Santa. Who could miss Thursdays at Wild Doc Greenway's.

His Brother Sam. The Schwenks — Monday night football. Family back East — genealogy.

FINAL DAYS

Mom, you are everything to Dad — you know that. He always wanted more for you.

LET ME TELL YOU ABOUT YOUR FRIEND

Jeanne — always over to lock up, take charge.

Kathi — you are so Dad — always in the kitchen, always thinking of others.

Rob — he held on for you — he never lost faith.

Damian — I see Dad in you, so much strength.

Mike — the heart that binds.

Me — Favorite.

Trish — don't have ten kids. I see our family in you.

Jojo — you had his heart. He always loved his Jo.

Mary — you see the world through Dad's compassionate eyes. Always longing to make others happy.

Heather — you had Dad the least — and I do not know what to say. You are his baby. He will be at your wedding. He will know your kids.`,
  },

  // ── Burial – November 10, 2005 ─────────────────────────────────────────
  {
    slug: "letter-heather",
    title: "Letter to Dad",
    author: "Heather Marie Williams (#10)",
    role: "Daughter",
    type: "Letter",
    service: "Burial Service – November 10, 2005",
    content: `Dear Daddy,

I Grieve —
For my emotion knows no other form, but tears
I fight to stay strong in the presence of others,
But when I am alone I succumb to what feels natural
With this emptiness that consumes me

I Surrender —
As my walls are fragile today,
And you are one worth crumbling for
Know that even when I am feeling lost without you,
I am found in the company of your love and in the love of your family

I Smile —
Knowing that I breathe because you breathed
I am honored to have known you, to be a part of you and
A part of your amazing family
And I am proud that I can see the traits in you, so deeply embedded in me

I Permit —
You to continue on with your journey,
As I was not strong enough to give you that peace
When you were still with me
I will find comfort knowing that I am surrounded by extensions of your life

I Love —
As you have taught me how
In giving is receiving,
And may I continue to give what you have bestowed upon me
And make this world all you had planned it to be for those you loved

Sweet dreams Daddy, may I see you in mine tonight and every night.

All My Love,
Your Darlin' Daughter, Heather Marie`,
  },

  // ── Poem – read at Rosary ──────────────────────────────────────────────
  {
    slug: "poem-if-i-knew",
    title: "Poem: If I Knew",
    author: "Author Unknown",
    role: "",
    type: "Poem",
    service: "Read at the Rosary Service – November 9, 2005",
    content: `IF I KNEW

If I knew it would be the last time
That I'd see you fall asleep,
I would tuck you in more tightly
and pray the Lord, your soul to keep.

If I knew it would be the last time
that I see you walk out the door,
I would give you a hug and kiss
and call you back for one more.

If I knew it would be the last time
I'd hear your voice lifted up in praise,
I would video tape each action and word,
so I could play them back day after day.

If I knew it would be the last time,
I could spare an extra minute
to stop and say "I love you,"
instead of assuming you would KNOW I do.

If I knew it would be the last time
I would be there to share your day,
Well I'm sure you'll have so many more,
so I can let just this one slip away.

For surely there's always tomorrow
to make up for an oversight,
and we always get a second chance
to make everything just right.

There will always be another day
to say "I love you,"
And certainly there's another chance
to say our "Anything I can do?"

But just in case I might be wrong,
and today is all I get,
I'd like to say how much I love you
and I hope we never forget.

Tomorrow is not promised to anyone,
young or old alike,
And today may be the last chance
you get to hold your loved one tight.

So if you're waiting for tomorrow,
why not do it today?
For if tomorrow never comes,
you'll surely regret the day,
That you didn't take that extra time
for a smile, a hug, or a kiss
and you were too busy to grant someone,
what turned out to be their one last wish.

So hold your loved ones close today,
and whisper in their ear,
Tell them how much you love them
and that you'll always hold them dear.

Take time to say "I'm sorry,"
"Please forgive me," "Thank you," or "It's okay."
And if tomorrow never comes,
you'll have no regrets about today.`,
  },
];

export function getRWWDocument(slug: string): RWWDocument | undefined {
  return rwwDocuments.find((doc) => doc.slug === slug);
}
