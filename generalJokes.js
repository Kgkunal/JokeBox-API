const generalJokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call a fake noodle? An impasta.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "I used to play piano by ear, but now I use my hands.",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    "I'm on a whiskey diet. I've lost three days already.",
    "Did you hear about the claustrophobic astronaut? He needed a little space.",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "What do you call a factory that makes good products? A satisfactory.",
    "Why did the math book look sad? Because it had too many problems.",
    "What's orange and sounds like a parrot? A carrot.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call a bear with no teeth? A gummy bear.",
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "How does a penguin build its house? Igloos it together.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why was the broom late? It swept in.",
    "Why did the bicycle fall over? It was two-tired.",
    "Why can't your nose be 12 inches long? Because then it would be a foot.",
    "Why was the math book sad? It had too many problems.",
    "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field.",
    "Why do cows wear bells? Because their horns don't work.",
    "What do you call a cow with no legs? Ground beef.",
    "Why don't elephants use computers? They're afraid of the mouse.",
    "What do you call a bear with no teeth? A gummy bear.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "Why don't seagulls fly over the bay? Because then they'd be bagels.",
    "What do you get when you cross a fish and an elephant? Swimming trunks.",
    "Why did the golfer bring an extra pair of pants? In case he got a hole in one.",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "How does a penguin build its house? Igloos it together.",
    "What do you call fake spaghetti? An impasta.",
    "Why do cows have hooves instead of feet? Because they lactose.",
    "Why did the chicken join a band? Because it had the drumsticks.",
    "What do you call a magic dog? A labracadabrador.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
    "I only know 25 letters of the alphabet. I don't know y.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the math book look sad? Because it had too many problems.",
    "Why was the computer cold? It left its Windows open.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "How does a penguin build its house? Igloos it together.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why was the broom late? It swept in.",
    "Why did the bicycle fall over? It was two-tired.",
    "Why can't your nose be 12 inches long? Because then it would be a foot.",
    "Why was the math book sad? It had too many problems.",
    "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field.",
    "Why do cows wear bells? Because their horns don't work.",
    "What do you call a cow with no legs? Ground beef.",
    "Why don't elephants use computers? They're afraid of the mouse.",
    "What do you call a bear with no teeth? A gummy bear.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "Why don't seagulls fly over the bay? Because then they'd be bagels.",
    "What do you get when you cross a fish and an elephant? Swimming trunks.",
    "Why did the golfer bring an extra pair of pants? In case he got a hole in one.",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "How does a penguin build its house? Igloos it together.",
    "What do you call fake spaghetti? An impasta.",
    "Why do cows have hooves instead of feet? Because they lactose.",
    "Why did the chicken join a band? Because it had the drumsticks.",
    "What do you call a magic dog? A labracadabrador.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
    "I only know 25 letters of the alphabet. I don't know y.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the math book look sad? Because it had too many problems.",
    "Why was the computer cold? It left its Windows open.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "How does a penguin build its house? Igloos it together.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why was the broom late? It swept in.",
    "Why did the bicycle fall over? It was two-tired.",
    "Why can't your nose be 12 inches long? Because then it would be a foot.",
    "Why was the math book sad? It had too many problems.",
    "Why did the scarecrow become a successful neurosurgeon? He was outstanding in his field.",
    "Why do cows wear bells? Because their horns don't work.",
    "What do you call a cow with no legs? Ground beef.",
    "Why don't elephants use computers? They're afraid of the mouse.",
    "What do you call a bear with no teeth? A gummy bear.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "Why don't seagulls fly over the bay? Because then they'd be bagels.",
    "What do you get when you cross a fish and an elephant? Swimming trunks.",
    "Why did the golfer bring an extra pair of pants? In case he got a hole in one.",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "How does a penguin build its house? Igloos it together.",
    "What do you call fake spaghetti? An impasta.",
    "Why do cows have hooves instead of feet? Because they lactose.",
    "Why did the chicken join a band? Because it had the drumsticks.",
    "What do you call a magic dog? A labracadabrador.",
    "Why don't scientists trust atoms? Because they make up everything!",
  ];
  
  module.exports = generalJokes;
  