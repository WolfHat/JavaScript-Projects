function myDictionary() {
    var Character = {
        Race:"Stone Golem",
        Class:"Cleric",
        Subclass:"Forge Domain",
        Level:5,
        Gender:"Non Binary",
        FunFact:"Likes arts and crafts!"
    };
    delete Character.Level;
    document.getElementById("text").innerHTML = "I play a level " + Character.Level + " " + Character.Race + " " + Character.Subclass + " " + Character.Class + " who " + Character.FunFact;
}