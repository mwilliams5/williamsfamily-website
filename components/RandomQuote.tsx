"use client";

import { useState, useEffect } from "react";

const quotes = [
  { text: "I have a new philosophy. I'm only going to dread one day at a time.", author: "Charles Schulz" },
  { text: "Reality is the leading cause of stress for those in touch with it.", author: "Jack Wagner" },
  { text: "Few things are harder to put up with than the annoyance of a good example.", author: "Mark Twain" },
  { text: "The pure and simple truth is rarely pure and never simple.", author: "Oscar Wilde" },
  { text: "There's no business like show business, but there are several businesses like accounting.", author: "David Letterman" },
  { text: "Man invented language to satisfy his deep need to complain.", author: "Lily Tomlin" },
  { text: "All those who believe in telekinesis, raise my hand.", author: "Steven Wright" },
  { text: "I almost had a psychic girlfriend but she left me before we met.", author: "Steven Wright" },
  { text: "OK, so what's the speed of dark?", author: "Steven Wright" },
  { text: "Depression is merely anger without enthusiasm.", author: "Steven Wright" },
  { text: "When everything is coming your way, you're in the wrong lane.", author: "Steven Wright" },
  { text: "Hard work pays off in the future. Laziness pays off now.", author: "Steven Wright" },
  { text: "Everyone has a photographic memory. Some just don't have film.", author: "Steven Wright" },
  { text: "Shin: a device for finding furniture in the dark.", author: "Steven Wright" },
  { text: "Many people quit looking for work when they find a job.", author: "Steven Wright" },
  { text: "I intend to live forever — so far, so good.", author: "Steven Wright" },
  { text: "Eagles may soar, but weasels don't get sucked into jet engines.", author: "Steven Wright" },
  { text: "24 hours in a day... 24 beers in a case... coincidence?", author: "Steven Wright" },
  { text: "When I'm not in my right mind, my left mind gets pretty crowded.", author: "Steven Wright" },
  { text: "What happens if you get scared half to death twice?", author: "Steven Wright" },
  { text: "I used to have an open mind but my brains kept falling out.", author: "Steven Wright" },
  { text: "I couldn't repair your brakes, so I made your horn louder.", author: "Steven Wright" },
  { text: "If at first you don't succeed, destroy all evidence that you tried.", author: "Steven Wright" },
  { text: "Experience is something you don't get until just after you need it.", author: "Steven Wright" },
  { text: "For every action, there is an equal and opposite criticism.", author: "Steven Wright" },
  { text: "No one is listening until you make a mistake.", author: "Steven Wright" },
  { text: "Success always occurs in private, and failure in full view.", author: "Steven Wright" },
  { text: "The colder the X-ray table, the more of your body is required on it.", author: "Steven Wright" },
  { text: "The hardness of the butter is proportional to the softness of the bread.", author: "Steven Wright" },
  { text: "The severity of the itch is proportional to the reach.", author: "Steven Wright" },
  { text: "To steal ideas from one person is plagiarism — to steal from many is research.", author: "Steven Wright" },
  { text: "The problem with the gene pool is that there is no lifeguard.", author: "Steven Wright" },
  { text: "Monday is an awful way to spend 1/7th of your life.", author: "Steven Wright" },
  { text: "The sooner you fall behind, the more time you'll have to catch up.", author: "Steven Wright" },
  { text: "A clear conscience is usually the sign of a bad memory.", author: "Steven Wright" },
  { text: "If you must choose between two evils, pick the one you've never tried.", author: "Steven Wright" },
  { text: "A fool and his money are soon partying.", author: "Steven Wright" },
  { text: "Plan to be spontaneous tomorrow.", author: "Steven Wright" },
  { text: "If you think nobody cares about you, try missing a couple of payments.", author: "Steven Wright" },
  { text: "Drugs may lead to nowhere, but at least it's the scenic route.", author: "Steven Wright" },
  { text: "I'd kill for a Nobel Peace Prize.", author: "Steven Wright" },
  { text: "Bills travel through the mail at twice the speed of checks.", author: "Steven Wright" },
  { text: "Borrow money from pessimists — they don't expect it back.", author: "Steven Wright" },
  { text: "Half the people you know are below average.", author: "Steven Wright" },
  { text: "99 percent of lawyers give the rest a bad name.", author: "Steven Wright" },
  { text: "42.7 percent of all statistics are made up on the spot.", author: "Steven Wright" },
  { text: "You can say any foolish thing to a dog, and the dog will give you a look that says, 'My God, you're right!'", author: "Sean Connery" },
  { text: "Women feel more comfortable undressing before men than women — because men are grateful.", author: "Robert De Niro" },
  { text: "I am not the boss of my house — but I've seen the boss's job and I don't want it.", author: "Bill Cosby" },
  // — Famous & Funny Quotes —
  { text: "I try to take one day at a time, but sometimes several attack me at once.", author: "Jennifer Yane" },
  { text: "Sometimes I think I'm too sarcastic, but then I remember the people I deal with, and I'm fine again.", author: "Erma Bombeck" },
  { text: "May all your troubles last as long as your New Year's resolutions.", author: "Joey Adams" },
  { text: "Age is an issue of mind over matter. If you don't mind, it doesn't matter.", author: "Mark Twain" },
  { text: "People say nothing is impossible, but I do nothing every day.", author: "A.A. Milne (Winnie the Pooh)" },
  { text: "Don't worry about the world coming to an end today. It's already tomorrow in Australia.", author: "Charles M. Schulz" },
  { text: "People often say that motivation doesn't last. Well, neither does bathing — that's why we recommend it daily.", author: "Zig Ziglar" },
  { text: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead" },
  { text: "Always borrow money from a pessimist. He won't expect it back.", author: "Oscar Wilde" },
  { text: "I find television very educational. Every time someone turns it on, I go into another room and read a book.", author: "Groucho Marx" },
  { text: "My therapist told me the way to achieve true inner peace is to finish what I start. So far, I've finished two bags of M&M's and a chocolate cake. I feel better already.", author: "Dave Barry" },
  { text: "If you can't be a good example, you'll just have to be a horrible warning.", author: "Catherine Aird" },
  { text: "Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.", author: "Miles Kington" },
  { text: "Optimist: someone who figures that taking a step backward after taking a step forward is not a disaster, it's more like a cha-cha.", author: "Robert Brault" },
  { text: "Before you criticize someone, you should walk a mile in their shoes. That way, when you criticize them, you are a mile away from them and you have their shoes.", author: "Jack Handey" },
  { text: "Honest criticism is hard to take, particularly from a relative, a friend, an acquaintance, or a stranger.", author: "Franklin P. Jones" },
  { text: "To be is to do — Socrates. To do is to be — Jean-Paul Sartre. Do be do be do — Frank Sinatra.", author: "Kurt Vonnegut" },
  { text: "Never put off till tomorrow what may be done day after tomorrow just as well.", author: "Mark Twain" },
  { text: "Life is like a sewer — what you get out of it depends on what you put into it.", author: "Tom Lehrer" },
  { text: "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.", author: "Terry Pratchett" },
  { text: "Always forgive your enemies; nothing annoys them so much.", author: "Oscar Wilde" },
  { text: "Do not take life too seriously. You will never get out of it alive.", author: "Elbert Hubbard" },
  { text: "I have noticed that even people who claim everything is predetermined and that we can do nothing to change it look before they cross the road.", author: "Stephen Hawking" },
  { text: "Opportunity is always knocking. The problem is that most people have the self-doubt station in their heads turned up way too loud to hear it.", author: "Brian Vaszily" },
  { text: "The only time I don't have any problems in this world is when I am already six feet below the ground.", author: "James Jason" },
  { text: "I am not what I think I am, and I am not what you think I am. I am what I think you think I am.", author: "Charles Horton Cooley" },
  { text: "If hard work is the key to success, most people would rather pick the lock.", author: "Claude Maxwell MacDonald" },
  { text: "All the world's a stage and most of us are desperately unrehearsed.", author: "Seán O'Casey" },
  { text: "A man doesn't know what he knows until he knows what he doesn't know.", author: "Laurence J. Peter" },
  { text: "Even if you're on the right track, you'll get run over if you just sit there.", author: "Will Rogers" },
  { text: "When I hear somebody sigh, 'Life is hard,' I am always tempted to ask, 'Compared to what?'", author: "Sydney J. Harris" },
  { text: "If you want something done, ask a busy person to do it. The more things you do, the more you can do.", author: "Lucille Ball" },
  { text: "All you need in this life is ignorance and confidence, and then success is sure.", author: "Mark Twain" },
  { text: "If you're going through hell, keep going.", author: "Winston Churchill" },
  { text: "Opportunity does not knock, it presents itself when you beat down the door.", author: "Kyle Chandler" },
  { text: "Here is a test to find whether your mission on earth is finished — If you're alive, it isn't.", author: "Richard Bach" },
  { text: "Age is of no importance unless you're a cheese.", author: "Billie Burke" },
  { text: "Bad decisions make good stories.", author: "Ellis Vidler" },
  { text: "Never go to bed mad. Stay up and fight.", author: "Phyllis Diller" },
  { text: "You can't have everything. Where would you put it?", author: "Steven Wright" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "If you obey all the rules, you miss all the fun.", author: "Katharine Hepburn" },
  { text: "Life itself still remains a very effective therapist.", author: "Karen Horney" },
  { text: "If you can't convince them, confuse them.", author: "Harry S. Truman" },
  { text: "Procrastination is the thief of time, collar him.", author: "Charles Dickens" },
  { text: "Bending beats breaking.", author: "Betty Greene" },
  { text: "Be happy, it drives people crazy.", author: "Paulo Coelho" },
  { text: "A good friend will always stab you in the front.", author: "Oscar Wilde" },
  { text: "I'd like to live as a poor man with lots of money.", author: "Pablo Picasso" },
  { text: "Don't let schooling interfere with your education.", author: "Mark Twain" },
  { text: "The difference between try and triumph is just a little umph.", author: "Marvin Phillips" },
  { text: "If you don't have wrinkles, you haven't laughed enough.", author: "Phyllis Diller" },
  { text: "The secret of staying young is to live honestly, eat slowly, and lie about your age.", author: "Lucille Ball" },
  { text: "You can't wait for inspiration. You have to go after it with a club.", author: "Jack London" },
  { text: "Two wrongs don't make a right, but they make a good excuse.", author: "Thomas Szasz" },
  { text: "The road to success is always under construction.", author: "Lily Tomlin" },
  { text: "Go the extra mile. It's never crowded there.", author: "Dr. Wayne Dyer" },
  { text: "When life gives you lemons, squirt someone in the eye.", author: "Cathy Guisewite" },
  { text: "Nothing is impossible, the word itself says 'I'm possible!'", author: "Audrey Hepburn" },
  { text: "Failure is the condiment that gives success its flavor.", author: "Truman Capote" },
  { text: "A clear conscience is a sure sign of a bad memory.", author: "Mark Twain" },
  { text: "Choose a job you love, and you will never have to work a day in your life — because that field probably isn't hiring.", author: "Dorothy Parker" },
  { text: "I love deadlines. I love the whooshing noise they make as they go by.", author: "Douglas Adams" },
  { text: "By working faithfully eight hours a day, you may eventually get to be boss and work twelve hours a day.", author: "Robert Frost" },
  { text: "I like work; it fascinates me. I can sit and look at it for hours.", author: "Jerome K. Jerome" },
  { text: "Hard work spotlights the character of people: Some turn up their sleeves, some turn up their noses, and some don't turn up at all.", author: "Sam Levenson" },
  { text: "Most people work just hard enough not to get fired and get paid just enough money not to quit.", author: "George Carlin" },
  { text: "Be like a postage stamp — stick to one thing until you get there.", author: "Josh Billings" },
  { text: "The reward for work well done is more work.", author: "Jim Butcher" },
  { text: "The best way to appreciate your job is to imagine yourself without one.", author: "Oscar Wilde" },
  { text: "I cannot afford to waste my time making money.", author: "Louis Agassiz" },
  { text: "It takes less time to do a thing right than it does to explain why you did it wrong.", author: "Henry Wadsworth Longfellow" },
  { text: "The only thing that ever sat its way to success was a hen.", author: "Sarah Brown" },
  { text: "I like to work in the morning. I just don't like to be awake while I'm doing it.", author: "Nora Ephron" },
  { text: "If you hit the target every time, it's too near or too big.", author: "Tom Hirshfield" },
  { text: "Leadership is the art of getting someone else to do something you want done because he wants to do it.", author: "Dwight D. Eisenhower" },
  { text: "Hard work never killed anybody, but why take a chance?", author: "Edgar Bergen" },
  { text: "Work is the greatest thing in the world, so we should always save some of it for tomorrow.", author: "Don Herold" },
  { text: "Mornings are almost clean slates. I say almost because the residue of yesterday's is sometimes stuck on them.", author: "Medeia Sharif" },
  { text: "Everyone wants me to be a morning person. I could be one, only if morning began after noon.", author: "Tony Smite" },
  { text: "Morning will come, it has no choice.", author: "Marty Rubin" },
  { text: "Be the person your coffee thinks you are.", author: "Liz Vassey" },
  { text: "The brain is a wonderful organ; it starts working the moment you get up in the morning and does not stop until you get into the office.", author: "Robert Frost" },
  { text: "Morning is wonderful. Its only drawback is that it comes at such an inconvenient time of day.", author: "Glen Cook" },
  { text: "The first thing I do in the morning is brush my teeth and sharpen my tongue.", author: "Dorothy Parker" },
  { text: "I arise in the morning torn between a desire to improve the world and a desire to enjoy the world.", author: "E.B. White" },
  { text: "The average, healthy, well-adjusted adult gets up at seven-thirty in the morning feeling just plain terrible.", author: "Jean Kerr" },
  { text: "There should be a rule against people trying to be funny before the sun comes up.", author: "Kristen Chandler" },
  { text: "Lose an hour in the morning, and you will spend all day looking for it.", author: "Richard Whately" },
  { text: "Keep the dream alive: hit the snooze button.", author: "Punit Ghadge" },
  { text: "Good morning is a contradiction of terms.", author: "Jim Davis" },
];

export default function RandomQuote() {
  const [idx, setIdx] = useState<number | null>(null);

  useEffect(() => {
    setIdx(Math.floor(Math.random() * quotes.length));
  }, []);

  const shuffle = () => {
    setIdx((prev) => {
      let next = Math.floor(Math.random() * quotes.length);
      while (next === prev) next = Math.floor(Math.random() * quotes.length);
      return next;
    });
  };

  if (idx === null) return null;

  const q = quotes[idx];

  return (
    <div className="border-t border-primary-700 mt-4 pt-4 text-center px-4">
      <p className="text-primary-300 text-xs uppercase tracking-widest mb-2 font-semibold">
        Quote of the Day
      </p>
      <blockquote className="text-primary-100 text-sm italic max-w-xl mx-auto leading-relaxed">
        &ldquo;{q.text}&rdquo;
      </blockquote>
      <p className="text-primary-400 text-xs mt-1">— {q.author}</p>
      <button
        onClick={shuffle}
        className="mt-2 text-xs text-primary-400 hover:text-primary-200 underline transition-colors"
        aria-label="Show another quote"
      >
        another quote ↺
      </button>
    </div>
  );
}
