OPT:  
Are we still building this webapp? What do we begin with?

REN:  
If we make anything for the internet and we want to make profit, we should be scalable.

GON:  
Scalable?

# COMPLEX WEB, BORING INTERNET

REN:  
Services designed for our daily lives – things like Uber, Deliveroo, Maps – have all been designed with the objective of ‘scalability’ in mind. Scalability means that these systems will get better when they grow. They optimize by growth. So as they exist, we can now ask: does the system scale well? If the answer is yes, it's usually profitable.

Now, one of the places where scalability makes a huge difference is the back-end of big services and platforms. For instance Netflix or Amazon. Those companies have gigantic server structures to make their service possible. They call it The Cloud. The Cloud is servers spinning on a rack, interconnected via cables. Wireless is only a half-truth. There are strings attached.

## The Chaos Monkey

OPT:  
True story: Netflix has been releasing monkeys[^simian] inside their server centers that wreak havoc and shut down parts of their systems. It started with one monkey, but soon an entire legion of apes was formed, each one trained to break another part of the servers. In 2012 Netflix released an open source version of this Simian Army[^simian-open].

![Netflix' Simian Army](img/simian-army.png)

GON:  
Sounds interesting... Are you talking about this ‘Simian Army’ thing?

REN:  
Yeah, exactly. Oh, I should mention this is a metaphor, right? The software suite contains different programs that shut down different things. The approach is called “Chaos Monkey”.

The Chaos Monkey periodically takes subsystems out of commision and sees how it responds. The idea is to lower the gap between how Netflix expects the system to work and how the system actually works. In biology this is how you learn about a living thing. Actively trying to mutate it is a biological technique.

A lot of programming is now what we call procedural. Basically what that means is for the programmer to predict enough states so the computer can do the calculation. If this happens, do that.

With deep learning comes another, probabalistic reasoning system. If I see this input, I _think_ I should do that. 

GON:  
Why does it even matter to know these things? I know that the technical stuff is very complicated, but I don't care. I just want them to work.

REN:  
Sure. It's one thing to say: There is an expert somewhere that knows what's going on and we let them do the understanding. But more and more there is no such expert.

When systems get big enough they almost seem biological. A good example is when a big service is being built there is this thing called The _Change Review Board_. It can be 12 people there, who all have their specialty. One for network, one for storage, one for application development, et cetera. When they make changes to their parts, they have to say them out loud to the other 11 to see if that does not interfere with something in their ‘worlds’. They simply don't know! The same people come together when something fails, to find the problem.

## From Procedural to biological

Samuel Arbesman, author of the book _Overcomplicated_ has made some remarks about this in a conversation with Steven Sinofsky and Frank Chen[^a16z].

The sociological impact of that is interesting. Computers were exact precise things, but now we have huge, often messy systems. People have a low tolerance for error for anything that comes out of a computer. That should change when we start to see that they are also biological.  

Biological thinking approach: These things are very complex. They've evolved over time and have this organic messiness. We need to focus much more on the details of the subsystems. The details of a component in the hope of creating a broader picture. The details really matter. 

Google pioneered 'continuous failure'. The system will fail. It is not a question if the system will fail, but when. Backend designed in a biological way.

Humans are already conditioned to accept inherent complexity. If a doctor tells you that weird itch won't go away, you learn to accept it, at least a bit. I wonder if we get to the same point with computers.

There's a couple of ways of dealing with big computing. Two are we either freak out or say this is so complicated and are amazed to a point where we can only watch. Both of those cut off questioning. We need to recognize humble approach that it is okay not to always understand. We have to constantly keep trying to understand and should be excited by trying to understand. We have to realize things are messy but also that it's something we created.

OPT:  
It's very interesting to show the builder's side of the story to users. But I think users should also know the abuse that can happen with a huge network. 

## Decentralization

Silicon Valley has come to stand for a centralization of tech-power. In June 2013, Edward Snowden, a former employee of defense contractor Booz Allen Hamilton leaked a great amount of files of the United State's National Security Agency's massive surveillance practices. The NSA can spy and did spy on innocent citizens as well as criminals[^nsa] all around the world using this data.

This is the dark side of a centralized internet. One part of that is the strong influence of the United States' secret service, which may be strong. But another thing that made it possible for the NSA to spy on the world is the access they had to Silicon Valley's major servers, where personal data was stored. Microsoft, Facebook, Google, Skype, you name it. 

![PRISM slide explaining which companies provided data](img/prism.jpg) 

## Blockchain

GON:  
This has some heavy implications. What if you disagree with that? If even kicking over that system means that it can learn from its mistakes and regenerate? It's great if you own that server, but what about all of us that don't? What can you do to be subversive?

REN:  
One of the problems is the centralized network. An alternative could be a distributed network. A centralized network has a big, central server infrastructure where all the data and files are stored. A decentralized system doesn't have that. There, all files are stored on parts of the network. 

I've been following the developments of Bitcoin - a cryptocurrency - and with that, the blockchain. The Blockchain is a technology that offers a new kind of server infrastructure. There are different possibilities, but one example could be: All nodes in the network store a full copy of all transactions on that network while all relevant files and data can stay on individual drives. It's complex, but that's the gist of it.[^blockchains]

I'm not really convinced that this will solve the entire centralisation of power issue. Blockchains are also being developed by banks, that want to use it in a closed system. 

OPT:  
But that's unavoidable. Lots of institutions have private networks, they need those. If we say internet should be open it does not mean it can't be private.

REN:  
Exactly. I'm just saying: the internet is always changing, and some people are stuck inside this attitude where it is always the giant versus the tiny developer or user or designer. It's is very uninspiring. It doesn't make sense. I'm just curious to see what will happen on smaller scale, how people will use distributed networks and if they can replace parts of centralised networks that don't work. 

GON:  
That sentiment reminds me of this critique that Brian Droitcour has about Post-Internet art.[^droitcour] Things can change, as long as there are some people with some real ideas, and that keep an open mind to changes that may seem weird or unconventional.

> Why insist that the changes are over? Artists who begin with the proposition that the phenomena of their world are boring and banal, who begin with an exasperated sigh, are going to produce art that is boring and banal, art that produces exasperated sighs.  
> — Brian Droitcour

## Amazon's robots

OPT:  
Talking about art: I love watching this video of the sorting robots in Amazon's warehouses. How they find their own way through the warehouse is super satisfying to watch. The precision is amazing.[^kiva]

At Amazon, the warehouses no longer store items sorted in any way. Rather, the objects are placed on the shelves according to what's _fastest_. Robots carry moving shelves that bring the items needed to ‘pick-workers’ that take the items out of the closets and pack them for sending. The robot finds its own way through the warehouse. This way they can process an order from click to send sometimes in less than 15 minutes. And Amazon has 21 million different items for sale. It doesn't need walk space so the warehouse is more densely populated with goods. Scalable as hell.

> “Pick, scan, pack. We try to simplify their life and hide the technology. All Kiva Pick workers are happy pick workers.” [^pick]

![The Amazon picking process](img/amazon-picker.jpg)

## The Scale of Chaos

What all of these examples suggest is that the bigger a system gets, that it needs some chaos to survive. 

Regular users should know that all of our technology can fail. The world as a beta test. Alpha's have had their time. More diversity and more failures for more commitment. We are in a way the problem of the tech because of impatience. In order to help ourselves, we should have a better understanding of technology in society. These should move towards each other instead of keeping users in the dark about what happens behind the screen. That way, we can have useful discussion.

[^simian]: Jon Brodkin, _Netflix attacks own network with “Chaos Monkey” – and now you can too_ [http://arstechnica.com/information-technology/2012/07/netflix-attacks-own-network-with-chaos-monkey-and-now-you-can-too/](http://arstechnica.com/information-technology/2012/07/netflix-attacks-own-network-with-chaos-monkey-and-now-you-can-too/)
[^simian-open]: (software) Netflix, _Simian Army_, [https://github.com/Netflix/SimianArmy](https://github.com/Netflix/SimianArmy)
[^a16z]: (podcast) a16z Podcast: _It's Complicated_ [https://soundcloud.com/a16z/complexity](https://soundcloud.com/a16z/complexity)
[^nsa]: Google Edward Snowden, it's everywhere. For a really good insight in his position against big NSA there is an amazing documentary: Laura Poitras, _Citizenfour_, [http://www.imdb.com/title/tt4044364/videoplayer/vi2548870937?ref_=tt_ov_vi](http://www.imdb.com/title/tt4044364/videoplayer/vi2548870937?ref_=tt_ov_vi)
[^blockchains]: Vinay Gupta, _Programmable Blockchains in Context_ [https://medium.com/consensys-media/programmable-blockchains-in-context-ethereum-s-future-cd8451eb421e#.yaf84kqzp](https://medium.com/consensys-media/programmable-blockchains-in-context-ethereum-s-future-cd8451eb421e#.yaf84kqzp)
[^droitcour]: Karen Archey and Robin Peckham, _Art Post-Internet: INFORMATION / DATA_, 2014
[^kiva]: _Amazon warehouse robots_, [https://youtu.be/quWFjS3Ci7A](https://youtu.be/quWFjS3Ci7A)
[^pick]: _A Day in the Life of a Kiva Robot_, [https://youtu.be/6KRjuuEVEZs](https://youtu.be/6KRjuuEVEZs)

<footer></footer>