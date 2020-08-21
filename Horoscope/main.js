function result(){
var month=document.getElementById('month').value
var day=document.getElementById('day').value


month=parseInt(month,10)
day=parseInt(day,10)
// this is libra 9/23-10/22
if ((month === 9 && day>= 23)||(month === 10 && day<=22)) {
  document.getElementById('change').innerHTML=("Libra: Meditation, dreams, or visions could bring amazing insights your way, Libra. You might find them too bizarre to believe, at least at first, but follow-up research could reveal that what you've come up with is quite credible. Keep a journal of these revelations because you might remember the gist but forget the details. They could be useful later when you pass your ideas on to others. ")
}
else if ((month === 3 && day>= 21 )||(month === 4 && day<=19)) {
  document.getElementById('change').innerHTML=("Aries:Have you been looking for a new job, Aries? If so, you might hear of an opportunity from an unexpected source, perhaps at a social gathering, if possible. This could mean that someone unexpected brings it to your attention, or it could be a job in a new and unusual field. One way or another, as weird as it seems, it's worth consideration. Look into it and get all the facts before acting. ")
}
else if ((month === 4 && day>= 20)||(month === 5 && day<=20)) {
  document.getElementById('change').innerHTML=("Taurus: If you're single, Taurus, love may come to you completely out of the blue today. The person could be standing behind you in line at the store or sitting nearby you in the park. Wherever you connect, don't be too cautious. Move ahead carefully, but at least get to know something about this person before giving in to insecurity and running the other way. ")
}
else if ((month ===5 && day>=21)||(month ===6  && day<=20)) {
  document.getElementById('change').innerHTML=("Gemini: Some unexpected but very welcome visitors could arrive today, Gemini. They might bring some people you don't know but should connect with right away. Expect interesting news, fascinating information, and a lot of laughs. Even though you don't know for sure that these people are able to come over, have a supply of drinks and snacks on hand. You'll want them to settle in and stay a while, if possible. ")
}
else if ((month ===6 && day>=21 )||(month ===7  && day<=22)) {
  document.getElementById('change').innerHTML=("Cancer:Cancer, who's that intriguing new person in your neighborhood? What is it about this new neighbor that makes it impossible for you to stop wondering about them? Quit obsessing. Get your courage up and find a way to welcome him or her to the neighborhood. Maybe you'll find this person likable, maybe not, but give it a shot anyway. Enjoy. ")
}
else if ((month ===7 && day>=23 )||(month ===8  && day<=22)) {
  document.getElementById('change').innerHTML=("Leo:An unexpected letter could arrive today, Leo, with a check enclosed, perhaps a gift, bonus, or offer to make more money. This might be a welcome break, possibly coming at a time when you really need it. If it's work, don't worry about the time involved. You'll be able to finish it quickly and efficiently. It might lead to more offers in the future. ")
}
else if ((month ===8 && day>=23 )||(month ===9  && day<=22)) {
  document.getElementById('change').innerHTML=("Virgo:If you're in the arts or sciences, Virgo, sudden inspiration could cause you to start or continue a project that means a lot to you. Some friends or group members could help out with useful information. Your mind may generate new ideas throughout the day. Once you've finished your work, take a walk and clear your head. Watch a video. If you don't, it could be hard to sleep tonight. ")
}
else if ((month ===10 && day>=23 )||(month ===11  && day<=21)) {
  document.getElementById('change').innerHTML=("Scorpio:You're an adventurous soul, Scorpio. Are you thinking about a little mischief today? Are you going to propose that you and a friend or perhaps your partner skip town for a day and forget about work, chores, and other routine matters if possible? You've been bored lately, so who could blame you? If you decide to do this, make sure everyone knows what's up. You don't want to burn any bridges.")
}
else if ((month ===11 && day>=22 )||(month ===12  && day<=21)) {
  document.getElementById('change').innerHTML=("Sagittarius:An unexpected communication may come today from someone connected with your career, Sagittarius. This is good news, but it may be so off the wall that you could walk around in a daze for a while trying to make sense of it all. Don't agonize too much. You've worked hard for and deserve whatever it is that's suddenly coming to you. Think of it as a karmic reward. Go celebrate!")
}
else if ((month ===12 && day>=22 )||(month ===1  && day<=19)) {
  document.getElementById('change').innerHTML=("Capricorn: An unexpected chance to fly to a faraway place, perhaps at someone else's expense, could come to you today, Capricorn. A group might be involved, perhaps one connected with education. Do you lecture or teach? If so, this might be a chance to give a lecture in an exciting place you've never been to before. Get your materials together, pack your bag, and go. Have fun! ")
}
else if ((month ===1 && day>=20 )||(month ===2  && day<=18)) {
  document.getElementById('change').innerHTML=("Aquaris:Some bizarre and rather silly dreams might come to you tonight, Aquarius. They may be the sort that is so crazy that you actually wake up laughing. Don't dismiss them. Silly or not, these dreams are trying to tell you something. Write them down the way you would any other vivid dream and analyze the symbols in the same way - even if they cause a few giggles. ")
}
else if ((month ===2 && day>=19 )||(month ===3  && day<=20)) {
  document.getElementById('change').innerHTML=("Pisces:If you're single, you could feel a very powerful attraction to someone unusual and perhaps a little wacky. If you're already in a relationship, you could glimpse a silly and rather insane side of your beloved you've never seen before. This could be a bit disconcerting but also make you laugh. That's part of the appeal of love - continuously learning about that special one. ")
}

else {
  alert("Enter two digits for month and day")
}

}
var myButton=document.getElementById('check')
myButton.addEventListener('click', result)
