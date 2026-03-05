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
