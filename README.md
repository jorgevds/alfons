## Alfons

This is already a fairly old landing page I built for a fictional bakery. After my very first landing page, which is literally one page with a big button in the middle. I decided I needed a little something more. So I slaved away after hours and cursed at my computer for several weeks until I finally built this. While an exercise in layout and responsive web design, this project was also me learning how to use Sass. I initially built just one huge Sass stylesheet that nested a little too liberally. I have since read the "Sass Guidelines" by Hugo Giraudel (https://sass-guidelin.es/) and completely refactored the Sass stylesheet into something I think my southern neighbour would appreciate, or at least not condemn outright.

### Normalize

First and foremost, this is the first project in which I used Normalize CSS (https://necolas.github.io/normalize.css/). As the Guidelines pointed out, using a Normalize or Reset really was the way to go. Not wanting to stay behind in the long long ago, in the before times, I jumped onboard the bandwagon and incorporated the norm. 

![Normal eyes](https://user-images.githubusercontent.com/54646908/104959034-8cc9bb80-59d1-11eb-9b9a-4bbba3515006.png)
###### Normal eyes :alien:

Not much more to say about this. This stylesheet sets specific values for every single HTML element so that every browser starts from the same preset. Otherwise, different browsers (with different rulesets) will style certain elements differently, usually if you have no rules for them, or if they have different (r)em values in the standard browser preset. So yeah. Good stuff.

### Throw it all together

The biggest difference between the old and new Sass stylesheet would be... well, the project file structure, really. But besides that, the one stylesheet has been broken off into many different ones, each in their respective folders according to the Guidelines' guidelines. All of the files are then imported into one main stylesheet that holds nothing but the necessary imports, and looks something like this.

![Stylish](https://user-images.githubusercontent.com/54646908/104959026-8afff800-59d1-11eb-8865-5a85eea10320.png)
###### Stylish :dancer:

The order of the imports mimics both the file structure for this project, and the way in which the Sass compiler compiles all the info down into one big CSS file. Doing it like this prevents any possibility of overriding certain lines of CSS. But more importantly, it very efficiently separates all concerns, to where writing conflicting CSS becomes a virtual impossibility. So long as it's done right, of course.

### Pick it all apart

Each of these imports represents an individual stylesheet, or partial, that looks something like this.

![Such nice comments too](https://user-images.githubusercontent.com/54646908/104959029-8b988e80-59d1-11eb-8387-5661f601f47c.png)
###### Such nice comments too :pencil2:

Partial files house only a couple dozen lines of Sass code in this project, given its humble scope. As another guideline, each block only allows for a couple of levels of nesting. Makes it a lot clearer when writing or rewriting code. With the refactoring, I took the liberty of adding a DOCTYPE to every partial so as to make it ever clearer what partial you're looking at and/or working in. In some, there are also helpful comments that point out what the less clear @include lines are for. 

### Time to get abstract

Above, I mention @include lines. These are essentially the inline form of import statements. These imports apply the predefined set of rules, or mixin, to the class that you want. Mixins are a feature of Sass, and reinforce the practice of seperating your concerns. Having all this code preset in its own partial allows you to read and/or modify the mixin in a safe and clear environment. And @include statements allow you to reuse these blocks of code in other partials for other classes, which is a lot more readable than having classes for different elements all bunched up together to then all receive 5 lines of code you want them all to share.

![Fun with abstracts](https://user-images.githubusercontent.com/54646908/104959030-8c312500-59d1-11eb-825f-d23de616301f.png)
###### Fun with abstracts :crystal_ball:

Mixins can take parameters, as you can see in this image. They can be as static or dynamic as you want, although in my first project, I preferred to play it safe. This is one particular mixin I'm fairly happy with and proud of, however. It applies the lines of code required to give a background a parallax scrolling effect. The parameter can take any value you want, as you can see here.

![I can be your angle or your devil](https://user-images.githubusercontent.com/54646908/104959032-8c312500-59d1-11eb-96eb-935c4696e43d.png)
###### I can be your angle (sic) or your devil :angel:

Here this mixin is applied to two different backgrounds. One has a fixed value of 90vh, meaning the height of the background is set to 90vh. The other one has a height value of auto, so will scroll as far as the content needs it to or pushes it. Again, helpful comments to point out their purpose in being different, and the fact that the original coder (me) is "really proud".

### But wait, there's more

Lastly, I toyed with the idea of having an order page as I finished up the design of the website. To that effect, I made my first JavaScript file for a project. Before, I had only done HTML/CSS exclusively, save for an early React project I had coded along with. This code does little more than inject data into the order page to make it more dynamic and easier to manage. It works very similarly to a React project where you would write a Card component with certain props as values in place of static HTML elements.

![Koffiekoeken](https://user-images.githubusercontent.com/54646908/104959017-889d9e00-59d1-11eb-8c9f-c1f0374bba37.png)
###### Koffiekoeken :doughnut:

Not quite a .map; I wasn't ready for functional programming just yet. I learned this code from a freeCodeCamp tutorial on building a PWA (https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/). I modified the code to fit my needs, and daresay I optimised the images for performance. Very useful tutorial nonetheless.

### Conclusion

All in all, a project that provided for multiple learning experiences, and even at different points in my learning journey. I began with just the idea of building a landing page with multiple pages, and zoned in on the design aspect of it. To date, I am still happiest with how the design came out. Earlier websites looked too old for modern times, and later ones never quite looked as sleak for whatever reason, probably because I focused more on programming than the design itself. When I came back to this project, I learned even more about Sass and almost completely overhauled and refactored the entire project. That was lots of fun too. I can definitely see myself using Sass in the future; I like the modular nature of it, and making neat mixins like the parallax one is really rewarding and fun.

### What I can still do

- [ ] First, there's lot of stuff that's kind of thrown in. Most obvious perhaps is the random php file that I originally intended would handle all form information and submissions. Poor old me had no clue then just how much more complex doing contact forms really was, and so I have since abandoned that cause. Probably if I were to revisit, I would either hook it up to Firebase for ease of use, or simply remove it and keep the contact form as a placeholder. There for looks, but not operational. 

- [ ] Second, I would want to maybe experiment with smooth scrolling and fade in-content on the main page. That seems like a useful trick I should learn. Maybe in a next project.

- [ ] Third, related to one, I would want to finish the PWA setup and make the order page an actual PWA. Then I could download it to my phone and giggle to myself. Some of the parts are already in there, but I think it's not actually quite set up yet.

- [ ] Fourth, I would like to turn the order page into a kind of ecommerce to do list. Click on a button and add it to your shopping cart, and then have shopping cart and checkout screens, that of course don't actually take people's money. That doesn't seem too hard to do, but could be a fun little exercise.

- [ ] Fifth, maybe redesign some part of the website, like the about page. Similarly, redesign some of the code, like the media queries. These could be done a lot cleaner, according to the Guidelines, but I didn't really bother refactoring those last time. There's a neat way where you can setup your media queries to work with parameters, but that was a lot more work than I then wanted to figure out. Checking the commits now, I understand why I left that out: I was already completely redesigning the stylesheets and I took some concessions basically to ensure I would finish at all. In a future return, this would be high on the list.


Off to the next landing page! Something with some nice gradients and scrolling effects! Ooo aaaah! Neato!
