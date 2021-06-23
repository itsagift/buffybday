let episodes = [
    {"episodeName":"Welcome to the Hellmouth","episodeDate": new Date(1997, 3, 10)},
{"episodeName":"The Harvest","episodeDate": new Date(1997, 2, 10)},
{"episodeName":"Witch","episodeDate": new Date(1997, 2, 17)},
{"episodeName":"Teacher's Pet","episodeDate": new Date(1997, 2, 24)},
{"episodeName":"Never Kill a Boy on the First Date","episodeDate": new Date(1997, 2, 31)},
{"episodeName":"The Pack","episodeDate": new Date(1997, 3, 7)},
{"episodeName":"Angel","episodeDate": new Date(1997, 3, 14)},
{"episodeName":"I, Robot... You, Jane","episodeDate": new Date (1997, 3, 28)},
{"episodeName":"The Puppet Show","episodeDate": new Date(1997, 4, 5)},
{"episodeName":"Nightmares","episodeDate": new Date(1997, 4, 12)},
{"episodeName":"Out of Mind, Out of Sight","episodeDate": new Date(1997, 4,19)},
{"episodeName":"Prophecy Girl","episodeDate": new Date(1997, 5, 2)},
{"episodeName":"When She Was Bad","episodeDate": new Date(1997, 8, 15)},
{"episodeName":"Some Assembly Required","episodeDate": new Date(1997, 8, 22)},
{"episodeName":"School Hard","episodeDate": new Date(1997, 8, 29)},
{"episodeName":"Inca Mummy Girl","episodeDate": new Date(1997, 9, 6)},
{"episodeName":"Reptile Boy","episodeDate": new Date(1997, 9, 13)},
{"episodeName":"Halloween","episodeDate": new Date(1997, 9, 27)},
{"episodeName":"Lie to Me","episodeDate": new Date(1997, 10, 3)},
{"episodeName":"The Dark Age","episodeDate": new Date(1997, 10, 10)},
{"episodeName":"What's My Line (Part 1)","episodeDate": new Date(1997, 10, 17)},
{"episodeName":"What's My Line (Part 2)","episodeDate": new Date(1997, 10, 24)},
{"episodeName":"Ted","episodeDate": new Date(1997, 11, 8)},
{"episodeName":"Bad Eggs","episodeDate": new Date(1998, 0, 12)},
{"episodeName":"Surprise","episodeDate": new Date(1998, 0, 19)},
{"episodeName":"Innocence","episodeDate": new Date(1998, 0, 20)},
{"episodeName":"Phases","episodeDate": new Date(1998, 0, 27)},
{"episodeName":"Bewitched, Bothered and Bewildered","episodeDate": new Date(1998, 1, 10)},
{"episodeName":"Passion","episodeDate": new Date(1998, 1, 24)},
{"episodeName":"Killed by Death","episodeDate": new Date(1998, 2, 3)},
{"episodeName":"I Only Have Eyes for You","episodeDate": new Date(1998, 3, 28)},
{"episodeName":"Go Fish","episodeDate": new Date(1998, 4, 5)},
{"episodeName":"Becoming (Part 1)","episodeDate": new Date(1998, 4, 12)},
{"episodeName":"Becoming (Part 2)","episodeDate": new Date(1998, 4, 19)},
{"episodeName":"Anne","episodeDate": new Date(1998, 8, 29)},
{"episodeName":"Dead Man's Party","episodeDate": new Date(1998, 9, 6)},
{"episodeName":"Faith, Hope & Trick","episodeDate": new Date(1998, 9, 13)},
{"episodeName":"Beauty and the Beasts","episodeDate": new Date(1998, 9, 20)},
{"episodeName":"Homecoming","episodeDate": new Date(1998, 10, 3)},
{"episodeName":"Band Candy","episodeDate": new Date(1998, 10, 10)},
{"episodeName":"Revelations","episodeDate": new Date(1998, 10, 17)},
{"episodeName":"Lovers Walk","episodeDate": new Date(1998, 10, 24)},
{"episodeName":"The Wish","episodeDate": new Date(1998, 11, 8)},
{"episodeName":"Amends","episodeDate": new Date(1998, 11, 15)},
{"episodeName":"Gingerbread","episodeDate": new Date(1999, 0, 12)},
{"episodeName":"Helpless","episodeDate": new Date(1999, 0, 19)},
{"episodeName":"The Zeppo","episodeDate": new Date(1999, 0, 26)},
{"episodeName":"Bad Girls","episodeDate": new Date(1999, 1, 9)},
{"episodeName":"Consequences","episodeDate": new Date(1999, 1, 16)},
{"episodeName":"Doppelgangland","episodeDate": new Date(1999, 1, 23)},
{"episodeName":"Enemies","episodeDate": new Date(1999, 2, 16)},
{"episodeName":"Earshot","episodeDate": new Date(1999, 8, 21)},
{"episodeName":"Choices","episodeDate": new Date(1999, 4, 4)},
{"episodeName":"The Prom","episodeDate": new Date(1999, 4, 11)},
{"episodeName":"Graduation Day (Part 1)","episodeDate": new Date(1999, 4, 18)},
{"episodeName":"Graduation Day (Part 2)","episodeDate": new Date(1999, 6, 13)},
{"episodeName":"The Freshman","episodeDate": new Date(1999, 9, 5)},
{"episodeName":"Living Conditions","episodeDate": new Date(1999, 9, 12)},
{"episodeName":"The Harsh Light of Day","episodeDate": new Date(1999, 9, 19)},
{"episodeName":"Fear, Itself","episodeDate": new Date(1999, 9, 26)},
{"episodeName":"Beer Bad","episodeDate": new Date(1999, 10, 2)},
{"episodeName":"Wild at Heart","episodeDate": new Date(1999, 10, 9)},
{"episodeName":"The Initiative","episodeDate": new Date(1999, 10, 16)},
{"episodeName":"Pangs","episodeDate": new Date(1999, 10, 23)},
{"episodeName":"Something Blue","episodeDate": new Date(1999, 10, 30)},
{"episodeName":"Hush","episodeDate": new Date(1999, 11, 14)},
{"episodeName":"Doomed","episodeDate": new Date(2000, 0, 18)},
{"episodeName":"A New Man","episodeDate": new Date(2000, 0, 25)},
{"episodeName":"The I in Team","episodeDate": new Date(2000, 1, 8)},
{"episodeName":"Goodbye Iowa","episodeDate": new Date(2000, 1, 15)},
{"episodeName":"This Year's Girl","episodeDate": new Date(2000, 1, 22)},
{"episodeName":"Who Are You","episodeDate": new Date(2000, 1, 29)},
{"episodeName":"Superstar","episodeDate": new Date(2000, 3, 4)},
{"episodeName":"Where the Wild Things Are","episodeDate": new Date(2000, 3, 25)},
{"episodeName":"New Moon Rising","episodeDate": new Date(2000, 4, 2)},
{"episodeName":"The Yoko Factor","episodeDate": new Date(2000, 4, 9)},
{"episodeName":"Primeval","episodeDate": new Date(2000, 4, 16)},
{"episodeName":"Restless","episodeDate": new Date(2000, 4, 23)},
{"episodeName":"Buffy vs. Dracula","episodeDate": new Date(2000, 8, 26)},
{"episodeName":"Real Me","episodeDate": new Date(2000, 9, 3)},
{"episodeName":"The Replacement","episodeDate": new Date(2000, 9, 10)},
{"episodeName":"Out of My Mind","episodeDate": new Date(2000, 9, 17)},
{"episodeName":"No Place Like Home","episodeDate": new Date(2000, 9, 24)},
{"episodeName":"Family","episodeDate": new Date(2000, 10, 7)},
{"episodeName":"Fool for Love","episodeDate": new Date(2000, 10, 14)},
{"episodeName":"Shadow","episodeDate": new Date(2000, 10, 21)},
{"episodeName":"Listening to Fear","episodeDate": new Date(2000, 10, 28)},
{"episodeName":"Into the Woods","episodeDate": new Date(2000, 11, 19)},
{"episodeName":"Triangle","episodeDate": new Date(2001, 0, 9)},
{"episodeName":"Checkpoint","episodeDate": new Date(2001, 0, 23)},
{"episodeName":"Blood Ties","episodeDate": new Date(2001, 1, 6)},
{"episodeName":"Crush","episodeDate": new Date(2001, 1, 13)},
{"episodeName":"I Was Made to Love You","episodeDate": new Date(2001, 1, 20)},
{"episodeName":"The Body","episodeDate": new Date(2001, 1, 27)},
{"episodeName":"Forever","episodeDate": new Date(2001, 3, 17)},
{"episodeName":"Intervention","episodeDate": new Date(2001, 3, 24)},
{"episodeName":"Tough Love","episodeDate": new Date(2001, 4, 1)},
{"episodeName":"Spiral","episodeDate": new Date(2001, 4, 8)},
{"episodeName":"The Weight of the World","episodeDate": new Date(2001, 4, 15)},
{"episodeName":"The Gift","episodeDate": new Date(2001, 4, 22)},
{"episodeName":"Bargaining","episodeDate": new Date(2001, 9, 2)},
{"episodeName":"After Life","episodeDate": new Date(2001, 9, 9)},
{"episodeName":"Flooded","episodeDate": new Date(2001, 9, 16)},
{"episodeName":"Life Serial","episodeDate": new Date(2001, 9, 23)},
{"episodeName":"All the Way","episodeDate": new Date(2001, 9, 30)},
{"episodeName":"Once More, with Feeling","episodeDate": new Date(2001, 10, 6)},
{"episodeName":"Tabula Rasa","episodeDate": new Date(2001, 10, 13)},
{"episodeName":"Smashed","episodeDate": new Date(2001, 10, 20)},
{"episodeName":"Wrecked","episodeDate": new Date(2001, 10, 27)},
{"episodeName":"Gone","episodeDate": new Date(2002, 0, 8)},
{"episodeName":"Doublemeat Palace","episodeDate": new Date(2002, 0, 29)},
{"episodeName":"Dead Things","episodeDate": new Date(2002, 1, 5)},
{"episodeName":"As You Were","episodeDate": new Date(2002, 1, 26)},
{"episodeName":"Hell's Bells","episodeDate": new Date(2002, 2, 5)},
{"episodeName":"Normal Again","episodeDate": new Date(2002, 2, 12)},
{"episodeName":"Entropy","episodeDate": new Date(2002, 3, 30)},
{"episodeName":"Seeing Red","episodeDate": new Date(2002, 4, 7)},
{"episodeName":"Villains","episodeDate": new Date(2002, 4, 14)},
{"episodeName":"Two to Go","episodeDate": new Date(2002, 4, 21)},
{"episodeName":"Grave","episodeDate": new Date(2002, 4, 21)},
{"episodeName":"Lessons","episodeDate": new Date(2002, 8, 24)},
{"episodeName":"Beneath You","episodeDate": new Date(2002, 9, 1)},
{"episodeName":"Same Time, Same Place","episodeDate": new Date(2002, 9, 8)},
{"episodeName":"Help","episodeDate": new Date(2002, 9, 15)},
{"episodeName":"Selfless","episodeDate": new Date(2002, 9, 22)},
{"episodeName":"Him","episodeDate": new Date(2002, 10, 5)},
{"episodeName":"Conversations with Dead People","episodeDate": new Date(2002, 10, 12)},
{"episodeName":"Sleeper","episodeDate": new Date(2002, 10, 19)},
{"episodeName":"Never Leave Me","episodeDate": new Date(2002, 10, 26)},
{"episodeName":"Bring on the Night","episodeDate": new Date(2002, 11, 17)},
{"episodeName":"Showtime","episodeDate": new Date(2003, 0, 7)},
{"episodeName":"Potential","episodeDate": new Date(2003, 0, 21)},
{"episodeName":"The Killer in Me","episodeDate": new Date(2003, 1, 4)},
{"episodeName":"First Date","episodeDate": new Date(2003, 1, 11)},
{"episodeName":"Get It Done","episodeDate": new Date(2003, 1, 18)},
{"episodeName":"Storyteller","episodeDate": new Date(2003, 1, 25)},
{"episodeName":"Lies My Parents Told Me","episodeDate": new Date(2003, 2, 25)},
{"episodeName":"Dirty Girls","episodeDate": new Date(2003, 3, 15)},
{"episodeName":"Empty Places","episodeDate": new Date(2003, 3, 29)},
{"episodeName":"Touched","episodeDate": new Date(2003, 4, 6)},
{"episodeName":"End of Days","episodeDate": new Date(2003, 4, 13)},
{"episodeName":"Chosen","episodeDate": new Date(2003, 4, 20)}]




function ageCalculate(){
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    
    var concatDate = year + ", " + month + ", " + day;
    var concatDate = new Date(concatDate);
    var concatDate = concatDate.getTime();
    
    episodes.forEach(function(episode) {
        if (episode.episodeDate.getTime() > concatDate) {
            console.log(episode);
        }
    });
    
};


